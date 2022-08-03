//Get the input to verify and the <p> that will contain the result information
let stringInput = document.getElementById('text-box');
let resultP = document.getElementById('result-p');

function verifyPalindrome() {
    let baseString = stringInput.value; //Create a copy of input value
    baseString = normalizeString(baseString); //change all the uncommom characters and remove white spaces
    
    //Tranform the string into an array, reverse the values and turn into a string again
    baseString = baseString.split("");
    baseString = baseString.reverse();
    baseString = baseString.join("");

    //Verify if baseString matches the input string
    if (baseString == normalizeString(stringInput.value)) {
        resultP.className = "info-text res-succes-message"
        resultP.innerText = `"${stringInput.value}" is a Palindrome!`
    } 
    else {
        resultP.className = "info-text res-fail-message";
        resultP.innerText = `"${stringInput.value}" isn't a Palindrome.`
    }
}

//This function changes every uncommon character into an usual one and remove all white spaces in the string
function normalizeString(s){
    var r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
};