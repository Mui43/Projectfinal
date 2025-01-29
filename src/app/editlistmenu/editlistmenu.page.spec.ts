import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditlistmenuPage } from './editlistmenu.page';

describe('EditlistmenuPage', () => {
  let component: EditlistmenuPage;
  let fixture: ComponentFixture<EditlistmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
