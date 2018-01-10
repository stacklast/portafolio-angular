import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;
  constructor( private  http:Http ) {
    this.cargar_productos();
  }
  public buscar_producto( termino:string ){

    //console.log('buscando productos');

    if(this.productos.length == 0 ){

        this.cargar_productos().then(()=>{
          this.filtrar_productos( termino );
        });
    }
    else{
      this.filtrar_productos( termino );
    }
  }

  private filtrar_productos( termino:string ){
    this.productos_filtrado = []; //limpia para que no se agregue sobre el mismo debido sl push
    termino = termino.toLowerCase();
    this.productos.forEach(prod=>{
      //console.log(prod);
      if(prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0){
        this.productos_filtrado.push(prod);
        //console.log(prod);
      }
    });
  }

  public cargar_productos(){

    this.cargando = true;
    let promesa = new Promise( ( resolve , reject ) =>{

    //if( this.productos.length == 0 ){
      this.http.get("https://paginaweb-a2854.firebaseio.com/productos_idx.json")
                .subscribe(
                  res=>{
                    //console.log(res.json());
                    this.cargando = false;
                    this.productos = res.json();
                    resolve()
                  });
    //}
      });
      return promesa;
  }

  public cargar_producto( cod:string ){
    return this.http.get(`https://paginaweb-a2854.firebaseio.com/productos/${ cod }.json`);
  }

}
