import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.on('play', throttle(onTimeUpate, 1000));

function onTimeUpate(timeupdate) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));
}

const time = localStorage.getItem('videoplayer-current-time');
const arrayTime = JSON.parse(time);

player.setCurrentTime(arrayTime.seconds).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
