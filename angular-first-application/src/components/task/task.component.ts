import { Component, Input, SimpleChanges } from '@angular/core';
import { UserList } from '../../Models/UsersList';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  userlist = UserList;

  @Input() userId: string | undefined

  username: string | undefined

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && this.userId) {
      this.username = this.userlist.find(user => user.id === this.userId)?.name;
    }
  }
}
