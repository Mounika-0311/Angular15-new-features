import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { FontColorDirective } from './font-color.directive';

@Directive({
  selector: '[appSontStyle]',
  standalone:true,
})
export class FontStyleDirective {

  @Output() hover = new EventEmitter();
  constructor(private element : ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.fontStyle = 'italic';
    this.hover.emit();
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.fontStyle = 'normal';
  }

}
