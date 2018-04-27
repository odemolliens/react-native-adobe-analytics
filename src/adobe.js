// @flow
import { NativeModules } from 'react-native';
const { RNAdobeAnalytics } = NativeModules;

export default class Adobe {

  /**
  * Init RNAdobe module. To be called BEFORE 'trackState' or 'trackEvent' methods
  */
  static init = (packageName, showLog) =>
    RNAdobeAnalytics.initAdobe(packageName, showLog);

  /**
  * Track view.
  */
  static trackState = (viewName: string, data: { [string]: string | number | Array<string> }) =>
    RNAdobeAnalytics.trackState(viewName, data);

  /**
  * Track event
  */
  static trackEvent = (viewName: string, data: { [string]: string | number | Array<string> }) =>
    RNAdobeAnalytics.trackAction(viewName, data);
}
