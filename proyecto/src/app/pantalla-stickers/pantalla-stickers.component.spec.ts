import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaStickersComponent } from './pantalla-stickers.component';

describe('PantallaStickersComponent', () => {
  let component: PantallaStickersComponent;
  let fixture: ComponentFixture<PantallaStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaStickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
