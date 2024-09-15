import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
password: string='';
password2: string='';
formvalid: boolean = false;
validate(){
  this.formvalid = this.password === this.password2;
}
loginObj:any={
  firstname:'',lastname:'',username:'',age:'',
  password2:'',
  password:''
}
loginForm:FormGroup=new FormGroup({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  username:new FormControl(''),
  age:new FormControl(''),
  password:new FormControl(''),
  password2:new FormControl(''),
  gender:new FormControl('')
});
}
