import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JacketPage } from './jacket.page';

describe('JacketPage', () => {
  let component: JacketPage;
  let fixture: ComponentFixture<JacketPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JacketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
