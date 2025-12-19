import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appReadonly]',
  standalone: true,
})
export class ReadonlyDirective implements OnChanges {
  @Input() appReadonly = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appReadonly) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.6');
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'opacity');
      this.renderer.removeStyle(this.el.nativeElement, 'pointer-events');
    }
  }
}
