import { Action } from '@ngrx/store';
import { weather } from '../models/weather.model';
import * as weatherActions from '../actions/weather.actions';

const initalState: weather = {
  name: 'InitalWeather',
  url: 'http://google.com',
};

export function weatherReducer(
  state: weather[] = [initalState],
  action: weatherActions.Actions
) {
  switch (action.type) {
    case weatherActions.ADD_WEATHER:
      return [...state, action.payload];
    default:
      return state;
  }
}
