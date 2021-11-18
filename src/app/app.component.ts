import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(3000, style({opacity: 0}))
      ])
    ])

]
})
export class AppComponent {
  title = 'Humberto Constantino';

  constructor(private titlee: Title) {
  }

  ngOnInit(){
    this.titlee.setTitle("H.C")
  }
}
