import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando:boolean = true;
  constructor( private  http:Http ) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    if( this.productos.length == 0 ){
      this.http.get("https://paginaweb-a2854.firebaseio.com/productos_idx.json")
                .subscribe(
                  res=>{
                    console.log(res.json());
                    this.cargando = false;
                    this.productos = res.json();
                  });
    }
  }

  public cargar_producto( cod:string ){
    return this.http.get(`https://paginaweb-a2854.firebaseio.com/productos/${ cod }.json`);
  }

}
