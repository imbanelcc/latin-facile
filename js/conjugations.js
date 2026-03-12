const conjugations = {
    1: {
        name: "1ère conjugaison (amo, amare - aimer)",
        active: {
            present: {
                je: "amō",
                tu: "amās",
                il: "amat",
                nous: "amāmus",
                vous: "amātis",
                ils: "amant"
            },
            imperfect: {
                je: "amābam",
                tu: "amābās",
                il: "amābat",
                nous: "amābāmus",
                vous: "amābātis",
                ils: "amābant"
            }
        },
        passive: {
            present: {
                je: "amor",
                tu: "amāris",
                il: "amātur",
                nous: "amāmur",
                vous: "amāminī",
                ils: "amantur"
            },
            imperfect: {
                je: "amābar",
                tu: "amābāris",
                il: "amābātur",
                nous: "amābāmur",
                vous: "amābāminī",
                ils: "amābantur"
            }
        }
    },
    2: {
        name: "2ème conjugaison (moneo, monere - avertir)",
        active: {
            present: {
                je: "moneō",
                tu: "monēs",
                il: "monet",
                nous: "monēmus",
                vous: "monētis",
                ils: "monent"
            },
            imperfect: {
                je: "monēbam",
                tu: "monēbās",
                il: "monēbat",
                nous: "monēbāmus",
                vous: "monēbātis",
                ils: "monēbant"
            }
        },
        passive: {
            present: {
                je: "moneor",
                tu: "monēris",
                il: "monētur",
                nous: "monēmur",
                vous: "monēminī",
                ils: "monentur"
            },
            imperfect: {
                je: "monēbar",
                tu: "monēbāris",
                il: "monēbātur",
                nous: "monēbāmur",
                vous: "monēbāminī",
                ils: "monēbantur"
            }
        }
    },
    3: {
        name: "3ème conjugaison (lego, legere - lire)",
        active: {
            present: {
                je: "legō",
                tu: "legis",
                il: "legit",
                nous: "legimus",
                vous: "legitis",
                ils: "legunt"
            },
            imperfect: {
                je: "legēbam",
                tu: "legēbās",
                il: "legēbat",
                nous: "legēbāmus",
                vous: "legēbātis",
                ils: "legēbant"
            }
        },
        passive: {
            present: {
                je: "legor",
                tu: "legeris",
                il: "legitur",
                nous: "legimur",
                vous: "legiminī",
                ils: "leguntur"
            },
            imperfect: {
                je: "legēbar",
                tu: "legēbāris",
                il: "legēbātur",
                nous: "legēbāmur",
                vous: "legēbāminī",
                ils: "legēbantur"
            }
        }
    },
    "3m": {
        name: "3ème mixte (capio, capere - prendre)",
        active: {
            present: {
                je: "capiō",
                tu: "capis",
                il: "capit",
                nous: "capimus",
                vous: "capitis",
                ils: "capiunt"
            },
            imperfect: {
                je: "capiēbam",
                tu: "capiēbās",
                il: "capiēbat",
                nous: "capiēbāmus",
                vous: "capiēbātis",
                ils: "capiēbant"
            }
        },
        passive: {
            present: {
                je: "capior",
                tu: "caperis",
                il: "capitur",
                nous: "capimur",
                vous: "capiminī",
                ils: "capiuntur"
            },
            imperfect: {
                je: "capiēbar",
                tu: "capiēbāris",
                il: "capiēbātur",
                nous: "capiēbāmur",
                vous: "capiēbāminī",
                ils: "capiēbantur"
            }
        }
    },
    4: {
        name: "4ème conjugaison (audio, audire - entendre)",
        active: {
            present: {
                je: "audiō",
                tu: "audīs",
                il: "audit",
                nous: "audīmus",
                vous: "audītis",
                ils: "audiunt"
            },
            imperfect: {
                je: "audiēbam",
                tu: "audiēbās",
                il: "audiēbat",
                nous: "audiēbāmus",
                vous: "audiēbātis",
                ils: "audiēbant"
            }
        },
        passive: {
            present: {
                je: "audior",
                tu: "audīris",
                il: "audītur",
                nous: "audīmur",
                vous: "audīminī",
                ils: "audiuntur"
            },
            imperfect: {
                je: "audiēbar",
                tu: "audiēbāris",
                il: "audiēbātur",
                nous: "audiēbāmur",
                vous: "audiēbāminī",
                ils: "audiēbantur"
            }
        }
    }
};

function displayConjugation(type, voice, tense) {
    const conj = conjugations[type];
    const container = document.getElementById('conjugation-table');
    
    const voiceText = voice === 'active' ? 'Active' : 'Passive';
    const tenseText = tense === 'present' ? 'Présent' : 'Imparfait';
    
    let html = `
        <h3>${conj.name} - Voix ${voiceText} - ${tenseText}</h3>
        <table>
            <thead>
                <tr>
                    <th>Personne</th>
                    <th>Conjugaison</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    const persons = [
        { key: 'je', label: '1ère pers. sing.' },
        { key: 'tu', label: '2ème pers. sing.' },
        { key: 'il', label: '3ème pers. sing.' },
        { key: 'nous', label: '1ère pers. plur.' },
        { key: 'vous', label: '2ème pers. plur.' },
        { key: 'ils', label: '3ème pers. plur.' }
    ];
    
    persons.forEach(person => {
        html += `
            <tr>
                <td><strong>${person.label}</strong></td>
                <td>${conj[voice][tense][person.key]}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
}