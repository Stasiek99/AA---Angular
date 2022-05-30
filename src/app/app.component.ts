import {Component, OnInit} from '@angular/core';

import {listOfCountries} from "./db.mock";
import {Country} from "./country.interface";
import {HttpClient} from "@angular/common/http";

export interface JSONCountry {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  private readonly jsonURL = "assets/countries.json";
  private readonly urlFragment = "https://www.google.com/search?q=";

  filtredCountries: Country[] = [];
  inputValue: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<(JSONCountry)[]>(this.jsonURL)
      .subscribe(countries => {
        console.log(countries);
        this.jsonCountries = countries;
      })
  }

  jsonCountries: JSONCountry[] = [];

  onChangesSearchBarInput(searchString: string){
    this.filtredCountries = this.getFiltredCountries(searchString);
  }

  onSelectAutoCompleteElements(labelElement: string): void{
    this.inputValue = labelElement;
    this.redirectToGoogle()
  }


  onSubmit(): void{
    this.redirectToGoogle();
  }

  private redirectToGoogle(): void{
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }


  private getFiltredCountries(searchString: string){
    return listOfCountries.filter(elem => elem.label.includes(searchString));
  }


}




















