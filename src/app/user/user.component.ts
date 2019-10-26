import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  datas:any=[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.getDataResponse()
  }

  getDataResponse(){
    this.data.getData().subscribe(x=>{
      this.datas = x
    })
    
  }

}
