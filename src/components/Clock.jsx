import React from 'react';

const Clock = ({ time }) => {
  console.log(time)
  // if (!time) {
  //   return null;
  // }

  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date(1627503453 * 1000);

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand min-hand"></div>
        <div className="hand second-hand"></div>
      </div>
    </div>
  );
}

export default Clock;
