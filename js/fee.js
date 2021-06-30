class Fee{
    constructor(aDuration, aPrice, aDiscount) {
        this.Duration = aDuration;
        this.Price = aPrice;
        this.Discount = aDiscount;
    }
}


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