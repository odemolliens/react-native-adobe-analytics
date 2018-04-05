// @flow
import { NativeModules } from 'react-native';
const { RNAdobeAnalytics } = NativeModules;

export default class Adobe {

  static init = () =>
    RNAdobeAnalytics.initAdobe();

  static trackState = (viewName: string, data: { [string]: string | number | Array<string> }) =>
    RNAdobeAnalytics.trackState(viewName, data);

  static trackEvent = (viewName: string, data: { [string]: string | number | Array<string> }) =>
    RNAdobeAnalytics.trackAction(viewName, data);
}
