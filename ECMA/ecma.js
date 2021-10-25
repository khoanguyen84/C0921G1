// function Student(name, email, age){
//     this.name = name,
//     this.email = email,
//     this.age = age,
//     this.greeting = function(){
//         return `${this.name}, ${this.email}, ${this.age}`
//     }
// }

// let han = new Student("Han", "han@gmail.com" ,18);

class Human{
    constructor(name, email, age){
        this.name = name;
        if(age < 18 || age > 60){
            throw `invalid age`;
        }
        this.age = age;
        this.email = email;
        
    }
    // greeting(){
    //     return `${this.name}, ${this.email}, ${this.age}`;
    // }
    //arrow function
    greeting(){
        return `${this.name}, ${this.email}, ${this.age}`;
    }
    
    static slogen(){
        return 'still breath still live';
    }
}

class Student extends Human{
    constructor(name, email, age, gender){
        super(name, email, age),
        this.gender = gender
    }
    // introduction(){
    //     return `${this.name}, ${this.email}, ${this.age}, ${this.gender}`
    // }
    greeting(){
        return `${super.greeting()}, ${this.gender}`;
    }
}

class Staff extends Human{
    constructor(name, email, age, salary){
        super(name, email, age),
        this.salary = salary
    }
    // introduction(){
    //     return `${this.name}, ${this.email}, ${this.age}, ${this.salary}`
    // }
    greeting(){
        return `My name is ${this.name}, salary: ${this.salary}`;
    }
}

//han, khoa: object, instence
let han = new Student("Hân", "han@gmail.com",17, "male");
let khoa = new Staff("Khoa", "khoa@gmail.com", 18, 5000);
// console.log(han.greeting());
// console.log(khoa.greeting());
console.log(Human.slogen());

