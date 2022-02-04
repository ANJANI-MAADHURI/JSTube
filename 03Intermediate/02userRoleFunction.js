
// function getUserRole(name, role){
var getUserRole = function(name, role){
  switch (role) {
      case "admin":
          return `${name} is admin with all access`;
          //break;
      case "subadmin":
           return `${name} is sub-admin with access to create and delete courses`;
           //break;
      case "testprep":
            return `${name} is a testprep user with access to create and delete tests `;
            //break;
      case "user":
            return `${name} is a user to consume the content `;
            //break;
      default:
        return `${name} is a trial user.`;
        //break;
   } 
}

console.log(getUserRole( "MadhuriCh", "admin" ));

var getRole = getUserRole("Santy" , "user1");
console.log(getRole);