//const users = JSON.stringify({ "students" : 
//[
//   { "email":"mail@gmail.com", "password":"abc123" },
//   { "email":"mail2@gmail.com", "password":"123abc" } 
//]
//});

fetch("db/db.json")
    .then(res => res.json())
    .then(data => localStorage.setItem('users', JSON.stringify(data)));

var uss = JSON.parse(localStorage.getItem('users'));
console.log(uss);
//const uss = JSON.parse(users);

function isUservalid() {
    var userId = document.getElementById("un").value;
    var userPass = document.getElementById("pw").value;
    if (userId == uss.students[0].email && userPass == uss.students[0].password) {
        sessionStorage.setItem('email', userId);
        sessionStorage.setItem('password', userPass);
        window.open('alumns.html','_self');
    }else{
        document.getElementById("msg").innerHTML ="User Name or Password incorrect!";
    }
  }

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}