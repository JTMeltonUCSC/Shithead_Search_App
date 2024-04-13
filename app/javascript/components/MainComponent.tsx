import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TranscriptList from './TranscriptList';

const MainComponent: React.FC = () => {
  const [transcripts, setTranscripts] = useState([]);

  const handleSearch = (query: string) => {
    fetch(`/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => setTranscripts(data))
      .catch(error => console.error('Error fetching data: ', error));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <TranscriptList transcripts={transcripts} />
    </div>
  );
};

export default MainComponent;