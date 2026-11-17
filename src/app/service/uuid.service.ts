import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  getUUid(){
    return crypto.randomUUID()
  }
  constructor() { }
}
