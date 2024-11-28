import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowlistmenuPage } from './showlistmenu.page';

describe('ShowlistmenuPage', () => {
  let component: ShowlistmenuPage;
  let fixture: ComponentFixture<ShowlistmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlistmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
