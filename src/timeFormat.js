function formatElapsedTime(props) {
  let inputValue = props.value;
  if (isNaN(inputValue)) {
    return "00:00:00";
  } else {
    let milliseconds = (inputValue%1000)/100
              , seconds = Math.floor((inputValue/1000)%60)
              , minutes = Math.floor((inputValue/(1000*60))%60)
              , hours = Math.floor(inputValue/(1000*60*60));
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? milliseconds + "0": milliseconds;
    return (inputValue < 3.6e+6) ? `${minutes}:${seconds}.${milliseconds}`
                                    : `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }
}

export default formatElapsedTime;
