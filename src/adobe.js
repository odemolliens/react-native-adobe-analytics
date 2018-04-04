// @flow
import { NativeModules } from 'react-native';
const { RNAdobeAnalytics } = NativeModules;
const _ = require('lodash');

export default class Adobe {
  static possibleValues = {
    params: {},
  };
  static screenMappingFunc = undefined;
  static navigatorNames = ['nav'];

  static init() {
    return RNAdobeAnalytics.initAdobe();
  }

  static trackState(viewName: string, data: { [string]: string | number | Array<string> }) {
    return RNAdobeAnalytics.trackState(viewName, data);
  }
  
  /**
  * Returns all possibles values for a given prop
  */
 static getPossibleValuesForProp(prop) {
  if (_.isEmpty(prop) || !_.isString(prop)) {
    return [];
  }
  const values = Adobe.possibleValues[prop] || [];
  return values;
}

/**
* Sets all possibles values for a given prop
*/
static setPossibleValuesForProp(prop, values) {
  if (!_.isEmpty(prop) && _.isString(prop) && prop !== 'params') {
    Adobe.possibleValues[prop] = values;
  }
}

/**
* Sets all possibles values for 'trackEventName' prop
*/
static setPossibleValuesForTrackEventName(values) {
  Adobe.setPossibleValuesForProp('trackEventName', values);
}

/**
* Sets all possibles values for 'trackEventType' prop
*/
static setPossibleValuesForTrackEventType(values) {
  Adobe.setPossibleValuesForProp('trackEventType', values);
}

/**
* Sets all possibles values for a given custom parameter
*/
static setPossibleValuesForCustomParameter(param, values) {
  if (!_.isEmpty(param)) {
    Adobe.possibleValues.params[param] = values;
  }
}

/**
* Sets all possible names for custom parameters
* Should be an array of parameter names.
*/
static setPossibleNamesForCustomParameters(params) {
  _.each(params, p => {
    Adobe.setPossibleValuesForCustomParameter(p);
  });
}

/**
* Returns all possibles values the given parameter name
*/
static getPossibleValuesForCustomParameter(param) {
  return Adobe.possibleValues.params[param];
}

/**
* Returns all possibles parameter names (ie key) for the defined custom parameters
*/
static getAllPossibleKeysForCustomParameters() {
  return _.keys(Adobe.possibleValues.params);
}

/**
* Returns all possibles values the defined custom parameters
*/
static getAllPossibleValuesForCustomParameters() {
  return _.flatten(_.values(Adobe.possibleValues.params));
}

/**
* Sets the screen mapping function
*/
static setMappingFunction(func) {
  if (_.isFunction(func)) {
    Adobe.screenMappingFunc = func;
  }
}

/**
* Evaluates the screen mapping function with the given app screen name.
* Returns the screen matching name for Adobe.
*/
static getScreenNameForTracking(screenName) {
  if (_.isEmpty(screenName) || !_.isString(screenName)) {
    return undefined;
  }
  if (_.isUndefined(Adobe.screenMappingFunc)) {
    return screenName;
  }
  return Adobe.screenMappingFunc.call(this, screenName);
}

static setNavigatorNames(navigators) {
  Adobe.navigatorNames = navigators;
}

static addNavigatorName(navigator) {
  Adobe.navigatorNames.push(navigator);
}

static getNavigatorNames() {
  return Adobe.navigatorNames;
}
}
