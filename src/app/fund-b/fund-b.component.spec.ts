import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundBComponent } from './fund-b.component';

describe('FundBComponent', () => {
  let component: FundBComponent;
  let fixture: ComponentFixture<FundBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
