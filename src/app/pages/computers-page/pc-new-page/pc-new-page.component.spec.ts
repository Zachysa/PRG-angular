import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcNewPageComponent } from './pc-new-page.component';

describe('PcNewPageComponent', () => {
  let component: PcNewPageComponent;
  let fixture: ComponentFixture<PcNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
