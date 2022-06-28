import { Action } from '@ngrx/store';
import { Weather } from '../models/weather.model';
import * as weatherActions from '../actions/weather.actions';

const initalState: Weather = {
  name: 'InitalWeather',
  url: 'http://google.com',
};

export function reducer(
  state: Weather[] = [initalState],
  action: weatherActions.Actions
) {
  switch (action.type) {
    case weatherActions.ADD_WEATHER:
      return [...state, action.payload];
    default:
      return state;
  }
}
