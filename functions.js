export const getMiddleName = (array) => {
    if (array.length < 3) {
        return [''];
    } else if (array.length === 3) {
        return [array[1]];
    } else {
        return array.slice(1, array.length - 1);
    }
}



// export const isValidPostCode = (postCode) => {
//     const letters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
//     if (
//         letters.includes(postCode[0]) && letters.includes(postCode[1])  && 
//         postCode[2] >0  &&
//         postCode[-1] >0 &&
//         letters.includes(postCode[-2]) &&
//         letters.includes(postCode[-3]) {
//             return true
//         }

//     )
// }


export const canDriveIn = (country, age) => {
    countries = [{
        name: "UK",
        age: 16
    },
    {
        name: "France",
        age: 18
    },
    {
        name: "Netherlands",
        age: 17,
    }, 
    {
        name: "Dubai",
        age: 18
    },
    {
        name: "Guam",
        age: 18
    },
    ]

    let check = undefined;

    const isRoadWorthy = (c) => {
        if (c.name === country) {
            check = (c.age <= age)}
        } 
    
    countries.forEach(isRoadWorthy);
    return check
}

