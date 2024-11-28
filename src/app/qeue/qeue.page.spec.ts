import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QeuePage } from './qeue.page';

describe('QeuePage', () => {
  let component: QeuePage;
  let fixture: ComponentFixture<QeuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QeuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
