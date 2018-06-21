import {
  Directive,
  OnInit, ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit {

  @HostBinding( 'style.backgroundColor' ) backgroundColor = 'transparent';
  constructor(
    private _elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this._elRef.nativeElement, 'background-color', 'orange');
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this._elRef.nativeElement, 'background-color', 'orange'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this._elRef.nativeElement, 'background-color', 'pink'
    // );
    this.backgroundColor = 'transparent';
  }


}
