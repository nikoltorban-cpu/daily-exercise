function displayStudentInfo(objUser){
    return `your full name is ${objUser.first} ${objUser.last}`
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
