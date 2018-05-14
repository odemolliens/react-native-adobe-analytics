import Adobe from '../adobe';
const _ = require('lodash');

  // In order to avoid react-navigation dependency
  export const _BACK = 'Navigation/BACK';
  export const _NAVIGATE = 'Navigation/NAVIGATE';

/**
 * Class that provide utils of the screen
 */
export class ScreenUtils {

  static get BACK() {
    return _BACK;
  }

  static get NAVIGATE() {
    return _NAVIGATE;
  }

  /**o
   * Extract from an action the valid parameter(s) according to Adobe parameters
   */
  static extractAnalyticsFromAction(action) {
    if (_.isEmpty(action) || _.isNull(action)) {
      return {};
    }
    if (_.isEmpty(action.meta)) {
      return {};
    }
    if (_.isEmpty(action.meta.analytics)) {
      return {};
    }
    const parametersNames = Adobe.getAllPossibleKeysForCustomParameters();
    const params = _.intersection(_.keys(action.meta.analytics), parametersNames);
    if (_.isEmpty(params)) {
      console.warn('Invalid analytics parameter key(s) given to action:', action.type);
      return {};
    }
    let analytics = {};
    params.forEach(p => {
      const possibleValues = Adobe.getPossibleValuesForCustomParameter(p);
      if (_.indexOf(possibleValues, action.meta.analytics[p]) === -1) {
        console.warn(`Invalid analytics parameter value "${action.meta.analytics[p]}" for key "${p}" given to action "${action.type}"`);
      } else {
        analytics[p] = action.meta.analytics[p];
      }
    });
    return analytics;
  }

  /**
   * 
   * @param {*} navigationState 
   */
  static getCurrentRouteName(navigationState){
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return ScreenUtils.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  /**
   * 
   */
  static getScreenFromNavigators = (state) => {
    let currentScreen = undefined;
    if (!state) {
      return undefined;
    }
    const navigators = Adobe.getNavigatorNames();
    for (let nav of navigators) {
      currentScreen = ScreenUtils.getCurrentRouteName(state[nav]);
      if (!_.isUndefined(currentScreen)) {
        break;
      }
    }
    return currentScreen;
  }
}
