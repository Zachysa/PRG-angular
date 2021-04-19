import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobPageComponent } from './new-job-page.component';

describe('NewJobPageComponent', () => {
  let component: NewJobPageComponent;
  let fixture: ComponentFixture<NewJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
