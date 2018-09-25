import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';


@Component({
  selector: 'show-css',
  templateUrl: './show-css.component.html',
  styleUrls: ['./show-css.component.scss']
})
export class ShowCssComponent implements OnInit {
  range = [];
  Math = Math;
  constructor() {
    const source = range(1, 364);
    source.subscribe((value) => {
        this.range.push(value);
    })
  }

  ngOnInit() {
  }

}
