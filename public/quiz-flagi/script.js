const flagsQuiz = {
    divMain: document.querySelector(".main"),
    usedIndex: [],
    flags: [
        {
            flagName: "Belgium",
            answers: ["Polska", "Belgia", "Holandia", "Dania"],
            correctAnswer: 1,
        },
        {
            flagName: "DRC",
            answers: [
                "Kongo",
                "Fidżi",
                "Bahamy",
                "Demokratyczna Republika Konga",
            ],
            correctAnswer: 3,
        },
        {
            flagName: "Dominican Republic",
            answers: ["Dominikana", "Haiti", "Dominika", "Jamajka"],
            correctAnswer: 2,
        },
        {
            flagName: "Congo",
            answers: [
                "Kongo",
                "Demokratyczna Republika Konga",
                "Seszele",
                "Uganda",
            ],
            correctAnswer: 0,
        },
        {
            flagName: "Poland",
            answers: ["Polska", "Belgia", "Holandia", "Dania"],
            correctAnswer: 0,
        },
        {
            flagName: "Iran",
            answers: ["Egipt", "Iran", "Arabia Saudyjska", "Turcja"],
            correctAnswer: 1,
        },
        {
            flagName: "Egypt",
            answers: ["Maroko", "Egipt", "Libia", "Sudan"],
            correctAnswer: 1,
        },
        {
            flagName: "Holland",
            answers: ["Belgia", "Niemcy", "Francja", "Holandia"],
            correctAnswer: 3,
        },
        {
            flagName: "Fiji",
            answers: ["Samoa", "Fidżi", "Tonga", "Vanuatu"],
            correctAnswer: 1,
        },
        {
            flagName: "Ttadjikistan",
            answers: [
                "Uzbekistan",
                "Tadżykistan",
                "Turkmenistan",
                "Kazachstan",
            ],
            correctAnswer: 1,
        },
        {
            flagName: "Erythrea",
            answers: ["Etiopia", "Erytrea", "Dżibuti", "Sudan"],
            correctAnswer: 1,
        },
        {
            flagName: "Malta",
            answers: ["Malta", "Cypr", "Sycylia", "Sardynia"],
            correctAnswer: 0,
        },
        {
            flagName: "Indonesia",
            answers: ["Indonezja", "Malezja", "Filipiny", "Brunei"],
            correctAnswer: 0,
        },
        {
            flagName: "Estonia",
            answers: ["Litwa", "Łotwa", "Estonia", "Finlandia"],
            correctAnswer: 2,
        },
    ],
    startQuiz: function () {
        // start div
        const divStart = document.createElement("div");
        divStart.className = "startDiv";
        this.divMain.appendChild(divStart);

        // start button
        let startButton = document.createElement("button");
        startButton.className = "startButton button";
        startButton.textContent = "Rozpocznij Quiz";
        divStart.appendChild(startButton);

        // remove start button, divStart
        startButton.onclick = () => {
            divStart.parentNode.removeChild(divStart);
            this.drawFlag();
        };
    },

    drawFlag: function () {
        // remove main content
        while (this.divMain.firstChild) {
            this.divMain.removeChild(this.divMain.firstChild);
        }

        // if every flag is cheked
        if (this.usedIndex.length === this.flags.length) {
            // endDiv
            let endDiv = document.createElement("div");
            endDiv.className = "endDiv";

            // end text
            let endText = document.createElement("h3");
            endText.textContent = "Ukończyłeś Quiz!";
            endText.className = "endText";
            endDiv.appendChild(endText);

            // end button
            let endButton = document.createElement("button");
            endButton.textContent = "Zacznij od nowa";
            endButton.className = "endButton button";
            endButton.onclick = this.drawFlag;
            endDiv.appendChild(endButton);

            // add end div to main div
            this.divMain.appendChild(endDiv);

            return;
        }

        // random number, used index
        let randNum;
        do {
            randNum = Math.floor(Math.random() * this.flags.length);
        } while (this.usedIndex.includes(randNum));
        console.log(randNum);
        this.usedIndex.push(randNum);

        // flagDiv
        const divFlag = document.createElement("div");
        divFlag.className = "flagDiv";

        // url
        const img = new Image();
        img.src = `flag${randNum}.png`;
        img.style.height = "330px";
        img.onload = () => {
            divFlag.appendChild(img);
            this.drawAnswers(randNum);
        };

        // Add flagDiv to divMain
        this.divMain.appendChild(divFlag);
    },

    drawAnswers: function (randNum) {
        // correct answer
        const correctAnswerIndex = this.flags[randNum].correctAnswer;

        // divAnswers
        const divAnswers = document.createElement("div");
        divAnswers.className = "divAnswers";

        // answers
        for (let i = 0; i < this.flags[randNum].answers.length; i++) {
            const answerButton = document.createElement("button");
            answerButton.className = "answerButtons button";
            answerButton.correctAnswer = i;
            answerButton.textContent = this.flags[randNum].answers[i];
            divAnswers.appendChild(answerButton);

            answered = false;

            //check answer
            answerButton.addEventListener("click", () => {
                if (!answered) {
                    answered = true;

                    if (i == this.flags[randNum].correctAnswer) {
                        answerButton.style.backgroundColor = "green";
                    } else {
                        answerButton.style.backgroundColor = "red";
                        setTimeout(() => {
                            let correctAnswerButton =
                                divAnswers.children[correctAnswerIndex];
                            correctAnswerButton.style.backgroundColor = "green";

                            nextFlagButton.onclick = () => {
                                this.drawFlag();
                            };
                        }, 1200);
                    }

                    // next flag button
                    const nextFlagButton = document.createElement("button");
                    nextFlagButton.textContent = "Dalej";
                    nextFlagButton.className = "nextFlagButton button";
                    nextFlagButton.style.float = "right";

                    nextFlagButton.onclick = () => {
                        this.drawFlag();
                    };

                    // Add nextFlagButton to divMain
                    this.divMain.appendChild(nextFlagButton);
                }
            });
        }

        // Add divAnswers to divMain
        this.divMain.appendChild(divAnswers);
    },
};
flagsQuiz.startQuiz();
