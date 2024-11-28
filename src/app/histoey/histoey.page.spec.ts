import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoeyPage } from './histoey.page';

describe('HistoeyPage', () => {
  let component: HistoeyPage;
  let fixture: ComponentFixture<HistoeyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
