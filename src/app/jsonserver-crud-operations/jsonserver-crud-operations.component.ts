import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jsonserver-crud-operations',
  standalone: true,
  imports: [AsyncPipe,FormsModule,ReactiveFormsModule,RouterOutlet,CommonModule,HttpClientModule],
  templateUrl: './jsonserver-crud-operations.component.html',
  styleUrls: ['./jsonserver-crud-operations.component.css']
 })
export class JsonserverCrudOperationsComponent implements OnInit{
onedit(data:animal) {
  this.userObj=data;
}
 
  userObj: animal = new animal();
  animallist: animal[] = [];
  isNewAnimalFormOpen = false;
  constructor(private http: HttpClient) {}  
  animalslist$:Observable<string[]> = new Observable<string[]>();
  
getanimal() {
  this.http.get<animal[]>("http://localhost:3000/animals").subscribe({
    next: (res: animal[]) => {
      this.animallist = res;
    }
    
  });
}

ngOnInit(): void {
  this.getanimal();
}

onsaveanimal(){
  this.http.post<animal>("http://localhost:3000/add",this.userObj).subscribe((res:animal)=>{
    alert("animal added")
    this.animallist.push(this.userObj)
    this.getanimal();
    this.userObj = new animal();
  })
  
}
ondelete(id:Number){
  const isdelte=confirm("are you sure you want to delte")
  if(isdelte){
    this.http.get<animal>("http://localhost:3000/delete").subscribe((res:animal)=>{
      alert("animal removed");
      this.getanimal();
  })
  }
}
}

export class animal{
  id:number;
  name:string;
  num:number;
  price:number
  constructor(){
    this.id=0;
    this.name='';
    this.num=0;
    this.price=0
  }

  
}
