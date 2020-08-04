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

document.getElementById('submitBtn').addEventListener('click', function submit(input){
    const generatePin = document.getElementById('generatePin');
    const submitPin = document.getElementById('submitPin');
    const notMatch = document.getElementById('notMatch');
    const match = document.getElementById('match');
    const submitBtn = document.getElementById('submitBtn');

    if(parseInt(submitPin.value) == parseInt(generatePin.value)){
        notMatch.style.display = "none";
        match.style.display = "block";
		submitBtn.disabled = true;
        return;
    }

    if(tryLeft.innerText > 0){
		const tryLeft = document.getElementById('tryLeft');
		notMatch.style.display = "block";
		tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
        submitBtn.style.disabled = true;
		return;
    }
});


