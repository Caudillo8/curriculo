const texto = document.getElementById("automatic");
const maquina = (text = "", tiempo = 200, etiqueta = "") => {
  let cantidad = text.split("");
  let cant = cantidad.length;
  alert(cant);
  etiqueta.innerHTML = "";
  let cont = 0;
  let escribir = setInterval(function () {
    etiqueta.innerHTML += cantidad[cont];
    console.log(cont);
    if (cont === cant - 1) {
      clearInterval(escribir);
    } else {
      cont++;
    }
  }, tiempo);
};

maquina(
  "Hola! Me llamo Matías, actualmente curso la Tecnicatura en Programación en la UTN. Me resta 1 materia (metodología de sistemas) para finalizar. Trabajo como personal administrativo en el Ministerio de Seguridad de la Pcia. de Buenos Aires. Estoy buscando posiciones en las cuales desarrollar los conocimientos adquiridos en la carrera.",
  40,
  texto
);
