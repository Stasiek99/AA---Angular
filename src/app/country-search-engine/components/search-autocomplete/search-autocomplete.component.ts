import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() autoComplete = new EventEmitter<string>();

  onSelectAutoCompleteElements(searchString: string): void{
    this.autoComplete.emit(searchString);
  }
}
