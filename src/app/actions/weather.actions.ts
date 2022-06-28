import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { weather } from './../models/weather.model';

export const ADD_WEATHER = '[weather] Add';
export const REMOVE_WEATHER = '[weather] Remove';

export class addWeather implements Action {
  readonly type = ADD_WEATHER;
  // dont need a constructor if we are not passing information
  constructor(public payload: weather) {}
}

export class removeWeather implements Action {
  readonly type = REMOVE_WEATHER;

  constructor(public payload: number) {}
}

export type Actions = addWeather | removeWeather;
