import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserList } from '../../../Models/UsersList';
import { trigger, style, animate, transition, } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('700ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class UserComponent  {

  userList = UserList;
  @Output() selectedUserId = new EventEmitter<string>()

  get imagePath() {
    return './assets/users/'
  }

  onSelectedUser(userId: string) {
    this.selectedUserId.emit(userId)
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "./assets/audio/bubble-pop.mp3";
    audio.load();
    audio.play();
  }

}
