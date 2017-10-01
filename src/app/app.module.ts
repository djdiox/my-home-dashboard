import { ActivatedRoute } from '@angular/router';
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
import { ProjectsComponent } from './pages/projects/projects.component';
import { SoundExplorerComponent } from './pages/sound-explorer/sound-explorer.component';
import { TodosComponent } from './pages/todos/todos.component';
const appRoutes: Routes = [
  {
    path: 'home',
    component: CockpitComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },  
  {
    path: 'todos',
    component: ProjectsComponent
  },
  {
    path: 'sounds',
    component: SoundExplorerComponent
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
    CockpitComponent,
    ProjectsComponent,
    SoundExplorerComponent,
    TodosComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash:true } //, enableTracing: true <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
