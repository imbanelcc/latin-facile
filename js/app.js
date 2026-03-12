// Navigation entre sections
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        
        // Update active nav button
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active section
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    });
});

// Déclinaisons
const declensionSelect = document.getElementById('declension-select');
if (declensionSelect) {
    declensionSelect.addEventListener('change', (e) => {
        displayDeclension(e.target.value);
    });
    // Afficher la première déclinaison par défaut
    displayDeclension('1');
}

// Conjugaisons
let currentVoice = 'active';
let currentTense = 'present';
let currentConjugation = '1';

const conjugationSelect = document.getElementById('conjugation-select');
if (conjugationSelect) {
    conjugationSelect.addEventListener('change', (e) => {
        currentConjugation = e.target.value;
        displayConjugation(currentConjugation, currentVoice, currentTense);
    });
}

document.querySelectorAll('.voice-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.voice-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentVoice = e.target.dataset.voice;
        displayConjugation(currentConjugation, currentVoice, currentTense);
    });
});

document.querySelectorAll('.tense-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tense-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentTense = e.target.dataset.tense;
        displayConjugation(currentConjugation, currentVoice, currentTense);
    });
});

// Afficher la première conjugaison par défaut
displayConjugation('1', 'active', 'present');

// Lexique
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.type;
        
        const query = document.getElementById('lexicon-search').value;
        const results = searchLexicon(query, currentFilter);
        displayLexiconResults(results);
    });
});

const searchBtn = document.getElementById('search-btn');
const lexiconSearch = document.getElementById('lexicon-search');

if (searchBtn && lexiconSearch) {
    searchBtn.addEventListener('click', () => {
        const query = lexiconSearch.value;
        const results = searchLexicon(query, currentFilter);
        displayLexiconResults(results);
    });
    
    lexiconSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = lexiconSearch.value;
            const results = searchLexicon(query, currentFilter);
            displayLexiconResults(results);
        }
    });
    
    // Afficher tous les mots par défaut
    displayLexiconResults(lexicon);
}

// Exercices
let currentExercise = null;
let userAnswers = [];

document.getElementById('generate-exercise')?.addEventListener('click', generateExercise);

function generateExercise() {
    const type = document.getElementById('exercise-type').value;
    const count = parseInt(document.getElementById('exercise-count').value);
    
    userAnswers = [];
    currentExercise = {
        type: type,
        questions: []
    };
    
    for (let i = 0; i < count; i++) {
        if (type === 'declension') {
            currentExercise.questions.push(generateDeclensionQuestion());
        } else if (type === 'conjugation') {
            currentExercise.questions.push(generateConjugationQuestion());
        } else if (type === 'vocabulary') {
            currentExercise.questions.push(generateVocabularyQuestion());
        } else if (type === 'translation') {
            currentExercise.questions.push(generateTranslationQuestion());
        }
    }
    
    displayExercise();
}

function generateDeclensionQuestion() {
    const declTypes = ['1', '2m', '2n', '3', '3n', '4', '5'];
    const declType = declTypes[Math.floor(Math.random() * declTypes.length)];
    const cases = ['nominatif', 'vocatif', 'accusatif', 'génitif', 'datif', 'ablatif'];
    const numbers = ['singular', 'plural'];
    
    const cas = cases[Math.floor(Math.random() * cases.length)];
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    
    const decl = declensions[declType];
    const answer = decl[number][cas];
    
    return {
        question: `Décline "${decl.name.match(/\(([^)]+)\)/)[1]}" au ${cas} ${number === 'singular' ? 'singulier' : 'pluriel'}`,
        answer: answer,
        type: 'declension'
    };
}

