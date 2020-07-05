import { Component, OnChanges, SimpleChanges, Input, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {
  @Input() name: string;
    
  constructor(private logger: LoggerService) { }

  ngOnChanges(changes: SimpleChanges) {
	  for (let propName in changes) {
		let chng = changes[propName];
		let cur  = JSON.stringify(chng.currentValue);
		let prev = JSON.stringify(chng.previousValue);
		this.logger.info(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
		}
	}
}
