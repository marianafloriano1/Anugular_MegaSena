import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegasenaComponent } from './megasena.component';

describe('MegasenaComponent', () => {
  let component: MegasenaComponent;
  let fixture: ComponentFixture<MegasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
