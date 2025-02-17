document.addEventListener("DOMContentLoaded", function(){

    let count = 0;

    const but = document.getElementById("but");
    const countinc = document.getElementById("countinc");

    but.addEventListener("click", function(){
        count +=1;
        countinc.textContent = count;
        // .textContent - для изменения текстового содержания элемента

        if(count >= 15){
            but.disabled = true;
            // .disabled = true - блокировка кнопки
        }
        
    });

    let co = 0;
    const timer = document.getElementById("timer");

    // setInterval - позволяет вызвать функцию регулярно, повторяя вызов через опр интервал времени
    const interval = setInterval(function(){
        co +=1
        timer.textContent = co;

        if(co >= 10){
            clearInterval(interval);
        }

    }, 1000);

    let ct = 0;
    let intervalic;

    const ourtext = document.getElementById("tm");
    const sb = document.getElementById("sb");
    const st = document.getElementById("st");
    const re = document.getElementById("re");

    sb.addEventListener("click", function(){
        if(!intervalic){ // проверяем, не запущен ли таймер
            intervalic = setInterval(function(){
                ct++   // увеличиваем счетсчик 
                ourtext.textContent = ct;
            },1000)
        }
    });

    st.addEventListener("click", function(){
        // Отменяет регулярное выполнение функции, установленное вызовом setInterval()
        clearInterval(intervalic);
        intervalic = null;
    })

    re.addEventListener("click", function(){
        clearInterval(intervalic);
        intervalic = null;

        ct = 0;
        ourtext.textContent = ct;
    })


})