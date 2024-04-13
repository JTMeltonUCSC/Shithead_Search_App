import React from 'react';

interface Transcript {
  id: number;
  text: string;
  clip_start: number;
  clip_end: number;
  audio_file_url: string;
}

interface Props {
  transcripts: Transcript[];
}

const TranscriptList: React.FC<Props> = ({ transcripts }) => {
  return (
    <div>
      {transcripts.map((transcript) => (
        <div key={transcript.id}>
          <p>{transcript.text}</p>
          <audio controls>
            <source src={transcript.audio_file_url} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default TranscriptList;