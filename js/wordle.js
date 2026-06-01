const url = "https://raw.githubusercontent.com/butthar8810/gbf-Wordle/refs/heads/main/js/character.json";
const modes = Object.freeze({ daily: 'デイリー', endless: 'エンドレス' });
const maxTries = 6;
const same = 'same';
const match = 'match';
const wrong = 'wrong';
const before = 'より前';
const after = 'より後';

const now = getToday();

const keyDataLatest = 'GBFwordle.Data.Latest';
const keyDailyLastPlayed = 'GBFwordle.Daily.LastPlayed';
const keyDailyTarget = 'GBFwordle.Daily.Target';
const keyDailyGuesses = 'GBFwordle.Daily.Guesses';
const keyDailyWinStreak = 'GBFwordle.Daily.WinStreak';
const keyEndlessTarget = 'GBFwordle.Endless.Target';
const keyEndlessGuesses = 'GBFwordle.Endless.Guesses';
const keyEndlessCorrects = 'GBFwordle.Endless.Corrects';
const keyEndlessHighScore = 'GBFwordle.Endless.HighScore';

const weaponBit = Object.freeze({ 
	'剣':   0b0000000001, 
	'短剣': 0b0000000010, 
	'槍':   0b0000000100, 
	'斧':   0b0000001000, 
	'杖':   0b0000010000, 
	'銃':   0b0000100000, 
	'格闘': 0b0001000000, 
	'弓':   0b0010000000, 
	'楽器': 0b0100000000, 
	'刀':   0b1000000000 
});

let characters = [];
let target;
let tries;
let corrects = 0;
let currentMode;
let currentRegulation;
let regulatedStudents;
let guesses = [];
let speedrunStart;
let speedrunSum;
let intervalId;
let pulldown;
const judges = [];

// ページロード時に1回だけ実行する
async function gameStart() {
	// キャラクターリストの取得
	characters = await loadCharactersAsync();
	// Selectの初期化
	pulldown = new TomSelect('#selectGuess', {
		create: false,
		maxItems: 1,
		maxOptions: characters.length,
		searchField: 'value',
		render: {
			// ドロップダウン内の選択肢の見た目
			option: function(data, escape) {
				return `<div class="choices"><img src="${escape(data.src)}">${escape(data.text)}</div>`;
			},
			// 選択して入力欄に表示された状態の見た目
			item: function(data, escape) {
				return `<div class="choices"><img src="${escape(data.src)}">${escape(data.text)}</div>`;
			}
		},
		score: function(search) {
			// 全角・半角、カタカナ・ひらがな、長音符の差異を吸収する関数を定義
			function normalize(str) {
				return str
					.replace(/[\u30a1-\u30f6]/g, function(match) {
						// カタカナをひらがなに変換
						return String.fromCharCode(match.charCodeAt(0) - 0x60);
					})
					.toLowerCase();
			}

			var searchNorm = normalize(search);

			return function(data) {
				var textNorm = normalize(data.text || '');
				var score = 0;
				if (textNorm.indexOf(searchNorm) !== -1) { score = 1; }
				return score;
			};
		}
	});
	// ページを開いた時はモードをデイリーモードに設定
	switchMode(modes.daily);

	pulldown.on('dropdown_open', () => {
		pulldown.clear();
	});

	// 初期化関数を呼び出す
	setup();
}
async function loadCharactersAsync() {
	let characters = [];
	try {
		const charactersResponse = await fetch(url);
		if (!charactersResponse.ok) {
			throw new Error(`HTTPエラー: ${charactersResponse.status}`);
		}
		const charactersJson = await charactersResponse.json();
		charactersJson.forEach(oneCharacterRow => {
			characters.push({
				charaName: oneCharacterRow.charaName, 
				data: {
					element: oneCharacterRow.data.element, 
					type: oneCharacterRow.data.type, 
					race: oneCharacterRow.data.race, 
					gender: oneCharacterRow.data.gender, 
					weapon: {
						first: oneCharacterRow.data.weapon.first, 
						second: oneCharacterRow.data.weapon.second
					},
					implementation: oneCharacterRow.data.implementation
				},
				icon: oneCharacterRow.icon
			});
		});
	} catch (error) {
		console.error('JSONの取得に失敗しました:', error);
	}
	return characters;
}

