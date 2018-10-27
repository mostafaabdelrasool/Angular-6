import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: any;
  constructor() {
    this.user = { id: 2, name: 'Maram' };
  }

}
