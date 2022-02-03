// Create an application with the following roles:
// ADMIN:    Gets full access 
// SUBADMIN: Gets access to create and delete courses
// TESTPREP: Gets access to create and delete tests
// USER:     Gets access to consume content

var user = "ADMIN";

switch (user) {

    case "ADMIN":
        console.log("ADMIN: Gets full access ");
        break;
    case "SUBADMIN":
        console.log("SUBADMIN: Gets access to create and delete courses");
        break;
    case "TESTPREP":
        console.log("TESTPREP: Gets access to create and delete tests");
        break;
    case "USER":
        console.log("USER:Gets access to consume content");
        break;
    default:
        console.log("Trial user ");
        break;
}