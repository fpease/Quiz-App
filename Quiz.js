function check() {
    var score = 0;
    var ans1 = document.quiz.ans1.value;
    var ans2 = document.quiz.ans2.value;
    var ans3 = document.quiz.ans3.value;
    var ans4 = document.quiz.ans4.value;
    var ans5 = document.quiz.ans5.value;

    if (ans1 == "C") { score++; }
    if (ans2 == "D") { score++; }
    if (ans3 == "D") { score++; }
    if (ans4 == "C") { score++ }
    if (ans5 == "C") { score++ }

    var percent = (score / 5) * 100;

    document.getElementById('result').innerHTML = "Your Score is : " + parseInt(percent) + "%";
}