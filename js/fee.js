class Fee{
    constructor(anDuration, aPrice, aDiscount) {
        this.Id = anId;
        this.Password = aPassword;
    }
}

const student1 = new Student ("mail@gmail.com","abc123");

function classesCost() {
    var userClasses = prompt("Enter how many classes per week you want: ");
    var userHours = prompt("Enter how many hours per class you want: ");
    if (isNaN(userClasses) || isNaN(userHours)) {
        alert("Not a number! Try again!");
    }else{
        var count = userClasses*userHours*(425);
        alert("Total Cost: " + count);
    }
  }