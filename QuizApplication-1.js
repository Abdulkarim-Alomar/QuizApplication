let chosenLangHtml = document.querySelector(".choose .buttons .html");
let chosenLangCss = document.querySelector(".choose .buttons .css");
let chosenLangC = document.querySelector(".choose .buttons .c");
let chosenLangJava = document.querySelector(".choose .buttons .java");
let chooseLang = document.querySelector(".choose");
let quiz = document.querySelector(".quiz");
let category = document.querySelector(".quiz .info .category span");
let qCounts = document.querySelector(".quiz .info .count span");
let bulletsContainer = document.querySelector(".bullets .spans");
let question = document.querySelector(".quiz .question-side");
let answerContainer = document.querySelector(".answers-side");
let submit = document.querySelector(".submit button");
let bulletAndCounterContainer = document.querySelector(".bullets");
let theResultSection = document.querySelector(".result");
let counter = document.querySelector(".bullets .counter");

let currentIndex = 0;
let correct = 0;
let wrong = 0;
let randomQuestionsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomAnswersArray = [1, 2, 3, 4];

chosenLangHtml.addEventListener("click", function () {

    chooseLang.remove();

    quiz.style.display = "block";

    let randomAnswers = getRandomIndex(randomAnswersArray);

    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.status === 200 && myRequest.readyState === 4) {
            let myObject = JSON.parse(this.responseText);
            category.innerHTML = chosenLangHtml.innerHTML;
            qCounts.innerHTML = myObject.length;
            let questionsArray = getRandomIndex(randomQuestionsArray);
            bullets(myObject.length);
            countDown(10,myObject.length);
            getData(myObject, myObject.length,questionsArray,randomAnswers);
            submit.addEventListener("click", function () {
                let rightAnswer = myObject[questionsArray[currentIndex]].right_answer;
                currentIndex++;
                answerCheck(rightAnswer, currentIndex);
                handleBullets();
                answerContainer.innerHTML = "";
                getData(myObject, myObject.length,questionsArray,randomAnswers)
                clearInterval(countDownTimer);
                countDown(10,myObject.length);
                showResult(myObject.length);
            })
        }
    }
    myRequest.open("GET", "./html_questions.json", true);
    myRequest.send();
})

chosenLangCss.addEventListener("click", function () {

    chooseLang.remove();

    quiz.style.display = "block";

    let randomAnswers = getRandomIndex(randomAnswersArray);

    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.status === 200 && myRequest.readyState === 4) {
            let myObject = JSON.parse(this.responseText);
            category.innerHTML = chosenLangHtml.innerHTML;
            qCounts.innerHTML = myObject.length;
            let questionsArray = getRandomIndex(randomQuestionsArray);
            bullets(myObject.length);
            countDown(10,myObject.length);
            getData(myObject, myObject.length,questionsArray,randomAnswers);
            submit.addEventListener("click", function () {
                let rightAnswer = myObject[questionsArray[currentIndex]].right_answer;
                currentIndex++;
                answerCheck(rightAnswer, currentIndex);
                handleBullets();
                answerContainer.innerHTML = "";
                getData(myObject, myObject.length,questionsArray,randomAnswers)
                clearInterval(countDownTimer);
                countDown(10,myObject.length);
                showResult(myObject.length);
            })
        }
    }
    myRequest.open("GET", "./CSS_question.json", true);
    myRequest.send();
})

chosenLangC.addEventListener("click", function () {
    chooseLang.remove();

    quiz.style.display = "block";

    let randomAnswers = getRandomIndex(randomAnswersArray);

    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.status === 200 && myRequest.readyState === 4) {
            let myObject = JSON.parse(this.responseText);
            category.innerHTML = chosenLangHtml.innerHTML;
            qCounts.innerHTML = myObject.length;
            let questionsArray = getRandomIndex(randomQuestionsArray);
            bullets(myObject.length);
            countDown(10,myObject.length);
            getData(myObject, myObject.length,questionsArray,randomAnswers);
            submit.addEventListener("click", function () {
                let rightAnswer = myObject[questionsArray[currentIndex]].right_answer;
                currentIndex++;
                answerCheck(rightAnswer, currentIndex);
                handleBullets();
                answerContainer.innerHTML = "";
                getData(myObject, myObject.length,questionsArray,randomAnswers)
                clearInterval(countDownTimer);
                countDown(10,myObject.length);
                showResult(myObject.length);
            })
        }
    }
    myRequest.open("GET", "./C++_questions.json", true);
    myRequest.send();
})

