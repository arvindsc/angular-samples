import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { INews } from './news';

@Injectable()
export class HNService {
  endpoint = 'https://hnpwa.com/api/v0/news.json';
  constructor(private _http: HttpClient) {}

  getTopPosts(): Observable<Array<INews>> {
    return this._http.get<Array<INews>>(this.endpoint);
  }
}
