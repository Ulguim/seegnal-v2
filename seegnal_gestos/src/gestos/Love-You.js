// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const teAmoSeGesture = new GestureDescription("Love_You");

// Thumb - Polegar
teAmoSeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
teAmoSeGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.25
);

// Index - Indicador
teAmoSeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky - Mindinho
teAmoSeGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
teAmoSeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Ring - Anelar
// Middle - Meio
for (let finger of [Finger.Middle, Finger.Ring]) {
  teAmoSeGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  teAmoSeGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
