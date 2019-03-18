
#import "RNAdobeAnalytics.h"
#import <React/RCTLog.h>
#import "ADBMobile.h"

@implementation RNAdobeAnalytics RCT_EXPORT_MODULE();

BOOL isInitialized = false;

RCT_EXPORT_METHOD(initAdobe:(NSString*)tokenPath withResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *filePath;
    
    filePath = [[NSBundle mainBundle] pathForResource:tokenPath ofType:@"json"];
    
    if ([[NSFileManager defaultManager] fileExistsAtPath:filePath])
    {
        [ADBMobile overrideConfigPath:filePath];
        [ADBMobile collectLifecycleData];
        isInitialized = true;
        resolve(@"success");
    }
    else
    {
        isInitialized = false;
        NSError* error = [[NSError alloc]initWithDomain:@"react-native-adobe-analytics" code:-1001 userInfo:[NSDictionary dictionaryWithObjectsAndKeys:@"message",@"File not found", nil]];
        
        reject(@"-1001", @"File not found", error);
    }
}

// To track views
RCT_EXPORT_METHOD(trackState:(NSString*)viewName data:(NSDictionary*)data withResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    if (isInitialized == true) {
        [ADBMobile trackState:viewName data:data];
        resolve(@"success");
    } else {
        NSError* error = [[NSError alloc]initWithDomain:@"react-native-adobe-analytics" code:-1001 userInfo:[NSDictionary dictionaryWithObjectsAndKeys:@"message",@"Adobe is not initialized", nil]];
        reject(@"-1002", @"Adobe is not initialized", error);
    }
}

// To track events
RCT_EXPORT_METHOD(trackAction:(NSString*)viewName data:(NSDictionary*)data withResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    if (isInitialized == true) {
        [ADBMobile trackAction:viewName data:data];
        resolve(@"success");
    } else {
        NSError* error = [[NSError alloc]initWithDomain:@"react-native-adobe-analytics" code:-1001 userInfo:[NSDictionary dictionaryWithObjectsAndKeys:@"message",@"Adobe is not initialized", nil]];
        reject(@"-1002", @"Adobe is not initialized", error);
    }
}

@end

