// @flow
import { NativeModules } from 'react-native';

const { RNAdobeAnalytics } = NativeModules;

export default class ApiService {

  static init = () =>
    RNAdobeAnalytics.initAdobe();

  static trackState = (viewName: string, data: { [string]: string | number | Array<string> }) =>
    RNAdobeAnalytics.trackState(viewName, data);
}
