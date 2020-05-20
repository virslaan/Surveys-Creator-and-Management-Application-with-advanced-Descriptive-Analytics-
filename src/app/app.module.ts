import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSurveysComponent } from './components/view-surveys/view-surveys.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { VisualComponent } from './components/visual/visual.component';

const appRoutes: Routes = [
 
  { path: 'view',      component: ViewSurveysComponent },
  { path: 'add',  component: FormComponent},
  { path: 'takeSurvey',component: TakeSurveyComponent },
  { path: 'result',component: ResultComponent },
  { path: 'visual',component: VisualComponent }
  
  
];



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveysComponent,
    TakeSurveyComponent,
    FormComponent,
    ResultComponent,
    VisualComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }