import { Component, OnInit } from '@angular/core';
import {IngresoServicio} from '../ingreso/ingreso.service';
import {EgresoServicio} from '../egreso/egreso.service';
import {Ingreso} from '../ingreso/ingreso.model';
import {Egreso} from '../egreso/egreso.model';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
tipo:string="ing";
descripcionInput:string;
valorInput:number;
  
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit() {
  }
  tipoOperacion(evento){
  	this.tipo=evento.target.value;
  }
  agregarValor(){
  	if(this.tipo==="ing"){
  		this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
  	}else{
  		this.egresoServicio.egresos.push(new Egreso(this.descripcionInput,this.valorInput));
  	}
  }

}
