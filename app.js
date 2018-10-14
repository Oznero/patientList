const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');


if(command.toLocaleLowerCase() == 'update' || command.toLocaleLowerCase() == 'delete' || command.toLocaleLowerCase() == 'add' || command.toLocaleLowerCase() == 'reorder'){

  // *** Here we add a name to array patientList
  if(command.toLocaleLowerCase() === 'add'){
    let addedName = prompt('Please give us a new name to add to the list');
    patientList.push(addedName);
    document.write(patientList);
  }

  // *** Here we update a name in array patientList
  if(command.toLocaleLowerCase() === 'update'){
    let updateName = prompt('Please give us a patient name to update' + patientList);
    for(let i = 0; i < patientList; i++){
      if(updateName.toLocaleLowerCase() === patientList[i]){
        alert('We updated the list');
      }
      else{
        alert('We did not find ' + updateName + 'in the list');
      }
    }
  }

  
  if(command.toLocaleLowerCase() === 'delete'){

  }
  if(command.toLocaleLowerCase() === 'reorder'){

  }
}

else{
  confirm('We did not recognize your option please refresh and try again');
  alert(command);
}