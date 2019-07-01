import React from 'react';
import './NoteDisplay.css';
import NoteDisplayEmpty from './NoteDisplayEmpty';
import NotePreview from './NotePreview';
import NoteEdit from './NoteEdit';

const MODES = {
    PREVIEW: 'preview',
    EDIT: 'edit',
};

class NoteDisplay extends React.Component {
    state = {
        mode: MODES.PREVIEW
    };

    toggleMode(mode) {
        this.setState({ mode });
    }

    editNote() {
        this.toggleMode(MODES.EDIT);
    }

    saveNote(note) {
        this.props.onSaveNote(note);

        this.toggleMode(MODES.PREVIEW);
    }

    render() {
        return (
            <div className="note-display-wrapper">
                <div className="note-display">
                    {!this.props.note ?
                        <NoteDisplayEmpty />
                        : (
                            <div className="note-display-inner">
                                {this.state.mode === MODES.PREVIEW ? (
                                    <NotePreview
                                        note={this.props.note}
                                        onEditClick={this.editNote.bind(this)}
                                    />
                                ) : (
                                    <NoteEdit
                                        note={this.props.note}
                                        onSaveClick={this.saveNote.bind(this)}
                                    />
                                )}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NoteDisplay;