class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    showUsername(){
        return this.username;
    }
    changeUsername(username){
        this.username = username;
    }
}

const user = new User("ashish", "asdfghjkl1;", "ashish@gmail.com");
console.log(user.showUsername());
user.changeUsername("Akshay");
console.log(user.showUsername());


//another way to use same functionality as classes using function


function Student(rollno, name){
    this.rollno = rollno;
    this.name = name;
}

Student.prototype.getStudent = function(){
    console.log(this.rollno);
    console.log(this.name);
}

const student = new Student(1, "ajay");
student.getStudent();


// another way

function Ipl(){
    let team;
    let captain;
}

Ipl.prototype.setTeam = function(team, captain){
    this.team = team;
    this.captain = captain;
}

Ipl.prototype.getTeam = function(){
    console.log(`${this.team} and ${this.captain}`);
}
const ipl = new Ipl();
ipl.setTeam("CSK", "MSD");
ipl.getTeam();