export class Serie {
    posicion: number;
    titulo:string;
    canal:string;
    temporadas: number;
    descripcion:string;
    link:string;
    imagen:string;
  
    constructor(posicion: number, titulo:string, canal:string, temporadas:number, descripcion:string, link:string, imagen:string) {
        this.posicion = posicion;
        this.titulo = titulo;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}