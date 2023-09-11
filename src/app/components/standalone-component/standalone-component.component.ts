import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.css'],
  standalone:true,
})
export class StandaloneComponentComponent implements OnInit {

  showTab: number = 1;
  constructor(private router :Router){ }
  ngOnInit(): void {
  }

  tab1() {
    this.showTab = 1;
    this.router.navigate(['/tab1'])
  }
  tab2() {
    this.showTab = 2;
    this.router.navigate(['/tab2'])
  }
  tab3() {
    this.showTab = 3;
    this.router.navigate(['/tab3'])
  }

}
