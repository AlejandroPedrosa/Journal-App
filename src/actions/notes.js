import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), {
      title: "",
      body: "",
      date: new Date().getTime(),
    });
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});