class Student{
    constructor(anId, aPassword) {
        this.Id = anId;
        this.Password = aPassword;
    }
}

const student1 = new Student ("mail@gmail.com","abc123");

function isUservalid() {
    var userId = prompt("Username: ");
    var userPass = prompt("Password: ");
    if (userId == student1.Id && userPass == student1.Password) {
        document.getElementById("nav1_LoginBtt").href="alumns.html";
    }else{
        alert("Your username or password are incorrect!!");
    }
  }
