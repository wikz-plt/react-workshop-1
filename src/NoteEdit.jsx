import React from 'react';
import './NoteEdit.css';

class NoteEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: {...props.note}
        };
    }

    updateNoteTitle(e) {
        const { value } = e.target;

        this.setState({
            note: {
                ...this.state.note,
                title: value
            },
        });
    }

    updateNoteContent(e) {
        const { value } = e.target;

        this.setState({
            note: {
                ...this.state.note,
                content: value,
            }
        });
    }

    saveNote() {
        this.props.onSaveClick(this.state.note);
    }

    render() {
        return (
            <div className="note-edit">
                <div className="note-display-nav">
                    <button className="btn btn-2 btn-small" onClick={this.saveNote.bind(this)}>
                        Save
                    </button>
                </div>
                <div className="note-title-input-wrapper">
                    <input
                        type="text"
                        className="note-title-input"
                        value={this.state.note.title}
                        onChange={this.updateNoteTitle.bind(this)}
                    />
                </div>
                <main>
                    <textarea
                        onChange={this.updateNoteContent.bind(this)}
                        value={this.state.note.content}
                    />
                </main>
            </div>
        )
    }
}

export default NoteEdit;