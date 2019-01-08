import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselList: string = null;
  
  @Output() clickItem$ = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  onClickHandler($event, item){
    console.log(item);
    this.clickItem$.next(item);


  }
}
