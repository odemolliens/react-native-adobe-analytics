import { BillingScreen, HomeScreen, SettingsScreen } from '../definitions';

export const MyBillLandingScreen = 'myBill.Landing';
export const MyBillLandingAllScreen = 'myBill.LandingAll';
export const MyBillOverviewScreen = 'myBill.Overview';
export const MyBillHistoryScreen = 'myBill.History';
export const ReloadPaymentsScreen = 'ReloadPayments';
export const ReloadScreen = 'Reload';
export const ReloadSearchScreen = 'ReloadSearch';
export const ReloadContactScreen = 'ReloadContact';
export const ReloadOtherNumberScreen = 'ReloadOtherNumber';
export const ReloadError = 'ReloadError';
export const IntroScreen = 'Intro';
export const EOLScreen = 'EOL';
export const MinorUpdateScreen = 'MinorUpdate';
export const MajorUpdateScreen = 'MajorUpdate';
export const SIMScreen = 'Sim';
export const WifiScreen = 'Wifi';
export const LoginImplicitScreen = 'LoginImplicit';
export const LoginExplicitScreen = 'LoginExplicit';
export const LoginExplicitErrorScreen = 'LoginExplicitError';
export const NewFeatureScreen = 'NewFeature';
export const IntroNotificationsScreen = 'IntroNotifications';
export const TCScreen = 'TC';
export const TCEndScreen = 'TCEnd';
export const MyAdvangesActivateScreen = 'My-Advantages.Activate';
export const MyAdvangesScreen = 'My-Advantages.Overview';
export const MyAdvantagesPlayGoldScreen = 'My-Advantages.PlayGold';
export const ProfileOverviewScreen = 'Profile.Overview';
export const ProfileEditScreen = 'Profile.Edit';
export const ProfileDetailsScreen = 'Profile.Details';
export const UsageDashboardScreen = 'Usage.Dashboard';
export const UsageDetailScreen = 'Usage.Detail';
export const UsageErrorScreen = 'Usage.Error';
export const ProductOverviewScreen = 'Product.Overview';
export const ProductErrorScreen = 'Product Error';
export const ProductDetailScreen = 'Product Detail';
export const ProductOptionsScreen = 'Product Options';
export const ProductOptionsConflictScreen = 'Product Options Conflict';
export const ProductOptionsTCScreen = 'Product Options TC';
export const ProductOptionsConfirmationScreen = 'Product Options Confirmation';
export const ProductOptionsErrorScreen = 'Product Options Error';
export const ContactOverviewScreen = 'Contact Overview';
export const ProductOptionsUnfinishedOrderScreen = 'Product Options Unfinished Order';
export const ProductOptionsRecommendationScreen = 'Product Options Recommendation';
export const ProductOptionsErrorFraudScreen = 'Product Options Error Fraud';
export const SmartWifiNoSimScreen = 'Smart Wifi No Sim';
export const SmartWifiNotConfiguredScreen = 'Smart Wifi Not Configured';
export const SmartWifiConfigurationProductScreen = 'Smart Wifi Configuration Product';
export const SmartWifiConfigurationForScreen = 'Smart Wifi Configuration For';
export const SmartWifiConfigurationAppNotInstalledScreen = 'Smart Wifi Configuration Not Installed';
export const SmartWifiHomeScreen = 'Smart Wifi Home';
export const ScanScreen = 'Scan';
export const ScanHistoryScreen = 'Scan History';
export const ProductionOptionsErrorFraudScreen = 'Production Options Error Fraud';
export const NotificationsOverviewScreen = 'Notification Overview';
export const NotificationDetailScreen = 'Notification Detail';
export const NotificationSettingsScreen = 'Notifications Settings';

