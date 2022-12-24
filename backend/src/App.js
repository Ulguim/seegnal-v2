import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';
import * as fp from 'fingerpose';

import fodaSeGesture from './gestos/fodaSe.js';
import okGesture from './gestos/ok.js';
import teAmoGesture from './gestos/teAmo.js';

import certoImage from './images/certo.png';
import fodaSeImage from './images/fodaSe.png';
import okImage from './images/ok.png';
import pazImage from './images/paz.png';
import primeiroImage from './images/primeiro.png';
import teAmoImage from './images/teAmo.png';

function App(){
  const images = {
    thumbs_up: certoImage,
    victory: pazImage,
    teAmo: teAmoImage,
    ok:okImage,
    fodaSe:fodaSeImage,
    primeiro:primeiroImage
  };
  const deixarImports = {
    tf,handpose,fp,fodaSeGesture,okGesture,teAmoGesture
  }
}

export default App;
