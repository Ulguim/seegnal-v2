import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from 'fingerpose';

export const teAmoSeGesture = new GestureDescription('teAmo');

/**
 * Thumb - Polegar
 * Index - Indicador
 * Pinky - Mindinho
 * Ring - Anelar
 * Middle - Meio
 */

teAmoSeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
teAmoSeGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.25,
);

teAmoSeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

teAmoSeGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Middle, Finger.Ring]) {
  teAmoSeGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  teAmoSeGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
