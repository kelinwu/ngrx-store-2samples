import { Action } from "@ngrx/store";
import * as PostActions from '../actions/post.actions';
import { Post } from "../models/post.model";

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;

    constructor(public payload: string) {}
}

export class Upvote implements Action {
    readonly type = UPVOTE;
}
export class Downvote implements Action {
    readonly type = DOWNVOTE;
}
export class Reset implements Action {
    readonly type = RESET;
}

//strong typed
export type ALL = Upvote | Downvote | Reset | EditText