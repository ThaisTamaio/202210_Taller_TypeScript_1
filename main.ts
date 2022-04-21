import { Serie } from './serie.js';
import { series } from './data.js';


//Variables obtenidas de data.ts:

let seriesTbody: HTMLElement = document.getElementById('series')!;
let card: HTMLElement = document.getElementById('card')!;
let card_image: HTMLImageElement = document.getElementById('imagen-serie')! as HTMLImageElement;
let card_tittle: HTMLElement = document.getElementById('titulo-serie')!;
let card_text: HTMLElement = document.getElementById('descripcion-serie')!;
let card_link: HTMLAnchorElement = document.getElementById('link-serie')! as HTMLAnchorElement;


//Variables calculadas:

const avgTemporadas: HTMLElement = document.getElementById("avg-temporadas")!;

renderSeriesInTable(series);
avgTemporadas.innerHTML = `${getPromedioTemporadas(series)}`


//Funciones:

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {

    let trElement = document.createElement("tr");
    let tdElement = document.createElement("td");
    let spanElement = document.createElement("span");
    let posicionActual = serie.posicion - 1

    trElement.classList.add('columnas-grises');

    tdElement.innerHTML = `${serie.posicion}`;
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    spanElement.innerHTML = `${serie.titulo}`;
    spanElement.classList.add('boton');
    spanElement.onclick = () => seleccionSerie(posicionActual);
    tdElement.appendChild(spanElement);
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.canal}`;
    trElement.appendChild(tdElement);

    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.temporadas}`;
    trElement.appendChild(tdElement);
    seriesTbody.appendChild(trElement);
  });
}


//Función que calcula el promedio de temporadas:

function getPromedioTemporadas(series: Serie[]): number {
  let promedioTemporadas: number = 0;
  series.forEach((serie) => promedioTemporadas = promedioTemporadas + serie.temporadas);
  let promedio: number = promedioTemporadas / series.length;
  return promedio;
}


//"Event Listener":

function seleccionSerie(infoSeries: any) {
  let serie = series[infoSeries];

  card.style.display = "block";
  card_image.src = serie.imagen;
  card_tittle.innerHTML = serie.titulo;
  card_text.innerHTML = serie.descripcion;
  card_link.innerHTML = serie.link;
  card_link.href = serie.link;
}