chosenLangJava.addEventListener("click", function () {
    chooseLang.remove();

    quiz.style.display = "block";

    let randomAnswers = getRandomIndex(randomAnswersArray);

    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.status === 200 && myRequest.readyState === 4) {
            let myObject = JSON.parse(this.responseText);
            category.innerHTML = chosenLangHtml.innerHTML;
            qCounts.innerHTML = myObject.length;
            let questionsArray = getRandomIndex(randomQuestionsArray);
            bullets(myObject.length);
            countDown(10,myObject.length);
            getData(myObject, myObject.length,questionsArray,randomAnswers);
            submit.addEventListener("click", function () {
                let rightAnswer = myObject[questionsArray[currentIndex]].right_answer;
                currentIndex++;
                answerCheck(rightAnswer, currentIndex);
                handleBullets();
                answerContainer.innerHTML = "";
                getData(myObject, myObject.length,questionsArray,randomAnswers)
                clearInterval(countDownTimer);
                countDown(10,myObject.length);
                showResult(myObject.length);
            })
        }
    }
    myRequest.open("GET", "./Java.question.json", true);
    myRequest.send();
})

function bullets(counts) {
    for (let i = 1; i <= counts; i++) {
        let span = document.createElement("span");
        if (i === 1) {
            span.className = "on";
        }
        bulletsContainer.appendChild(span);
    }
}

function getData(obj,questionCount,indexArray,indexAnswer) {
    if (currentIndex < questionCount) {
        question.textContent = obj[indexArray[currentIndex]]["title"];
    for (let i = 0; i < 4; i++) {
        let answerInput = document.createElement("input");
        answerInput.type = "radio";
        answerInput.id = `answer_${indexAnswer[i]}`;
        answerInput.name = "answer";
        answerInput.dataset.answer = obj[indexArray[currentIndex]][`answer_${indexAnswer[i]}`];
        if (i === 0) {
            answerInput.checked = true;
        }

        let answerLabel = document.createElement("label");
        answerLabel.htmlFor = `answer_${indexAnswer[i]}`;
        answerLabel.textContent = obj[indexArray[currentIndex]][`answer_${indexAnswer[i]}`]
        
        let answerDiv = document.createElement("div");
        answerDiv.className = "answer";

        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(answerLabel);
        answerContainer.appendChild(answerDiv);
    }
    }
}

function handleBullets() {
    let span = document.querySelectorAll(".bullets .spans span");
    let arraySpan = Array.from(span);
    arraySpan.forEach((span,index) => {
        if (index === currentIndex) {
            span.className = "on";
        }
    })
}

function answerCheck(rightAnswer) {
    let theAnswer = document.getElementsByName("answer");
    let chosenAnswer;
    for (let i = 0; i < theAnswer.length; i++){
        if (theAnswer[i].checked) {
            chosenAnswer = theAnswer[i].dataset.answer;
        }
    }
    if (chosenAnswer === rightAnswer) {
        correct++;
    } else {
        wrong++;
    }
}

function showResult(questionCount) {
    let theResult;
    if (currentIndex === questionCount) {
        question.remove();
        answerContainer.remove();
        submit.remove();
        bulletAndCounterContainer.remove();
        if (correct > questionCount / 2 && correct < questionCount) {
            theResult = `<span class="good">Good</span>,${correct} From ${questionCount}`
        }else if (correct === questionCount) {
            theResult = `<span class="perfect">Perfect</span>,${correct} From ${questionCount}`
        }else {
            theResult = `<span class="bad">Bad</span>,${correct} From ${questionCount}`
        }
        theResultSection.innerHTML = theResult;
        theResultSection.style.padding = "20px";
        theResultSection.style.marginTop = "10px";
        theResultSection.style.backgroundColor = "#222";
        theResultSection.style.borderRadius = "10px";
    }
}
function countDown(duration,questionCount) {
    if (currentIndex < questionCount) {
        let minutes, second;
        countDownTimer = setInterval(function () {
            minutes = parseInt(duration / 60);
            second = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            second = second < 10 ? `0${second}` : second;

            counter.innerHTML = `${minutes} : ${second}`;
            
            if (--duration < 0) {
                clearInterval(countDownTimer);
                submit.click();
            }
        }, 1000);
    }
}

function getRandomIndex(array) {
    let x, y, i;
    for (i = 0; i < array.length; i++){
        y = Math.floor(Math.random() * (array.length - 1)) + 1;
        x = array[i];
        array[i] = array[y];
        array[y] = x;
    }
    return array
}

