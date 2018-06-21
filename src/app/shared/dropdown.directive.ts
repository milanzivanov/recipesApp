import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})


export class DropdownDirective {

  constructor(private _el: ElementRef) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');

  }

}

// course way
// export class DropdownDirective {
//   @HostBinding('class.show') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }
