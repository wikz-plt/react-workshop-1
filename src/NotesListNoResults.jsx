import React from 'react';
import './NotesListNoResults.css';

function NotesListNoResults({ onClick }) {
    return (
        <div className="no-notes">
            <p>You don't have any notes!</p>
            <button className="btn" onClick={onClick}>
                Add a new one
            </button>
        </div>
    )
}

export default NotesListNoResults;