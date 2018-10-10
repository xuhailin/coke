import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of, Observable, Observer } from 'rxjs';
import marked from 'marked';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  articleName: string;
  articleContent;
  error = null;
  constructor(private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('id')))
    ).subscribe(d => {
      this.loadArticle(d);
    });

  }

  loadArticle(id: string) {
    this.http.get("assets/data/topic.json").subscribe(
      d => {
        this.articleName = d[id];
        fetch(`assets/data/articles/${this.articleName}.md`)
        .then(data => data.text())
        .then (text => {
          const content = text.trim();
          this.parseFrontMatter(content);
        })
      }
    );
  }
  
  parseFrontMatter(content: string) {
    this.articleContent = marked(content);
  }
}
