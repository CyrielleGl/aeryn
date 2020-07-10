import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouronnesComponent } from './couronnes.component';

describe('CouronnesComponent', () => {
  let component: CouronnesComponent;
  let fixture: ComponentFixture<CouronnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouronnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouronnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
