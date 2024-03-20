import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id:any
  coffee:any
  price=250
  constructor(private route:ActivatedRoute,private ds:DataService){
    this.route.params.subscribe((data=>{
      this.id=data['id'];
      this.ds.get(this.id).subscribe((data:any)=>this.coffee=data)
    }))
  }
}
