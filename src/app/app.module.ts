import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Routes,RouterModule} from '@angular/router';
import { FileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import {DndModule} from 'ng2-dnd';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {

  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './shared/profile/personalInfo.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './shared/loginform/login.component';
import { MaterialDashboardComponent } from './material/material.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './shared/registerform/registeration.component';
import {CardComponent} from './cards/card.component';
import { NgDragDropModule } from 'ng-drag-drop';

const appRoutes: Routes = [
  {path: 'deckofcards', component: CardComponent},
  {path: 'personalInfo', component: PersonalInfoComponent},
  {path: '', component: MaterialDashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent, MaterialDashboardComponent, HeaderComponent, LoginComponent, RegistrationComponent ,PersonalInfoComponent,CardComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule, BrowserAnimationsModule,DndModule.forRoot(), NgDragDropModule.forRoot(),
    MatButtonModule, CommonModule, ReactiveFormsModule, FormsModule,FileDropModule,HttpClientModule,
    MatDialogModule,DragDropModule,
    CdkTableModule, CdkTreeModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [HeaderComponent, LoginComponent, RegistrationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
