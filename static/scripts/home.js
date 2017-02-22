function validateForm()
{
  console.log('validating form')

  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length)
  {
    alert('All fields must have a value.')
    return false;
  }

  console.log('age: ', age)

  if(isNaN(parseFloat(age)))
  {
    alert('Age must be a number.')
    return false;
  }

  return true;
}
