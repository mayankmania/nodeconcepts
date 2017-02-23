'use strict';
var a = 3;

function Employee() {
    this.Id = 1;
    this.display = function () {
        return test;
    }
}

Employee.prototype.getId = function() {
    return this.Id; 
};

function HR() {
    Employee.call(this);
    this.Name = "Mayank";
}

function Factory(child, parent) {
    Employee.call(this);
    child.prototype = parent.prototype;
    return new child();
}


var emp = new Factory(HR, Employee);
console.log(emp.getId());

class Developer extends Employee {
    constructor() {
        super();
    }
    getMyId()
    {
        console.log(this.Id);
    }
}

var d = new Developer();
d.getMyId();
d.getId();

