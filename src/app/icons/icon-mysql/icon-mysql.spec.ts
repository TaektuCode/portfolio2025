import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMysql } from './icon-mysql';

describe('IconMysql', () => {
  let component: IconMysql;
  let fixture: ComponentFixture<IconMysql>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMysql]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMysql);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
