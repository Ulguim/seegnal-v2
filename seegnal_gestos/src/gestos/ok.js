// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const okGesture = new GestureDescription("ok");

// Thumb - Polegar
// Index - Indicador
// Pinky - Mindinho
// Ring - Anelar
// Middle - Meio

for(let finger of [Finger.Middle, Finger.Pinky, Finger.Ring]){
  okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}

okGesture.addCurl(Finger.Index, FingerCurl.HalfCur, 1);
okGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.25);

okGesture.addCurl(Finger.Thumb, FingerCurl.HalfCur, 1);
okGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25);
