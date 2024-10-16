let question_sec = document.querySelector("#question");
let btns = document.querySelectorAll(".btn");
let next_btn = document.querySelector("#next_btn");
let answer_btns = document.querySelector("#answer_btns");

let inpbox=document.querySelector("#inpbox")
let popbtn=document.querySelector(".name_popup button")


const question_bank = [
    {
        question: "What is the capital of odisha ?",
        answers: [
            { text: "cuttack", correct: false },
            { text: "bhubaneswar", correct: true },
            { text: "rourkela", correct: false },
            { text: "bhadrak", correct: false }
        ]
    },
    {
        question: "Who is the chief minister of odisha ?",
        answers: [
            { text: "Dharmendra pradhan", correct: false },
            { text: "motilal panda", correct: false },
            { text: "mohan charan majhi", correct: true },
            { text: "naveen pattnaik", correct: false }
        ]
    }
    , {
        question: "What is the capital of bihar ?",
        answers: [
            { text: "patna", correct: true },
            { text: "bhubaneswar", correct: false },
            { text: "ranchi", correct: false },
            { text: "srinagar", correct: false }
        ]
    }, {
        question: "Which is the largest state in india ?",
        answers: [
            { text: "odisha", correct: false },
            { text: "goa", correct: false },
            { text: "uttar pradesh", correct: false },
            { text: "rajastan", correct: true }
        ]
    }, {
        question: "What is the capital of india ?",
        answers: [
            { text: "New delhi", correct: true },
            { text: "Jammu and Kashmir ", correct: false },
            { text: "bihar", correct: false },
            { text: "punjab", correct: false }
        ]
    }, {
        question: "Who is the prime minister of india ?",
        answers: [
            { text: "Dharmendra pradhan", correct: false },
            { text: "motilal panda", correct: false },
            { text: "rahul gandhi", correct: false },
            { text: "narendra modi", correct: true }
        ]
    },
    {
        question: "Which is the smallest state in india ?",
        answers: [
            { text: "odisha", correct: false },
            { text: "goa", correct: true },
            { text: "uttar pradesh", correct: false },
            { text: "rajastan", correct: false }
        ]
    }, {
        question: "What is the capital of haryana ?",
        answers: [
            { text: "chandigarh", correct: true },
            { text: "Ambala ", correct: false },
            { text: "Gurugram", correct: false },
            { text: "Rohtak", correct: false }
        ]
    },
    {
        question: "What is the capital of uttar pradesh ?",
        answers: [
            { text: "Mathura", correct: false },
            { text: "Sultanpur ", correct: false },
            { text: "lucknow", correct: true },
            { text: "Noida", correct: false }
        ]
    }, {
        question: "What is the capital of nagaland ?",
        answers: [
            { text: "Tuensang", correct: false },
            { text: "Niuland ", correct: false },
            { text: "Mokokchung", correct: false },
            { text: "Kohima", correct: true }
        ]
    }, {
        question: "What is the capital of gujurat ?",
        answers: [
            { text: "gandhinagar", correct: true },
            { text: "Ahmedabad ", correct: false },
            { text: "Surendranagar", correct: false },
            { text: "Jamnagar", correct: false }
        ]
    }, {
        question: "What is the capital of mizoram ?",
        answers: [
            { text: "Champhai", correct: false },
            { text: "Aizawl ", correct: true },
            { text: "Lunglei", correct: false },
            { text: "Kolasib", correct: false }
        ]
    },
    {
        question: "What is the capital of sikkim ?",
        answers: [
            { text: "Champhai", correct: false },
            { text: "Soreng ", correct: false },
            { text: "Gangtok", correct: true },
            { text: "Pakyong", correct: false }
        ]
    }, {
        question: "What is the capital of rajastan ?",
        answers: [
            { text: "jaipur", correct: true },
            { text: "Ajmer ", correct: false },
            { text: "Kota", correct: false },
            { text: "Jaisalmer", correct: false }
        ]
    },
    {
            question: "What is the capital of karnataka ?",
            answers: [
                { text: "Vijayapura", correct: false },
                { text: "Mysuru ", correct: false },
                { text: "bangalore", correct: true },
                { text: "Kolar", correct: false }
            ]
        }

]

let current_qs_idx = 0;
let score = 0;

function startquiz() {
    current_qs_idx = 0;
    score = 0;
    next_btn.innerHTML = "next";
    showquestion();  //calling showquestion
}

function showquestion() {
    resetstate();
    let current_qs = question_bank[current_qs_idx];
    let qs_no = current_qs_idx + 1;
    question_sec.innerHTML = qs_no + "." + current_qs.question;

    current_qs.answers.forEach((ans) => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answer_btns.append(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;

        }
        button.addEventListener("click", selectans);
    })
}
function resetstate() {
    next_btn.style.display = "none";
    while (answer_btns.firstChild) {
        answer_btns.removeChild(answer_btns.firstChild);
    }

}
function selectans(e) {
    const selected_btn = e.target;
    const iscorrect = selected_btn.dataset.correct === "true";
    if (iscorrect) {
        selected_btn.classList.add("correct");
        score++;

    }
    else {
        selected_btn.classList.add("wrong");
    }

    Array.from(answer_btns.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");

        }
        btn.disabled = true;
    })
    next_btn.style.display = "block";

}
let contestent_name="";
popbtn.addEventListener("click",(e)=>{
    e.preventDefault();
     contestent_name=inpbox.value;
    //  console.log("btn hitted")
    let name_popup=document.querySelector(".name_popup");
    name_popup.style.display="none";
})
function showscore() {
    resetstate();

    question_sec.innerHTML = `Hello <span>${contestent_name}</span>  <br> you scored ${score} out of ${question_bank.length}`
    next_btn.innerHTML = "play again";
    next_btn.style.display = "block"
}
function handlenextbtn() {
    current_qs_idx++;
    if (current_qs_idx < question_bank.length) {
        showquestion();
    }
    else {
        showscore();
    }
}

next_btn.addEventListener("click", () => {
    if (current_qs_idx < question_bank.length) {
        handlenextbtn();
    }
    else {
        startquiz();
    }
})

startquiz();  //calling startquiz
console.log(question_bank.length)