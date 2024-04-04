import React, { useState } from 'react';
import DiffViewer from 'react-diff-viewer';
import './TextComparator.css';

const TextComparator = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');

  const handleFileUpload = (file, side) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      if (side === 'left') {
        setLeftText(text);
      } else if (side === 'right') {
        setRightText(text);
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="text-comparator">
        <div className="textarea-container">
          <textarea
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="Left Text"
            className="textarea"
          />
          <input
            type="file"
            onChange={(e) => handleFileUpload(e.target.files[0], 'left')}
          />
        </div>
        <div className="textarea-container">
          <textarea
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="Right Text"
            className="textarea"
          />
          <input
            type="file"
            onChange={(e) => handleFileUpload(e.target.files[0], 'right')}
          />
        </div>
      </div>
      <DiffViewer oldValue={leftText} newValue={rightText} splitView={true} />
    </>
  );
};

export default TextComparator;
