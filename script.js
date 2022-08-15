'use strict';

//Start 9 min app

let button = document.querySelector('#finish');
let q1 = document.querySelector('#q1');         //Здесь тоже можно поставить .value, но только в случае если эта переменная будет внутри функции
let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
let q4 = document.querySelector('#q4');
let q5 = document.querySelector('#q5');
let q6 = document.querySelector('#q6');


button.addEventListener('click',checkTest);

let result = 0;     //Счетчик количества правильных ответов
let iteration = 0;      //Счетчик количества кликов на кнопку отправить результат

function checkTest() {
    iteration++;

    if(iteration > 1) {        //Если было больше одного клика, то счетчик обновляется и не суммирует значения
        result = 0;
       
    }
    
    let qv1 = q1.value;     //value мы не сможем получить из глобальной области видимости
        if(qv1 == 4) {
            result ++;
        }

        let qv2 = q2.value;     
        if(qv2 == 6) {
            result ++;
        }

        let qv3 = q3.value;     
        if(qv3 == 22) {
            result ++;
        }

        let qv4 = q4.value;     
        if(qv4 == 10) {
            result ++;
        }

        let qv5 = q5.value;    
        if(qv5 == 24) {
            result ++;
        }

        let qv6 = q6.value;     
        if(qv6 == 26) {
            result ++;
        }


    div.innerHTML = `Итого правильных ответов: ${result}`;      //Выводим ответ в отдельный блок
}

const div = document.createElement('div');      //Создаем элемент
div.classList.add('result');        //Создаем класс для этого элемента
document.body.append(div);      //Помещаем элемент в конец элемента body

