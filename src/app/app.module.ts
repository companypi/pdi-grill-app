import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, 
        MatCardModule, 
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { postListComponent } from './posts/post-list/post-list.component';
import { enableProdMode } from '@angular/core';


enableProdMode();

@NgModule({
  //now angular know AppComponents
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent,
    postListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
