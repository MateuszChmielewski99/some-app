import "./LoadingSpinner.css";
const spinner = require ("../../resources/r2d2.png");
const spinnerAudio = require ("../../resources/r2d2screaming.mp3")

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img src={spinner} />
      <audio src={spinnerAudio} autoPlay={true} />
    </div>
  );
};