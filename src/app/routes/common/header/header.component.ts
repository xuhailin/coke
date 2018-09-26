import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

const datas = [
    { name: '首页', link: '/home'},
    { name: '搜索', link: '/search'},
    { name: '关于', link: '/about'},
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navDatas =  datas;

  constructor() { 
  }

  ngOnInit() {
  }

}