import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela2 } from './tela2';

describe('Tela2', () => {
  let component: Tela2;
  let fixture: ComponentFixture<Tela2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tela2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tela2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
