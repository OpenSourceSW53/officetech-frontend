import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelServicesComponent } from './panel-services.component';

describe('PanelServicesComponent', () => {
  let component: PanelServicesComponent;
  let fixture: ComponentFixture<PanelServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
