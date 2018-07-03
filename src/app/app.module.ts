import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MyComponent } from '../components/foo';
import { RegisterPage } from '../pages/register/register';
import { ThankYouPage } from '../pages/thank-you/thank-you';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage,
    SignInPage,
    MyComponent,
    RegisterPage,
    ThankYouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage,
    SignInPage,
    MyComponent,
    RegisterPage,
    ThankYouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
