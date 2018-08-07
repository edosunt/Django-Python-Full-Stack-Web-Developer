// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(){
  var newName = prompt("Enter the name you would like to add: ");
  roster.push(newName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(){
    var delName = prompt("Enter the name you would like to delete: ");
    var indexLocation = roster.indexOf(delName);

    if (indexLocation > -1) {
      roster.splice(indexLocation,1);
    } else {
      alert("This name is not exist")
    }
  }

    // if indexLocation > -1 {
      // roster.splice(indexLocation,1);
    // } else {
      // alert("Name is not available");
    // }

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
  console.log(roster);
}

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var userSelection = null;

while (userSelection !== "quit") {
  var userSelection = prompt("Do you want to add/remove/display/quit? ");

  if (userSelection == "add") {
    addNew();
  } else if (userSelection == "remove") {
    remove();
  } else if (userSelection == "display") {
    display();
  } else if (userSelection == "quit") {
    break;
  } else {alert("Your selection is incorrect")}
}
