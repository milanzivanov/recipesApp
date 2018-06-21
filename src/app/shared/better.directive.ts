import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding( 'style.backgroundColor' ) backgroundColor: string;
  constructor(
    private _elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this._elRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this._elRef.nativeElement, 'background-color', 'orange'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this._elRef.nativeElement, 'background-color', 'pink'
    // );
    this.backgroundColor = this.defaultColor;
  }


}
