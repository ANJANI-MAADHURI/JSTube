console.log(this);

var user = {
    firstName: "Madhuri",
    courseCount: 9,
    getCourseCount: function () {
        console.log("Line 7", this);
    },
};

user.getCourseCount();
