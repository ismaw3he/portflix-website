const nameInput= document.getElementById("name");
const numberInput= document.getElementById("phone");
const messageInput= document.getElementById("message");

console.log(nameInput);
window.onload = function(){
    document.getElementById("submit-btn").addEventListener('click',(event)=>{

        let message = {
            name: nameInput.value,
            number: numberInput.value,
            message: messageInput.value
        };
        emailjs.send("Mail.ru", "Portflix", message,'user_XMVhmd1KfbMT7hwgJR49R')
        .then(function(response) {
            console.log("sent");
            console.log(response);
            // loaderContainer.classList.add("hidden");
            // const success = document.querySelector(".message-alert-success");
            // success.classList.add("alert-active");
            // setTimeout(()=>{
            //     success.classList.remove("alert-active");
            // }, 4000)
         }, function(error) {
             console.log("error");
             console.log(error);
            // loaderContainer.classList.add("hidden");
            // const errorMessage = document.querySelector(".message-alert-error");
            // errorMessage.classList.add("alert-active");
            // setTimeout(()=>{
            //     errorMessage.classList.remove("alert-active");
            // }, 4000)
         });
        //  loaderContainer.classList.remove("hidden");
         nameInput.value = "";
         numberInput.value = "";
         messageInput.value = "";
    });
}
