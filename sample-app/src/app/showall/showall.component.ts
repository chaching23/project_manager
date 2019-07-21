import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})


export class ShowallComponent implements OnInit {
  products:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data =>{
      this.products = data['products'];
    })
  }

  onDelete(id) {
    this._httpService.delete(id).subscribe(data =>{
      this.ngOnInit();
    })
  }
}
