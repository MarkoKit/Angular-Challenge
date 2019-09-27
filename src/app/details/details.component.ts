import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product;

  constructor( 
    private route: ActivatedRoute,) { }

  ngOnInit() {
    if(localStorage.getItem("parse") == null) {
      
    }
    else { this.product = JSON.parse(localStorage.getItem("parse")); }    
  }

  addToCart(title, number) {
    let bought = JSON.parse(localStorage.getItem("cart"));
    bought.push(title);
    localStorage.setItem("cart", JSON.stringify(bought));
    localStorage.setItem("parse", null);
    localStorage.setItem("sum", parseInt(localStorage.getItem("sum")) + number);
  }  
}