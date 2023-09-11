import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-component',
  template: '<p>Example for Directive Composition API </p>',
  styleUrls: ['./normal-component.component.css']
})
export class NormalComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
