import { Component}         from '@angular/core';
import { HeaderComponent }  from '../../header-component/header/header.component';
import { UserComponent }    from "../../user-component/user/user.component";
import { TaskComponent }    from "../../task/task.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userId:string | undefined;

  onSelectedUser(selectedUserId:string)
  {
    this.userId = selectedUserId;
  }
}