// ゲームの初期化
function setup(nextFlg = false) {
	// 解答回数の初期化
	tries = 0;

	// 変数(配列)の初期化
	guesses.splice(0);
	judges.splice(0);
	// DOMの初期化
	setupDom();

	// プルダウンリストへの値の登録
	setCharacterToSelect(characters);

	// モード別処理
	switch (currentMode) {
		case modes.daily:
			setupDailyMode();
			break;
		case modes.endless:
			setupEndlessMode(nextFlg);
			break;
		default:
			currentMode = modes.daily;
			setupDailyMode();
			break;
	}

	// ロード後に解答回数を使い切っていない場合ボタンを有効化
	if (tries < maxTries) { $("#buttonGuess").removeAttr('disabled'); }
}
// プルダウンリストに値を設定する
function setCharacterToSelect(characterList) {
	// 値のリストを作成
	let options = [];
	characterList.forEach ((element) => {
		options.push({
			value: element.charaName,
			text: element.charaName,
			src: element.icon,
		});
	});

	// 値を（再）設定
	pulldown.clear();
	pulldown.clearOptions();
	pulldown.addOptions(options);
	pulldown.refreshOptions(false);
}
function setupDom() {
	setTriesAreaInGame();
	$('#guessArea').removeClass('fold');
	$('#infoArea').removeClass(same).removeClass(wrong);
	$('#checkGridBody').empty();
	$('#infoButtonArea').remove();
	$("#buttonGuess").removeAttr('disabled');
}
// triesAreaの書き換え
function setTriesAreaInGame() {
	$('#triesArea').html(`解答回数： ${tries} ／ ${maxTries}`);
}

