import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPcTableComponent } from './small-pc-table.component';

describe('SmallPcTableComponent', () => {
  let component: SmallPcTableComponent;
  let fixture: ComponentFixture<SmallPcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPcTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
