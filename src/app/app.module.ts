import { RouterModule } from '@angular/router';

import { TopBarComponent } from './modules/top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalcEngineRoutingModule } from './modules/calc-engine/calc-engine-routing.module';
import { CalcEngineModule } from './modules/calc-engine/calc-engine.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,HttpClientModule,
    AppMaterialModule,
    FormsModule, 
    RouterModule,
    MatFormFieldModule,
    CalcEngineModule,
  ],
  exports:[AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
