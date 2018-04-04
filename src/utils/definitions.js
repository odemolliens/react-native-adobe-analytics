/**
* Event Type values.
* Possibles values so far: 'click', 'download' and 'favourite'
*/
export const EventKey = 'Event';
export const ClickEvent = 'click';

/**
*
*/
export const EventParameter = 'Event';
export const EventDetailParameter = 'Event_detail';
export const ScreenNameParameter = 'screen_name';

export const ScreenCategoryL1Parameter = 'screen.category.l1';
export const ScreenCategoryL2Parameter = 'screen.category.l2';
export const ScreenCategoryL3Parameter = 'screen.category.l3';
export const AppLanguage = 'app.language';
export const AppName = 'app.name';
export const AppVersion = 'app.version';
export const UserCustomerID = 'user.customer_id';
export const UserGID = 'user.gid';
export const UserSegment = 'user.segment';

const validateParamValues = (key, value) => {

}

export const HomeScreen = 'Home';
export const SettingsScreen = 'Settings';
export const BillingScreen = 'Billing';

export type Screen = HomeScreen | SettingsScreen | BillingScreen;

/**
* Represents all the screens of the app.
* Mainly useful for tracking in ScreenMiddleware.
*/
export const AppScreens: Array<Screen> = [HomeScreen, SettingsScreen, BillingScreen];
