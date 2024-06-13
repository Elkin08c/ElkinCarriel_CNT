import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntListComponent } from './cnt-list.component';

describe('CntListComponent', () => {
  let component: CntListComponent;
  let fixture: ComponentFixture<CntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CntListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
