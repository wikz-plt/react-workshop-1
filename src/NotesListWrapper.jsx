import React from 'react';
import './NotesListWrapper.css';
import NotesListNoResults from './NotesListNoResults';
import NotesList from './NotesList';


class NotesListWrapper extends React.Component {
    render() {
        return (
            <div className="notes-list-wrapper">
                {this.props.notes && this.props.notes.length ? (
                    <NotesList
                        notes={this.props.notes}
                        activeNote={this.props.activeNote}
                        onNoteSelect={this.props.onNoteSelect}
                    />
                ) : (
                    <NotesListNoResults onClick={this.props.onNewNoteClick} />
                )}
            </div>
        );
    }
}

export default NotesListWrapper;