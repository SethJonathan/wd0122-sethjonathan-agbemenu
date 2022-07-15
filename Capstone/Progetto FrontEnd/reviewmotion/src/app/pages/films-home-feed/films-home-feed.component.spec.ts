import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsHomeFeedComponent } from './films-home-feed.component';

describe('FilmsHomeFeedComponent', () => {
  let component: FilmsHomeFeedComponent;
  let fixture: ComponentFixture<FilmsHomeFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsHomeFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsHomeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
