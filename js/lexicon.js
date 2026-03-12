const lexicon = [
    // Noms
    { latin: "rosa, -ae", type: "noun", gender: "f.", translation: "la rose", declension: "1ère" },
    { latin: "dominus, -i", type: "noun", gender: "m.", translation: "le maître, le seigneur", declension: "2ème" },
    { latin: "templum, -i", type: "noun", gender: "n.", translation: "le temple", declension: "2ème" },
    { latin: "rex, regis", type: "noun", gender: "m.", translation: "le roi", declension: "3ème" },
    { latin: "corpus, corporis", type: "noun", gender: "n.", translation: "le corps", declension: "3ème" },
    { latin: "manus, -us", type: "noun", gender: "f.", translation: "la main", declension: "4ème" },
    { latin: "res, rei", type: "noun", gender: "f.", translation: "la chose, l'affaire", declension: "5ème" },
    { latin: "puella, -ae", type: "noun", gender: "f.", translation: "la jeune fille", declension: "1ère" },
    { latin: "puer, pueri", type: "noun", gender: "m.", translation: "l'enfant, le garçon", declension: "2ème" },
    { latin: "vir, viri", type: "noun", gender: "m.", translation: "l'homme", declension: "2ème" },
    { latin: "femina, -ae", type: "noun", gender: "f.", translation: "la femme", declension: "1ère" },
    { latin: "verbum, -i", type: "noun", gender: "n.", translation: "le mot, la parole", declension: "2ème" },
    { latin: "civitas, civitatis", type: "noun", gender: "f.", translation: "la cité, l'État", declension: "3ème" },
    { latin: "urbs, urbis", type: "noun", gender: "f.", translation: "la ville", declension: "3ème" },
    { latin: "miles, militis", type: "noun", gender: "m.", translation: "le soldat", declension: "3ème" },
    { latin: "nomen, nominis", type: "noun", gender: "n.", translation: "le nom", declension: "3ème" },
    { latin: "pater, patris", type: "noun", gender: "m.", translation: "le père", declension: "3ème" },
    { latin: "mater, matris", type: "noun", gender: "f.", translation: "la mère", declension: "3ème" },
    { latin: "dies, diei", type: "noun", gender: "m./f.", translation: "le jour", declension: "5ème" },
    { latin: "aqua, -ae", type: "noun", gender: "f.", translation: "l'eau", declension: "1ère" },
    
    // Verbes
    { latin: "amo, amare", type: "verb", translation: "aimer", conjugation: "1ère" },
    { latin: "moneo, monere", type: "verb", translation: "avertir, conseiller", conjugation: "2ème" },
    { latin: "lego, legere", type: "verb", translation: "lire, choisir", conjugation: "3ème" },
    { latin: "capio, capere", type: "verb", translation: "prendre, capturer", conjugation: "3ème mixte" },
    { latin: "audio, audire", type: "verb", translation: "entendre, écouter", conjugation: "4ème" },
    { latin: "laudo, laudare", type: "verb", translation: "louer, faire l'éloge de", conjugation: "1ère" },
    { latin: "paro, parare", type: "verb", translation: "préparer", conjugation: "1ère" },
    { latin: "do, dare", type: "verb", translation: "donner", conjugation: "1ère" },
    { latin: "habeo, habere", type: "verb", translation: "avoir, posséder", conjugation: "2ème" },
    { latin: "video, videre", type: "verb", translation: "voir", conjugation: "2ème" },
    { latin: "debeo, debere", type: "verb", translation: "devoir", conjugation: "2ème" },
    { latin: "scribo, scribere", type: "verb", translation: "écrire", conjugation: "3ème" },
    { latin: "dico, dicere", type: "verb", translation: "dire", conjugation: "3ème" },
    { latin: "facio, facere", type: "verb", translation: "faire", conjugation: "3ème mixte" },
    { latin: "venio, venire", type: "verb", translation: "venir", conjugation: "4ème" },
    { latin: "sum, esse", type: "verb", translation: "être", conjugation: "irrégulier" },
    
    // Adjectifs
    { latin: "bonus, -a, -um", type: "adj", translation: "bon", declension: "2-1-2" },
    { latin: "magnus, -a, -um", type: "adj", translation: "grand", declension: "2-1-2" },
    { latin: "malus, -a, -um", type: "adj", translation: "mauvais", declension: "2-1-2" },
    { latin: "parvus, -a, -um", type: "adj", translation: "petit", declension: "2-1-2" },
    { latin: "pulcher, pulchra, pulchrum", type: "adj", translation: "beau", declension: "2-1-2" },
    { latin: "liber, libera, liberum", type: "adj", translation: "libre", declension: "2-1-2" },
    { latin: "felix, felicis", type: "adj", translation: "heureux", declension: "3ème" },
    { latin: "fortis, -e", type: "adj", translation: "fort, courageux", declension: "3ème" },
    { latin: "omnis, -e", type: "adj", translation: "tout, chaque", declension: "3ème" },
    { latin: "tristis, -e", type: "adj", translation: "triste", declension: "3ème" },
    { latin: "acer, acris, acre", type: "adj", translation: "vif, ardent", declension: "3ème" }
];

function searchLexicon(query, filter = 'all') {
    const results = lexicon.filter(word => {
        const matchesQuery = word.latin.toLowerCase().includes(query.toLowerCase());
        const matchesFilter = filter === 'all' || word.type === filter;
        return matchesQuery && matchesFilter;
    });
    
    return results;
}

function displayLexiconResults(results) {
    const container = document.getElementById('lexicon-results');
    
    if (results.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">Aucun résultat trouvé.</p>';
        return;
    }
    
    let html = '';
    
    results.forEach(word => {
        const typeLabels = {
            noun: 'Nom',
            verb: 'Verbe',
            adj: 'Adjectif'
        };
        
        let details = '';
        if (word.type === 'noun') {
            details = `<div class="word-info"><strong>Genre:</strong> ${word.gender} | <strong>Déclinaison:</strong> ${word.declension}</div>`;
        } else if (word.type === 'verb') {
            details = `<div class="word-info"><strong>Conjugaison:</strong> ${word.conjugation}</div>`;
        } else if (word.type === 'adj') {
            details = `<div class="word-info"><strong>Déclinaison:</strong> ${word.declension}</div>`;
        }
        
        html += `
            <div class="word-card">
                <h3>${word.latin}</h3>
                <div class="word-info"><strong>Traduction:</strong> ${word.translation}</div>
                ${details}
                <span class="word-type">${typeLabels[word.type]}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}