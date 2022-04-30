import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
query:any
  constructor(private activate :ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.activate.snapshot.queryParamMap
    console.log(this.query)
    
  }

}
