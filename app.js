const correctAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');

const formInput = document.querySelector('.quiz-form');

formInput.addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const userAnswers = [formInput.q1.value, formInput.q2.value, formInput.q3.value, formInput.q4.value]

    userAnswers.forEach(function(answer, index) {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    })

    window.scrollTo(0, 0);
    result.classList.remove('d-none');
    
    let output = 0;
    const stopScore = setInterval(function() {
        
        // show result
        result.querySelector('span').textContent = `${output}%`;

        if(output === score) {
            clearInterval(stopScore);
        } else {
            output++
        }
    }, 10)
})