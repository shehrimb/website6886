<script>
    const questions = [
    {
        text: "Do you enjoy working with hardware or software?",
        options: ["Hardware", "Software"],
        points: ["hardware", "software"]
    },
    {
        text: "Do you prefer building things or solving problems?",
        options: ["Building things", "Solving problems"],
        points: ["developer", "problem-solver"]
    },
    {
        text: "Are you interested in cybersecurity?",
        options: ["Yes", "No"],
        points: ["cybersecurity", "other"]
    },
    {
        text: "Do you like managing projects and teams?",
        options: ["Yes", "No"],
        points: ["management", "technical"]
    },
    {
        text: "Do you prefer cloud-based technologies or on-premises infrastructure?",
        options: ["Cloud-based", "On-premises"],
        points: ["cloud", "infrastructure"]
    }
    ];

    const results = {
    "hardware": "Hardware Engineer, Network Engineer",
    "software": "Software Developer, Application Developer",
    "cybersecurity": "Cybersecurity Specialist, Ethical Hacker",
    "cloud": "Cloud Engineer, DevOps Engineer",
    "infrastructure": "System Administrator, Network Administrator",
    "developer": "Web Developer, Software Engineer",
    "problem-solver": "Data Scientist, IT Support Specialist",
    "management": "Project Manager, IT Manager",
    "technical": "IT Consultant, Systems Analyst"
};

    let currentQuestion = 0;
    let answers = [];

    function renderQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options
    .map(
    (option, index) => `
                    <div class="option" onclick="selectOption('${question.points[index]}')">
                        ${option}
                    </div>
                `
    )
    .join("")}
            </div>
        `;
}

    function selectOption(point) {
    answers[currentQuestion] = point;
    document.querySelectorAll(".option").forEach(option => option.classList.remove("selected"));
    document.querySelector(`.option:nth-child(${answers[currentQuestion] === point ? answers.indexOf(point) + 1 : 1})`).classList.add("selected");
}

    function nextQuestion() {
    if (!answers[currentQuestion]) {
    alert("Please select an option before proceeding.");
    return;
}
    currentQuestion++;
    if (currentQuestion >= questions.length) {
    showResults();
} else {
    renderQuestion();
}
}

    function prevQuestion() {
    if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
}
}

    function showResults() {
    const resultsContainer = document.getElementById("results");
    const resultText = document.getElementById("career-result");

    const careerSuggestions = answers
    .map(answer => results[answer])
    .filter((value, index, self) => value && self.indexOf(value) === index)
    .join(", ");

    resultText.innerText = careerSuggestions || "No specific career path found.";
    document.getElementById("career-quiz").classList.add("hidden");
    resultsContainer.classList.remove("hidden");
}

    renderQuestion();
</script>
