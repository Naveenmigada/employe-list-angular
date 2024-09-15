import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { JsonserverCrudOperationsComponent } from './jsonserver-crud-operations/jsonserver-crud-operations.component';
import { CrudComponent } from './crud/crud.component';
import { AddEditComponent } from './add-edit/add-edit.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEditComponent, RouterLink, RouterLinkActive, LoginComponent, JsonserverCrudOperationsComponent,CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emplyoe_list';
}
