import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  //what is underneath was not with NGRX
  // getWeatherData(cityName: string) {
  //   this.http.get(environment.weatherAPIHostBaseUrl, {
  //     headers: new HttpHeaders()
  //       .set(
  //         environment.weatherAPIHostHeaderName,
  //         environment.weatherAPIHostHeaderValue
  //       )
  //       .set(
  //         environment.weatherAPIKeyHeaderName,
  //         environment.weatherAPIKeyHeaderValue
  //       ),
  //     params: new HttpParams().set('q', cityName).set('units', 'metric'),
  //   });
  // }
}
