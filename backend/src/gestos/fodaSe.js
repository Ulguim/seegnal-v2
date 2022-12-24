import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from 'fingerpose';

export const fodaSeGesture = new GestureDescription('fodaSe');

/**
 * Thumb - Polegar
 * Index - Indicador
 * Pinky - Mindinho
 * Ring - Anelar
 * Middle - Meio
 */

fodaSeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fodaSeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Ring, Finger.Pinky, Finger.Index, Finger.Thumb]) {
  fodaSeGesture.addCurl(finger, FingerCurl.FullCurl, 1);
  fodaSeGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
