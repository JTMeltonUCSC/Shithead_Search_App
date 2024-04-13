// app/javascript/components/TranscriptSearch.js
import React, { useState } from 'react';

function TranscriptSearch() {
  const [query, setQuery] = useState('');
  const [transcripts, setTranscripts] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/transcripts?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    setTranscripts(data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search transcripts"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {transcripts.map((transcript) => (
          <div key={transcript.id}>
            <p>{transcript.text}</p>
            <audio controls>
              <source src={transcript.sound_file.file} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TranscriptSearch;
