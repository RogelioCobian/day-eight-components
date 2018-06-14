import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  num: number = 0;
  @Output() numberCreated = new EventEmitter<number>();
  timer: any;

  gameStart() {
    this.timer = setInterval(() => {
      this.num++;
      this.numberCreated.emit(this.num); }, 1000);
  }
  gameStop() {
    clearInterval(this.timer);
  }

  ngOnInit() {
  }

}
