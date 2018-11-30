class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
    this.grade = props.grade;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from  ${this.location}`
  }
}



class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  studentGrade() {
    return Math.floor(Math.random() * 100);

  }
}


class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;

  }
  listsSubjects(student) {
    let array = student.favSubjects;
    for (let key of array) {
      console.log(key);
    }
  }
  pRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on {subject}`
  }

  graduate(cb) {
    this.grade = cb()
    if (this.grade > 70) {
      return `${this.name} your final grade is ${this.grade}% you are ready to GRADUATE congratulations🎉`;
    }
    return `your grade is ${this.grade}% , you need more practice !!!😹`;
  }
}

class ProjectManagers extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }

}

const jordan = new ProjectManagers({
  name: 'Jordan',
  location: 'Texas',
  age: 25,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'fsw16_Jordan',
  favInstructor: 'Josh',
  grade: 0
});


const john = new Student({
  name: 'John',
  location: 'San Diego',
  age: 23,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `wazzzzuppp`,
  favSubjects: ['Html', 'CSS', 'JavaScript', 'React.js'],
  previousBackground: 'Field Technician cox',
  grade: 0
});

john.listsSubjects(john);
john.pRAssignment(john, 'REACT');
john.sprintChallenge(john, 'OOP');
jordan.studentGrade(john)
john.graduate(jordan.studentGrade)