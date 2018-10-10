import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'show-css',
  templateUrl: './show-css.component.html',
  styleUrls: ['./show-css.component.scss'],
  animations: [
    trigger('showNav', [
      state('show', style({ 
        opacity: 1, 
        height: '70px',
      })),
      state('hidden', style({
        opacity: 0,
        height: 0,
      })),
      transition('show => hidden', animate('100ms ease-in')),
      transition('hidden => show', animate('100ms ease-out')),
    ])
  ]
})
export class ShowCssComponent implements OnInit {
  range: number[] = [];
  showNavState: string = 'hidden';
  showNavIcon = faAngleDoubleDown;

  constructor(private router: Router) {
    let i = 365;
    while (i > 1) {
      this.range.push(Math.floor(Math.random() * 3));
      i--;
    }
  }

  ngOnInit() {
  }

  goBack() {
     this.router.navigate(['/search']);
  }

  showNav() {
    if (this.showNavState === 'show') {
      this.showNavState = 'hidden';
      this.showNavIcon = faAngleDoubleDown;
    } else {
      this.showNavState = 'show';
      this.showNavIcon = faAngleDoubleUp;
    }
  }

  viewTopicById(id: string) {
    this.router.navigate(['/topic', id]);
  }
}