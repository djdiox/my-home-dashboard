/**
 * Angular Core Component Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Additional Library Imports
 */
// import { DragulaModule } from 'ng2-dragula'; //TO BE DONE

/**
 * Project based imports
 */
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CockpitComponent } from './pages/cockpit/cockpit.component';
const appRoutes: Routes = [
  {
    path: 'home',
    component: CockpitComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CockpitComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
