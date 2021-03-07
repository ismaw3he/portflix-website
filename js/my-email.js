const nameInput= document.getElementById("name");
const numberInput= document.getElementById("phone");
const messageInput= document.getElementById("message");

window.onload = function(){
    document.getElementById("submit-btn").addEventListener('click',(event)=>{

        let message = {
            name: nameInput.value,
            number: numberInput.value,
            message: messageInput.value
        };
        emailjs.send("gmail", "portflix", message,'user_cQXScjsh5GkmXVxqDhC9F')
        .then(function(response) {
            // loaderContainer.classList.add("hidden");
            // const success = document.querySelector(".message-alert-success");
            // success.classList.add("alert-active");
            // setTimeout(()=>{
            //     success.classList.remove("alert-active");
            // }, 4000)
            console.log(response);
         }, function(error) {
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