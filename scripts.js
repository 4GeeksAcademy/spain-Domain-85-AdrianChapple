window.onload = generateNames

// Hice para masculino y femenino también

let pronoun = {
    masculine: ['nuestro', 'vuestro', 'mi', 'su', 'tu'],
    feminine: ['nuestra', 'vuestra', 'mi', 'su', 'tu'],
};

let adj = {
    masculine: ['increible', 'super', 'supermega', 'triste', 'apneico', 'escueto'],
    feminine: ['increible', 'super', 'supermega', 'triste', 'apneica', 'escueta'],
}

let noun = [
    {word: 'neurona', gender: 'feminine'},
    {word: 'chuleta', gender: 'feminine'},
    {word: 'colega', gender: 'masculine'},
    {word: 'monarca', gender: 'masculine'},
    {word: 'arpia', gender: 'feminine'},
    {word: 'chotis', gender: 'masculine'},
    {word: 'anomia', gender: 'feminine'},
    {word: 'botones', gender: 'masculine'},
    {word: 'internet', gender: 'masculine'},
]

let domain = ['.com', '.es', '.org', '.net']

function generateNames() {
    let generatedNames = ""
    for(let i = 0; i < noun.length; i++) {
        let gender = noun[i].gender // Cogemos el gender del primer noun
        for (let j = 0; j < pronoun[gender].length; j++) { // Lo usamos para acceder a la variable género de cada propiedad y sacamos la palabra correcta
            for (let k = 0; k < adj[gender].length; k++) {
                for (let d = 0; d < domain.length; d++) {
                    if (noun[i].word.endsWith('es') && domain[d] === '.es') { // Comprobación de si termina el noun en 'es'
                        generatedNames += `<p> ${pronoun[gender][j] + adj[gender][k] + noun[i].word.slice(0,-2) + domain[d]} </p>`; // Borramos el 'es' del noun y seguimos para delante
                    } else if(noun[i].word.endsWith('net') && domain[d] === '.net') { 
                        generatedNames += `<p> ${pronoun[gender][j] + adj[gender][k] + noun[i].word.slice(0,-3) + domain[d]} </p>`; // Borramos el 'net' del noun y seguimos para delante
                    } else {
                    generatedNames += `<p> ${pronoun[gender][j] + adj[gender][k] + noun[i].word + domain[d]} </p>`; // Incluimos <p> para que aparezca reflejado en html
                    }
                }
            }
        }
    }
    return generatedNames;
}

generateNames();

document.getElementById("generate").innerHTML = generateNames(); // Sustituimos el <p> con id de generate por el output de nuestra función