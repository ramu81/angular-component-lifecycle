import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
	
  private lName = '';
  @ViewChild(ChildComponent) child: ChildComponent;
  
  constructor(private logger: LoggerService) { }
  ngAfterViewChecked(): void { 
	  if (this.lName === this.child.lName) {
      this.logger.info('AfterViewChecked (no change)');
    } else {
      this.lName = this.child.lName;
      this.logger.info('AfterViewChecked');
      this.doSomething();
    }
  }
  ngAfterViewInit() : void { 
	this.logger.info('AfterViewComponent: ngAfterViewInit');
	this.doSomething();
	}
  
  private doSomething() {
  let c = this.child.lName.length > 10 ? `That's a long name` : '';
  
}
  
}
