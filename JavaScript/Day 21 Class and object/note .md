class Student {
  showInfo(name, age) {
    this.name = name;
    this.age = age;

    console.log(this.name);
    console.log(this.age);
  }
}

let obj = new Student();

obj.showInfo("Ashish", 20);