import { weather } from './models/weather.model';

export interface Appstate {
  readonly weather: weather[];
}
