import * as PostActions from '../actions/post.actions';
import { Post } from "../models/post.model";

export type Action = PostActions.ALL;

// default app state
const defaultState: Post = {
    text: 'Hell0, this is the default post',
    likes: 0
}

/// helper function to create new state object
/// data on the right will overwirte the data on the left
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

/// reducer function
export function postReducer(state: Post = defaultState, action: Action) {
    console.log(action.type, state)
    switch(action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, {text: action.payload});
        case PostActions.UPVOTE:
            return newState(state, {likes: state.likes + 1});
        case PostActions.EDIT_TEXT:
            return newState(state, {likes: state.likes - 1});
        case PostActions.RESET:
            return defaultState;

        default:
            return state
    }
}
