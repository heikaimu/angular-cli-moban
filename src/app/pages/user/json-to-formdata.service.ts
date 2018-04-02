import { Injectable } from '@angular/core';

@Injectable()
export class JsonToFormdata {
  trans(obj) {
    const formData = new FormData();
    for (const i in obj) {
      if (obj[i]) {
        formData.append(i, obj[i]);
      }
    }
    return formData;
  }
}
