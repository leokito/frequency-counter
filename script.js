const button = document.getElementById("countButton");


const freqCounter = () => {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    document.getElementById("lettersDiv").textContent = "";

    const letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
       
    }

    let wordsText = document.getElementById('textInput').value
    wordsText = typedText.toLowerCase();
    wordsText = typedText.split(/\s/);
    document.getElementById("wordsDiv").textContent = "";
    const wordsResult = {};

    for (let i = 0; i < wordsText.length; i++) {
        let actualWords = wordsText[i]; 
        
        if (wordsResult[actualWords] === undefined) {
            wordsResult[actualWords] = 1; //verificar
        } else {
            wordsResult[actualWords]++;
        }
    }

    for (let words in wordsResult) {
        const span = document.createElement("span")
        const textContent = `"${words}": ${wordsResult[words]}, `;
        span.innerText = textContent
        words = document.getElementById('wordsDiv');
        words.appendChild(span)
    }
    document.getElementById('wordsDiv').style.display = "block";
    document.getElementById('lettersDiv').style.display = "block";
    document.getElementById('thanks').style.display = "block";
    document.getElementById('textInput').style.display = "none";
    document.getElementById('input').style.display = "none";
    document.getElementById('result').style.display = "block";
    document.getElementById('countButton').style.display = "none";
}

button.addEventListener("click", freqCounter);