/**
* Useful for component prop checking if directly used as a property
*/
export const AllScreenNameTypes = [
  MyBillLandingScreen,
  MyBillLandingAllScreen,
  MyBillOverviewScreen,
  MyBillHistoryScreen,
  ReloadPaymentsScreen,
  ReloadScreen,
  ReloadSearchScreen,
  ReloadContactScreen,
  ReloadOtherNumberScreen,
  IntroScreen,
  EOLScreen,
  MinorUpdateScreen,
  MajorUpdateScreen,
  SIMScreen,
  WifiScreen,
  LoginImplicitScreen,
  LoginExplicitScreen,
  LoginExplicitErrorScreen,
  NewFeatureScreen,
  IntroNotificationsScreen,
  TCScreen,
  TCEndScreen,
  ProductOverviewScreen,
  MyAdvangesActivateScreen,
  MyAdvangesScreen,
  MyAdvantagesPlayGoldScreen,
  ProfileOverviewScreen,
  ProfileEditScreen,
  ProfileDetailsScreen,
  UsageDashboardScreen,
  UsageDetailScreen,
  ProductErrorScreen,
  ProductDetailScreen,
  ProductOptionsScreen,
  ProductOptionsConflictScreen,
  ProductOptionsTCScreen,
  ProductOptionsConfirmationScreen,
  ProductOptionsErrorScreen,
  ContactOverviewScreen,
  UsageErrorScreen,
  ReloadError,
  ProductOptionsUnfinishedOrderScreen,
  ProductOptionsRecommendationScreen,
  ProductOptionsErrorFraudScreen,
  SmartWifiNoSimScreen,
  SmartWifiNotConfiguredScreen,
  SmartWifiConfigurationProductScreen,
  SmartWifiConfigurationForScreen,
  SmartWifiConfigurationAppNotInstalledScreen,
  SmartWifiHomeScreen,
  ScanScreen,
  ScanHistoryScreen,
  ProductionOptionsErrorFraudScreen,
  NotificationsOverviewScreen,
  NotificationDetailScreen,
  NotificationSettingsScreen
];

export type ScreenNameType =
  MyBillLandingScreen |
  MyBillLandingAllScreen |
  MyBillOverviewScreen |
  MyBillHistoryScreen |
  ReloadPaymentsScreen |
  ReloadScreen |
  ReloadSearchScreen |
  ReloadContactScreen |
  ReloadOtherNumberScreen |
  IntroScreen |
  EOLScreen |
  MinorUpdateScreen |
  MajorUpdateScreen |
  SIMScreen |
  WifiScreen |
  LoginImplicitScreen |
  LoginExplicitScreen |
  LoginExplicitErrorScreen |
  NewFeatureScreen |
  IntroNotificationsScreen |
  TCScreen |
  TCEndScreen |
  ProductOverviewScreen |
  MyAdvangesActivateScreen |
  MyAdvangesScreen |
  MyAdvantagesPlayGoldScreen |
  ProfileOverviewScreen |
  ProfileEditScreen |
  ProfileDetailsScreen |
  UsageDashboardScreen |
  UsageDetailScreen |
  ProductErrorScreen |
  ProductDetailScreen |
  ProductOptionsScreen |
  ProductOptionsConflictScreen |
  ProductOptionsTCScreen |
  ProductOptionsConfirmationScreen |
  ProductOptionsErrorScreen |
  UsageErrorScreen |
  ReloadError |
  ContactOverviewScreen |
  ProductOptionsUnfinishedOrderScreen |
  ProductOptionsRecommendationScreen |
  ProductOptionsErrorFraudScreen |
  SmartWifiNoSimScreen |
  SmartWifiNotConfiguredScreen |
  SmartWifiConfigurationProductScreen |
  SmartWifiConfigurationForScreen |
  SmartWifiConfigurationAppNotInstalledScreen |
  SmartWifiHomeScreen |
  ScanScreen |
  ScanHistoryScreen |
  ProductionOptionsErrorFraudScreen |
  NotificationsOverviewScreen |
  NotificationDetailScreen |
  NotificationSettingsScreen;

/**
* Mapping between definitions of screen names in the app and screen names in adobe.
*/
export const ScreenNames: Map<Screen, string> = {
  'Home': MyBillLandingScreen,
  'Billing': MyBillHistoryScreen,
  'Settings': MyBillOverviewScreen,
};
