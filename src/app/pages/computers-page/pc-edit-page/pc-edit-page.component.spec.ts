import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcEditPageComponent } from './pc-edit-page.component';

describe('PcEditPageComponent', () => {
  let component: PcEditPageComponent;
  let fixture: ComponentFixture<PcEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
