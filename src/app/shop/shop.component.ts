import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  coffee:any[]=[]
  constructor(private ds:DataService){
    this.ds.getData().subscribe((data:any)=>this.coffee=data)
  }
}
