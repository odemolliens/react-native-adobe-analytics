
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

RCT_EXPORT_METHOD(trackState:(NSString*)viewName data:(NSDictionary*)data)
{
    [ADBMobile trackState:viewName data:data];
}

@end
