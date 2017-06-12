import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTreeComponent } from './module-tree.component';

describe('ModuleTreeComponent', () => {
  let component: ModuleTreeComponent;
  let fixture: ComponentFixture<ModuleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
