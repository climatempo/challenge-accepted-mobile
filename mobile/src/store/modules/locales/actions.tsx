import {ActionTypes, ILocaleProps} from './types';

export function addLocaleForecastRequest(city: string) {
  return {
    type: ActionTypes.addLocaleForecastRequest,
    payload: {
      city: city.trim(),
    },
  };
}

export function addLocaleForecastSuccess(locale: ILocaleProps) {
  return {
    type: ActionTypes.addLocaleForecastSuccess,
    payload: {
      locale,
    },
  };
}

export function addLocaleForecastError() {
  return {
    type: ActionTypes.addLocaleForecastError,
  };
}

export function cleanLocaleForecastHistory() {
  return {
    type: ActionTypes.cleanLocaleForecastHistory,
  };
}
