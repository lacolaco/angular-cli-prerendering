import { appConfig } from './app/app.config';
import { mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';

export default () =>
  bootstrapApplication(
    AppComponent,
    mergeApplicationConfig(appConfig, {
      providers: [provideServerRendering()],
    })
  );
