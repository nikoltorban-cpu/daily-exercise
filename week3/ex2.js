const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors.forEach((color, index) => {
    switch(index){
        case 0:
            console.log(`${index+1}${ordinal[1]} choice is ${color}`)
            break;
        case 1:
            console.log(`${index+1}${ordinal[2]} choice is ${color}`)
            break;
        case 2:
            console.log(`${index+1}${ordinal[3]} choice is ${color}`)
            break;
        default:
            console.log(`${index+1}${ordinal[0]} choice is ${color} `)

    }
})