import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { SelectOptionModel } from 'src/app/models/select-option.models';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  @Input() control = new FormControl();

  @Output() appChange = new EventEmitter<any>();
  onChangeSelect(){
    this.appChange.emit();
  }

  @Input() appLabel: string = "";
  @Input() appValue: string = "";
  @Input() appPlaceHolder: string = "";
  @Input() appTamanho: string = "";
  @Input() appListValue: SelectOptionModel[];
  @Input() appDisabled: boolean = false;
  @Input() appShow: boolean = true;
  @Input() appVazio: boolean = false;

  filteredOptions: Observable<SelectOptionModel[]>;
  hide = true;

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.control.valueChanges.subscribe((value) => {
      this.onChangeSelect();
    });
  }

  private _filter(value: string): SelectOptionModel[] {
    const filterValue = value.toLowerCase();
    return this.appListValue.filter(x => x.descricao.toLowerCase().includes(filterValue));
  }

  public onLostFocus(){
    setTimeout(() => {
      var filterValue = this.control.value;
      var filtro = this.appListValue.find(x => x.descricao.toLowerCase() == filterValue?.toLowerCase())

      if(filtro == null || filtro.descricao == ''){
        this.control.setValue('');
      }else{
        this.control.setValue(filtro.descricao);
      }
    }, 100)
  }
}
