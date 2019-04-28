import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDemoComponent } from './mat-table-demo/mat-table-demo.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MatTableDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,MatCheckboxModule,MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule ,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