// デイリーモードセットアップ時の処理
function setupDailyMode() {
	// 今日分のセーブデータの有無によって分岐
	const todayStr = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`
	const lastTarget = getLocalStorage(keyDailyTarget);
	const lastPlayed = getLocalStorage(keyDailyLastPlayed);
	if (lastPlayed !== null && guessDate(todayStr, lastPlayed) === same) {
		// セーブデータがある場合それに沿ってゲームを再現する
		if (lastTarget !== null) {
			target = characters.find((elm) => elm.charaName === lastTarget.charaName);
		} else {
			setTarget(now.getUTCFullYear() * 10000 + now.getUTCMonth() * 100 + now.getUTCDate());
			setLocalStorage(keyDailyTarget, target);
		}
		guesses = getLocalStorage(keyDailyGuesses) || [];
		answerForLoad();
	} else {
		// セーブデータがないか、当日のもの以外
		setTarget(now.getUTCFullYear() * 10000 + now.getUTCMonth() * 100 + now.getUTCDate());
		removeLocalStorage(keyDailyTarget);
		removeLocalStorage(keyDailyGuesses);
		setLocalStorage(keyDailyTarget, target);
		setLocalStorage(keyDailyLastPlayed, todayStr);
	}

	setModeInfoAreaForDaily();
}
// エンドレスモードセットアップ時の処理
function setupEndlessMode(nextFlg) {
	// エンドレスモードの正解の設定
	const lastTarget = getLocalStorage(keyEndlessTarget);
	if (nextFlg || !lastTarget) {
		// エンドレスモード初回、もしくは前の問題で正解して「次へ」を選んでいた場合
		setTarget(Date.now());
		setLocalStorage(keyEndlessTarget, target);
		removeLocalStorage(keyEndlessGuesses);
	} else {
		// エンドレスモードのセーブデータのロード時
		target = characters.find((elm) => elm.charaName === lastTarget.charaName);
		guesses = getLocalStorage(keyEndlessGuesses) || [];
		corrects = getLocalStorage(keyEndlessCorrects) || 0;
		answerForLoad();
	}

	setModeInfoAreaForEndless();
}

function answerForLoad() {
	guesses.forEach(function (elm) {
		answerProcess(elm, true);
	});
}

function setModeInfoAreaForDaily() {
	$('#modeNameArea').html('');
	$('#modeWinStreakArea').html(`連続正解日数：${getLocalStorage(keyDailyWinStreak) || 0}`)
}

function setModeInfoAreaForEndless() {
	$('#modeNameArea').html(`現在のスコア：${corrects}`);
	$('#modeWinStreakArea').html(`ハイスコア：${getLocalStorage(keyEndlessHighScore) || 0}`)
}

// 解答を設定する
function setTarget(seed, studentsList = characters) {
	const mt = new MersenneTwister();
	mt.setSeed(seed);
	target = studentsList[mt.nextInt(0, studentsList.length)];
}

// モードの切り替え
function switchMode(targetMode) {
	if (currentMode == targetMode) {
		// 既に変更対象のモードなら何もしない
		return;
	}
	$('.dayly-btn').removeClass('pressed');
	$('.endless-btn').removeClass('pressed');
	
	if (modes.daily == targetMode){$('.dayly-btn').addClass('pressed');}
	else if (modes.endless == targetMode) {$('.endless-btn').addClass('pressed');}
	else {$('.dayly-btn').addClass('pressed');}

	
	currentMode = targetMode;
	setup();
}

// 解答ボタンを押した時の処理
function answerProcess(guessedName, loadFlg = false) {
	// ボタンを無効化
	$("#buttonGuess").attr('disabled', '');

	// 引数として渡された名前から解答として選ばれたキャラクターのオブジェクトを取得
	const guessed = characters.find(s => s.charaName === guessedName);

	// キャラクターがリストから見つからなかったか既に解答に使ったキャラクターなら何もしないで戻す
	if (guessed == null || (!loadFlg && guesses.includes(guessedName))) {
		$("#buttonGuess").removeAttr('disabled');
		return;
	}

	// 結果判定
	const judgeObj = guess(guessed);
	judges.push(judgeObj);

	// 結果からDOMに追加
	prependTableRow(guessed, judgeObj);

	// 挑戦回数のインクリメント
	tries++;

	// セーブデータのロード中でない場合、答えたキャラクターをセーブ
	if (!loadFlg) {
		guesses.push(guessedName);
		switch (currentMode) {
			case modes.daily:
				setLocalStorage(keyDailyGuesses, guesses);
				break;
			case modes.endless:
				setLocalStorage(keyEndlessGuesses, guesses);
				break;
		}
	}

	if (judgeObj.isHit === same || tries === maxTries) {
		// 正解または回数を使い切った時の処理
		endGame(judgeObj.isHit, loadFlg);
	} else {
		// ゲームが途中の場合解答回数表示の更新とボタンの再有効化
		setTriesAreaInGame();
		$("#buttonGuess").removeAttr('disabled');
	}
}

// 各要素ごとの正誤判定
function guess(guessed) {
	const judgeSameOrWrong = (a, b) => a === b ? same : wrong;
	const judgeSameOrWrongBitwise = (a, b) => {
		if (a == b) {return same;}
		else if ((a & b) !== 0){return match;}
		else{return wrong;}
	}
	// 得意武器を表すビットから武器の文字列を生成するヘルパー関数
	function getWeaponToBit(first, second) {
		let Bit = 0b0000000000;
		for (let key in weaponBit) {
			if (key == first || key == second) {
				Bit +=weaponBit[key];
			}
		}
		return Bit;
	}
	
	return {
		isHit: judgeSameOrWrong(target.charaName, guessed.charaName),
		isSameElement: judgeSameOrWrong(target.data.element, guessed.data.element),
		isSameType: judgeSameOrWrong(target.data.type, guessed.data.type),
		isSameRace: judgeSameOrWrong(target.data.race, guessed.data.race),
		isSameGender: judgeSameOrWrong(target.data.gender, guessed.data.gender),
		isSameWeapon: judgeSameOrWrongBitwise(
			getWeaponToBit(target.data.weapon.first, target.data.weapon.second),
			getWeaponToBit(guessed.data.weapon.first, guessed.data.weapon.second)
		),
		isSameImpl: guessDate(target.data.implementation, guessed.data.implementation)
	};
}

// テーブルに行を追加
function prependTableRow(guessed, judgeObj) {
	// セルを作成するヘルパー関数
	function createCell(content, isCorrect, extraClasses) {
		const cell = $('<div>').addClass('cell');
		cell.append($('<div>').addClass('front'));
		cell.append($('<div>').addClass(['back', 'flipped', isCorrect, ...extraClasses]).html(content));

		return cell;
	}

	// 追加する行のHTMLの組み立て
	const $newRow = $('<div>').addClass('row');
	$newRow.append(createCell(guessed.charaName, judgeObj.isHit, ['charaNameCol']));
	$newRow.append(createCell(elementImage(guessed.data.element), judgeObj.isSameElement, ['elementCol']));
	$newRow.append(createCell(guessed.data.type, judgeObj.isSameType, ['typeCol']));
	$newRow.append(createCell(raceImage(guessed.data.race), judgeObj.isSameRace, ['raceCol']));
	$newRow.append(createCell(guessed.data.gender, judgeObj.isSameGender, ['genderCol']));
	$newRow.append(createCell(weaponImage(guessed.data.weapon.first, guessed.data.weapon.second), judgeObj.isSameWeapon, ['WeaponCol']));
	const implDateContent = guessed.data.implementation +
		(judgeObj.isSameImpl === same ? '' : '<br>' + judgeObj.isSameImpl);
	$newRow.append(createCell(implDateContent, judgeObj.isSameImpl === same ? same : wrong, ['implCol']));
	
	// グリッドの一番上の行に追加
	$('#checkGridBody').prepend($newRow);

	// セルのアニメーション設定
	$.each($($newRow).children(), function (i, val) {
		setTimeout(function () {
			$(val).children().toggleClass('flipped');
		}, 10);
	});
}

function elementImage(element){
	return $('<img>').attr('src',`images/element/${element}.png`);
}
function raceImage(race){
	return $('<img>').attr('src',`images/race/${race}.png`);
}
function weaponImage(firstWeapon, secondWeapon){
	let weaponStr = `<img src=images/mainWeapon/${firstWeapon}.png>`;
	weaponStr += secondWeapon == '-' ? '' : `<img src=images/mainWeapon/${secondWeapon}.png>`;
	return weaponStr;
}


// ゲーム終了時の処理
function endGame(isHit, loadFlg = false) {
	const result = `${isHit === same ? '正解！' : '不正解…。'}答えは「${target.charaName}」でした。`;
	const src = target.icon;

	$('#guessArea').addClass('fold');
	$('#infoArea').addClass(isHit);
	$('#infoArea').append($('<div>').attr('id', 'infoButtonArea'));
	$('#triesArea').html($('<div>').html(result));
	$('#triesArea').append($('<img>').attr('src',src));


	if (currentMode == modes.daily || (currentMode == modes.endless && isHit === wrong)) {
		// デイリーモードでゲーム終了した時とエンドレスモードで正解できなかった時の処理
		const shareStr = currentMode == modes.endless ? createShareStrForEndless() : createShareStrForDaily(isHit);
		insertShareButton(shareStr);

		if (currentMode == modes.endless) {
			insertRetryButton();

			// セーブデータ削除
			corrects = 0;
			removeLocalStorage(keyEndlessTarget);
			removeLocalStorage(keyEndlessCorrects);
			removeLocalStorage(keyEndlessGuesses);
		} else if (!loadFlg) {
			// デイリーモードかつセーブデータのロード時以外は連続正解日数の設定
			let winStreak = getLocalStorage(keyDailyWinStreak);
			if (isHit === same) {
				setLocalStorage(keyDailyWinStreak, winStreak == null ? 1 : winStreak + 1);
			} else {
				setLocalStorage(keyDailyWinStreak, 0);
			}
			setModeInfoAreaForDaily();
		}
	} else if (currentMode == modes.endless) {
		// エンドレスモードで正解した時の処理
		if (!loadFlg) {
			setLocalStorage(keyEndlessCorrects, ++corrects);
			if (corrects > getLocalStorage(keyEndlessHighScore)) {
				setLocalStorage(keyEndlessHighScore, corrects);
			}
			setModeInfoAreaForEndless();
		}
		insertSingleButton('nextButton', '次の問題へ', function () { setup(true) })
	}
}

// SNSでシェアする時の文章を作る（デイリーモード用）
function createShareStrForDaily(isHit) {
	const createJudgeStr = (judge) => {
		if (judge === same){return '🟩';}
		else if (judge === match){return '🟨';}
		else {return '🟥';}
	}
	let shareStr = '今日の #GBFWordle は' + String(judges.length) + '回解答して';
	shareStr += (isHit === same ? '正解しました！' : '不正解でした……。') + '\n\n';

	let i;
	for (i = judges.length - 1; i >= 0; i--) {
		shareStr += createJudgeStr(judges[i].isHit);
		shareStr += createJudgeStr(judges[i].isSameElement);
		shareStr += createJudgeStr(judges[i].isSameType);
		shareStr += createJudgeStr(judges[i].isSameRace);
		shareStr += createJudgeStr(judges[i].isSameGender);
		shareStr += createJudgeStr(judges[i].isSameWeapon);
		shareStr += createJudgeStr(judges[i].isSameImpl);
		shareStr += '\n';
	}

	return shareStr;
}

// SNSでシェアする時の文章を作る（エンドレスモード用）
function createShareStrForEndless() {
	return `#GBF-Wordle のエンドレスモードで${corrects}問連続で正解しました！\n`;
}

