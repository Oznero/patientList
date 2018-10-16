const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

//alert(patientList);

let keepAlive = true;

while (keepAlive !== false) {
  const command = prompt('Choose one: update, delete, add, reorder');
  if (command.toLocaleLowerCase() == 'update' || command.toLocaleLowerCase() == 'delete' || command.toLocaleLowerCase() == 'add' || command.toLocaleLowerCase() == 'reorder') {

    /*
    If the user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list.
    */
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
    If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list.
    */
    if (command.toLocaleLowerCase() === 'update') {
      let updateName = prompt('Please give us a patient name to update - ' + patientList).replace(/^\w/, c => c.toUpperCase());
      let updateUser = patientList.indexOf(updateName);
      if (updateUser !== -1) {
        let newName = prompt('Please give us a new name for ' + updateName).replace(/^\w/, c => c.toUpperCase());
        objectIndex = patientList.findIndex((obj => obj == updateName));
        patientList[objectIndex] = newName;
        alert(patientList);
      }
      else {
        alert('We did not find ' + updateName + ' in the list');
      }
      keepAlive = confirm('Taking you back to the main menu.');
    }

    /*
    If the user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.
    */
    if (command.toLocaleLowerCase() === 'delete') {
      let delUser = prompt('Please type a name you would like to remove - ' + patientList).replace(/^\w/, c => c.toUpperCase());
      let index = patientList.indexOf(delUser)
      if (index !== -1) {
        patientList.splice(index, 1);
        alert(patientList);
      }
      else {
        alert('We did not find ' + delUser + ' in the list');
      }
      keepAlive = confirm('Taking you back to the main menu.');
    }

    /*
    If the user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, switch the two entered patients, and display the list.
    */
    if (command.toLocaleLowerCase() === 'reorder') {
      let firstUser = prompt('Please give us the first person - '  + patientList).replace(/^\w/, c => c.toUpperCase());
      let userOne = patientList.indexOf(firstUser);
      if (userOne !== -1) {
        let secondUser = prompt('Please give us the second person - '  + patientList).replace(/^\w/, c => c.toUpperCase());
        let userTwo = patientList.indexOf(secondUser);
        if(userTwo !== -1){
          patientList.splice(userTwo, 1, firstUser);
          patientList.splice(userOne, 1, secondUser);
          alert(patientList);
        }
        else{
          alert('We did not find ' + secondUser + ' in the list');
        }
      }
      else{
        alert('We did not find ' + firstUser + ' in the list');
      }
      keepAlive = confirm('Taking you back to the main menu.');
    }

  }
  //If their option was not recognized send them back to the main menu
  else {
    confirm('We did not recognize your option please try again');
  }
}