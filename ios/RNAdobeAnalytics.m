
#import "RNAdobeAnalytics.h"
#import <React/RCTLog.h>
#import "ADBMobile.h"

@implementation RNAdobeAnalytics RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initAdobe)
{
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ADBMobile" ofType:@"json"];
    [ADBMobile overrideConfigPath:filePath];
    [ADBMobile collectLifecycleData];
}

// To track views
RCT_EXPORT_METHOD(trackState:(NSString*)viewName data:(NSDictionary*)data)
{
    [ADBMobile trackState:viewName data:data];
}

// To track events
RCT_EXPORT_METHOD(trackAction:(NSString*)viewName data:(NSDictionary*)data)
{
    [ADBMobile trackAction:viewName data:data];
}

@end
