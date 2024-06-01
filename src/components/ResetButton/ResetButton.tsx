import React from 'react';

interface Props {
  onReset: () => void;
}

const ResetButton: React.FC<Props> = ({ onReset }) => (
  <button className="reset-button" onClick={onReset}>
    Reset   
  </button>
);

export default ResetButton;