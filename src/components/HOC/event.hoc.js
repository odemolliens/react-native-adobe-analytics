import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from '../../utils/functions';
import { ClickEvent, EventDetailParameter, EventParametersPropTypes } from '../../utils/definitions';
import Adobe from '../../adobe';

/**
* Component which allows to send an event to Adobe according to its name and parameters
* given as props.
* To use it with a Button from 'react-native' for example, just import it
* and build another button with the following syntax:
* import { Button } from 'react-native';
* import withTrackEvent from ''PXSTealiumSample/src/components/adobe/HOC/event.hoc';
* const ButtonWithTrackEvent = withTrackEvent(Button);
* Now you have a Button along the right props set which will send events to Adobe
* It's that easy. That's all folks !
*/
const withTrackEvent = (WrappedComponent) => {
  const possibleValuesForTrackEventName = Adobe.getPossibleValuesForProp('trackEventName');
  const possibleValuesForTrackEvenType = Adobe.getPossibleValuesForProp('trackEventType');
  return class extends Component {
    /**
    * Display name used for debugging purpose. Takes static displayName value from the Wrapped Component
    * if there's any, its name otherwise.
    */
    static displayName = `withTrackEvent(${getDisplayName(WrappedComponent)})`;

    static propTypes = {
      /**
      * Custom parameters to send to Adobe
      */
      params: EventParametersPropTypes,
      /**
      * Event name to send to Adobe. Comes from Event Detail definitions.
      */
      trackEventName: PropTypes.oneOf(possibleValuesForTrackEventName).isRequired,
      /**
      * Event type to send to Adobe. So far, it can be: 'click', 'download' or 'Favourite'
      */
      trackEventType: PropTypes.oneOf(possibleValuesForTrackEvenType),
    }

    /**
    * Default event type is set to "click"
    */
    static defaultProps = {
      trackEventType: ClickEvent,
    }

    constructor(props) {
      super(props);
    }

    /**
    * Method used to call Adobe.
    */
    _onPress = () => {
      this._sendEvent();
      this.props.onPress && this.props.onPress();
    }

    /**
    * Send an event to Adobe with the props name and parameters
    */
    _sendEvent = () => {
      const { params = {}, trackEventName, trackEventType } = this.props;
      const parameters = { [EventDetailParameter]: this.props.trackEventType, ...params };
      Adobe.trackEvent(trackEventName, parameters);
    }

    /**
    * Render the wrapped component plus its own onPress method
    */
    render() {
      const newProps = {
        onPress: this._onPress,
      };
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}

export default withTrackEvent;
