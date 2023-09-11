import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalComponentComponent } from './normal-component.component';

describe('NormalComponentComponent', () => {
  let component: NormalComponentComponent;
  let fixture: ComponentFixture<NormalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
