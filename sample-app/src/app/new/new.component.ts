import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

HttpService
Router
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: Router) { }
  newProd = {name: "", price:Number, img: ""}
  err:any;

  ngOnInit() {
  }

  onSubmit(){
    this._httpService.create(this.newProd).subscribe(data => {
      if(data['products']){
        this._route.navigate(['/products'])
      }
      else{
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }





}
