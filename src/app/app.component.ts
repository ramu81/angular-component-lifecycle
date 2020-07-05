import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Ram';
  names: string[] = [name];
  logMsgs: string[] = [];
  constructor(private logger: LoggerService){}
  addName() {
	  this.names.push(this.name);
	  this.name='';
	  this.logMsgs = this.logger.log;
  }  
  
  deleteName(theName: string) {
	  if(this.names.length===1) {
		  this.names.pop();
	} else {
	  this.names = this.names.splice(this.names.findIndex((x)=> theName === x),1);
	}
  }
}
