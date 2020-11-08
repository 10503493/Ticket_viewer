import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
update()
{
  return this.http.get('https://obscura.zendesk.com/api/v2/help_center/en-us/articles.json', { responseType: 'json' });

}

}
