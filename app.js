const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

//alert(patientList);

let keepAlive = true;

while (keepAlive != false) {
  const command = prompt('Choose one: update, delete, add, reorder');
  if (command.toLocaleLowerCase() == 'update' || command.toLocaleLowerCase() == 'delete' || command.toLocaleLowerCase() == 'add' || command.toLocaleLowerCase() == 'reorder') {
    if (command.toLocaleLowerCase() === 'add') {
      let addedName = prompt('Please give us a new name to add to the list');
      patientList.push(addedName);
      for (let x = 1; x < patientList.length; x++) {
        patientList[x] = patientList[x].charAt(0).toUpperCase() + patientList[x].substr(1);
      }
      alert(patientList);
      keepAlive = confirm('Taking you back to the main menu.');
    }

    /*
    if (command.toLocaleLowerCase() === 'update') {
      let updateName = prompt('Please give us a patient name to update' + patientList);
      for (let i = 0; i < patientList; i++) {
        if (updateName.toLocaleLowerCase() === patientList[i]) {
          alert('We updated the list' + patientList);
          keepAlive = confirm('Do you have anymore names you would like to update?');
        }
        else {
          alert('We did not find ' + updateName + 'in the list');
        }
      }
    }
*/
    if (command.toLocaleLowerCase() === 'delete') {
      let delUser = prompt('Please type a name you would like to remove' + patientList).replace(/^\w/, c => c.toUpperCase());
      let index = patientList.indexOf(delUser)
      if (index !== -1) {
        patientList.splice(index, 1);
      }
      alert(patientList);
      keepAlive = confirm('Taking you back to the main menu.');
    }

    if (command.toLocaleLowerCase() === 'reorder') {
      let firstUser = prompt('Please give us the first person').replace(/^\w/, c => c.toUpperCase());
      let secondUser = prompt('Please give us the second person').replace(/^\w/, c => c.toUpperCase());
    }
  }
  else {
    confirm('We did not recognize your option please try again');
  }
}

/*
if (keepAlive === 1) {
  prompt(command);
  // *** Here we add a name to array patientList
  if (command.toLocaleLowerCase() == 'update' || command.toLocaleLowerCase() == 'delete' || command.toLocaleLowerCase() == 'add' || command.toLocaleLowerCase() == 'reorder') {
    if (command.toLocaleLowerCase() === 'add') {
      addName();
    }
  }
}
*/


/*
// *** Here we update a name in array patientList
if (command.toLocaleLowerCase() === 'update') {
  let updateName = prompt('Please give us a patient name to update' + patientList);
  for (let i = 0; i < patientList; i++) {
    if (updateName.toLocaleLowerCase() === patientList[i]) {
      alert('We updated the list');
    }
    else {
      alert('We did not find ' + updateName + 'in the list');
    }
  }
}


if (command.toLocaleLowerCase() === 'delete') {

}
if (command.toLocaleLowerCase() === 'reorder') {

}
}
*/