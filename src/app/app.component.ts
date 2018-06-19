import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";

import { Post } from "./models/post.model";
import * as PostActions from './actions/post.actions';

interface AppState {
  message: string;
}

interface AppState2 {
  post: Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  message$: Observable<string>
  post: Observable<Post>
  text: string /// form input val

  constructor(
    private store: Store<AppState>,
    private store2: Store<AppState2>
  ) {

    this.message$ = this.store.select('message');

    this.post = this.store2.select('post');
  }

  //message switch
  spanishMessage(){
    this.store.dispatch({type: 'SPANISH'})
  }
  frenchMessage(){
    this.store.dispatch({type: 'FRENCH'})
  }

  //post, vote
  editText() {
    this.store2.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store2.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store2.dispatch(new PostActions.Downvote());
  }

}