// シェアボタンをDOMに挿入する
function insertShareButton(shareStr) {
	// ボタンのdivを作るヘルパー関数
	function addButtonDiv(id, text, url = null) {
		$('#shareButtonArea').append(createButton(id, 'btnCyan', text));
		if (url !== null) {
			$(`#${id}`).on('click', function () {
				window.open(url);
			})
		}
	}

	const encodedShareStr = encodeURIComponent(shareStr);
	$('#infoButtonArea').append($('<div>').attr('id', 'shareButtonArea'));
	addButtonDiv('copyButton', 'コピー');
	addButtonDiv('xButton', 'Xでシェア', `https://x.com/intent/tweet?text=${encodedShareStr}%0A&url=${location.href}`);
	addButtonDiv('misskeyButton', 'Misskeyでシェア', `https://misskey-hub.net/share/?text=${encodedShareStr}&url=${location.href}&visibility=public&localOnly=0`);
	

	$('#copyButton').on('click', function () {
		navigator.clipboard.writeText(`${shareStr}\n${location.href}`).then(
			() => {
				$('#copyButton').html($('<div>').addClass('btnText').html('コピーしました'));
				setTimeout(function () {
					$('#copyButton').html($('<div>').addClass('btnText').html('コピー'));
				}, 1000);
			});
	});
}

