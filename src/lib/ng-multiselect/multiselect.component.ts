import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'ng-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent {

  @Input() public options: KeyValue<string, string>[];
  @Input() public placeholder: string;
  public selectedOptions: KeyValue<string, string>[] = [];
  public dropDownVisible = true;
  public filteredOptions: KeyValue<string, string>[];

  private getUnselectedOptions(options: KeyValue<string, string>[] ): KeyValue<string, string>[] {
    return options.filter(option => !this.selectedOptions.find(selectedOption => option.key === selectedOption.key));
  }

  public filterOptions($event): void {
    const value = $event.target.value;
    if (value.length > 0) {
      this.filteredOptions = this.getUnselectedOptions(this.options.filter(option => option.value.toLowerCase().indexOf(value.toLowerCase()) !== -1));
    } else {
      this.filteredOptions = this.getUnselectedOptions(this.options);
    }
  }

  public addOption(option): void {
    this.selectedOptions.push(option);
    this.dropDownVisible = false;
  }

  public removeOption(option): void {
    this.selectedOptions = this.selectedOptions.filter(selectedOption => selectedOption.key !== option.key);
    this.dropDownVisible = false;
  }

  public showDropDown(): void {
    if (this.selectedOptions.length > 0) {
      this.filteredOptions= this.getUnselectedOptions(this.options);
    } else {
      this.filteredOptions = this.options;
    }
    this.dropDownVisible = true;

  }

}
