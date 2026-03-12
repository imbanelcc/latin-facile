const declensions = {
    1: {
        name: "1ère déclinaison (rosa, -ae, f.)",
        singular: {
            nominatif: "rosa",
            vocatif: "rosa",
            accusatif: "rosam",
            génitif: "rosae",
            datif: "rosae",
            ablatif: "rosā"
        },
        plural: {
            nominatif: "rosae",
            vocatif: "rosae",
            accusatif: "rosās",
            génitif: "rosārum",
            datif: "rosīs",
            ablatif: "rosīs"
        }
    },
    "2m": {
        name: "2ème déclinaison masculin (dominus, -i, m.)",
        singular: {
            nominatif: "dominus",
            vocatif: "domine",
            accusatif: "dominum",
            génitif: "dominī",
            datif: "dominō",
            ablatif: "dominō"
        },
        plural: {
            nominatif: "dominī",
            vocatif: "dominī",
            accusatif: "dominōs",
            génitif: "dominōrum",
            datif: "dominīs",
            ablatif: "dominīs"
        }
    },
    "2n": {
        name: "2ème déclinaison neutre (templum, -i, n.)",
        singular: {
            nominatif: "templum",
            vocatif: "templum",
            accusatif: "templum",
            génitif: "templī",
            datif: "templō",
            ablatif: "templō"
        },
        plural: {
            nominatif: "templa",
            vocatif: "templa",
            accusatif: "templa",
            génitif: "templōrum",
            datif: "templīs",
            ablatif: "templīs"
        }
    },
    3: {
        name: "3ème déclinaison (rex, regis, m.)",
        singular: {
            nominatif: "rex",
            vocatif: "rex",
            accusatif: "regem",
            génitif: "regis",
            datif: "regī",
            ablatif: "rege"
        },
        plural: {
            nominatif: "regēs",
            vocatif: "regēs",
            accusatif: "regēs",
            génitif: "regum",
            datif: "regibus",
            ablatif: "regibus"
        }
    },
    "3n": {
        name: "3ème déclinaison neutre (corpus, corporis, n.)",
        singular: {
            nominatif: "corpus",
            vocatif: "corpus",
            accusatif: "corpus",
            génitif: "corporis",
            datif: "corporī",
            ablatif: "corpore"
        },
        plural: {
            nominatif: "corpora",
            vocatif: "corpora",
            accusatif: "corpora",
            génitif: "corporum",
            datif: "corporibus",
            ablatif: "corporibus"
        }
    },
    4: {
        name: "4ème déclinaison (manus, -us, f.)",
        singular: {
            nominatif: "manus",
            vocatif: "manus",
            accusatif: "manum",
            génitif: "manūs",
            datif: "manuī",
            ablatif: "manū"
        },
        plural: {
            nominatif: "manūs",
            vocatif: "manūs",
            accusatif: "manūs",
            génitif: "manuum",
            datif: "manibus",
            ablatif: "manibus"
        }
    },
    5: {
        name: "5ème déclinaison (res, rei, f.)",
        singular: {
            nominatif: "rēs",
            vocatif: "rēs",
            accusatif: "rem",
            génitif: "reī",
            datif: "reī",
            ablatif: "rē"
        },
        plural: {
            nominatif: "rēs",
            vocatif: "rēs",
            accusatif: "rēs",
            génitif: "rērum",
            datif: "rēbus",
            ablatif: "rēbus"
        }
    }
};

function displayDeclension(type) {
    const decl = declensions[type];
    const container = document.getElementById('declension-table');
    
    let html = `
        <h3>${decl.name}</h3>
        <table>
            <thead>
                <tr>
                    <th>Cas</th>
                    <th>Singulier</th>
                    <th>Pluriel</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    const cases = ['nominatif', 'vocatif', 'accusatif', 'génitif', 'datif', 'ablatif'];
    
    cases.forEach(cas => {
        html += `
            <tr>
                <td><strong>${cas.charAt(0).toUpperCase() + cas.slice(1)}</strong></td>
                <td>${decl.singular[cas]}</td>
                <td>${decl.plural[cas]}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
}