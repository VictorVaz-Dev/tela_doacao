import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela1 } from './tela1';

describe('Tela1', () => {
  let component: Tela1;
  let fixture: ComponentFixture<Tela1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tela1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tela1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
