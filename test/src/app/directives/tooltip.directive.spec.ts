import { ElementRef, Renderer2 } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
let el: ElementRef
let render: Renderer2

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(el, render);
    expect(directive).toBeTruthy();
  });
});
