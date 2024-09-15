import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { matFormFieldAnimations, MatFormFieldModule ,} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,MatSelectModule,ReactiveFormsModule,MatDatepickerModule,MatRadioModule,MatDialogModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{
role:string[]=[
  'developer','tester','marketing',
  'hiring'
];
empform:FormGroup;

constructor(private formbuilder: FormBuilder,
            private empservice:EmployeeService,
            private dialogRef: MatDialogRef<AddEditComponent>,

            @Inject(MAT_DIALOG_DATA) public data: any
          ) {
  this.empform = this.formbuilder.group({
  id: ['', Validators.required],   
  firstname: ['', Validators.required],
  lastname: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  gender: ['', Validators.required],
  dob: ['', Validators.required],
  role: ['', Validators.required]
  });
}
onsubmit() {
  if(this.empform.valid) {
    if(this.data) {
      this.empservice.updateemployee(this.data.id, this.empform.value).subscribe({
        next: () => {
          alert('Data updated successfully');
          this.dialogRef.close('save');
          
        },
        error: (err) => console.error('Error updating employee', err)
      });
    } else {
      this.empservice.addemployee(this.empform.value).subscribe({
        next: () => {
          alert('Data added successfully');
          this.dialogRef.close('save');
        },
        error: (err) => console.error('Error adding employee', err)
      });
    }
  }
}

ngOnInit(): void {
  if (this.data){
  this.empform.patchValue(this.data);
}}

}

