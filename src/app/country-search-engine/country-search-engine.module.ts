import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import { CountrySearchEngineComponent } from './country-search-engine/country-search-engine.component';
import {SearchInputComponent} from "./components/search-input/search-input.component";
import {SearchAutocompleteComponent} from "./components/search-autocomplete/search-autocomplete.component";
import {CountryDataService} from "./services/country-data.service";
import {AppComponent} from "../app.component";

@NgModule({
  declarations: [
    CountrySearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent
  ],
  exports: [
    CountrySearchEngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})

export class CountrySearchEngineModule{}
