import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {CdkListboxModule} from '@angular/cdk/listbox'
import { NormalComponentComponent } from './components/normal-component/normal-component.component';
import { FontColorDirective } from './directives/font-color.directive';
import { FontStyleDirective } from './directives/font-style.directive';
import { MouseHoverDirective } from './directives/mouse-hover.directive';
import { StandaloneComponentComponent } from './components/standalone-component/standalone-component.component';
@NgModule({
  declarations: [
    AppComponent,
    // StandaloneComponentComponent,
    // Tab1Component,
    // Tab2Component,
    Tab3Component,
    NormalComponentComponent,
    
    MouseHoverDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontColorDirective,
    FontStyleDirective,
    HttpClientModule,
    DragDropModule,
    MatListModule,
    MatSliderModule,
    CdkListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
