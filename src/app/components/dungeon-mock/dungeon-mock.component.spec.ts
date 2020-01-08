import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonMockComponent } from './dungeon-mock.component';

describe('DungeonMockComponent', () => {
  let component: DungeonMockComponent;
  let fixture: ComponentFixture<DungeonMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
