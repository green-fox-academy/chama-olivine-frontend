import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMockComponent } from './inventory-mock.component';

describe('InventoryMockComponent', () => {
  let component: InventoryMockComponent;
  let fixture: ComponentFixture<InventoryMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
