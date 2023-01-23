import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaStickersComponent } from './tarjeta-stickers.component';

describe('TarjetaStickersComponent', () => {
  let component: TarjetaStickersComponent;
  let fixture: ComponentFixture<TarjetaStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaStickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
