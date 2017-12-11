import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class HNResolver implements Resolve<Observable<string>>{
  resolve():Observable<string>{
    return Observable.of('Hello Arvind').delay(2000);
  }

}