import {CountryElement} from "./country-element-interface";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CountryDataService{
  private readonly jsonURL = "assets/countries.json";

  constructor(private http: HttpClient) {
  }

  httpGetData(){
    return this.http.get<CountryElement[]>(this.jsonURL);
  }
}
