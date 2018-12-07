let text = "ITLISASGTFIACQUARTERBSTWENTYFIVEXHALFBTENFTOPASTERUNINEONESIXTHREEFOURFIVETWOEIGHTELEVENSEVENTWELVETENSEOCLOCK";

let runTime = () => {
    document.querySelector('.clock').innerHTML = "";
    
    let time = [];
    let hour = [];
    let h = new Date().getHours();
        if (h>12) {
            h = h - 12;
        }
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    time.push("IT", "IS");


    /* FUNCTION FOR HOURS */
    let numberToWord = (element) => {
        if (element < 20) {
            switch(element) {          
                case 1:
                    hour.push("ONE");
                break;
                case 2:
                    hour.push("TWO");          
                break;
                case 3:
                    hour.push("THREE");
                break;
                case 4:
                    hour.push("FOUR");          
                break;
                case 5:
                    hour.push("FIVE");
                break;
                case 6:
                    hour.push("SIX");          
                break;
                case 7:
                    hour.push("SEVEN");          
                break;
                case 8:
                    hour.push("EIGHT");
                break;
                case 9:
                    hour.push("NINE");          
                break;           
                case 10:
                    hour.push("TEN");
                break;
                case 11:
                    hour.push("ELEVEN");          
                break;
                case 12:
                    hour.push("TWELVE");
                break;        
                default:
                    console.log("neaprasytas");

            }
        }
        
    }

    /* FUNCTION FOR MINUTES */
    let minToWord = (x) =>{
        if (x < 3) {
        }else if (x < 8){
            time.push("FIVE")
        } else if (x < 13){
            time.push("TEN")
        } else if (x < 18){
            time.push("QUARTER");
        }   else if (x < 23){
            time.push("TWENTY");
        } else if (x < 28){
            time.push("TWENTYFIVE");
        } else if (x < 33){
            time.push("HALF");
        } else if (x < 58){
            console.log('logas'+ (60-m));
            minToWord((60-m));
        }   
    }

    minToWord(m);

    if (m < 3 || 57 < m){
        time.push("OCLOCK");
    } else if (m <= 30 ){
        time.push("PAST");
    } else {
        time.push("TO");
        h++;
    };


    numberToWord(h);

    // if (m < 3 || 57 < m){
    //     time.push("OCLOCK");
    // }


    /* DRAW CLOCK */
    for (let i = 0; i < text.length; i++){
        document.querySelector('.clock').innerHTML += `<div class="l">${text[i]}</div>`;
    }

    /* ENLIGHT HOUR LETTERS */
    let index = text.lastIndexOf(hour[0]); // last letters
    for (let i = 0; i < hour[0].length; i++){
        document.querySelectorAll('.l')[index].style.color = "#fff";
        document.querySelectorAll('.l')[index].style.textShadow = "0px 0px 10px #fff";
        index++;
    }
    /* ENLIGHT OTHER LETTERS */
    time.forEach(element => {
        let index = text.search(element);
        for (let i = 0; i < element.length; i++){
            document.querySelectorAll('.l')[index].style.color = "#fff";
            document.querySelectorAll('.l')[index].style.textShadow = "0px 0px 10px #fff";
            index++;
        }
    });
}

let inter = setInterval(runTime, 1000);
