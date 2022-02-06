var user = {
    firstName: "Madhuri",
    lastName: "Chunduri",
    role: "admin",
    logInCount: 25,
    isFBLogin: true,
    courseList: [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    } 
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("REACT JS course");
console.log(user.getCourseCount());
user.buyCourse("GIT HUB course");
user.buyCourse("NODE JS course");
console.log(user.getCourseCount());
console.log(user.courseList);