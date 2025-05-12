import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsPresenterComponent } from './logs-presenter.component';

describe('LogsPresenterComponent', () => {
  let component: LogsPresenterComponent;
  let fixture: ComponentFixture<LogsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
