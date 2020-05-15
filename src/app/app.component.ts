import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluacion';

  arregloMostrar:any [] = [];
  pageActual:number = 1;
  checkModel:string;

  coincidencias:number = 0;

  cargando:boolean = false;

  arreglo = [];

  combinacion(termino:string){



    /*Se captura la palabra que viene desde el input y se convierte a un array para separarlas */
    let arrayPalabras = termino.split('');

    /*Se guarda el arreglo en una variable llamada cadena */
    var cadena = arrayPalabras;
    /* se crea un variable p donde contendra la informacion que se retorna de la combinacion de palabras
    pasando como parametros la cadena que es el arreglo y la longitud de la palabra que se desea buscar se coloca el -1 para omitir la posicion 0 */
    var p = this.combinacionPalabras(cadena,termino.length-1);

     /*Se guarda la informacion retornada de la funcion en p y se le asigna a un arreglo que contendra la informacion que se va a mostrar en la tabla */
    this.arregloMostrar = p;
    this.coincidencias = p.length;
   }


  /*Se recibe dos arumentos el arreglo y la longitud  */
  combinacionPalabras(arr,lgtn){

    /*se valida que la longitud de la letra ingresada sea mayor a 1 o no este sin definir esto para que el programa no se rompa al realizar el calculo
    *si viene vacia se asigna asigna un 1
    */
    if(lgtn  < 1 || lgtn == undefined){
      lgtn = 1;
    }


   /* se valida si la lgtn es 1 si es asi se envia como parametros a la funcion combinacionesIndice */
    if(lgtn == 1){
        return this.combinacionesIndices(arr,0,arr,0);
    }
    /*Si tiene informacion se pasa como parametro el arreglo que viene de combinacion que corresponde a splic de la palabra que se indico buscar
      *como indice que asigna el 0 ya que es la primera posicion de un arreglo y la funcion combinacionPalabras con su arreglo de palabra y la longitud agregando
      *una nueva posicion para un arreglo nuevo
      */
    return this.combinacionesIndices(arr,0,this.combinacionPalabras(arr,lgtn-1),0);
}

/* se recibe como argumento el array que viene de la funcion combinacionpalabras que a su vez de combinacion,la posicion 0 ,el arreglo que retorna
  la funcion combinacionPalabras con la longitud de la palabra a buscar y la posicion 0
 */
  combinacionesIndices(array1,index1,array2,index2){

    //Se crea una variable info para guardar las posicion de la palabra a buscar que se realizo con el splic
      var info;
      /* se verifica si es un arreglo lo que pasamos como argumento del arreglo2 que es el array de palabras con la posicion index2que corresponde a
      *la posicion numero 0
      */
      if(Array.isArray(array2[index2])){
        /*se crea un arreglo  bidimensional quue corresponde al array1 que es el arreglo de palabras con la posicion 0 que viene del argumento,
        *se concatena a ese arreglo el arra2 que corresponde a lo retornado de la funcion combinacionpalabras con el index2 que es un 0 que se pasa
        *como parametro
        */
          info = [array1[index1]].concat(array2[index2]);
      }
      else{
          /*si no es un arreglo se crea un array bidimensinal con la informacion como esta en bruto */
          info = [array1[index1],array2[index2]];
      }

      /**se crea un variable donde se guardara el indice siguiente del index1 que viene como 0 validando con un operador ternario
       * si index1 que en su primera viene como 0 se le suma 1 corresponde a la longitud del arreglo que se desea buscar si es asi
       * se coloca asigna el 0 a la variable index1sig si no es asi va sumando a la posicion que viene dle index1
       */

      var index1Sig = (index1 + 1 == array1.length ? 0: index1 + 1);

      /**
       * se realiza el mismo procedimiento para el index2 que corresponde al 0 validando si index1siguiente tiene un 0 a index2siguiente se
       * le suma un 1 quedando en su primer paso como 1 si no es asi se le asigna lo que viene del index2
       */

      var index2Sig = (index1Sig == 0 ? index2+1: index2);

      /* se valida si index2siguiente tiene la misma longitud del arreglo 2 que viene del retorno de la funcion combinacion palabras
        *si es asi se retorna un arreglo vacio
       */
      if(index2Sig == array2.length){
          return [];
      }

      /* se concatena el arreglo bidimensional que tiene elemento a lo que retorno esta misma funcion pasando como parametros la informacion
      *del array1,index1siguiente,etc este proceso es igual a un iterador ya que por cada posicion que pase se le suma 1 a los indices
      realizando el proceso de iteracion
      */
      return [info].concat(this.combinacionesIndices(array1,index1Sig,array2,index2Sig));
  }


}
