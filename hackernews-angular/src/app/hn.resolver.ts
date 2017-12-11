import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { HNService } from './hn.service';
import { INews } from './news';


@Injectable()
export class HNResolver implements Resolve<Observable<Array<INews>>> {
  constructor(private _hnService: HNService) {}

  resolve(): Observable<Array<INews>> {
    return this._hnService.getTopPosts();
  }
}