function createButton(id, colorClass, text) {
	return $('<button>').attr('id', id).addClass(['btn', colorClass]).html($('<div>').addClass('btnText').html(text))
}

function insertRetryButton() {
	insertSingleButton('retryButton', '最初から', function () { setup() })
}

function insertSingleButton(id, text, triggered) {
	$('#infoButtonArea').append($('<div>').attr('id', 'singleButtonArea'));
	$('#singleButtonArea').append(createButton(id, 'btnYellow', text));
	$(`#${id}`).on('click', function () { triggered() });
}

// 日付の前後判定
function guessDate(targetImplDate, guessImplDate) {
	let targetArr = targetImplDate.split('/');
	let guessArr = guessImplDate.split('/');

	let i;
	for (i = 0; i < targetArr.length; i++) {
		if (Number(targetArr[i]) > Number(guessArr[i])) {
			return after;
		} else if (Number(targetArr[i]) < Number(guessArr[i])) {
			return before;
		}
	}

	return same;
}

function millisecondToEncodedStr(millisecond) {
	const totalSecond = Math.floor(millisecond / 1000);
	return `${Math.floor(totalSecond / 60).toString().padStart(2, '0')}:${(totalSecond % 60).toString().padStart(2, '0')}.${(millisecond % 1000).toString().padStart(3, '0')}`
}



function extractUniqueName(src) {
	const index = src.indexOf('（');
	if (index === -1) {
		return src;
	}
	return src.substring(0, index);
}

function extractEditionName(src) {
	const startIndex = src.indexOf('（');
	const endIndex = src.indexOf('）');
	if (startIndex === -1) {
		return '';
	}
	return src.substring(startIndex + 1, endIndex);
}


// 今日の日付を取得する
// ただしUTCで午後19時以降（日本時間午前4時～午前9時までの間）の場合日付を1日進める
function getToday() {
	const today = new Date();
	if (today.getUTCHours() >= 19) {
		today.setUTCDate(today.getUTCDate() + 1);
	}
	return today;
}

function getLocalStorage(key) {
	const item = localStorage.getItem(key);
	return item ? JSON.parse(item) : null;
}

function setLocalStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorage(key) {
	localStorage.removeItem(key);
}