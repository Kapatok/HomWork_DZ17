// class User {
//     static className = 'User';
//     constructor(rate) {
//         this.rate = rate;
//     }

// }


// #salary = 42.8;


// get salary() {

//     return this.#salary

// }

//=============================number1=================\\

// class Worker {

//     #salary = 1344;

//     get salary() {
//         return this.#salary
//     }

//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }


//     getSalary() {
        
//         return this.rate * this.days;
//     }



// };
// const work = new Worker('Sergey', 'Kopotkov', 28, 48);
// console.log(work);
// console.log(work.getSalary())


//==========================number2========================\\

// class Worker {

//     #salary = 1344;
//     #name= 'Sergey';
//     #surname ='Kopotkov';
//     #rate = 48;
//     #days =28;

//     // get name(){
//     //     return this.#name
//     // } 
//     // get surname(){
//     //     return this.#surname
//     // }
//     // get rate(){
//     //     return this.rate
//     // }
//     // get days(){
//     //     return this.days
//     // }

//     get salary() {
//         return this.#salary
//     }

//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }


//     getSalary() {
//         return this.rate * this.days;
//     }



// };
// const work = new Worker('Sergey', 'Kopotkov', 28, 48);
// console.log(work);
// console.log(work.getSalary());

//=====================================number2=3 ========================//
// class Worker {

//     #salary = 1344;
//     #name= 'Sergey';
//     #surname ='Kopotkov';
//     #rate = 48;
//     #days =28;


//     get name() { 
//         return this.#name; 
//     }

//     get surname() { 
//         return this.#surname; 
//     }

//     get rate() { 
//         return this.#rate; 
//     }

//     set rate(value) { 
//         this.#rate = value; 
//     }

//     get days() { 
//         return this.#days; 
//     }

//     set days(value) { 
//         this.#days = value; 
//     }
       
//     constructor(name, surname, rate, days) {
//         // this.name = name;
//         // this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }


//     getSalary() {
//         return this.rate * this.days;
//     }



// };
// const work = new Worker('Sergey', 'Kopotkov', 28, 48);
// console.log(work);
// console.log(work.getSalary());
// console.log(work.name);
// console.log(work.surname);
// console.log(work.days);
// console.log(work.rate);
//===========================================4============================//


class Parallelepiped {
    constructor(length){
        this.length=length;
    }
     
}


class Rectangle extends Parallelepiped{
    constructor(width,height,length){
      super(length);
      this.width=width;
      this.height=height;
    }
    getArea(){
       return this.width*this.height*this.length
    }
    getAre(){
        return this.width*this.height
    }
};
const obd0 = new Rectangle(13,24,58);
console.log(obd0.getArea());
const obd1 = new Rectangle(13,24);
console.log(obd1.getAre());
