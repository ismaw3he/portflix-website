const nameInput= document.getElementById("name");
const numberInput= document.getElementById("phone");
const messageInput= document.getElementById("message");


    document.getElementById("submit-btn").addEventListener('click',(event)=>{
        console.log("clicked");
        // disableScroll()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        nameInput.value = "";
        numberInput.value = "";
        messageInput.value = "";
        let message = {
            name: nameInput.value,
            number: numberInput.value,
            message: messageInput.value
        };
        emailjs.send("gmail", "portflix", message,'user_cQXScjsh5GkmXVxqDhC9F')
        .then(function(response) {
            console.log("sent");
            console.log(response);
            const success = document.querySelector(".message-alert-success");
            success.classList.add("alert-active");
            setTimeout(()=>{
                success.classList.remove("alert-active");
            }, 4000)
         }, function(error) {
             console.log("error");
             console.log(error);

            const errorMessage = document.querySelector(".message-alert-error");
            errorMessage.classList.add("alert-active");
            setTimeout(()=>{
                errorMessage.classList.remove("alert-active");
            }, 4000)
         });
        //  loaderContainer.classList.remove("hidden");

    });
