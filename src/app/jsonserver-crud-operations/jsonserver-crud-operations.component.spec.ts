import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserverCrudOperationsComponent } from './jsonserver-crud-operations.component';

describe('JsonserverCrudOperationsComponent', () => {
  let component: JsonserverCrudOperationsComponent;
  let fixture: ComponentFixture<JsonserverCrudOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonserverCrudOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonserverCrudOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
