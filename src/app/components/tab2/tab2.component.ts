import { Component } from '@angular/core';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import { JsonPipe, NgFor } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  standalone: true,
  imports: [CdkListbox, NgFor, CdkOption, JsonPipe,CdkDrag]
})
export class Tab2Component {
  toppings = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];
  order: readonly string[] = [];
}
