/**
 * Angular Core Component Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Additional Library Imports
 */

/**
 * Project based imports
 */
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CockpitComponent } from './pages/cockpit/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
