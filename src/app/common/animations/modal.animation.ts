import { trigger, transition, style, animate } from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.3s', style({ transform: 'scale(1)' })),
    ]),
    transition(':leave', [
        animate('0.3s', style({ transform: 'scale(0)' }))
    ])
]);

export const openCloseMaskAnimation = trigger('openCloseMask', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
    ])
]);
