import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedText]'
})
export class RedTextDirective {

  constructor(el: ElementRef) {

    el.nativeElement.style.color = 'red';

  }

}
