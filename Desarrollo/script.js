const botonGenerar = document.getElementById("generar");
const mensaje = document.getElementById("mensaje");
const contenedorPaleta = document.getElementById("paleta");


function generarPaleta() {
    const hojaColores = document.getElementById("colores-dinamicos").sheet;

    const cantidad = Number(
        document.querySelector('input[name="cantidad"]:checked').value
    );

    const colores = [];

    contenedorPaleta.replaceChildren();

    // Borramos las reglas de los colores anteriores.
    while (hojaColores.cssRules.length > 0) {
        hojaColores.deleteRule(0);
    }

    // Generamos la lista de colores.
    for (let i = 0; i < cantidad; i++) {
        colores.push(generarColor());
    }

    // Creamos una tarjeta y una regla CSS para cada color.
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];
        const claseColor = `color-${i}`;

        hojaColores.insertRule(
            `.${claseColor} { background-color: ${color}; }`,
            hojaColores.cssRules.length
        );

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-color");

        const muestra = document.createElement("div");
        muestra.classList.add("muestra-color", claseColor);

        const codigo = document.createElement("p");
        codigo.textContent = color;

        tarjeta.append(muestra, codigo);
        contenedorPaleta.append(tarjeta);
    }

    mensaje.textContent = `Se generaron ${cantidad} colores.`;
}

botonGenerar.addEventListener("click", generarPaleta);

function generarColor() {
    const tono = Math.floor(Math.random() * 360);
    const saturacion = Math.floor(Math.random() * 31) + 60;
    const luminosidad = Math.floor(Math.random() * 21) + 40;

    return convertirHslAHex(tono, saturacion, luminosidad);
}

function convertirHslAHex(tono, saturacion, luminosidad) {
    const s = saturacion / 100;
    const l = luminosidad / 100;

    const amplitud = s * Math.min(l, 1 - l);

    function calcularCanal(numero) {
        const posicion = (numero + tono / 30) % 12;

        const intensidad = l - amplitud * Math.max(
            -1,
            Math.min(posicion - 3, 9 - posicion, 1)
        );

        return Math.round(255 * intensidad)
            .toString(16)
            .padStart(2, "0");
    }

    const rojo = calcularCanal(0);
    const verde = calcularCanal(8);
    const azul = calcularCanal(4);

    return `#${rojo}${verde}${azul}`.toUpperCase();
}