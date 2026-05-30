const allQuizData = [
{charaName:'アーサー',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2021/09/30'}, icon: 'images/icon/アーサー.jpg'},
{charaName:'アーミラ',data:{element:'光', type:'特殊タイプ', race:'その他', weapon1:'格闘', weapon2:'-', implementation:'2015/06/30'}, icon: 'images/icon/アーミラ.jpg'},
{charaName:'アイザック',data:{element:'水', type:'防御タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'銃', implementation:'2021/03/16'}, icon: 'images/icon/アイザック.jpg'},
{charaName:'アイル',data:{element:'土', type:'特殊タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2016/05/18'}, icon: 'images/icon/アイル.jpg'},
{charaName:'アオイドス',data:{element:'火', type:'特殊タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'楽器', implementation:'2016/02/29'}, icon: 'images/icon/アオイドス.jpg'},
{charaName:'アギエルバ',data:{element:'火', type:'防御タイプ', race:'ドラフ', weapon1:'剣', weapon2:'-', implementation:'2014/09/12'}, icon: 'images/icon/アギエルバ.jpg'},
{charaName:'アグロヴァル',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2018/10/31'}, icon: 'images/icon/アグロヴァル.jpg'},
{charaName:'アザゼル',data:{element:'闇', type:'攻撃タイプ', race:'星晶獣', weapon1:'短剣', weapon2:'格闘', implementation:'2017/10/17'}, icon: 'images/icon/アザゼル.jpg'},
{charaName:'アズサ',data:{element:'風', type:'攻撃タイプ', race:'ドラフ', weapon1:'刀', weapon2:'-', implementation:'2021/09/30'}, icon: 'images/icon/アズサ.jpg'},
{charaName:'アダム',data:{element:'土', type:'防御タイプ', race:'その他', weapon1:'剣', weapon2:'-', implementation:'2022/11/17'}, icon: 'images/icon/アダム.jpg'},
{charaName:'アテナ',data:{element:'火', type:'防御タイプ', race:'星晶獣', weapon1:'槍', weapon2:'-', implementation:'2018/12/31'}, icon: 'images/icon/アテナ.jpg'},
{charaName:'アトゥム',data:{element:'火', type:'攻撃タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2025/07/15'}, icon: 'images/icon/アトゥム.jpg'},
{charaName:'アニラ',data:{element:'火', type:'バランスタイプ', race:'ドラフ', weapon1:'槍', weapon2:'格闘', implementation:'2014/12/31'}, icon: 'images/icon/アニラ.jpg'},
{charaName:'アビー',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'斧', weapon2:'-', implementation:'2020/06/30'}, icon: 'images/icon/アビー.jpg'},
{charaName:'アマテラス',data:{element:'光', type:'回復タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2025/12/28'}, icon: 'images/icon/アマテラス.jpg'},
{charaName:'アミ',data:{element:'風', type:'攻撃タイプ', race:'エルーン', weapon1:'銃', weapon2:'-', implementation:'2024/06/06'}, icon: 'images/icon/アミ.jpg'},
{charaName:'アラナン',data:{element:'火', type:'攻撃タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2019/03/10'}, icon: 'images/icon/アラナン.jpg'},
{charaName:'アリア',data:{element:'風', type:'特殊タイプ', race:'エルーン', weapon1:'剣', weapon2:'-', implementation:'2022/10/31'}, icon: 'images/icon/アリア.jpg'},
{charaName:'アリーザ',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2016/05/02'}, icon: 'images/icon/アリーザ.jpg'},
{charaName:'アルタイル',data:{element:'水', type:'バランスタイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2014/05/08'}, icon: 'images/icon/アルタイル.jpg'},
{charaName:'アルベール',data:{element:'光', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2015/03/31'}, icon: 'images/icon/アルベール.jpg'},
{charaName:'アルルメイヤ',data:{element:'土', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2014/09/30'}, icon: 'images/icon/アルルメイヤ.jpg'},
{charaName:'アレーティア',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'刀', implementation:'2014/04/16'}, icon: 'images/icon/アレーティア.jpg'},
{charaName:'アン',data:{element:'水', type:'防御タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'杖', implementation:'2017/09/14'}, icon: 'images/icon/アン.jpg'},
{charaName:'アンジェ',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2026/02/28'}, icon: 'images/icon/アンジェ.jpg'},
{charaName:'アンスリア',data:{element:'火', type:'特殊タイプ', race:'エルーン', weapon1:'格闘', weapon2:'楽器', implementation:'2016/11/30'}, icon: 'images/icon/アンスリア.jpg'},
{charaName:'アンダーソン',data:{element:'火', type:'防御タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'斧', implementation:'2022/08/31'}, icon: 'images/icon/アンダーソン.jpg'},
{charaName:'アンチラ',data:{element:'風', type:'バランスタイプ', race:'エルーン', weapon1:'杖', weapon2:'格闘', implementation:'2015/12/31'}, icon: 'images/icon/アンチラ.jpg'},
{charaName:'アンナ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2022/05/20'}, icon: 'images/icon/アンナ.jpg'},
{charaName:'アンリエット',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'楽器', weapon2:'-', implementation:'2015/09/22'}, icon: 'images/icon/アンリエット.jpg'},
{charaName:'イーウィヤ',data:{element:'風', type:'特殊タイプ', race:'その他', weapon1:'格闘', weapon2:'-', implementation:'2021/12/31'}, icon: 'images/icon/イーウィヤ.jpg'},
{charaName:'イオ',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2015/11/30'}, icon: 'images/icon/イオ.jpg'},
{charaName:'イカロス',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2023/05/20'}, icon: 'images/icon/イカロス.jpg'},
{charaName:'イシュミール',data:{element:'水', type:'攻撃タイプ', race:'ドラフ', weapon1:'剣', weapon2:'-', implementation:'2016/10/31'}, icon: 'images/icon/イシュミール.jpg'},
{charaName:'イッパツ',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2022/01/31'}, icon: 'images/icon/イッパツ.jpg'},
{charaName:'イルザ',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'銃', weapon2:'弓', implementation:'2017/12/31'}, icon: 'images/icon/イルザ.jpg'},
{charaName:'イルノート',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2020/05/16'}, icon: 'images/icon/イルノート.jpg'},
{charaName:'イングヴェイ',data:{element:'水', type:'防御タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'銃', implementation:'2016/07/15'}, icon: 'images/icon/イングヴェイ.jpg'},
{charaName:'インダラ',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'刀', implementation:'2024/12/31'}, icon: 'images/icon/インダラ.jpg'},
{charaName:'ヴァイト',data:{element:'闇', type:'攻撃タイプ', race:'その他', weapon1:'短剣', weapon2:'-', implementation:'2016/09/15'}, icon: 'images/icon/ヴァイト.jpg'},
{charaName:'ヴァジラ',data:{element:'水', type:'攻撃タイプ', race:'エルーン', weapon1:'刀', weapon2:'格闘', implementation:'2017/12/31'}, icon: 'images/icon/ヴァジラ.jpg'},
{charaName:'ヴァルフリート',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2026/02/28'}, icon: 'images/icon/ヴァルフリート.jpg'},
{charaName:'ヴァンピィ',data:{element:'闇', type:'特殊タイプ', race:'その他', weapon1:'杖', weapon2:'短剣', implementation:'2015/08/31'}, icon: 'images/icon/ヴァンピィ.jpg'},
{charaName:'ヴィーラ',data:{element:'闇', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2015/02/28'}, icon: 'images/icon/ヴィーラ.jpg'},
{charaName:'ウィル',data:{element:'闇', type:'回復タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'杖', implementation:'2024/10/31'}, icon: 'images/icon/ウィル.jpg'},
{charaName:'ウィルナス',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'斧', implementation:'2022/01/31'}, icon: 'images/icon/ウィルナス.jpg'},
{charaName:'ウーノ',data:{element:'水', type:'防御タイプ', race:'ハーヴィン', weapon1:'槍', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/ウーノ.jpg'},
{charaName:'ウーフとレニー',data:{element:'闇', type:'攻撃タイプ', race:'その他', weapon1:'格闘', weapon2:'銃', implementation:'2018/06/18'}, icon: 'images/icon/ウーフとレニー.jpg'},
{charaName:'ヴェイン',data:{element:'水', type:'防御タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'斧', implementation:'2017/04/18'}, icon: 'images/icon/ヴェイン.jpg'},
{charaName:'ウツセミ',data:{element:'光', type:'特殊タイプ', race:'ドラフ', weapon1:'楽器', weapon2:'短剣', implementation:'2023/10/31'}, icon: 'images/icon/ウツセミ.jpg'},
{charaName:'ウリエル',data:{element:'土', type:'攻撃タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2023/12/31'}, icon: 'images/icon/ウリエル.jpg'},
{charaName:'ウルキ',data:{element:'水', type:'バランスタイプ', race:'ハーヴィン', weapon1:'剣', weapon2:'-', implementation:'2024/10/15'}, icon: 'images/icon/ウルキ.jpg'},
{charaName:'エイレア',data:{element:'風', type:'バランスタイプ', race:'エルーン', weapon1:'剣', weapon2:'刀', implementation:'2022/05/31'}, icon: 'images/icon/エイレア.jpg'},
{charaName:'エウロペ',data:{element:'水', type:'回復タイプ', race:'星晶獣', weapon1:'杖', weapon2:'槍', implementation:'2018/10/17'}, icon: 'images/icon/エウロペ.jpg'},
{charaName:'エキドナ',data:{element:'風', type:'防御タイプ', race:'星晶獣', weapon1:'杖', weapon2:'楽器', implementation:'2026/04/15'}, icon: 'images/icon/エキドナ.jpg'},
{charaName:'エスタリオラ',data:{element:'風', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2019/03/10'}, icon: 'images/icon/エスタリオラ.jpg'},
{charaName:'エッセル',data:{element:'火', type:'バランスタイプ', race:'エルーン', weapon1:'銃', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/エッセル.jpg'},
{charaName:'エニュオ',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'槍', weapon2:'-', implementation:'2021/10/31'}, icon: 'images/icon/エニュオ.jpg'},
{charaName:'エミリア',data:{element:'土', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2023/01/19'}, icon: 'images/icon/エミリア.jpg'},
{charaName:'エリカ',data:{element:'水', type:'バランスタイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2022/08/31'}, icon: 'images/icon/エリカ.jpg'},
{charaName:'エリン',data:{element:'水', type:'回復タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2022/12/28'}, icon: 'images/icon/エリン.jpg'},
{charaName:'エルモート',data:{element:'火', type:'攻撃タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2021/09/15'}, icon: 'images/icon/エルモート.jpg'},
{charaName:'オイゲン',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2016/02/26'}, icon: 'images/icon/オイゲン.jpg'},
{charaName:'オーキス',data:{element:'闇', type:'特殊タイプ', race:'その他', weapon1:'短剣', weapon2:'格闘', implementation:'2017/02/28'}, icon: 'images/icon/オーキス.jpg'},
{charaName:'オクタヴィア',data:{element:'水', type:'攻撃タイプ', race:'エルーン', weapon1:'刀', weapon2:'銃', implementation:'2026/03/16'}, icon: 'images/icon/オクタヴィア.jpg'},
{charaName:'オクトー',data:{element:'土', type:'攻撃タイプ', race:'ドラフ', weapon1:'刀', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/オクトー.jpg'},
{charaName:'オリヴィエ',data:{element:'闇', type:'特殊タイプ', race:'星晶獣', weapon1:'剣', weapon2:'-', implementation:'2017/12/29'}, icon: 'images/icon/オリヴィエ.jpg'},
{charaName:'オロロジャイア',data:{element:'闇', type:'特殊タイプ', race:'その他', weapon1:'斧', weapon2:'杖', implementation:'2024/06/15'}, icon: 'images/icon/オロロジャイア.jpg'},
{charaName:'ガイゼンボーガ',data:{element:'光', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2019/03/10'}, icon: 'images/icon/ガイゼンボーガ.jpg'},
{charaName:'カイム',data:{element:'土', type:'特殊タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'格闘', implementation:'2019/03/10'}, icon: 'images/icon/カイム.jpg'},
{charaName:'カイン',data:{element:'土', type:'特殊タイプ', race:'ヒューマン', weapon1:'刀', weapon2:'-', implementation:'2018/05/31'}, icon: 'images/icon/カイン.jpg'},
{charaName:'ガウェイン',data:{element:'風', type:'防御タイプ', race:'ヒューマン', weapon1:'斧', weapon2:'槍', implementation:'2014/04/24'}, icon: 'images/icon/ガウェイン.jpg'},
{charaName:'カグヤ',data:{element:'風', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2023/09/15'}, icon: 'images/icon/カグヤ.jpg'},
{charaName:'カタリナ',data:{element:'水', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2015/07/31'}, icon: 'images/icon/カタリナ.jpg'},
{charaName:'カッツェリーラ',data:{element:'風', type:'防御タイプ', race:'ハーヴィン', weapon1:'楽器', weapon2:'-', implementation:'2019/03/10'}, icon: 'images/icon/カッツェリーラ.jpg'},
{charaName:'カトル',data:{element:'水', type:'特殊タイプ', race:'エルーン', weapon1:'短剣', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/カトル.jpg'},
{charaName:'ガブリエル',data:{element:'水', type:'防御タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2023/11/17'}, icon: 'images/icon/ガブリエル.jpg'},
{charaName:'カリオストロ',data:{element:'土', type:'回復タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2014/05/31'}, icon: 'images/icon/カリオストロ.jpg'},
{charaName:'カルメリーナ',data:{element:'風', type:'特殊タイプ', race:'ドラフ', weapon1:'短剣', weapon2:'-', implementation:'2015/02/13'}, icon: 'images/icon/カルメリーナ.jpg'},
{charaName:'ガレヲン',data:{element:'土', type:'バランスタイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2022/06/17'}, icon: 'images/icon/ガレヲン.jpg'},
{charaName:'カロ',data:{element:'風', type:'バランスタイプ', race:'星晶獣', weapon1:'楽器', weapon2:'-', implementation:'2023/04/30'}, icon: 'images/icon/カロ.jpg'},
{charaName:'カンターテ',data:{element:'風', type:'攻撃タイプ', race:'エルーン', weapon1:'楽器', weapon2:'-', implementation:'2023/04/30'}, icon: 'images/icon/カンターテ.jpg'},
{charaName:'ガンダゴウザ',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2015/07/14'}, icon: 'images/icon/ガンダゴウザ.jpg'},
{charaName:'キャサリン',data:{element:'土', type:'特殊タイプ', race:'エルーン', weapon1:'銃', weapon2:'-', implementation:'2016/02/18'}, icon: 'images/icon/キャサリン.jpg'},
{charaName:'グウィン',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'銃', implementation:'2022/06/17'}, icon: 'images/icon/グウィン.jpg'},
{charaName:'ククル',data:{element:'水', type:'バランスタイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2018/04/30'}, icon: 'images/icon/ククル.jpg'},
{charaName:'クピタン',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'弓', weapon2:'-', implementation:'2022/01/17'}, icon: 'images/icon/クピタン.jpg'},
{charaName:'クビラ',data:{element:'光', type:'攻撃タイプ', race:'ドラフ', weapon1:'槍', weapon2:'斧', implementation:'2018/12/31'}, icon: 'images/icon/クビラ.jpg'},
{charaName:'クラリス',data:{element:'火', type:'特殊タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2015/04/16'}, icon: 'images/icon/クラリス.jpg'},
{charaName:'グリームニル',data:{element:'風', type:'バランスタイプ', race:'星晶獣', weapon1:'槍', weapon2:'杖', implementation:'2019/04/15'}, icon: 'images/icon/グリームニル.jpg'},
{charaName:'クリスティーナ',data:{element:'風', type:'バランスタイプ', race:'ヒューマン', weapon1:'銃', weapon2:'短剣', implementation:'2014/09/27'}, icon: 'images/icon/クリスティーナ.jpg'},
{charaName:'グレア',data:{element:'火', type:'攻撃タイプ', race:'その他', weapon1:'格闘', weapon2:'-', implementation:'2017/08/31'}, icon: 'images/icon/グレア.jpg'},
{charaName:'クロエ',data:{element:'闇', type:'特殊タイプ', race:'エルーン', weapon1:'格闘', weapon2:'-', implementation:'2024/04/30'}, icon: 'images/icon/クロエ.jpg'},
{charaName:'ケルベロス',data:{element:'闇', type:'特殊タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2014/08/31'}, icon: 'images/icon/ケルベロス.jpg'},
{charaName:'コウ',data:{element:'闇', type:'回復タイプ', race:'エルーン', weapon1:'刀', weapon2:'楽器', implementation:'2019/10/31'}, icon: 'images/icon/コウ.jpg'},
{charaName:'コク',data:{element:'闇', type:'特殊タイプ', race:'その他', weapon1:'格闘', weapon2:'-', implementation:'2025/01/07'}, icon: 'images/icon/コク.jpg'},
{charaName:'コスモス',data:{element:'光', type:'バランスタイプ', race:'星晶獣', weapon1:'銃', weapon2:'剣', implementation:'2023/06/19'}, icon: 'images/icon/コスモス.jpg'},
{charaName:'コルル',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2019/06/19'}, icon: 'images/icon/コルル.jpg'},
{charaName:'コルワ',data:{element:'風', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2016/04/20'}, icon: 'images/icon/コルワ.jpg'},
{charaName:'コロッサス',data:{element:'火', type:'攻撃タイプ', race:'星晶獣', weapon1:'剣', weapon2:'斧', implementation:'2019/09/16'}, icon: 'images/icon/コロッサス.jpg'},
{charaName:'コンスタンツィア',data:{element:'闇', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2026/01/16'}, icon: 'images/icon/コンスタンツィア.jpg'},
{charaName:'サテュロス',data:{element:'火', type:'防御タイプ', race:'星晶獣', weapon1:'杖', weapon2:'剣', implementation:'2020/05/31'}, icon: 'images/icon/サテュロス.jpg'},
{charaName:'さと',data:{element:'火', type:'特殊タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'刀', implementation:'2024/05/31'}, icon: 'images/icon/さと.jpg'},
{charaName:'サビルバラ',data:{element:'火', type:'攻撃タイプ', race:'ハーヴィン', weapon1:'刀', weapon2:'-', implementation:'2023/10/31'}, icon: 'images/icon/サビルバラ.jpg'},
{charaName:'サブリナ',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2024/02/29'}, icon: 'images/icon/サブリナ.jpg'},
{charaName:'サラ',data:{element:'土', type:'防御タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2015/01/31'}, icon: 'images/icon/サラ.jpg'},
{charaName:'サラーサ',data:{element:'土', type:'攻撃タイプ', race:'ドラフ', weapon1:'剣', weapon2:'斧', implementation:'2014/12/25'}, icon: 'images/icon/サラーサ.jpg'},
{charaName:'サリエル',data:{element:'闇', type:'攻撃タイプ', race:'星晶獣', weapon1:'斧', weapon2:'-', implementation:'2025/08/31'}, icon: 'images/icon/サリエル.jpg'},
{charaName:'サルナーン',data:{element:'光', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2014/05/23'}, icon: 'images/icon/サルナーン.jpg'},
{charaName:'ザルハメリナ',data:{element:'火', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2016/02/29'}, icon: 'images/icon/ザルハメリナ.jpg'},
{charaName:'サンダルフォン',data:{element:'光', type:'攻撃タイプ', race:'星晶獣', weapon1:'剣', weapon2:'刀', implementation:'2024/02/29'}, icon: 'images/icon/サンダルフォン.jpg'},
{charaName:'サンチラ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'弓', weapon2:'楽器', implementation:'2025/12/31'}, icon: 'images/icon/サンチラ.jpg'},
{charaName:'サンドリヨン',data:{element:'闇', type:'攻撃タイプ', race:'その他', weapon1:'短剣', weapon2:'格闘', implementation:'2023/01/31'}, icon: 'images/icon/サンドリヨン.jpg'},
{charaName:'ジークフリート',data:{element:'土', type:'特殊タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'刀', implementation:'2015/01/31'}, icon: 'images/icon/ジークフリート.jpg'},
{charaName:'シーザー',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2025/12/31'}, icon: 'images/icon/シーザー.jpg'},
{charaName:'シヴァ',data:{element:'火', type:'攻撃タイプ', race:'星晶獣', weapon1:'槍', weapon2:'杖', implementation:'2018/12/28'}, icon: 'images/icon/シヴァ.jpg'},
{charaName:'ジェシカ',data:{element:'闇', type:'バランスタイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2022/09/19'}, icon: 'images/icon/ジェシカ.jpg'},
{charaName:'シエテ',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/シエテ.jpg'},
{charaName:'シェリーネ',data:{element:'光', type:'攻撃タイプ', race:'エルーン', weapon1:'槍', weapon2:'-', implementation:'2025/04/15'}, icon: 'images/icon/シェリーネ.jpg'},
{charaName:'シオン',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'刀', weapon2:'-', implementation:'2021/04/19'}, icon: 'images/icon/シオン.jpg'},
{charaName:'シス',data:{element:'闇', type:'攻撃タイプ', race:'エルーン', weapon1:'格闘', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/シス.jpg'},
{charaName:'シトリ',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'弓', weapon2:'刀', implementation:'2019/11/16'}, icon: 'images/icon/シトリ.jpg'},
{charaName:'ジャスミン',data:{element:'闇', type:'回復タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2023/04/18'}, icon: 'images/icon/ジャスミン.jpg'},
{charaName:'シャトラ',data:{element:'風', type:'攻撃タイプ', race:'ドラフ', weapon1:'槍', weapon2:'格闘', implementation:'2020/12/31'}, icon: 'images/icon/シャトラ.jpg'},
{charaName:'シャノワール',data:{element:'水', type:'特殊タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'短剣', implementation:'2016/08/31'}, icon: 'images/icon/シャノワール.jpg'},
{charaName:'ジャミル',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'-', implementation:'2022/05/31'}, icon: 'images/icon/ジャミル.jpg'},
{charaName:'シャルロッテ',data:{element:'水', type:'バランスタイプ', race:'ハーヴィン', weapon1:'剣', weapon2:'-', implementation:'2014/06/17'}, icon: 'images/icon/シャルロッテ.jpg'},
{charaName:'ジャンヌダルク',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'槍', implementation:'2015/01/22'}, icon: 'images/icon/ジャンヌダルク.jpg'},
{charaName:'シュクラ',data:{element:'水', type:'バランスタイプ', race:'エルーン', weapon1:'短剣', weapon2:'-', implementation:'2025/04/15'}, icon: 'images/icon/シュクラ.jpg'},
{charaName:'シュシュク',data:{element:'土', type:'バランスタイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'-', implementation:'2024/08/15'}, icon: 'images/icon/シュシュク.jpg'},
{charaName:'シュラ',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2020/04/30'}, icon: 'images/icon/シュラ.jpg'},
{charaName:'ジュリエット',data:{element:'光', type:'防御タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2016/09/30'}, icon: 'images/icon/ジュリエット.jpg'},
{charaName:'ジョイ',data:{element:'風', type:'特殊タイプ', race:'その他', weapon1:'格闘', weapon2:'弓', implementation:'2025/03/11'}, icon: 'images/icon/ジョイ.jpg'},
{charaName:'ショウ',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2021/05/31'}, icon: 'images/icon/ショウ.jpg'},
{charaName:'ジョエル',data:{element:'水', type:'回復タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'短剣', implementation:'2025/09/19'}, icon: 'images/icon/ジョエル.jpg'},
{charaName:'シルヴァ',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2015/05/31'}, icon: 'images/icon/シルヴァ.jpg'},
{charaName:'シルヴィア',data:{element:'水', type:'バランスタイプ', race:'星晶獣', weapon1:'剣', weapon2:'-', implementation:'2025/09/19'}, icon: 'images/icon/シルヴィア.jpg'},
{charaName:'シルフ',data:{element:'火', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2022/02/28'}, icon: 'images/icon/シルフ.jpg'},
{charaName:'シロウ',data:{element:'闇', type:'防御タイプ', race:'ヒューマン', weapon1:'刀', weapon2:'-', implementation:'2018/03/31'}, icon: 'images/icon/シロウ.jpg'},
{charaName:'ジン',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'刀', weapon2:'-', implementation:'2020/01/17'}, icon: 'images/icon/ジン.jpg'},
{charaName:'シンダラ',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'斧', weapon2:'格闘', implementation:'2021/12/31'}, icon: 'images/icon/シンダラ.jpg'},
{charaName:'スイ',data:{element:'光', type:'回復タイプ', race:'その他', weapon1:'格闘', weapon2:'楽器', implementation:'2024/05/15'}, icon: 'images/icon/スイ.jpg'},
{charaName:'スーテラ',data:{element:'風', type:'攻撃タイプ', race:'エルーン', weapon1:'弓', weapon2:'-', implementation:'2020/10/31'}, icon: 'images/icon/スーテラ.jpg'},
{charaName:'スカーサハ',data:{element:'風', type:'攻撃タイプ', race:'エルーン', weapon1:'格闘', weapon2:'-', implementation:'2017/05/31'}, icon: 'images/icon/スカーサハ.jpg'},
{charaName:'スクルド',data:{element:'風', type:'攻撃タイプ', race:'その他', weapon1:'弓', weapon2:'剣', implementation:'2025/05/31'}, icon: 'images/icon/スクルド.jpg'},
{charaName:'スツルム',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'剣', weapon2:'刀', implementation:'2017/03/31'}, icon: 'images/icon/スツルム.jpg'},
{charaName:'スピナー',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'-', implementation:'2024/04/15'}, icon: 'images/icon/スピナー.jpg'},
{charaName:'ゼタ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2014/12/31'}, icon: 'images/icon/ゼタ.jpg'},
{charaName:'ゼヘク',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'格闘', implementation:'2021/01/17'}, icon: 'images/icon/ゼヘク.jpg'},
{charaName:'セルエル',data:{element:'光', type:'攻撃タイプ', race:'エルーン', weapon1:'剣', weapon2:'-', implementation:'2014/07/16'}, icon: 'images/icon/セルエル.jpg'},
{charaName:'セレフィラ',data:{element:'風', type:'特殊タイプ', race:'エルーン', weapon1:'楽器', weapon2:'-', implementation:'2018/06/30'}, icon: 'images/icon/セレフィラ.jpg'},
{charaName:'セワスチアン',data:{element:'闇', type:'攻撃タイプ', race:'エルーン', weapon1:'剣', weapon2:'-', implementation:'2024/08/31'}, icon: 'images/icon/セワスチアン.jpg'},
{charaName:'セン',data:{element:'風', type:'攻撃タイプ', race:'エルーン', weapon1:'格闘', weapon2:'-', implementation:'2019/01/31'}, icon: 'images/icon/セン.jpg'},
{charaName:'ゾーイ',data:{element:'光', type:'バランスタイプ', race:'星晶獣', weapon1:'銃', weapon2:'剣', implementation:'2018/01/31'}, icon: 'images/icon/ゾーイ.jpg'},
{charaName:'ソーン',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'弓', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/ソーン.jpg'},
{charaName:'ソシエ',data:{element:'水', type:'特殊タイプ', race:'エルーン', weapon1:'格闘', weapon2:'楽器', implementation:'2015/03/17'}, icon: 'images/icon/ソシエ.jpg'},
{charaName:'ソフィア',data:{element:'光', type:'回復タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2014/11/30'}, icon: 'images/icon/ソフィア.jpg'},
{charaName:'ソリッズ',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2018/05/21'}, icon: 'images/icon/ソリッズ.jpg'},
{charaName:'ターニャ',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'-', implementation:'2019/01/17'}, icon: 'images/icon/ターニャ.jpg'},
{charaName:'ダーント',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'格闘', implementation:'2019/01/31'}, icon: 'images/icon/ダーント.jpg'},
{charaName:'タヴィーナ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'弓', weapon2:'斧', implementation:'2019/08/31'}, icon: 'images/icon/タヴィーナ.jpg'},
{charaName:'ダヌア',data:{element:'闇', type:'攻撃タイプ', race:'ドラフ', weapon1:'短剣', weapon2:'斧', implementation:'2025/09/30'}, icon: 'images/icon/ダヌア.jpg'},
{charaName:'ダリダラ',data:{element:'水', type:'防御タイプ', race:'ハーヴィン', weapon1:'斧', weapon2:'-', implementation:'2025/12/27'}, icon: 'images/icon/ダリダラ.jpg'},
{charaName:'チチリ',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'斧', weapon2:'-', implementation:'2024/04/21'}, icon: 'images/icon/チチリ.jpg'},
{charaName:'ツクヨミ',data:{element:'闇', type:'回復タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2025/02/28'}, icon: 'images/icon/ツクヨミ.jpg'},
{charaName:'ツバサ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2018/08/31'}, icon: 'images/icon/ツバサ.jpg'},
{charaName:'ティアマト',data:{element:'風', type:'特殊タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'杖', implementation:'2018/02/28'}, icon: 'images/icon/ティアマト.jpg'},
{charaName:'ディアンサ',data:{element:'土', type:'回復タイプ', race:'ヒューマン', weapon1:'楽器', weapon2:'-', implementation:'2020/09/16'}, icon: 'images/icon/ディアンサ.jpg'},
{charaName:'ティコ',data:{element:'光', type:'回復タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2021/05/18'}, icon: 'images/icon/ティコ.jpg'},
{charaName:'ティラ',data:{element:'闇', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2023/12/31'}, icon: 'images/icon/ティラ.jpg'},
{charaName:'テフヌト',data:{element:'水', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2024/06/30'}, icon: 'images/icon/テフヌト.jpg'},
{charaName:'デリフォード',data:{element:'水', type:'防御タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2024/01/15'}, icon: 'images/icon/デリフォード.jpg'},
{charaName:'テレーズ',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2022/11/17'}, icon: 'images/icon/テレーズ.jpg'},
{charaName:'ドランク',data:{element:'水', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2017/04/30'}, icon: 'images/icon/ドランク.jpg'},
{charaName:'トルー',data:{element:'水', type:'特殊タイプ', race:'エルーン', weapon1:'剣', weapon2:'-', implementation:'2021/05/18'}, icon: 'images/icon/トルー.jpg'},
{charaName:'ドロッセル',data:{element:'光', type:'特殊タイプ', race:'ハーヴィン', weapon1:'短剣', weapon2:'-', implementation:'2023/05/31'}, icon: 'images/icon/ドロッセル.jpg'},
{charaName:'ナーヴェ',data:{element:'光', type:'特殊タイプ', race:'ヒューマン', weapon1:'楽器', weapon2:'-', implementation:'2024/09/17'}, icon: 'images/icon/ナーヴェ.jpg'},
{charaName:'ナタク',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'槍', weapon2:'-', implementation:'2021/04/19'}, icon: 'images/icon/ナタク.jpg'},
{charaName:'ナルメア',data:{element:'闇', type:'攻撃タイプ', race:'ドラフ', weapon1:'刀', weapon2:'-', implementation:'2015/10/31'}, icon: 'images/icon/ナルメア.jpg'},
{charaName:'ニーア',data:{element:'闇', type:'特殊タイプ', race:'エルーン', weapon1:'斧', weapon2:'短剣', implementation:'2019/03/10'}, icon: 'images/icon/ニーア.jpg'},
{charaName:'ニオ',data:{element:'風', type:'特殊タイプ', race:'ハーヴィン', weapon1:'楽器', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/ニオ.jpg'},
{charaName:'ネクタル',data:{element:'風', type:'攻撃タイプ', race:'その他', weapon1:'刀', weapon2:'弓', implementation:'2021/01/31'}, icon: 'images/icon/ネクタル.jpg'},
{charaName:'ネツァワルピリ',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2014/03/10'}, icon: 'images/icon/ネツァワルピリ.jpg'},
{charaName:'ネハン',data:{element:'光', type:'特殊タイプ', race:'エルーン', weapon1:'銃', weapon2:'格闘', implementation:'2021/06/18'}, icon: 'images/icon/ネハン.jpg'},
{charaName:'ネモネ',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'斧', weapon2:'槍', implementation:'2016/05/31'}, icon: 'images/icon/ネモネ.jpg'},
{charaName:'ノア',data:{element:'光', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'銃', implementation:'2019/12/31'}, icon: 'images/icon/ノア.jpg'},
{charaName:'ノイシュ',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'弓', weapon2:'短剣', implementation:'2020/06/16'}, icon: 'images/icon/ノイシュ.jpg'},
{charaName:'ノワール',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'剣', weapon2:'-', implementation:'2024/09/17'}, icon: 'images/icon/ノワール.jpg'},
{charaName:'パーシヴァル',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2015/06/26'}, icon: 'images/icon/パーシヴァル.jpg'},
{charaName:'ハーゼリーラ',data:{element:'水', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'格闘', implementation:'2019/03/10'}, icon: 'images/icon/ハーゼリーラ.jpg'},
{charaName:'バアル',data:{element:'土', type:'バランスタイプ', race:'星晶獣', weapon1:'楽器', weapon2:'斧', implementation:'2019/05/18'}, icon: 'images/icon/バアル.jpg'},
{charaName:'ハールート・マールート',data:{element:'闇', type:'特殊タイプ', race:'星晶獣', weapon1:'短剣', weapon2:'-', implementation:'2023/01/19'}, icon: 'images/icon/ハールート・マールート.jpg'},
{charaName:'バイヴカハ',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2019/05/31'}, icon: 'images/icon/バイヴカハ.jpg'},
{charaName:'バイシュラ',data:{element:'土', type:'回復タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2025/12/28'}, icon: 'images/icon/バイシュラ.jpg'},
{charaName:'ハイラ',data:{element:'水', type:'攻撃タイプ', race:'ドラフ', weapon1:'杖', weapon2:'-', implementation:'2023/12/31'}, icon: 'images/icon/ハイラ.jpg'},
{charaName:'バウタオーダ',data:{element:'光', type:'防御タイプ', race:'ドラフ', weapon1:'剣', weapon2:'-', implementation:'2017/06/19'}, icon: 'images/icon/バウタオーダ.jpg'},
{charaName:'ハウヘト',data:{element:'火', type:'特殊タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2025/06/16'}, icon: 'images/icon/ハウヘト.jpg'},
{charaName:'バサラ',data:{element:'光', type:'攻撃タイプ', race:'エルーン', weapon1:'刀', weapon2:'格闘', implementation:'2025/03/17'}, icon: 'images/icon/バサラ.jpg'},
{charaName:'バザラガ',data:{element:'闇', type:'攻撃タイプ', race:'ドラフ', weapon1:'斧', weapon2:'-', implementation:'2014/12/31'}, icon: 'images/icon/バザラガ.jpg'},
{charaName:'パラシュラーマ',data:{element:'火', type:'攻撃タイプ', race:'星晶獣', weapon1:'弓', weapon2:'斧', implementation:'2026/04/15'}, icon: 'images/icon/パラシュラーマ.jpg'},
{charaName:'パリス',data:{element:'土', type:'防御タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2023/09/15'}, icon: 'images/icon/パリス.jpg'},
{charaName:'ハレゼナ',data:{element:'土', type:'攻撃タイプ', race:'ドラフ', weapon1:'斧', weapon2:'-', implementation:'2016/03/18'}, icon: 'images/icon/ハレゼナ.jpg'},
{charaName:'ピィジウ',data:{element:'光', type:'回復タイプ', race:'その他', weapon1:'刀', weapon2:'槍', implementation:'2025/04/21'}, icon: 'images/icon/ピィジウ.jpg'},
{charaName:'ビカラ',data:{element:'闇', type:'バランスタイプ', race:'ヒューマン', weapon1:'斧', weapon2:'格闘', implementation:'2019/12/31'}, icon: 'images/icon/ビカラ.jpg'},
{charaName:'ファスティバ',data:{element:'土', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2019/05/31'}, icon: 'images/icon/ファスティバ.jpg'},
{charaName:'フィーナ',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'弓', weapon2:'-', implementation:'2015/10/14'}, icon: 'images/icon/フィーナ.jpg'},
{charaName:'フィオリト',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2020/11/16'}, icon: 'images/icon/フィオリト.jpg'},
{charaName:'フィルキス',data:{element:'土', type:'バランスタイプ', race:'レヴリス', weapon1:'短剣', weapon2:'銃', implementation:'2026/04/23'}, icon: 'images/icon/フィルキス.jpg'},
{charaName:'フィルレイン',data:{element:'水', type:'特殊タイプ', race:'その他', weapon1:'槍', weapon2:'-', implementation:'2020/12/31'}, icon: 'images/icon/フィルレイン.jpg'},
{charaName:'フェザー',data:{element:'光', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2020/11/16'}, icon: 'images/icon/フェザー.jpg'},
{charaName:'フェディエル',data:{element:'闇', type:'特殊タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'剣', implementation:'2021/12/31'}, icon: 'images/icon/フェディエル.jpg'},
{charaName:'フェニー',data:{element:'火', type:'回復タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2024/03/15'}, icon: 'images/icon/フェニー.jpg'},
{charaName:'フェリ',data:{element:'光', type:'バランスタイプ', race:'エルーン', weapon1:'短剣', weapon2:'-', implementation:'2016/01/31'}, icon: 'images/icon/フェリ.jpg'},
{charaName:'フェルルカ',data:{element:'土', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'斧', implementation:'2026/04/30'}, icon: 'images/icon/フェルルカ.jpg'},
{charaName:'フォリア',data:{element:'水', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'格闘', implementation:'2018/08/31'}, icon: 'images/icon/フォリア.jpg'},
{charaName:'フォルテ',data:{element:'闇', type:'攻撃タイプ', race:'ドラフ', weapon1:'槍', weapon2:'-', implementation:'2016/06/16'}, icon: 'images/icon/フォルテ.jpg'},
{charaName:'フュンフ',data:{element:'光', type:'回復タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2014/12/25'}, icon: 'images/icon/フュンフ.jpg'},
{charaName:'フラウ',data:{element:'火', type:'攻撃タイプ', race:'エルーン', weapon1:'格闘', weapon2:'-', implementation:'2019/03/10'}, icon: 'images/icon/フラウ.jpg'},
{charaName:'フレイ',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'剣', weapon2:'-', implementation:'2022/02/28'}, icon: 'images/icon/フレイ.jpg'},
{charaName:'プレデター',data:{element:'闇', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2020/05/16'}, icon: 'images/icon/プレデター.jpg'},
{charaName:'ブローディア',data:{element:'土', type:'防御タイプ', race:'星晶獣', weapon1:'剣', weapon2:'刀', implementation:'2018/04/17'}, icon: 'images/icon/ブローディア.jpg'},
{charaName:'フロレンス',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2020/09/30'}, icon: 'images/icon/フロレンス.jpg'},
{charaName:'ベアトリクス',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2015/12/31'}, icon: 'images/icon/ベアトリクス.jpg'},
{charaName:'ヘカテー',data:{element:'火', type:'攻撃タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2023/02/28'}, icon: 'images/icon/ヘカテー.jpg'},
{charaName:'ペトラ',data:{element:'風', type:'バランスタイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2015/04/30'}, icon: 'images/icon/ペトラ.jpg'},
{charaName:'ヘリヤ',data:{element:'土', type:'防御タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2020/04/15'}, icon: 'images/icon/ヘリヤ.jpg'},
{charaName:'ヘルエス',data:{element:'火', type:'攻撃タイプ', race:'エルーン', weapon1:'槍', weapon2:'杖', implementation:'2015/09/30'}, icon: 'images/icon/ヘルエス.jpg'},
{charaName:'ベルソー',data:{element:'土', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2025/08/31'}, icon: 'images/icon/ベルソー.jpg'},
{charaName:'ヘレル・ベン・シャレム',data:{element:'闇', type:'特殊タイプ', race:'その他', weapon1:'槍', weapon2:'杖', implementation:'2019/12/28'}, icon: 'images/icon/ヘレル・ベン・シャレム.jpg'},
{charaName:'ペンギー',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'銃', implementation:'2020/06/16'}, icon: 'images/icon/ペンギー.jpg'},
{charaName:'ベンヌ',data:{element:'土', type:'攻撃タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2025/11/30'}, icon: 'images/icon/ベンヌ.jpg'},
{charaName:'ポセイドン',data:{element:'水', type:'攻撃タイプ', race:'星晶獣', weapon1:'槍', weapon2:'-', implementation:'2021/07/31'}, icon: 'images/icon/ポセイドン.jpg'},
{charaName:'ホルス',data:{element:'光', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2024/03/15'}, icon: 'images/icon/ホルス.jpg'},
{charaName:'ボレミア',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2023/11/17'}, icon: 'images/icon/ボレミア.jpg'},
{charaName:'マーズ',data:{element:'光', type:'攻撃タイプ', race:'星晶獣', weapon1:'槍', weapon2:'斧', implementation:'2025/04/30'}, icon: 'images/icon/マーズ.jpg'},
{charaName:'マイシェラ',data:{element:'光', type:'特殊タイプ', race:'エルーン', weapon1:'杖', weapon2:'-', implementation:'2021/01/17'}, icon: 'images/icon/マイシェラ.jpg'},
{charaName:'マギサ',data:{element:'火', type:'特殊タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'格闘', implementation:'2014/06/22'}, icon: 'images/icon/マギサ.jpg'},
{charaName:'マキュラ・マリウス',data:{element:'水', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2019/04/15'}, icon: 'images/icon/マキュラ・マリウス.jpg'},
{charaName:'マキラ',data:{element:'土', type:'特殊タイプ', race:'ハーヴィン', weapon1:'楽器', weapon2:'格闘', implementation:'2016/12/31'}, icon: 'images/icon/マキラ.jpg'},
{charaName:'マコラ',data:{element:'光', type:'攻撃タイプ', race:'エルーン', weapon1:'刀', weapon2:'-', implementation:'2022/12/31'}, icon: 'images/icon/マコラ.jpg'},
{charaName:'マッコイ',data:{element:'土', type:'特殊タイプ', race:'ヒューマン', weapon1:'短剣', weapon2:'-', implementation:'2026/01/31'}, icon: 'images/icon/マッコイ.jpg'},
{charaName:'マナマル',data:{element:'闇', type:'攻撃タイプ', race:'エルーン', weapon1:'短剣', weapon2:'-', implementation:'2022/05/20'}, icon: 'images/icon/マナマル.jpg'},
{charaName:'マヌ＝ポヌマウ',data:{element:'闇', type:'防御タイプ', race:'ヴォルヴィル', weapon1:'槍', weapon2:'格闘', implementation:'2026/04/30'}, icon: 'images/icon/マヌ＝ポヌマウ.jpg'},
{charaName:'マリア・テレサ',data:{element:'水', type:'バランスタイプ', race:'ドラフ', weapon1:'杖', weapon2:'剣', implementation:'2019/03/10'}, icon: 'images/icon/マリア・テレサ.jpg'},
{charaName:'マルキアレス',data:{element:'闇', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2017/01/20'}, icon: 'images/icon/マルキアレス.jpg'},
{charaName:'ミカエル',data:{element:'火', type:'攻撃タイプ', race:'星晶獣', weapon1:'剣', weapon2:'-', implementation:'2022/12/31'}, icon: 'images/icon/ミカエル.jpg'},
{charaName:'ミニゴブ',data:{element:'光', type:'特殊タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2024/12/31'}, icon: 'images/icon/ミニゴブ.jpg'},
{charaName:'ミランダ',data:{element:'火', type:'回復タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2021/05/31'}, icon: 'images/icon/ミランダ.jpg'},
{charaName:'ミリン',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'刀', weapon2:'-', implementation:'2024/05/31'}, icon: 'images/icon/ミリン.jpg'},
{charaName:'ムゲン',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'楽器', implementation:'2020/03/18'}, icon: 'images/icon/ムゲン.jpg'},
{charaName:'メイガス',data:{element:'闇', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2024/03/15'}, icon: 'images/icon/メイガス.jpg'},
{charaName:'メーテラ',data:{element:'風', type:'バランスタイプ', race:'エルーン', weapon1:'弓', weapon2:'-', implementation:'2014/06/30'}, icon: 'images/icon/メーテラ.jpg'},
{charaName:'メドゥーサ',data:{element:'土', type:'バランスタイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2019/04/30'}, icon: 'images/icon/メドゥーサ.jpg'},
{charaName:'メリッサベル',data:{element:'風', type:'攻撃タイプ', race:'ハーヴィン', weapon1:'剣', weapon2:'斧', implementation:'2016/11/18'}, icon: 'images/icon/メリッサベル.jpg'},
{charaName:'メルゥ',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'槍', weapon2:'斧', implementation:'2014/11/14'}, icon: 'images/icon/メルゥ.jpg'},
{charaName:'メレアガンス',data:{element:'土', type:'防御タイプ', race:'その他', weapon1:'格闘', weapon2:'-', implementation:'2025/01/17'}, icon: 'images/icon/メレアガンス.jpg'},
{charaName:'モニカ',data:{element:'風', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'刀', implementation:'2019/09/30'}, icon: 'images/icon/モニカ.jpg'},
{charaName:'ヤイア',data:{element:'土', type:'特殊タイプ', race:'ドラフ', weapon1:'剣', weapon2:'-', implementation:'2023/04/18'}, icon: 'images/icon/ヤイア.jpg'},
{charaName:'ヤチマ',data:{element:'水', type:'特殊タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2024/12/28'}, icon: 'images/icon/ヤチマ.jpg'},
{charaName:'ユイシス',data:{element:'風', type:'バランスタイプ', race:'エルーン', weapon1:'剣', weapon2:'刀', implementation:'2016/12/31'}, icon: 'images/icon/ユイシス.jpg'},
{charaName:'ユーステス',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'銃', weapon2:'-', implementation:'2015/12/31'}, icon: 'images/icon/ユーステス.jpg'},
{charaName:'ユーリ',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2024/01/31'}, icon: 'images/icon/ユーリ.jpg'},
{charaName:'ユエル',data:{element:'火', type:'バランスタイプ', race:'エルーン', weapon1:'刀', weapon2:'楽器', implementation:'2014/04/30'}, icon: 'images/icon/ユエル.jpg'},
{charaName:'ユグドラシル',data:{element:'土', type:'特殊タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2017/06/30'}, icon: 'images/icon/ユグドラシル.jpg'},
{charaName:'ユニ',data:{element:'光', type:'バランスタイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2022/03/19'}, icon: 'images/icon/ユニ.jpg'},
{charaName:'ユリウス',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'杖', implementation:'2018/11/15'}, icon: 'images/icon/ユリウス.jpg'},
{charaName:'ヨウ',data:{element:'光', type:'攻撃タイプ', race:'エルーン', weapon1:'格闘', weapon2:'刀', implementation:'2022/04/19'}, icon: 'images/icon/ヨウ.jpg'},
{charaName:'ヨダルラーハ',data:{element:'水', type:'攻撃タイプ', race:'ハーヴィン', weapon1:'剣', weapon2:'刀', implementation:'2015/11/19'}, icon: 'images/icon/ヨダルラーハ.jpg'},
{charaName:'ラインハルザ',data:{element:'火', type:'攻撃タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2020/04/30'}, icon: 'images/icon/ラインハルザ.jpg'},
{charaName:'ラヴィリタ',data:{element:'火', type:'バランスタイプ', race:'ハーヴィン', weapon1:'剣', weapon2:'銃', implementation:'2025/04/30'}, icon: 'images/icon/ラヴィリタ.jpg'},
{charaName:'ラガッツォ',data:{element:'火', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2023/08/31'}, icon: 'images/icon/ラガッツォ.jpg'},
{charaName:'ラカム',data:{element:'火', type:'特殊タイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2015/09/28'}, icon: 'images/icon/ラカム.jpg'},
{charaName:'ラグナ',data:{element:'土', type:'特殊タイプ', race:'ドラフ', weapon1:'槍', weapon2:'-', implementation:'2022/04/19'}, icon: 'images/icon/ラグナ.jpg'},
{charaName:'ラジエル',data:{element:'光', type:'バランスタイプ', race:'星晶獣', weapon1:'銃', weapon2:'杖', implementation:'2024/03/12'}, icon: 'images/icon/ラジエル.jpg'},
{charaName:'ラスティナ',data:{element:'土', type:'防御タイプ', race:'ドラフ', weapon1:'槍', weapon2:'銃', implementation:'2017/01/31'}, icon: 'images/icon/ラスティナ.jpg'},
{charaName:'ラファエル',data:{element:'風', type:'攻撃タイプ', race:'星晶獣', weapon1:'格闘', weapon2:'-', implementation:'2024/12/31'}, icon: 'images/icon/ラファエル.jpg'},
{charaName:'ラムレッダ',data:{element:'土', type:'特殊タイプ', race:'ドラフ', weapon1:'格闘', weapon2:'-', implementation:'2021/01/31'}, icon: 'images/icon/ラムレッダ.jpg'},
{charaName:'ラモラック',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2025/09/30'}, icon: 'images/icon/ラモラック.jpg'},
{charaName:'ランスロット',data:{element:'水', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'短剣', implementation:'2014/11/30'}, icon: 'images/icon/ランスロット.jpg'},
{charaName:'ランドル',data:{element:'風', type:'攻撃タイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2021/11/30'}, icon: 'images/icon/ランドル.jpg'},
{charaName:'リーシャ',data:{element:'風', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2016/10/31'}, icon: 'images/icon/リーシャ.jpg'},
{charaName:'リチャード',data:{element:'風', type:'特殊タイプ', race:'ヒューマン', weapon1:'銃', weapon2:'-', implementation:'2024/02/29'}, icon: 'images/icon/リチャード.jpg'},
{charaName:'リッチ',data:{element:'闇', type:'特殊タイプ', race:'星晶獣', weapon1:'杖', weapon2:'-', implementation:'2021/09/15'}, icon: 'images/icon/リッチ.jpg'},
{charaName:'リリィ',data:{element:'水', type:'回復タイプ', race:'その他', weapon1:'杖', weapon2:'-', implementation:'2014/03/31'}, icon: 'images/icon/リリィ.jpg'},
{charaName:'リルル',data:{element:'水', type:'特殊タイプ', race:'ハーヴィン', weapon1:'楽器', weapon2:'-', implementation:'2015/12/02'}, icon: 'images/icon/リルル.jpg'},
{charaName:'ル・オー',data:{element:'光', type:'回復タイプ', race:'エルーン', weapon1:'格闘', weapon2:'杖', implementation:'2023/02/28'}, icon: 'images/icon/ル・オー.jpg'},
{charaName:'ルシウス',data:{element:'闇', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'刀', implementation:'2019/12/31'}, icon: 'images/icon/ルシウス.jpg'},
{charaName:'ルシオ',data:{element:'光', type:'バランスタイプ', race:'その他', weapon1:'刀', weapon2:'剣', implementation:'2016/12/29'}, icon: 'images/icon/ルシオ.jpg'},
{charaName:'ルナール',data:{element:'闇', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'-', implementation:'2018/05/31'}, icon: 'images/icon/ルナール.jpg'},
{charaName:'ルリア',data:{element:'※', type:'バランスタイプ', race:'ヒューマン', weapon1:'格闘', weapon2:'-', implementation:'2026/03/04'}, icon: 'images/icon/ルリア.jpg'},
{charaName:'ルロウホロウ',data:{element:'風', type:'特殊タイプ', race:'ハーヴィン', weapon1:'銃', weapon2:'-', implementation:'2026/01/16'}, icon: 'images/icon/ルロウホロウ.jpg'},
{charaName:'レ・フィーエ',data:{element:'光', type:'回復タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2014/03/10'}, icon: 'images/icon/レ・フィーエ.jpg'},
{charaName:'レイ',data:{element:'闇', type:'特殊タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'刀', implementation:'2020/02/29'}, icon: 'images/icon/レイ.jpg'},
{charaName:'レオナ',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'-', implementation:'2020/06/30'}, icon: 'images/icon/レオナ.jpg'},
{charaName:'レディ・グレイ',data:{element:'闇', type:'特殊タイプ', race:'ヒューマン', weapon1:'槍', weapon2:'格闘', implementation:'2014/03/10'}, icon: 'images/icon/レディ・グレイ.jpg'},
{charaName:'レナ',data:{element:'風', type:'回復タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'-', implementation:'2014/10/31'}, icon: 'images/icon/レナ.jpg'},
{charaName:'ローアイン',data:{element:'闇', type:'特殊タイプ', race:'エルーン', weapon1:'短剣', weapon2:'剣', implementation:'2023/12/28'}, icon: 'images/icon/ローアイン.jpg'},
{charaName:'ロザミア',data:{element:'光', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'-', implementation:'2016/06/30'}, icon: 'images/icon/ロザミア.jpg'},
{charaName:'ロゼッタ',data:{element:'風', type:'特殊タイプ', race:'星晶獣', weapon1:'短剣', weapon2:'-', implementation:'2015/12/29'}, icon: 'images/icon/ロゼッタ.jpg'},
{charaName:'ロベリア',data:{element:'土', type:'攻撃タイプ', race:'ヒューマン', weapon1:'杖', weapon2:'格闘', implementation:'2019/03/10'}, icon: 'images/icon/ロベリア.jpg'},
{charaName:'ロベルティナ',data:{element:'光', type:'特殊タイプ', race:'ハーヴィン', weapon1:'楽器', weapon2:'-', implementation:'2024/01/31'}, icon: 'images/icon/ロベルティナ.jpg'},
{charaName:'ロボミ',data:{element:'光', type:'攻撃タイプ', race:'その他', weapon1:'銃', weapon2:'-', implementation:'2018/03/31'}, icon: 'images/icon/ロボミ.jpg'},
{charaName:'ロミオ',data:{element:'水', type:'バランスタイプ', race:'ヒューマン', weapon1:'剣', weapon2:'杖', implementation:'2016/10/14'}, icon: 'images/icon/ロミオ.jpg'},
{charaName:'ワムデュス',data:{element:'水', type:'防御タイプ', race:'ハーヴィン', weapon1:'杖', weapon2:'斧', implementation:'2022/08/17'}, icon: 'images/icon/ワムデュス.jpg'},
{charaName:'黄金の騎士',data:{element:'土', type:'攻撃タイプ', race:'エルーン', weapon1:'剣', weapon2:'-', implementation:'2020/09/16'}, icon: 'images/icon/黄金の騎士.jpg'},
{charaName:'黒騎士',data:{element:'闇', type:'攻撃タイプ', race:'ヒューマン', weapon1:'剣', weapon2:'銃', implementation:'2016/04/28'}, icon: 'images/icon/黒騎士.jpg'},
];
const modes = Object.freeze({ daily: 'デイリー', endless: 'エンドレス' });
const maxTries = 5;
const same = 'same';
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
    // Selectの初期化
    pulldown = new TomSelect('#selectGuess', {
        create: false,
        maxItems: 1,
        maxOptions: allQuizData.length,
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
    setCharacterToSelect(allQuizData);

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
            target = allQuizData.find((elm) => elm.charaName === lastTarget.charaName);
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
        target = allQuizData.find((elm) => elm.charaName === lastTarget.charaName);
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
    $('#modeNameArea').html('デイリーモード');
    $('#modeWinStreakArea').html(`連続正解日数：${getLocalStorage(keyDailyWinStreak) || 0}`)
}

function setModeInfoAreaForEndless() {
    $('#modeNameArea').html(`エンドレスモード<br>現在のスコア：${corrects}`);
    $('#modeWinStreakArea').html(`ハイスコア：${getLocalStorage(keyEndlessHighScore) || 0}`)
}

// 解答を設定する
function setTarget(seed, studentsList = allQuizData) {
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
    const guessed = allQuizData.find(s => s.charaName === guessedName);

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
    return {
        isHit: judgeSameOrWrong(target.charaName, guessed.charaName),
        isSameElement: judgeSameOrWrong(target.data.element, guessed.data.element),
        isSameType: judgeSameOrWrong(target.data.type, guessed.data.type),
        isSameRace: judgeSameOrWrong(target.data.race, guessed.data.race),
        isSameFirstWeapon: judgeSameOrWrong(target.data.weapon1, guessed.data.weapon1),
        isSameSecondWeapon: judgeSameOrWrong(target.data.weapon2, guessed.data.weapon2),
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
    $newRow.append(createCell(guessed.data.element, judgeObj.isSameElement, ['elementCol']));
    $newRow.append(createCell(guessed.data.type, judgeObj.isSameType, ['typeCol']));
    $newRow.append(createCell(guessed.data.race, judgeObj.isSameRace, ['raceCol']));
    $newRow.append(createCell(guessed.data.weapon1, judgeObj.isSameFirstWeapon, ['firstWeaponCol']));
    $newRow.append(createCell(guessed.data.weapon2, judgeObj.isSameSecondWeapon, ['secondWeaponCol']));
    const implDateContent = guessed.data.implementation +
        (judgeObj.isSameImpl === same ? '' : '<br>' + judgeObj.isSameImpl);
    $newRow.append(createCell(implDateContent, judgeObj.isSameImpl === same ? same : wrong, ['implDateCol']));
    
    // グリッドの一番上の行に追加
    $('#checkGridBody').prepend($newRow);

    // セルのアニメーション設定
    $.each($($newRow).children(), function (i, val) {
        setTimeout(function () {
            $(val).children().toggleClass('flipped');
        }, 10);
    });
}




// ゲーム終了時の処理
function endGame(isHit, loadFlg = false) {
    const result = `${isHit === same ? '正解！' : '不正解…。'}答えは「${target.charaName}」でした。`;

    $('#guessArea').addClass('fold');
    $('#infoArea').addClass(isHit);
    $('#infoArea').append($('<div>').attr('id', 'infoButtonArea'));
    $('#triesArea').html($('<div>').html(result));


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
    let shareStr = '今日の #GBF-Wordle は' + String(judges.length) + '回解答して';
    shareStr += (isHit === same ? '正解しました！' : '不正解でした……。') + '\n\n';

    let i;
    for (i = judges.length - 1; i >= 0; i--) {
        shareStr += judges[i].isHit === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameElement === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameType === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameRace === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameFirstWeapon === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameSecondWeapon === same ? '🟩' : '🟥';
        shareStr += judges[i].isSameImpl === same ? '🟩' : '🟥';
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
    console.log(text);
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