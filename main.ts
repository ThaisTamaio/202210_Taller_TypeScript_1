import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgTemporadas: HTMLElement = document.getElementById("avg-temporadas")!;

renderSeriesInTable(series);
avgTemporadas.innerHTML = `${getPromedioTemporadas(series)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="bold-font">${serie.posicion}</td>
                           <td class="color-blue">${serie.titulo}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
  let promedioTemporadas: number = 0;
  series.forEach((serie) => promedioTemporadas = promedioTemporadas + serie.temporadas);
  return promedioTemporadas / series.length;
}


