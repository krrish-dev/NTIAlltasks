import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 parent = "parent component"
 articles : any[]=[
   {articleName : "article 1", articleValue:"hello From Aricle 1 "},
   {articleName : "article 2", articleValue:"hello From Aricle 2 "},
   {articleName : "article 3", articleValue:"hello From Aricle 3 "},
   {articleName : "article 4", articleValue:"hello From Aricle 4 "},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
