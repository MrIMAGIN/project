let flag1 = true;
let flag2 = false;
plusSlide = () => {
    let text = document.getElementById('slider-text');
    if (flag1) {
        text.firstChild.data = "В скором времени все участники финансовой сферы будут обязаны проводить стресс-тестирование";
        text.style.padding = '174.5px 0 0 0'
        let block = document.getElementById('slider')
        block.style.backgroundImage = "url(i/25.jpg)";
        flag1 = false;
        flag2 = true;
    }else {
        text.firstChild.data = "Полный комплекс услуг в соответствии с требованиями финансовых регуляторов";
        text.style.padding = '230px 0 0 0'
        let block = document.getElementById('slider')
        block.style.backgroundImage = "url(i/1.png)";
        flag1 = true;
        flag2 = false;
    }
    
}

minusSlide = () =>{
    let text = document.getElementById('slider-text');
    if (flag2) {
        text.firstChild.data = "Полный комплекс услуг в соответствии с требованиями финансовых регуляторов";
        text.style.padding = '230px 0 0 0'
        let block = document.getElementById('slider')
        block.style.backgroundImage = "url(i/1.png)";
        flag2 = false;
        flag1 = true;
    }else {
        text.firstChild.data = "В скором времени все участники финансовой сферы будут обязаны проводить стресс-тестирование";
        text.style.padding = '174.5px 0 0 0'
        let block = document.getElementById('slider')
        block.style.backgroundImage = "url(i/25.jpg)";
        flag2 = true;
        flag1 = false;
    }
    
}