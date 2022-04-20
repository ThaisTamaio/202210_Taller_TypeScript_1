import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var avgTemporadas = document.getElementById("avg-temporadas");
renderSeriesInTable(series);
avgTemporadas.innerHTML = "".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"bold-font\">".concat(serie.posicion, "</td>\n                           <td class=\"color-blue\"><input type = \"button\" value = \"").concat(serie.titulo, "\" class=\"btn btn-link series-button\"></button></td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var promedioTemporadas = 0;
    series.forEach(function (serie) { return promedioTemporadas = promedioTemporadas + serie.temporadas; });
    return promedioTemporadas / series.length;
}
