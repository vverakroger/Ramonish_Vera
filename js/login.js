//const users = '{ "students" : [' +
//'{ "email":"mail@gmail.com", "password":"abc123" },' +
//'{ "email":"mail2@gmail.com", "password":"123abc" } ]}';
//const uss = JSON.parse(users);

function getDataDB() {
    fetch("db/db.json")
      .then(res => res.json())
      .then(data => console.log(data));
  }

let uss = getDataDB();

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