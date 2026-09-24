const botonGenerar = document.getElementById("generar");
const selectorCantidad = document.getElementById("cantidad");
const mensaje = document.getElementById("mensaje");
const contenedorPaleta = document.getElementById("paleta");

function generarColor() {
    const tono = Math.floor(Math.random() * 360);
    const saturacion = 70;
    const luminosidad = 60;

    return convertirHslAHex(tono, saturacion, luminosidad);
}

function generarPaleta() {
    const cantidad = Number(selectorCantidad.value);
    const colores = [];

    contenedorPaleta.replaceChildren();

    for (let i = 0; i < cantidad; i++) {
        const color = generarColor();
        colores.push(color);
    }

    for (const color of colores) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-color");

        const muestra = document.createElement("div");
        muestra.classList.add("muestra-color");
        muestra.style.backgroundColor = color;

        const codigo = document.createElement("p");
        codigo.textContent = color;

        tarjeta.append(muestra, codigo);
        contenedorPaleta.append(tarjeta);
    }

    mensaje.textContent = `Se generaron ${cantidad} colores.`;
}

botonGenerar.addEventListener("click", generarPaleta);

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