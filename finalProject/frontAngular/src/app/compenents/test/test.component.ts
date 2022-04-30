import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
flag = true
num =3
numArr:any[]=[
 {key : 1 , value : "one"},
 {key : 2 , value : "two"},
 {key : 3 , value : "three"},
]
monthArr:any[]=[
  {key: 1, value:'jan'},
  {key: 2, value:'feb'},
  {key: 3, value:'mar'},
  {key: 4, value:'April'},
  {key: 5, value:'May'},
  {key: 6, value:'june'},
]
month:number = new Date().getMonth() +1
months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]

  constructor() { }

  ngOnInit(): void {
    console.log(this.month);
    
  }

}
