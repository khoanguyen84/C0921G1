let dat = {};
dat.fullName = "Đạt";
dat.gender = "male";

dat.greeting = function(){
    return `Iam ${this.fullName} and Iam ${this.gender}`;
}

let phuong = {
    fullName : "Phương",
    gender : "male",
    greeting : function(){
        return `Iam ${this.fullName} and Iam ${this.gender}`;
    }
}

let hiep = {
    fullName : "Hiệp",
    gender : "male",
    greeting : function(){
        return `Iam ${this.fullName} and Iam ${this.gender}`;
    }
}


function Student(fullName, gender){
    this.fullName = fullName,
    this.gender = gender,
    this.greeting =  function(){
        return `Iam ${this.fullName} and Iam ${this.gender}`;
    }
}

//getter setter


function Person(){
    this.setFN = function(fn){
        this.fullName = fn;
    }
    this.getFN = function(){
        return this.fullName.toUpperCase();
    }
    this.setPhone = function(phone){
        this.phone = phone;
    }
    this.getPhone = function(){
        return `${this.phone.substring(0, this.phone.length-3)}XXX`;
    }
}

let han = new Student("Hân", "male");
let thuan = new Student("thuận", "female");

let khoa = new Person();
khoa.setFN("khoa");
khoa.setPhone('0935216417');

console.log(khoa.getPhone());
console.log(khoa.phone);
// console.log(han.greeting());
// console.log(thuan.greeting());
// console.log(phuong["fullName"]);

function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        return Math.PI*this.radius*this.radius;
    }
    this.getPrimeter = function(){
        return 2*Math.PI*this.radius;
    }
}

let c1 = new Circle(5);
console.log(`Area: ${c1.getArea()}, Primeter: ${c1.getPrimeter()}`);
let c2 = new Circle(15);
console.log(`Area: ${c2.getArea()}, Primeter: ${c2.getPrimeter()}`);
let c3 = new Circle(25);
console.log(`Area: ${c3.getArea()}, Primeter: ${c3.getPrimeter()}`);
