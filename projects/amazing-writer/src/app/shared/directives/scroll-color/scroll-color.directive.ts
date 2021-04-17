import {Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appScrollColor]'
})
export class ScrollColorDirective implements OnChanges {

  @Input() color?: 'rgb( 255 , 255, 255, 0)';

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addStyle(this.color);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    const scrollFactor = 200;
    const opacity = (window.pageYOffset / (scrollFactor / 2));
    const backgroundColorStyle = {'background-color': 'rgba(' + opacity * 10 + ', 255, 255, ' + opacity + ')'};
    this.addStyle(backgroundColorStyle);

    if (window.pageYOffset / scrollFactor > 1) {
      this.elementRef.nativeElement.classList.add('navbar-shadow');
    } else {
      this.elementRef.nativeElement.classList.remove('navbar-shadow');
    }
  }

  private addStyle(style: {}): void {
    Object.keys(style).forEach(newStyle => {
      this.renderer.setStyle(
        this.elementRef.nativeElement, `${newStyle}`, style[newStyle]);
    });
  }


}
