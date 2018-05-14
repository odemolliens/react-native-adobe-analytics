// @flow
import { ScreenUtils } from './screen_utils.middleware';
import Adobe from '../adobe';
const _ = require('lodash');

export const PreviousScreenParam = 'prev_screen';

/**
* Middleware used with Redux in order to track the current screen displayed in the app.
*/
const screenTracking = ({ getState }) => next => (action) => {
  const currentScreen = ScreenUtils.getScreenFromNavigators(getState());
  const previous = Adobe.getScreenNameForTracking(currentScreen);
  if (action.type !== ScreenUtils.NAVIGATE && action.type !== ScreenUtils.BACK) {   
    // Not related to a screen that we track, so we just pass it through
    if (_.isUndefined(previous)) {
      return next(action);
    }
  }
  const result = next(action);
  const nextScreen = ScreenUtils.getScreenFromNavigators(getState());
  if (nextScreen !== currentScreen) {
    const screenName =  Adobe.getScreenNameForTracking(nextScreen);
    // We add the previous screen name
    let params = { [PreviousScreenParam]: previous };
    // We eventually append the custom analytics passed through the action thanks to meta property
    if (action.meta) {
      // We validate the key & values (only valid parameters will be extracted)
      const analytics = ScreenUtils.extractAnalyticsFromAction(action);
      params = { ...params, ...analytics };
    }
    Adobe.trackState(screenName, params);
  }
  return result;
};

export default screenTracking;