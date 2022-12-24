import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from 'fingerpose';

export const okGesture = new GestureDescription('ok');

/**
 * Thumb - Polegar
 * Index - Indicador
 * Pinky - Mindinho
 * Ring - Anelar
 * Middle - Meio
 */

for (let finger of [Finger.Middle, Finger.Pinky, Finger.Ring]) {
  okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okGesture.addDirection(finger, FingerDirection.VerticalUp, 1);
}

okGesture.addCurl(Finger.Index, FingerCurl.HalfCur, 1);
okGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.75);

okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
okGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
