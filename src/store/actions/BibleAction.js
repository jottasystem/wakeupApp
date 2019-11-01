import { ALL_BOOK, SET_CURRENT_CHAPTER, SET_CURRENT_BOOK, INCREMENT_CHAPTER } from "./types";
import NVI from "../../components/bible/nvi.json"

export function setChaptersCurrentAction(chapterCurrent) {
    return {
        type: SET_CURRENT_CHAPTER,
        chapterCurrent: chapterCurrent
    }
};

export function setBookCurrentAction(book) {
    return {
        type: SET_CURRENT_BOOK,
        bookCurrent: book
    }
};

export function incrementChapter() {
    return { type: INCREMENT_CHAPTER }
};

export function allBookAction() {
    return {
        type: ALL_BOOK,
        books: NVI
    }
};

