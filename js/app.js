

setInterval(function(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    document.querySelector("#hrs").innerHTML= hrs;
    document.querySelector("#min"). innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

}, 1000)