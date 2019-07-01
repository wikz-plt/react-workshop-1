import React from 'react';
import NotesListWrapper from './NotesListWrapper';
import NoteDisplay from './NoteDisplay';

class App extends React.Component {
    state = {
        notes: [],
        activeNote: null
    };

    componentDidMount() {
        const loadedNotes = [];

        for (const key in localStorage) {
            const value = localStorage.getItem(key);

            if (value && key.startsWith('$note-')) {
                try {
                    loadedNotes.push(JSON.parse(value));
                } catch (e) {
                    console.error('Failed to load note!', key);
                    localStorage.removeItem('key');
                }
            }
        }

        loadedNotes.sort((a, b) => {
            return a.edited_at - b.edited_at;
        });

        this.setState({
            notes: loadedNotes
        });
    }

    saveNote(note) {
        localStorage.setItem(note.id, JSON.stringify(note));
    }

    handleNewNoteClick() {
        const now = new Date();
        const timestamp = now.getTime();
        const newNote = {
            id: '$note-' + timestamp,
            title: 'New Note',
            content: 'Click edit to get started...',
            edited_at: now.getTime(),
        };

        const newNotes = [
            newNote,
            ...this.state.notes,
        ];

        this.setState({
            notes: newNotes,
            activeNote: newNotes.id
        });

        this.saveNote(newNote);
    }

    handleNoteSelect(id) {
        this.setState({
            activeNote: id
        });
    }

    getNote(id) {
        return this.state.notes.find(note => note.id === id);
    }

    render() {
        return (
            <div className="App">
                <NotesListWrapper
                    notes={this.state.notes}
                    onNewNoteClick={this.handleNewNoteClick.bind(this)}
                    activeNote={this.state.activeNote}
                    onNoteSelect={this.handleNoteSelect.bind(this)}
                />
                <NoteDisplay
                    note={this.state.activeNote ? this.getNote(this.state.activeNote) : null}
                    onNoteSave={() => {}}
                />
            </div>
        );
    }
}

export default App;
