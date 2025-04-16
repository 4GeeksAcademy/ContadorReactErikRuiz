import React from 'react';

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, '0').split('');
  return (
    <div style={styles.container}>
      <div style={styles.digit}><i className="fas fa-clock"></i></div>
      {digits.map((d, i) => (
        <div key={i} style={styles.digit}>{d}</div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    background: '#000',
    padding: '1rem',
    borderRadius: '10px',
    marginTop: '2rem'
  },
  digit: {
    background: '#1c1c1c',
    color: '#fff',
    fontSize: '2rem',
    padding: '1rem',
    margin: '0 0.2rem',
    borderRadius: '5px',
    minWidth: '50px',
    textAlign: 'center'
  }
};

export default SecondsCounter;