import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {CountryElement} from "../interfaces/country-element-interface";

@Injectable()
export class CountryDataService{
  private readonly jsonURL = "assets/countries.json";

  constructor(private http: HttpClient) {
  }

  httpGetData(){
    return this.http.get<CountryElement[]>(this.jsonURL);
  }
}
