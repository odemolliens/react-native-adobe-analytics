// @flow
import withTrackEvent from './src/components/HOC/event.hoc';
import ScreenTrackingMiddleware from './src/middlewares/screen.middleware';
import { getDisplayName, getScreenNameForTracking } from './src/utils/functions';
import { EventParametersPropTypes } from './src/utils/definitions';
import { EventDetailParameter } from './src/utils/definitions';
import { ScreenUtils } from './src/middlewares/screen_utils.middleware';
import Adobe from './src/adobe';

export {
  getDisplayName,
  getScreenNameForTracking,
  ScreenTrackingMiddleware,
  Adobe,
  withTrackEvent,
  EventParametersPropTypes,
  EventDetailParameter,
  ScreenUtils
};
