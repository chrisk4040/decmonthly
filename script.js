



function genPrefix (firstName){
    if (firstName.length > 4) {
        return 'the Great'
    } else {
        return 'the Magnificent'
    }
}


//gen firstname of name 
function genFirstName (firstName) {
  const firstLetter = firstName.CharAt(0).toLowercase()
  if (firstLetter === 'a') {
    return 'Jeff'
} else if(firstLetter === 'b') {
    return 'gertrude'
} else if(firstLetter === 'c') {
return 'jim'
} else if(firstLetter === 'd') {
    return 'jane'
} else if(firstLetter === 'e') {
return 'dom'
} else if(firstLetter === 'f') {
    return 'tim'
} else {
    return 'bob'
}

}

//gen middle name 

function genMiddleName (roadType, favColor, ) {
if (roadType === 'Road'){
    return `${favColor}ridge`
} else if (roadType === 'Street') {
    return `${favColor}son`
} else if (roadType === 'Drive'){
    return `${favColor}view`
} else if (roadType === 'Court') {
    return `${favColor}park`
} else {
    return `${favColor}lane`
}
}

function getLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowercase()
if (lastLetter === 'a'){
    return 'shadow'
} else if(lastLetter === 'b'){
    return 'storm'
} else if(lastLetter === 'c'){
    return 'frost'
} else {
    return 'bop'
}
}

// gen sufix

function genSuffix (favAnimal){
    return `of the ${favAnimal}`
}




//master function to Assemble FUll Name 
function genFullName () {


const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const roadType = document.getElementById('roadType').value.trim()
const favColor = document.getElementById('favoriteColor').value.trim()
const favAnimal = document.getElementById('favAnimal').value.trim()

//gen each part of the name usin helper func

const prefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const MiddleName = genMiddleName(roadType, favColor)
const newLastName = getLastName(lastName)
const suffix = genSuffix(favAnimal)

//functions to cap
const capFix = capitalize(prefix)
const capFirst = capitalize(newFirstName)
const capMid = capitalize(MiddleName)
const capLastname = capitalize(newLastName)
const capSuffix = capitalize(suffix)

const fullName = `${capFix} ${capFirst} ${capMid} ${capLastname} ${capSuffix}`

document.getElementById('result').textContent = fullName

}

//capitalizer

function Capitalize (word) {

return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

}