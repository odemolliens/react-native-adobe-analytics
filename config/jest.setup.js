/**
 * Mocks a certain native module
 */
jest.mock('react-native', () => ({
  Platform: {
    // Defines the Platform.OS value
    OS: `ios`,
    // Defines the Platform.Version value
    Version: 11,
    // Function mock that simply returns the ios value passed
    select: jest.fn(value => value.ios),
  },
}));
