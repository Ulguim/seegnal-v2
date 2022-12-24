import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from 'fingerpose';

const teAmoGesture = new GestureDescription('teAmo');

/**
 * Thumb - Polegar
 * Index - Indicador
 * Pinky - Mindinho
 * Ring - Anelar
 * Middle - Meio
 */

teAmoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
teAmoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
teAmoGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.25,
);

teAmoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
teAmoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

teAmoGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
teAmoGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Middle, Finger.Ring]) {
  teAmoGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  teAmoGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}

export default teAmoGesture;
