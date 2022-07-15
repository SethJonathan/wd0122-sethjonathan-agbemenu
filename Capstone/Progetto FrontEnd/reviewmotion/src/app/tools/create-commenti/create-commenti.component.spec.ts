import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentiComponent } from './create-commenti.component';

describe('CreateCommentiComponent', () => {
  let component: CreateCommentiComponent;
  let fixture: ComponentFixture<CreateCommentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
