import { NativeModules } from 'react-native'

const LocaleUtils = NativeModules.LocaleUtils

module.exports = {
  is24HourFormat: function () {
    return LocaleUtils.is24HourFormat;
  },
  usesMetricSystem: function () {
    return LocaleUtils.usesMetricSystem;
  },
  deviceCountry: function () {
    return LocaleUtils.deviceCountry;
  }
}
