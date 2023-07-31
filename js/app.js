console.log("------------ Ejercicio A ------------");

for (var cantidadDeGatos = 1; cantidadDeGatos <= 10; cantidadDeGatos++) {
    if (cantidadDeGatos % 3 === 1) {
        console.log("Gato #" + cantidadDeGatos + ": 😺");
    } else if (cantidadDeGatos % 3 === 2) {
        console.log("Gato #" + cantidadDeGatos + ": 😸");
    } else {
        console.log("Gato #" + cantidadDeGatos + ": 😹");
    }
}