



function genPrefix (firstName, lastName){
    if (firstName.length > 4 && lastName.length < 10) {
        return 'the Great'
    } else {
        return 'the Magnificent'
    }
}


//gen firstname of name 
function genFirstName (firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase()
  switch (firstLetter) {
case 'a':
    return 'Bob'; 
case 'b':
    return 'Charlie'; 

case 'c':
    return 'Diana';
case 'd':
    return 'Ethan'; 
case 'e':
    return 'Fiona';
case 'f':
    return 'George';
case 'g':
    return 'Hannah'; 
case 'h':
    return 'Isaac'; 
case 'i':
    return 'Jack'; 
case 'j':
    return 'Katherine';
case 'k':
    return 'Liam'; 
case 'l':
    return 'Mia';
case 'm':
    return 'Noah'; 
case 'n':
    return 'Olivia'; 
case 'o':
    return 'Paul';
case 'p':
    return 'Quinn'; 
case 'q':
    return 'Rachel';
case 'r':
    return 'Sam';
case 's':
    return 'Tina'; 
case 't':
    return 'Uma'; 
case 'u':
    return 'Victor';
case 'v':
    return 'Wendy'; 
case 'w':
    return 'Xander'; 
case 'x':
    return 'Yara'; 
case 'y':
    return 'Zoe'; 
case 'z':
    return 'Alice'; 
default:
    return 'maxwell';
}
}

//gen middle name 

function genMiddleName (roadType, favColor) {
if (roadType === 'road'){
    return `${favColor}ridge`
} else if (roadType === 'street') {
    return `${favColor}son`
} else if (roadType === 'drive'){
    return `${favColor}view`
} else if (roadType === 'court') {
    return `${favColor}park`
} else {
    return 'nuts'
}
}

function getLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
if (lastLetter === 'a' || lastLetter === 'z'){
    return 'shadow'
} else if(lastLetter === 'b' || lastLetter === 'y'){
    return 'storm'
} else if(lastLetter === 'c' || lastLetter === 'x'){
    return 'frost'
}else if (lastLetter === 'd' || lastLetter === 'w') {
    return 'flare';
} else if (lastLetter === 'e' || lastLetter === 'v') {
    return 'wave';
} else if (lastLetter === 'f' || lastLetter === 'u') {
    return 'light';
} else if (lastLetter === 'g' || lastLetter === 't') {
    return 'fire';
} else if (lastLetter === 'h' || lastLetter === 's') {
    return 'stone';
} else if (lastLetter === 'i' || lastLetter === 'r') {
    return 'shadow';
} else if (lastLetter === 'j' || lastLetter === 'q') {
    return 'storm';
} else if (lastLetter === 'k' || lastLetter === 'p') {
    return 'frost';
} else if (lastLetter === 'l' || lastLetter === 'o') {
    return 'blair';
} else if (lastLetter === 'm' || lastLetter === 'n') {
    return 'wave';
} else {
    return 'bop';
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

const prefix = genPrefix(firstName, lastName)
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

function capitalize(word) {

return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

}