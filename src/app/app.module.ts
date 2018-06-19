import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from "./reducers/post.reducer";
import { FormsModule } from "@angular/forms";

// redux dev tool
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer, 
      message: simpleReducer 
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
