import { Weather } from './models/weather.model';

export interface Appstate {
  readonly weather: Weather[];
}
