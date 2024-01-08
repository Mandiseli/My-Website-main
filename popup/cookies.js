const cookieBox = document.querySelector("cookie.wrapper");
const buttons = document.querySelectorAll("cookie.button");

const executeCodes = () =>{
    //if cookie contains Mandiseli it will be returned and below of this code will not run
    if(document.cookie.includes("Mandiseli")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            cookieBox.classList.remove("show");

            //if button has accceptBtn id
            if (button.id == "acceptBtn"){
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= Mandiseli; max-age=" + 60 * 60 * 24 * 30;

            }

        })
    })
      
    }


//ExecuteCodes function will be called on webpage load
window.addEventListener("load", executeCodes);