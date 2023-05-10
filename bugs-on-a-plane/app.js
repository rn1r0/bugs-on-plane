var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

submit.addEventListener("click", formAlert);{
}

function formAlert(event) {
  event.preventDefault();
  var firstName = form.elements["firstName"].value;
  var lastName = form.elements["lastName"].value;
  var age = form.elements["age"].value;
  var gender = form.elements["gender"].value;
  var travelLocation = form.elements["travelLocation"].value;
  var diet = [];

  if (form.elements["vegan"].checked) {
    diet.push(document.getElementById("vegan").value);
  }
  if (form.elements["gluten"].checked) {
    diet.push(document.getElementById("gluten").value);
  }
  if (form.elements["paleo"].checked) {
    diet.push(document.getElementById("paleo").value);
  }

  alert(
      "\First Name: " +
      firstName +
      "\nLast Name: " +
      lastName +
      "\nAge: " +
      age +
      "\nGender: " +
      gender +
      "\nTravel Location: " +
      travelLocation +
      "\nDiet: " +
      diet +
      "\nAwesome, now if you die, it won't be an accident.."
  );
}