function generateConjugationQuestion() {
    const conjTypes = ['1', '2', '3', '3m', '4'];
    const conjType = conjTypes[Math.floor(Math.random() * conjTypes.length)];
    const voices = ['active', 'passive'];
    const tenses = ['present', 'imperfect'];
    const persons = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
    
    const voice = voices[Math.floor(Math.random() * voices.length)];
    const tense = tenses[Math.floor(Math.random() * tenses.length)];
    const person = persons[Math.floor(Math.random() * persons.length)];
    
    const conj = conjugations[conjType];
    const answer = conj[voice][tense][person];
    
    const personLabels = {
        je: '1ère pers. sing.',
        tu: '2ème pers. sing.',
        il: '3ème pers. sing.',
        nous: '1ère pers. plur.',
        vous: '2ème pers. plur.',
        ils: '3ème pers. plur.'
    };
    
    const voiceText = voice === 'active' ? 'voix active' : 'voix passive';
    const tenseText = tense === 'present' ? 'présent' : 'imparfait';
    
    return {
        question: `Conjugue "${conj.name.match(/\(([^)]+)\)/)[1]}" à la ${personLabels[person]}, ${voiceText}, ${tenseText}`,
        answer: answer,
        type: 'conjugation'
    };
}

function generateVocabularyQuestion() {
    const word = lexicon[Math.floor(Math.random() * lexicon.length)];
    
    return {
        question: `Traduis en français : "${word.latin}"`,
        answer: word.translation,
        type: 'vocabulary'
    };
}

function generateTranslationQuestion() {
    const word = lexicon[Math.floor(Math.random() * lexicon.length)];
    
    return {
        question: `Donne le mot latin pour : "${word.translation}"`,
        answer: word.latin,
        type: 'translation'
    };
}

function displayExercise() {
    const container = document.getElementById('exercise-content');
    document.getElementById('exercise-results').innerHTML = '';
    
    let html = '<div class="exercise-questions">';
    
    currentExercise.questions.forEach((q, index) => {
        html += `
            <div class="question">
                <h4>Question ${index + 1}</h4>
                <p>${q.question}</p>
                <input type="text" class="answer-input" data-index="${index}" placeholder="Votre réponse...">
            </div>
        `;
    });
    
    html += '</div><button class="submit-exercise">Valider mes réponses</button>';
    
    container.innerHTML = html;
    
    document.querySelector('.submit-exercise').addEventListener('click', checkExercise);
}

function checkExercise() {
    const inputs = document.querySelectorAll('.answer-input');
    let correct = 0;
    let results = [];
    
    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = currentExercise.questions[index].answer.toLowerCase();
        
        // Normalize answers (remove macrons and special chars for comparison)
        const normalizedUser = userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const normalizedCorrect = correctAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        const isCorrect = normalizedUser === normalizedCorrect;
        
        if (isCorrect) {
            correct++;
            input.style.borderColor = '#28a745';
        } else {
            input.style.borderColor = '#dc3545';
        }
        
        results.push({
            question: currentExercise.questions[index].question,
            userAnswer: input.value,
            correctAnswer: currentExercise.questions[index].answer,
            isCorrect: isCorrect
        });
    });
    
    displayResults(correct, currentExercise.questions.length, results);
}

function displayResults(correct, total, results) {
    const container = document.getElementById('exercise-results');
    const percentage = Math.round((correct / total) * 100);
    
    let html = `
        <div class="result-summary">
            <h3>Résultats</h3>
            <div class="score">${percentage}%</div>
            <p>Tu as obtenu <strong>${correct}/${total}</strong> bonnes réponses !</p>
        </div>
        
        <h3 style="margin-top: 30px;">Détails des réponses :</h3>
    `;
    
    results.forEach((result, index) => {
        const statusClass = result.isCorrect ? 'correct' : 'incorrect';
        const statusText = result.isCorrect ? '✓ Correct' : '✗ Incorrect';
        
        html += `
            <div class="question">
                <h4>Question ${index + 1} <span class="${statusClass}">${statusText}</span></h4>
                <p>${result.question}</p>
                <p><strong>Ta réponse :</strong> ${result.userAnswer || '(non répondu)'}</p>
                ${!result.isCorrect ? `<p><strong>Réponse correcte :</strong> ${result.correctAnswer}</p>` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth' });
}