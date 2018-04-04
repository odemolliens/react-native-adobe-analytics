import { AppScreens, Screen } from './definitions';
import { ScreenNames } from './adobe/screens.mapping';

/**
* Returns the name to display for a wrapped component inside an HOC
* It's either the display name if there's any, either the component name.
*/
export function getDisplayName(WrappedComponent) {
  return (WrappedComponent.displayName || WrappedComponent.name || 'Component');
}

/**
* Return the corresponding screen name in Adobe for a screen coming from the app
*/
export function getScreenNameForTracking(screen: Screen) {
  const trackingName = ScreenNames[screen];
  if (!trackingName) {
    console.warn(`No screen tracking definition for ${screen}`);
  }
  return trackingName;
}

/**
* Check if an action is a screen navigation
*/
export function isAnActionScreenType(screen: Screen) {
  return AppScreens.includes(screen);
}
