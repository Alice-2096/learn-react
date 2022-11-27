import React from 'react';
import './Song.css';
import SongList from './SongList';

export default function SongPage() {
  return (
    <div className="song-page">
      <header className="song-page-header">
        <h1>SuperTunes - Songs of the Week</h1>
        <hr></hr>
        {/* how to implement these two? */}
        <button>Sort By Title</button>
        <button>Sort By Rating</button>
      </header>
      <SongList></SongList>
    </div>
  );
}
