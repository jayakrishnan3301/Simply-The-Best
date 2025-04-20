import { Component } from '@angular/core';
import { HeaderComponent } from '../../header-component/header/header.component';
import { UserComponent } from "../../user-component/user/user.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
