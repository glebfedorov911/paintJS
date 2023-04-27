var list = ['black', '20px'];
var clr = document.getElementById('clr');
var sz = document.getElementById('size');
var sh = document.getElementById('hide');
var memory = new Array();

function paint(e) {
    let a = document.createElement('div');
    if (list[1] === 'px') {
        console.log(memory)
        list[1] = `${memory[0]}px`;
    }
    if (e.type==='mousemove' && e.which===1 || e.type==='mousedown' && e.which===1) {
        a.classList.add('rect');
        a.style.backgroundColor = list[0];
        a.style.width = list[1];
        a.style.height = list[1];
        a.style.top = `${parseInt(e.clientY)}px`;
        a.style.left = `${parseInt(e.clientX)}px`;
        document.body.append(a);
    } else if (e.type==='touchmove' && e.which===0) {
        a.classList.add('rect');
        a.style.backgroundColor = list[0];
        a.style.width = list[1];
        a.style.height = list[1];
        a.style.top = `${parseInt(e.touches[0].pageY)}px`;
        a.style.left = `${parseInt(e.touches[0].pageX)}px`;
        document.body.append(a);
    } else if (e.type==='click') {
        list[0] = clr.value;
        list[1] = `${sz.value}px`;
        memory[0] = sz.value;
    }
}

function del(e) {
    let r = document.querySelectorAll('.rect');
    for(let i of r) {
        i.remove();
    }
    clr.value = 'black';
    list[0] = 'black';
    list[1] = '20px'
    
}

var flag = 0;

function hide_show(e) {
    if (flag%2 == 0) {
        let mega = document.getElementById('mega');
        mega.style.display = 'none';
        console.log(mega);
    } else {
        let mega = document.getElementById('mega');
        mega.style.display = 'block';
        console.log(mega);
    }
    flag += 1;
}

let btn = document.getElementById('btn');
let btn_yes = document.getElementById('yes');

let hide = document.getElementById('hide');

document.addEventListener('mousemove', paint);
document.addEventListener("touchmove", paint);
btn.addEventListener('click', del);
btn_yes.addEventListener('click', paint);
document.addEventListener("mousedown", paint);

hide.addEventListener('click', hide_show);