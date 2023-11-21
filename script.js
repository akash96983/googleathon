
let genText;
let courseList=[]


let correctAnswersCount = 0;

function displayQuiz(res) {
    let questionsList = [];
    for (let i = 0; i < 5; i++) {
        questionsList.push(res.results[i].question)
        questionsList.push(res.results[i].correct_answer)
        questionsList.push(res.results[i].incorrect_answers)
    }

    for (let i = 0; i < questionsList.length; i += 3) {
        let div = document.createElement("div");
        div.className = 'flex'

        let h1 = document.createElement("h1");
        h1.innerHTML = questionsList[i];
        div.appendChild(h1);

        let div1 = createOptionDiv(questionsList[i + 1], true, i);
        let div2 = createOptionDiv(questionsList[i + 2][0], false, i);
        let div3 = createOptionDiv(questionsList[i + 2][1], false, i);
        let div4 = createOptionDiv(questionsList[i + 2][2], false, i);

        div.append(div1, div2, div3, div4)

        document.getElementById("container").append(div)
    }
}

function createOptionDiv(optionText, isFirstOption, index) {
    let div = document.createElement("div")
    let opt = document.createElement('input')
    opt.type = 'radio'
    opt.name = 'option' + index

    let label = document.createElement('label')
    label.innerHTML = optionText
    div.appendChild(opt)
    div.appendChild(label)

    if (isFirstOption) {
        opt.addEventListener('click', () => {
            if (opt.checked) {
                // Check if the clicked option is the correct answer (first option)
                if (index % 3 === 0) {
                    correctAnswersCount++; 
                    console.log(correctAnswersCount)
                    // Increment score for correct answers
                }
            }
        })
    }

    return div
}



document.getElementById("submitbutton").addEventListener('click', () => {
    let checkedCount = 0;

    document.querySelectorAll(".courses").forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (document.getElementById("name-input").value === "" || checkedCount < 1) {
        alert("Enter Valid Details");
    } else {
        document.querySelectorAll(".courses").forEach(function(checkbox) {
            if (checkbox.checked) {
                courseList.push(checkbox.name);
            }
        });
        console.log(courseList);

        document.getElementById('input-page').style.display = 'none';
        

        courseList.forEach((ele) => {
            if (ele === 'Technical') {
                fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else if (ele === 'Sports') {
                fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'Arts') {
                fetch("https://opentdb.com/api.php?amount=5&category=25&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'Media') {
                fetch("https://opentdb.com/api.php?amount=5&category=11&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'Game') {
                fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'VFX') {
                fetch("https://opentdb.com/api.php?amount=5&category=32&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'Music') {
                fetch("https://opentdb.com/api.php?amount=5&category=12&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else if (ele === 'Automobiles') {
                fetch("https://opentdb.com/api.php?amount=5&category=28&type=multiple")
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        displayQuiz(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            // Add similar conditions for other categories...
        });
    }
});


// JavaScript functions
// document.getElementById('popupBtn').addEventListener('click', function() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex'; // Display the overlay as a flex container
// });

// document.getElementById('closeBtn').addEventListener('click', function() {
//     var overlay = document.getElementById('overlay');
//     over


function fetchAPI(ele) {
    return new Promise((resolve, reject) => {
        const apiKey = 'YOUR_OPENAI_API_KEY';
        const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
        const promptText = `Recommend some courses related to ${ele}`;

        const requestData = {
            prompt: promptText,
            max_tokens: 50
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const genText = data.choices[0].text;
            resolve(genText); // Resolve the Promise with the generated text
        })
        .catch(error => {
            console.error('Error:', error);
            reject(error); // Reject the Promise with the error
        });
    });
}


document.getElementById("checkAnswersBtn").addEventListener('click', async () => {
    document.getElementById("popup").style.display = 'inherit';

    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = 'column';
    div.style.justifyContent = "space-around";
    div.style.alignItems = "center";
    div.style.borderRadius = "10px";
    div.style.width = 'fit-content';
    div.style.height = '65vh';
    div.style.border = "2px solid red";
    div.style.backgroundColor = 'white';

    let h1 = document.createElement("h1");
    h1.innerHTML = `RECOMMENDED COURSE <i class="fa fa-window-close" aria-hidden="true" style="margin-left:50px"></i>`;

    let h2 = document.createElement("h2");
    h2.innerHTML = "Score: " + correctAnswersCount;

    let div2 = document.createElement("div");

    try {
        const genText = await fetchAPI(courseList[0]);
        div2.innerHTML = genText;
    } catch (error) {
        console.error('Error fetching data:', error);
        div2.innerHTML = 'Error fetching data'; // Display an error message
    }

    div2.style.border = "2px solid red";
    div2.style.backgroundColor = 'white';

    div.append(h1, h2, div2);
    document.getElementById("popup").appendChild(div);
    document.getElementById("popup").style.display = 'flex';
    document.getElementById("popup").style.justifyContent = 'center';
    document.getElementById("popup").style.alignItems = 'center';
});
