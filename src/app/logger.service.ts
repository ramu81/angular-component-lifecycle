import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  log: string[] = [];
  
  constructor() { }
  
  info(msg: string) { 
	console.log(msg); 
	this.log.push(msg);
  }
}
