import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() searchBarChanged = new EventEmitter<string>();
  @Output() submit = new EventEmitter<any>();

  onChangesSearchBarInput(searchString: string) {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void{
    this.submit.emit();
  }
}
