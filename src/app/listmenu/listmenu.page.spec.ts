import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListmenuPage } from './listmenu.page';

describe('ListmenuPage', () => {
  let component: ListmenuPage;
  let fixture: ComponentFixture<ListmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
