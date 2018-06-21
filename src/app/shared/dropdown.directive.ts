import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
// export class DropdownDirective {
//   @HostBinding('class.show') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }


export class DropdownDirective {

  // private isOpen = false;
  constructor(private _el: ElementRef) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
      // this.isOpen = true;
      // this.isOpen = !this.isOpen;
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');

  }
  // @HostListener('document:click', ['$event.target']) close (targetElement) {
  //     const inside: boolean = this._el.nativeElement.contains(targetElement);
  //     if (!inside) {
  //         this.isOpen = false;
  //         this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
  //     }
  // }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

}
