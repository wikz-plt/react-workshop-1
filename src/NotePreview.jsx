import React from 'react';
import Markdown from 'react-markdown';

function NotePreview({ note, onEditClick }) {
    return (
        <div className="note-preview-wrapper">
            <div className="note-display-nav">
                <button className="btn btn-2 btn-small" onClick={onEditClick}>
                    Edit
                </button>
            </div>
            <h2>{note.title}</h2>
            <main>
                <Markdown source={note.content} />
            </main>
        </div>
    );
}

export default NotePreview;