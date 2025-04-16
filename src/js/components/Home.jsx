import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState(false);
  const [alertAt, setAlertAt] = useState(null);
  const [input, setInput] = useState('');
  const [isCountdownMode, setIsCountdownMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCounter(prev => {
          const next = isCountdownMode ? prev - 1 : prev + 1;
          if (alertAt !== null && next === alertAt) {
            alert('¡Tiempo alcanzado!');
          }
          if (isCountdownMode && next <= 0) {
            setPaused(true);
            return 0;
          }
          return next;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [paused, alertAt, isCountdownMode]);

  const handleStart = () => {
    const value = parseInt(input);
    if (!isNaN(value)) {
      setAlertAt(value);
      if (isCountdownMode) {
        setCounter(value);
      } else {
        setCounter(0);
      }
      setPaused(false);
    }
  };

  const handleReset = () => {
    setPaused(true);
    setCounter(0);
    setAlertAt(null);
    setInput('');
  };

  return (
    <div>
      <SecondsCounter seconds={counter} />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <input
          type="number"
          placeholder="Tiempo para alerta"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <label style={{ marginLeft: '1rem' }}>
          <input
            type="checkbox"
            checked={isCountdownMode}
            onChange={() => setIsCountdownMode(!isCountdownMode)}
          /> Cuenta regresiva
        </label>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleStart}>Iniciar</button>
          <button onClick={() => setPaused(true)}>Pausar</button>
          <button onClick={() => setPaused(false)}>Reanudar</button>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;