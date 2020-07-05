import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-view',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

lName = 'Kondapalli';
  constructor() { }

  ngOnInit(): void {
  }

}
