



function genPrefix (firstname){
    if (firstName.length > 4) {
        return 'the Great'
    } else {
        return 'the Magnificent'
    }
}


//gen firstname of name 
function genFirstName (firstName) {
  const firstLetter = firstname.CharAt(0).toLowercase()
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
if (roadType === 'road'){
    return ${favColor}ridge
} else if (roadType === 'street') {
    return ${favColor}son
} else if (roadType === 'ave'){
    return ${favColor}view
} else {
    return ${favColor}park
}
}

function getLastName (lastname){
    const lastLetter = lastname.charAt(lastName.length-1).toLowercase()
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
const firstName = document.getElementById('firstname').ariaValueMax.trim()
const lastName = document.getElementById('lastname').ariaValueMax.trim()
const roadType = document.getElementById('roadType').ariaValueMax.trim()
const favColor = document.getElementById('favoritecolor').ariaValueMax.trim()
const favAnimal = document.getElementById('favanimal').ariaValueMax.trim()

//gen each part of the name usin helper func

const prefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const MiddleName = genMiddleName(roadType, favColor)
const newLastName = getLastName(lastName)
const suffix = genSuffix(favAnimal)






}