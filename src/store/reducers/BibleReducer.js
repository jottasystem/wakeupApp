import { INCREMENT_VERSE, INCREMENT_BOOK, ALL_BOOK, SET_CURRENT_BOOK, SET_CURRENT_CHAPTER, INCREMENT_CHAPTER } from "../actions/types"

let INITIAL_STATE = {
    verseCurrent: 0,
    bookCurrent: 0,
    chapterCurrent: 0,
    books: null
}

export default function bibleInfo(state = INITIAL_STATE, action) {

    switch (action.type) {
        case INCREMENT_VERSE:
            return {
                verseCurrent: state.verseCurrent + 1
            };
        case SET_CURRENT_CHAPTER:
            return { ...state, chapterCurrent: action.chapterCurrent };

        case SET_CURRENT_BOOK:
            return { ...state, bookCurrent: action.bookCurrent };

        case INCREMENT_CHAPTER:
            let { bookCurrent } = state
            if (state.books[bookCurrent].chapters.length == state.chapterCurrent + 1) {
                return { ...state, bookCurrent: state.bookCurrent + 1, chapterCurrent: 0 };
            } else {
                return { ...state, chapterCurrent: state.chapterCurrent + 1 };
            }
        case ALL_BOOK:
            return {
                books: action.books
            };
        default:
            return state;
    }

}
