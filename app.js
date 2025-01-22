const birthdate = document.getElementById("dob");
const resultDiv = document.getElementById("result");
function CalculateAge() {
      //console.log(birthdate.value)
const DateTime = luxon.DateTime;

const birthDate = DateTime.fromISO(birthdate.value);
const now = DateTime.now();
const age = now.diff(birthDate, 'years').years;

resultDiv.textContent = `You are ${Math.floor(age)} years old`;
}