// Анимация слайдера
let index = 0;
const slides = document.querySelector('.slides');
function showNextSlide() {
    index++;
    if (index === 3) index = 0; // 3 - количество слайдов
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showNextSlide, 3000);

// Викторина
document.getElementById('startQuiz').addEventListener('click', () => {
    const quizMessage = document.getElementById('quizMessage');
    quizMessage.textContent = "Ответ: Ты 100% милая, Хади!";
});

// Анимация фона
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 50; i++) {
    hearts.push({
        x: Math.random()
      
