import { Injectable } from '@angular/core';

@Injectable()
export class DniService {

  constructor() { }

  getRandomDni() {
  	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  	let letraDni;
  	let numLetra = 0;
  	let numDni = 0;
  	let randomNum = 0;
  	do{
	  	randomNum = Math.floor(Math.random() * 99999999) + 0;
	  	numDni += randomNum; 
	  	numLetra = numDni % 23;
	  	letraDni = letras[numLetra];
  	}while(letraDni == undefined);
  	
    return numDni + letraDni;
  }

}
