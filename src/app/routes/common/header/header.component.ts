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
  @ViewChild('bottomLine') bottomLineRef: ElementRef;

  constructor() { 
  }

  ngOnInit() {
  }

  moveBottomLine($event: MouseEvent) {
     const target: any = $event.target;
     const width = target.parentNode.offsetWidth;
     const left = target.parentNode.offsetLeft;
     this.bottomLineRef.nativeElement.style.left = left + "px";
     this.bottomLineRef.nativeElement.style.width = width + "px";
  }
}