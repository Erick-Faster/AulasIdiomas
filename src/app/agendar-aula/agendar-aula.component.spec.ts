import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarAulaComponent } from './agendar-aula.component';

describe('AgendarAulaComponent', () => {
  let component: AgendarAulaComponent;
  let fixture: ComponentFixture<AgendarAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
