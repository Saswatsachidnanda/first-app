import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootsPage } from './boots.page';

describe('BootsPage', () => {
  let component: BootsPage;
  let fixture: ComponentFixture<BootsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BootsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
