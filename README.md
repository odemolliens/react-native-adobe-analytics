
# react-native-adobe-analytics

## Getting started

`$ npm install odemolliens/react-native-adobe-analytics --save`

### Mostly automatic installation

`$ react-native link react-native-adobe-analytics`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`. Check only `Copy items if needed`.
2. In XCode, in the project navigator, select your project. Add `libRNAdobeAnalytics.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
3. In XCode, in the project navigator, select your project. Add `libsqlite3.0.tbd` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. In XCode, in the project navigator, select your project. Add `SystemConfiguration.framework` to your project's `Build Phases` ➜ `Link Binary With Libraries`
5. In XCode, in the project navigator, select `Libraries` ➜ `RNAdobeAnalytics.xcodeproj` ➜ `AdobeMobileLibrary`, drag and drop your json config file `ADBMobileConfig.json` and check only `Copy items if needed`.
6. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.odemolliens.rn.adobe.analytics.RNAdobeAnalyticsPackage;` to the imports at the top of the file
  - Add `new RNAdobeAnalyticsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-adobe-analytics'
  	project(':react-native-adobe-analytics').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-adobe-analytics/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-adobe-analytics')
  	```
4. Open (or create it if it's not the case) `node_modules/react-native-adobe-analytics/android/app/src/main/res/raw` and add your json config file `adbmobileconfig.json` (file's name need to contain only lowercase)

## Usage
  	```js
  	import { Adobe } from 'react-native-adobe-analytics';
  	```


#### Setup

Adobe Analysis must be initialized as soon as the mobile application has started:

  	```js
  	import { Adobe } from 'react-native-adobe-analytics';

  	export default class App {
  	  constructor() {
  	    super()
  	    Adobe.init();
  	  }
  	}
  	```

#### Import

In any js file, you can start to use this plugin by adding:

  	```js
  	import { Adobe } from 'react-native-adobe-analytics';
  	```

#### Track Event

In any js file, you can track events by using:

  	```js
  	  Adobe.trackEvent('my_event', null);
  	```

Can be used with extra parameters:

  	```js
  	  const extraParameters = { 'screen.category.l1': 'cat1', 'screen.category.l2': 'cat2', 'screen.category.l3': 'cat3', 'screen.category.l4': 'cat4' };
  	  Adobe.trackEvent('my_event',extraParameters);
  	```


#### Track View

In any js file, you can track views by using:

  	```js
  	  Adobe.trackState('my_view_name',null);

  	```

Can be used with extra parameters:

  	```js
  	  const extraParameters = { 'screen.category.l1': 'cat1', 'screen.category.l2': 'cat2', 'screen.category.l3': 'cat3', 'screen.category.l4': 'cat4' };
  	  Adobe.trackState("my_view_name", extraParameters);
  	```

  # Build Status
### Changelog

### Version 1.0.0
 - Library created

