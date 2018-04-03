
# react-native-adobe-analytics

## Getting started

`$ npm install react-native-adobe-analytics --save`

### Mostly automatic installation

`$ react-native link react-native-adobe-analytics`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-adobe-analytics` and add `RNAdobeAdobeAnalytics.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAdobeAdobeAnalytics.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.odemolliens.rn.adobe.analytics.RNAdobeAdobeAnalyticsPackage;` to the imports at the top of the file
  - Add `new RNAdobeAdobeAnalyticsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-adobe-analytics'
  	project(':react-native-adobe-analytics').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-adobe-analytics/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-adobe-analytics')
  	```


## Usage
```javascript
import RNAdobeAdobeAnalytics from 'react-native-adobe-analytics';

// TODO: What to do with the module?
RNAdobeAdobeAnalytics;
```
  # Build Status
### Changelog

### Version 1.0.0
 - Library created

