import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { UserList } from '../../../Models/UsersList';
import { trigger, style, animate, transition, } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SoundService } from '../../SoundService';
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

  constructor(private soundService:SoundService) {}

  userList = UserList;
  @Output() selectedUserId = new EventEmitter<string>()

  get imagePath() {
    return './assets/users/'
  }

  onSelectedUser(userId: string) {
    this.selectedUserId.emit(userId)
  }

  playButtonPressed()
  {
    this.soundService.playClickSound();
  }

}
