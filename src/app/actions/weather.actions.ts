import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Weather } from './../models/weather.model';

export const ADD_WEATHER = '[WEATHER] Add';
export const REMOVE_WEATHER = '[WEATHER] Remove';

export class addWeather implements Action {
  readonly type = ADD_WEATHER;
  // dont need a constructor if we are not passing information
  constructor(public payload: Weather) {}
}

export class RemoveWeather implements Action {
  readonly type = REMOVE_WEATHER;

  constructor(public payload: number) {}
}

export type Actions = addWeather | RemoveWeather;
