import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlliuComponent } from './llliu.component';

describe('LlliuComponent', () => {
  let component: LlliuComponent;
  let fixture: ComponentFixture<LlliuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlliuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
