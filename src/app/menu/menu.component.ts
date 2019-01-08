import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  movieTitle = 'Bad Boys';

  @Input() menuList: Array<Object> = null;
  
  @Output() clickItem$ = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  onClickHandler($event, item){
    //console.log(item);
    this.clickItem$.next(item);

  }
}
