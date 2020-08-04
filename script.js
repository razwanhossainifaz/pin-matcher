/* -------------------- random pin generate on generate button ------------------ */

document.getElementById('generateBtn').addEventListener('click',function(){
    const generatePin = document.getElementById('generatePin');
    const generateRandomPin = Math.floor(1000 + Math.random(generatePin) * 9000);
    const generateNewPin = Math.round(generateRandomPin);
    document.getElementById('generatePin').value = generateNewPin;
});

/* -------------------- for backspace integration -------------------- */

var exp = backSpace = true;
var textView = document.forms['calc']['text'];
function back(){
    exp = textView.value;
    exp = exp.substring(0, exp.length - 1);
    textView.value = exp;
}

/* ------------------- pin validation ------------------------- */

const submitPin = document.getElementById('submitPin');
const generatePin = document.getElementById('generatePin');
let match = document.getElementById('match');
let notMatch = document.getElementById('notMatch');
let attempt = document.getElementById('attempt');

document.getElementById('submitBtn').addEventListener('click', function(){
    if (submitPin.value == generatePin.value){
        match.style.display = 'block';
        notMatch.style.display = 'none';
    } else {
        notMatch.style.display = 'block';
        submitPin.value = '';
        match.style.display = 'none';
        attempt.innerHTML--;
    }
    if (attempt.innerHTML < 1){
        submitBtn.disabled = true;
        submitPin.value = '';
        submitBtn.style.background = '#717277';
        attempt.innerHTML = 'Sorry.. no more'
    }
});

