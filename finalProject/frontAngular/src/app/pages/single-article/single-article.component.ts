import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
@Input() article:any
  constructor() { }

  ngOnInit(): void {
  }

}
