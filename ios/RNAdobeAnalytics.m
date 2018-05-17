
#import "RNAdobeAnalytics.h"
#import <React/RCTLog.h>
#import "ADBMobile.h"

@implementation RNAdobeAnalytics RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initAdobe:(NSString*)packageName withResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ADBMobileConfig" ofType:@"json"];
    if ([[NSFileManager defaultManager] fileExistsAtPath:filePath])
    {
        [ADBMobile overrideConfigPath:filePath];
        [ADBMobile collectLifecycleData];
        resolve(@"success");
    }
    else
    {
        NSError* error = [[NSError alloc]initWithDomain:@"react-native-adobe-analytics" code:-1001 userInfo:[NSDictionary dictionaryWithObjectsAndKeys:@"message",@"File not found", nil]];
        
        reject(@"-1001", @"File not found", error);
    }
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
