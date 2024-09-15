import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { matTooltipAnimations } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { AddEditComponent } from '../add-edit/add-edit.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatIconModule,MatPaginator,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatTableModule,MatSortModule,MatSort,MatPaginatorModule,MatButtonModule,MatToolbarModule,MatMenuModule,AddEditComponent,MatDialogModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  constructor(public dialog: MatDialog,private empservice:EmployeeService) {}

  displayedColumns: string[] = ['id',
     'firstname',
      'lastname',
       'email',
       'role',
       'gender',
       'dob',
       'action'
      ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  openDialog(data?:any) {
    const dialogRef = this.dialog.open(AddEditComponent,{
      width:"50%",
      disableClose: true,
      data:data||null
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
        this.getemployee(); 
      }
    }); 
}

ngOnInit(): void {
  this.getemployee();
}
getemployee(){
  this.empservice.getemployee().subscribe({
    next:(res)=>{
      console.log(res); 
      this.dataSource = new MatTableDataSource(res); 
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    },
    error:(error)=>{
      console.log("error occured",error)
    }
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
deletemploye(id:any ){
  this.empservice.deletemploye(id).subscribe({
    next:(res)=>{
      alert(" do you want to delete employe")
      this.getemployee();
    },
    error:console.log,
  })
}
editemploye(data:any) {
  const dialogRef =this.dialog.open(AddEditComponent,{
    data
  });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if (val){
          this.getemployee();
        }
      },
    });
}
}