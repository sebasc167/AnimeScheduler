import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationErrorPageComponent } from './creation-error-page.component';

describe('CreationErrorPageComponent', () => {
  let component: CreationErrorPageComponent;
  let fixture: ComponentFixture<CreationErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationErrorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
