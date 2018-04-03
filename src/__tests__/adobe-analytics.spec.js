// @flow

/* eslint-disable no-console */

import sinon from 'sinon';
import { assert } from 'chai';
import { Platform } from 'react-native';

/**
 * Template with test
 */
describe('Library tests suite', () => {
  const functionToSpy: string = 'log';
  const logSpy: sinon.SinonSpyStatic = sinon.spy(console, functionToSpy);

  /**
   * Logic excuted before each test
   */
  beforeEach(() => {
    // Resets the spy of log function
    logSpy.reset();
  });

  // Test 1
  it('Example spy one function', () => {
    const str: string = `Hello world`;
    console.log(str);
    // Ensures that a method log was called
    assert.ok(
      // With a certain parameter
      logSpy.withArgs(str).calledOnce,
      `console.log("${str}") called once`
    );
  });

  // Test 2
  it('Example testing mock values', () => {
    const os: Platform.PlatformOSType = Platform.OS;
    const version: number = Platform.Version;

    // Value defined the value defined in the jest.setup.js file
    const mockedOS: Platform.PlatformOSType = 'ios';

    // Check that the value is the expected one
    assert.equal(os, mockedOS);
    // Check that the value is bigger that 10
    assert.isAtLeast(version, 10);
  });

  // Test 3
  it('Example test mock function', () => {
    const iosBackground: Object = {
      backgroundColor: 'red',
    };
    const androidBackground: Object = {
      backgroundColor: 'blue',
    };
    // Logic of function defined in the jest.setup.js file
    const backgroundColor: Object = Platform.select({
      ios: iosBackground,
      android: androidBackground,
    });

    // Checks that the return was the one defined to ios
    assert.equal(backgroundColor, iosBackground);
  });
});
