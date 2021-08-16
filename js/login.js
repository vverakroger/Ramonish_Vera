//Fetch users data from json
fetch("db/users.json")
    .then(res => res.json())
    .then(data => localStorage.setItem('users', JSON.stringify(data)));

//Save users data on local storage
const uss = JSON.parse(localStorage.getItem('users'));

//Validate login credentials
function isUservalid() {
    var userId = document.getElementById("un").value;
    var userPass = document.getElementById("pw").value;
    userValid = false;
    for (let i = 0; i < uss.students.length; i++) {
        console.log('a');
        if (userId == uss.students[i].email && userPass == uss.students[i].password) {
            userValid = true;
            console.log(uss.students[i].email);
        }
    }
    if (userValid){
        sessionStorage.setItem('email', userId);
        sessionStorage.setItem('password', userPass);
        window.open('alumns.html','_self');
    }else{
        document.getElementById("msg").innerHTML ="User Name or Password incorrect!";
    }
}

//Button Login
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//Button Close
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}