// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const fodaSeGesture = new GestureDescription("foda_se");

// Dedo do Meio
fodaSeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fodaSeGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.25);
fodaSeGesture.addDirection(
  Finger.Middle,
  FingerDirection.HorizontalRight,
  0.25
);

// Thumb - Polegar
// Index - Indicador
// Pinky - Mindinho
// Ring - Anelar
// Middle - Meio
for (let finger of [Finger.Ring, Finger.Pinky, Finger.Index, Finger.Thumb]) {
  fodaSeGesture.addCurl(finger, FingerCurl.HalfCur, 0.75);
  fodaSeGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
