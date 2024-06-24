import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwartjeComponent } from './kwartje.component';

describe('KwartjeComponent', () => {
  let component: KwartjeComponent;
  let fixture: ComponentFixture<KwartjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KwartjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KwartjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
