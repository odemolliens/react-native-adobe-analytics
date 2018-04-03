// @flow
import { NativeModules } from 'react-native';

const { RNAdobeAnalytics } = NativeModules;

export default RNAdobeAnalytics;

export function sayHello(name: string): void {
  console.log(`Hello ${name}, nice to meet you`);
}
