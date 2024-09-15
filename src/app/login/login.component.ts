import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,MatTooltipModule,MatButtonModule,MatIconModule,RouterModule,MatSelectModule,FormsModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name:any='';
  formvalid=false;
  hide = true;
  password:any='';
Form!: FormGroup<any>;

constructor(private formBuilder:FormBuilder){
  this.validation()
}
validation() {
  this.Form = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });
}
validateForm() {

  
    const name = this.Form.get('name')?.value; 
        const password = this.Form.get('password')?.value; 
        this.formvalid = name === 'naveen' && password === '1234';  

}


}
