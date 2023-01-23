import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExplicativaComponent } from './pagina-explicativa.component';

describe('PaginaExplicativaComponent', () => {
  let component: PaginaExplicativaComponent;
  let fixture: ComponentFixture<PaginaExplicativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaExplicativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaExplicativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
