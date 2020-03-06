//Classes//
/*

alert("Lecture is linked!");

console.log("Lecture is linked!");

let student3 = {
    name: "Takeallah",
    cohort: 4,
    averageGrade: 3,
    attendance: "80%",
}
console.log(`Name: ${student3.name}\ncohort: ${student3.cohort}\naverageGrade: ${student3.averageGrade}\nattendance: ${student3.attendance}`);

student3.averageGrade = 10;

console.log(`averageGrade: ${student3.averageGrade}`);

*/

//Classess- Work similar to function; creates objects using whatever values you pass in//

/*Always has a constructor (where we pass in properties), 
"this" (assigns it to the object), and methods (a function inside of a class ie. "Print properties")

*/

//Example 

//console.log(`Name: ${student6.name}`);

class Student {
    constructor(name, cohort, averageGrade) {
        this.name = name;
        this.cohort = cohort;
        this.averageGrade = averageGrade;
    }

    printProperties(){
        console.log(`Name: ${this.name}\nCohort: ${this.cohort}\naverageGrade ${this.averageGrade}`)
    }

    changeAverageGrade(newGrade){
        this.averageGrade = newGrade;
    }

    }

    let student6 = new Student("Thomas", 2, 4);
    console.log(`Name: ${student6.name}`);
    console.log(`Cohort: ${student6.cohort}`);
    console.log(`averageGrade: ${student6.averageGrade}`);
student6.printProperties();


//Method that takes parameter//

//changeAverageGrade(newGrade){
   // this.averageGrade = newGrade;}//

/*    student6.printProperties();
        student6.changeAverageGrade(10);
        student6.printProperties();
    

   class StudentA {
    constructor(name, cohort, averageGrade) {
        this.name = name;
        this.cohort = cohort;
        this.averageGrade = averageGrade;
    }
}
    let student7 = new StudentA("Takeallah", 2, 4);
    changeCohort(newCohort) {
        this.changeCohort = newCohort;
        student7.changeCohort(5);
        student7.printProperties();
    }

*/

    
