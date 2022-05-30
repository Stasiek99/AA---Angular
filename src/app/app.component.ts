import {Component, OnInit} from '@angular/core';

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

  inputValue: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<(JSONCountry)[]>(this.jsonURL)
      .subscribe(countries => {
        this.jsonCountries = countries;
      })
  }

  jsonCountries: JSONCountry[] = [];

  onChangesSearchBarInput(searchString: string){
    this.jsonCountries = this.getFilteredCountries(searchString);
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

  private getFilteredCountries(searchString: string){
    return this.jsonCountries.filter(elem => elem.name.toLowerCase().includes(searchString));
  }
}
