
var second = 0
var minute = 0
var hour = 0
var interval

function start(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    second = 0
    minute = 0
    document.getElementById('watch').innerText = '00:00:00'
}

function twoDigits(digit){
    if(digit < 10){
        return ('0' + digit)
    } else{
        return (digit)
    }
}

function watch(){
    second ++                              // ou second = second + 1 
    if(second == 60){
        minute ++                          // ou minute = minute + 1
        second = 0

        if (minute == 60){                 // Se bater 60 minutos, então 
            minute = 0                      // os minutos zeram e
            hour ++                         // acrescenta +1 hora
        }
    }
    // função do JS: pegue o document pelo elemento id ||| innerText: mudar o texto interno
    document.getElementById('watch').innerText = twoDigits(hour) + ":" + twoDigits(minute) + ":" + twoDigits(second)      
    
}