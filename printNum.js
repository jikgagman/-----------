const tablet = document.querySelector("#table");

function refresh(){
    let totalNum = tablet.rows.length - 1;

    total.innerText += ' ' + totalNum;
}


let btnAdd1 = document.querySelector('.add_new');

btnAdd1.addEventListener('click', refresh());