document.addEventListener('DOMContentLoaded', function(){

    var full_name = document.getElementById('full_name');
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var birthdate = document.getElementById("birthdate");
    var gender = document.getElementById("gender");
    var form = document.getElementById('right_div');

    if (form) {
        // document.querySelector('.submit').addEventListener('click', function() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // var selectedGender = gender.value.toLowerCase();
            // if (selectedGender === "male".toLowerCase()) {
            //     alert("correct");
            // } else {
            //     alert("incorrect");
            // }
            
            if (
                full_name.value.trim().toLowerCase() === "pritam singh".toLowerCase() &&
                email.value.trim().toLowerCase() === "pritamsingh9119@gmail.com".toLowerCase() && 
                password.value.trim().toLowerCase() === "admin@123".toLowerCase() && 
                birthdate.value.trim().toLowerCase() === "1987-05-12".toLowerCase() && 
                gender.value.trim().toLowerCase() === "male".toLowerCase()
            ) {
                alert("All the details matched");
            } else {
                alert("Invalid entries");
            }
        });

        // document.querySelector('.clear').addEventListener('click', function() {
        form.addEventListener('reset', function(event){
            document.getElementById('full_name').value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("birthdate").value="";
            document.getElementById("gender").value="";
        }
    )
    

    }else{
        alert("Form elements not found");
    }

});

