import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { async, TestBed } from '@angular/core/testing';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
} from '@angular/material';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        MatListModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Material PWA');
  }));
});
