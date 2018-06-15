
package com.odemolliens.rn.adobe.analytics;

import android.app.Activity;
import android.util.Log;
import android.widget.Toast;

import com.adobe.mobile.Analytics;
import com.adobe.mobile.Config;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;

import java.io.InputStream;
import java.util.HashMap;

public class RNAdobeAnalyticsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private static Boolean isInitialized = false;
    private final Activity activity = getCurrentActivity();

    public RNAdobeAnalyticsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        Config.setContext(this.reactContext);
        reactContext.addLifecycleEventListener(mLifecycleEventListener);
    }

    private final LifecycleEventListener mLifecycleEventListener = new LifecycleEventListener() {
        @Override
        public void onHostResume() {
            Config.collectLifecycleData(activity);
        }

        @Override
        public void onHostPause() {
            Config.pauseCollectingLifecycleData();
        }

        @Override
        public void onHostDestroy() {

        }
    };

    @Override
    public String getName() {
        return "RNAdobeAnalytics";
    }

    @SuppressWarnings("unused")
    @ReactMethod
    public void initAdobe(Promise resolve) {
        initAdobe(null, resolve);
    }

    @SuppressWarnings("unused")
    @ReactMethod
    public void initAdobe(String packageName, Promise resolve) {
        String defPackage = (packageName != null && !packageName.isEmpty()) ? packageName :
                (getCurrentActivity() != null ? getCurrentActivity().getPackageName() : "");
        int configID;
        if (defPackage != null && defPackage.contains("store")) {
            configID = this.reactContext.getResources().getIdentifier("adbmobileconfigprod", "raw", defPackage);
        } else {
            configID = this.reactContext.getResources().getIdentifier("adbmobileconfig", "raw", defPackage);
        }
        if (configID == 0) {
            Log.e("RNAdobeAnalyticsModule", "Adobe Error: Setup file not found");
            this.isInitialized = false;
            resolve.reject("-1001", "Error when we tried to set Adobe, please Retry");
            return;
        }
        InputStream configInput = this.reactContext.getResources().openRawResource(configID);
        Config.overrideConfigStream(configInput);
        this.isInitialized = true;
        resolve.resolve("Success");
    }

    // To track views
    @SuppressWarnings("unused")
    @ReactMethod
    public void trackState(String viewName, ReadableMap data, Promise resolve) {
        if (isInitialized) {
            HashMap<String, Object> mapData = new HashMap<>();
            if (data != null) {
                ReadableMapKeySetIterator iterator = data.keySetIterator();

                while (iterator.hasNextKey()) {
                    String key = iterator.nextKey();
                    ReadableType type = data.getType(key);

                    switch (type) {
                        case Null:
                            mapData.put(key, null);
                            break;
                        case Boolean:
                            mapData.put(key, data.getBoolean(key));
                            break;
                        case Number:
                            mapData.put(key, data.getDouble(key));
                            break;
                        case String:
                            mapData.put(key, data.getString(key));
                            break;
                    }
                }
            }

            Analytics.trackState(viewName, mapData);
            resolve.resolve("Success");
        } else {
            resolve.reject("-1002", "Error : Adobe is not initialized");
        }
    }

    // To track events
    @SuppressWarnings("unused")
    @ReactMethod
    public void trackAction(String viewName, ReadableMap data, Promise resolve) {
        if (isInitialized) {
            HashMap<String, Object> mapData = new HashMap<>();
            if (data != null) {
                ReadableMapKeySetIterator iterator = data.keySetIterator();

                while (iterator.hasNextKey()) {
                    String key = iterator.nextKey();
                    ReadableType type = data.getType(key);

                    switch (type) {
                        case Null:
                            mapData.put(key, null);
                            break;
                        case Boolean:
                            mapData.put(key, data.getBoolean(key));
                            break;
                        case Number:
                            mapData.put(key, data.getDouble(key));
                            break;
                        case String:
                            mapData.put(key, data.getString(key));
                            break;
                    }
                }
            }

            Analytics.trackAction(viewName, mapData);
            resolve.resolve("Success");
        } else {
            resolve.reject("-1002", "Error : Adobe is not initialized");
        }
    }
}