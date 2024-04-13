import React, { useState } from 'react';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('sound_file[file]', file);
        formData.append('sound_file[title]', title);

        try {
            const response = await fetch('/sound_files', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file.');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={onTitleChange} placeholder="Title" />
            <input type="file" onChange={onFileChange} />
            <button type="submit">Upload File</button>
        </form>
    );
}

export default FileUpload;
