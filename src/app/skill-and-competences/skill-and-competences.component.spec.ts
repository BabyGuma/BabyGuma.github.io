import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAndCompetencesComponent } from './skill-and-competences.component';

describe('SkillAndCompetencesComponent', () => {
  let component: SkillAndCompetencesComponent;
  let fixture: ComponentFixture<SkillAndCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAndCompetencesComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillAndCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});