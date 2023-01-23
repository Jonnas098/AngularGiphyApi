import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaGifComponent } from './tarjeta-gif.component';

describe('TarjetaGifComponent', () => {
  let component: TarjetaGifComponent;
  let fixture: ComponentFixture<TarjetaGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
