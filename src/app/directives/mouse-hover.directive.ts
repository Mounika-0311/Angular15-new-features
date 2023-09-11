import { Directive } from '@angular/core';
import { FontStyleDirective } from './font-style.directive';
import { FontColorDirective } from './font-color.directive';

@Directive({
  selector: '[appMouseHover]',
   /*------ Combination of two directives ------*/
   hostDirectives:[
    {
      directive: FontStyleDirective,
      outputs: ['hover']
    },
    {
      directive: FontColorDirective,
      inputs:['color'],
      // inputs:['color: colorChange'] ------it will give color which we assigned in the fontColorDirective
    }
  ]
})
export class MouseHoverDirective {

  constructor() { }

}
