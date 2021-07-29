import React, { useEffect, useState }  from 'react';
import Clock from 'react-clock';

const ReactClock = ({ time }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue((new Date(new Date().getTime() + (time * 60 * 1000)))),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, [time]);

  return (
    <>
      <Clock value={value} />
    </>
  )
}

export default ReactClock;
