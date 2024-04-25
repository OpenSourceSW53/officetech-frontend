import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCcompanyComponent } from './services-ccompany.component';

describe('ServicesCcompanyComponent', () => {
  let component: ServicesCcompanyComponent;
  let fixture: ComponentFixture<ServicesCcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCcompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesCcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
