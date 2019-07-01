import React from 'react';
import './NotesList.css';
import moment from 'moment';

function NotesList({ notes, activeNote, onNoteSelect }) {
    return (
        <ul className="notes-list">
            {notes.map(note => {
                const isActive = note.id === activeNote;

                return (
                    <NotesList.Item
                        onClick={onNoteSelect}
                        active={isActive}
                        note={note}
                    />
                )
            })}
        </ul>
    )
}

NotesList.Item = function ({ note, active, onClick }) {
    return (
        <li onClick={() => onClick(note.id)} className={`${active ? 'active' : ''}`}>
            <h4>{note.title}</h4>
            <time>{moment(note.edited_at, 'x').format('DD/MM/YYYY HH:mm')}</time>
        </li>
    )
};

export default NotesList;