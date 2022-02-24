import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
        />
        <div className="notes__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/250px-The.Matrix.glmatrix.2.png"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
