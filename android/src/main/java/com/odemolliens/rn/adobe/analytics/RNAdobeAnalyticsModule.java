
package com.odemolliens.rn.adobe.analytics;

import com.adobe.mobile.Analytics;
import com.adobe.mobile.Config;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;


import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;

public class RNAdobeAnalyticsModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNAdobeAnalyticsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNAdobeAnalytics";
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void initAdobe() {
    InputStream configInput = this.reactContext.getResources().openRawResource(R.raw.adbmobileconfig);
    Config.overrideConfigStream(configInput);
  }

  // To track views
  @SuppressWarnings("unused")
  @ReactMethod
  public void trackState(String viewName, ReadableMap data) {
    HashMap<String, Object> mapData = new HashMap<>();
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

    Analytics.trackState(viewName, mapData);
  }

  // To track events
  @SuppressWarnings("unused")
  @ReactMethod
  public void trackAction(String viewName, ReadableMap data) {
    HashMap<String, Object> mapData = new HashMap<>();
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

    Analytics.trackAction(viewName, mapData);
  }
}