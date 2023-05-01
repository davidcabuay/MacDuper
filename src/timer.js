

class Timer{
    constructor(time){
        this.time = time
    }

    showTimeRemaining(){
        const remain = this.time
        const t =  setInterval(function(){
            document.getElementById("timer").innerHTML = remain;

            if (remain < 0){
                clearInterval(t);
                document.getElementById("timer").innerHTML = "YOU EXPLODED INTO pieces!!"
            }
        }, 10000)
    }
}

module.exports = Timer;