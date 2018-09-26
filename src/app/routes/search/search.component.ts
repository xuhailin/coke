import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const all = [{
  "id": "show-css",
  "content": "CSS效果展示"
}, {}, {}, {},{},{},{},{},{}]
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  reversal = all;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  showEffect(id) {
    if (id) {
      this.router.navigate(['/search', id]);
    }
  }
}
