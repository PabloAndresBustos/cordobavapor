import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUpComponent } from './nav-bar-up.component';

describe('NavBarUpComponent', () => {
  let component: NavBarUpComponent;
  let fixture: ComponentFixture<NavBarUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
