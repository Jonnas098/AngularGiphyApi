import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaGifComponent } from './pantalla-gif.component';

describe('PantallaGifComponent', () => {
  let component: PantallaGifComponent;
  let fixture: ComponentFixture<PantallaGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
