import './style.css'

const app = document.querySelector('#app');

app.innerHTML = `
  <div id="main-menu">
    <h1>Welcome to Seer</h1>
    <button id="start" type="button">Start</button>
    <button id="stop" type="button">Stop</button>
    <video id="video" autoplay></video>
  </div>
`

const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

const displayMediaOptions = {
  video: {
    displaySurface: "monitor",
    frameRate: 12,

  },
  audio: false,
};

startElem.addEventListener('click', e => {
  startCapture();
}, false
);

stopElem.addEventListener('click', e => {
  stopCapture();
}, false
);


async function startCapture() {

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

  } catch (err) {
    console.error(err);
  }
}

function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
