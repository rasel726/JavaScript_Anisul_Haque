// how to create an object

/* var student1 = {
    name: "Rasel",
    age: 25,
    cgpa: 3.50,
    lang: ["Bangla", "English", "Arabic"]
}
var student2 = {
    name: "Sajib",
    age: 26,
    cgpa: 3.60,
    lang: ["Bangla", "English", "Arabic", "Hindi"]
}
var student3 = {
    name: "Safi",
    age: 27,
    cgpa: 3.70,
    lang: ["Bangla", "English", "Arabic", "Urdu", "Hindi", "Tamil"]
}

// how to print the value of an object
console.log(student1.name); */



// adding a constructor

/* function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}

var student1 = new Student("Rasel", 25, 3.50, ["Bangla", "English", "Arabic"]);
var student2 = new Student("Rasel", 26, 3.60, ["Bangla", "English", "Arabic", "Hindi"]);
var student3 = new Student("Rasel", 27, 3.70, ["Bangla", "English", "Arabic", "Urdu", "Hindi", "Tamil"]);

console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang); */


// adding function inside constructor

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Rasel", 25, 3.50, ["Bangla", "English", "Arabic"]);
var student2 = new Student("Rasel", 26, 3.60, ["Bangla", "English", "Arabic", "Hindi"]);
var student3 = new Student("Rasel", 27, 3.70, ["Bangla", "English", "Arabic", "Urdu", "Hindi", "Tamil"]);

student1.display();
student2.display();
student3.display();