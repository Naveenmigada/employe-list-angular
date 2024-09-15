import { Component ,AfterViewInit,ViewChild} from '@angular/core';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { CrudComponent } from '../crud/crud.component';
import { AddEditComponent } from '../add-edit/add-edit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
]

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatTableModule,AddEditComponent, MatPaginator,CrudComponent, MatPaginatorModule, MatInputModule, MatFormFieldModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =new MatTableDataSource <PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
// j son server
