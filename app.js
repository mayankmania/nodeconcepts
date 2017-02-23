var employee = {
    name: "Mayank Singh",
    greet: function() {
        console.log(`Heelo ${this.name}`);
    }
}

employee.greet();
//borrowing function
//Accepts comma separated argument
employee.greet.call({ name: "Max" });

//It accepts arguments as array
employee.greet.apply({ name: "Max" });