
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let oneShelf = document.getElementById('oneShelf')
let twoShelf = document.getElementById('twoShelf')
let passwordButton = document.getElementById('generateButton')


function getRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }
    return password;
};

generateButton.addEventListener("click", function() {
    let randomPasswordOne = getRandomPassword(15);
    let randomPasswordTwo = getRandomPassword(15);
    oneShelf.textContent = randomPasswordOne;
    twoShelf.textContent = randomPasswordTwo;
});


