import { series } from './data.js';
//Variables obtenidas de data.ts:
var seriesTbody = document.getElementById('series');
var card = document.getElementById('card');
var card_image = document.getElementById('imagen-serie');
var card_tittle = document.getElementById('titulo-serie');
var card_text = document.getElementById('descripcion-serie');
var card_link = document.getElementById('link-serie');
//Variables calculadas:
var avgTemporadas = document.getElementById("avg-temporadas");
renderSeriesInTable(series);
avgTemporadas.innerHTML = "".concat(getPromedioTemporadas(series));
//Funciones:
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var tdElement = document.createElement("td");
        var spanElement = document.createElement("span");
        var posicionActual = serie.posicion - 1;
        trElement.classList.add('columnas-grises');
        tdElement.innerHTML = "".concat(serie.posicion);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        spanElement.innerHTML = "".concat(serie.titulo);
        spanElement.classList.add('boton');
        spanElement.onclick = function () { return seleccionSerie(posicionActual); };
        tdElement.appendChild(spanElement);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = "".concat(serie.canal);
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = "".concat(serie.temporadas);
        trElement.appendChild(tdElement);
        seriesTbody.appendChild(trElement);
    });
}
//Función que calcula el promedio de temporadas:
function getPromedioTemporadas(series) {
    var promedioTemporadas = 0;
    series.forEach(function (serie) { return promedioTemporadas = promedioTemporadas + serie.temporadas; });
    var promedio = promedioTemporadas / series.length;
    return promedio;
}
//"Event Listener":
function seleccionSerie(infoSeries) {
    var serie = series[infoSeries];
    card.style.display = "block";
    card_image.src = serie.imagen;
    card_tittle.innerHTML = serie.titulo;
    card_text.innerHTML = serie.descripcion;
    card_link.innerHTML = serie.link;
    card_link.href = serie.link;
}
