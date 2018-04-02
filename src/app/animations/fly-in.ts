import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyIn = trigger('flyIn', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate(200, keyframes([
      style({opacity: 0, transform: 'translate3d(0, 30px, 0)', offset: 0}),
      style({opacity: 1, transform: 'translate3d(0, 0, 0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(200, keyframes([
      style({opacity: 1, transform: 'translate3d(0, 0, 0)',     offset: 0}),
      style({opacity: 0, transform: 'translate3d(0, -30px, 0)',  offset: 1.0})
    ]))
  ])
]);
