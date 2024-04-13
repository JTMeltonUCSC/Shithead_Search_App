import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Search transcripts..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;