import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { SpinnerDTO } from './spinner-dto';

@Injectable({
  providedIn: 'root'
})
export class RequestSpinnerService {
  private showSpinner = new Subject<SpinnerDTO>();

  getData(): Observable<SpinnerDTO> {
    return this.showSpinner.asObservable();
  }

  show(name: string) {
    this.showSpinner.next({ show: true, name });
  }

  hide(name: string) {
    this.showSpinner.next({ show: false, name });
  }
}
