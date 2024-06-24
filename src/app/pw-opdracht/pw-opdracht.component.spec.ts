import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWOpdrachtComponent } from './pw-opdracht.component';

describe('PWOpdrachtComponent', () => {
  let component: PWOpdrachtComponent;
  let fixture: ComponentFixture<PWOpdrachtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PWOpdrachtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PWOpdrachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
