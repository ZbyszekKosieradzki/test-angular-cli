import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-cli';
  image = 'https://cdn.shoplo.com/1785/products/th1024/aaab/123-kotek.jpg';

  menu = [{ "name": 'Rocky', 'href': "http://rocky.com" },
  { "name": 'Terminator', 'href': "http://Terminator.com" }]
    ;


    
    carousel= [
      {'image':'https://picsum.photos/200/300/?image=4'},
      {'image':'https://picsum.photos/200/300/?image=5'},
      {'image':'https://picsum.photos/200/300/?image=6'},
      {'image':'https://picsum.photos/200/300/?image=7'}
    ];

  onMenuClickItem(...args) {
    console.log(...args);
  }
  onCarouselClickItem(...args) {
    console.log(...args);
  }
}
