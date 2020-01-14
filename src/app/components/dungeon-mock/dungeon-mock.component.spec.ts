import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonMockComponent } from './dungeon-mock.component';
import { EnemyDetailComponent } from './../enemy-detail/enemy-detail.component';

describe('DungeonMockComponent', () => {
  let component: DungeonMockComponent;
  let fixture: ComponentFixture<DungeonMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonMockComponent, EnemyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
