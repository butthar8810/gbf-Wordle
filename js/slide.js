document.addEventListener('DOMContentLoaded', function() {
    const ruleBtn = document.querySelector('.rule-btn');
    const ruleSlideMenu = document.querySelector('.rule-slide-menu');

    ruleBtn.addEventListener("click", function() {        
        this.classList.toggle('active');
        ruleSlideMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        // menuTub, subMenu以外の要素にマウスオーバーしたら
        if (!ruleBtn.contains(e.target) && !ruleSlideMenu.contains(e.target)) {
            ruleBtn.classList.remove('active');
            ruleSlideMenu.classList.remove('active');
        }
    });
});