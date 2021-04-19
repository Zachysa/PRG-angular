import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSmallTableComponent } from './config-small-table.component';

describe('ConfigSmallTableComponent', () => {
  let component: ConfigSmallTableComponent;
  let fixture: ComponentFixture<ConfigSmallTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSmallTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSmallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
