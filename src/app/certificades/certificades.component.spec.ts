import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadesComponent } from './certificades.component';

describe('CertificadesComponent', () => {
  let component: CertificadesComponent;
  let fixture: ComponentFixture<CertificadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});