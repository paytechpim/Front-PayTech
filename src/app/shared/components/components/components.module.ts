import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { TextBoxPasswordComponent } from './text-box-password/text-box-password.component';
import { MaterialModule } from '../material.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './label-alert/label-alert.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NumberBoxComponent } from './number-box/number-box.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SelectOptionMultipleComponent } from './select-option-multiple/select-option-multiple.component';
import { NumberBoxPercentageComponent } from './number-box-percentage/number-box-percentage.component';
import { ProcuraFuncionarioComponent } from './procura-funcionario/procura-funcionario.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CpfCnpjComponent } from './cpf-cnpj/cpf-cnpj.component';
import { EmailComponent } from './email/email.component';
import { MoneyComponent } from './money/money.component';
import { PhoneComponent } from './phone/phone.component';
import { CepComponent } from './cep/cep.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { ColorComponent } from './color/color.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { TextAreaComponent } from './text-area/text-area.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HudDashboardComponent } from './hud-dashboard/hud-dashboard.component';

@NgModule({
  declarations: [
        TextBoxComponent,
        TextBoxPasswordComponent,
        ButtonComponent,
        LabelComponent,
        NumberBoxComponent,
        BodyComponent,
        SelectOptionMultipleComponent,
        NumberBoxPercentageComponent,
        ProcuraFuncionarioComponent,
        SelectOptionComponent,
        DatePickerComponent,
        CpfCnpjComponent,
        EmailComponent,
        MoneyComponent,
        PhoneComponent,
        CepComponent,
        ChipsAutocompleteComponent,
        ColorComponent,
        AutocompleteComponent,
        TextAreaComponent,
        ResetPasswordComponent,
        HudDashboardComponent,
    ],
  imports: [
    CommonModule, 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    TextBoxComponent,
    TextBoxPasswordComponent,
    ButtonComponent,
    LabelComponent,
    NumberBoxComponent,
    BodyComponent,
    SelectOptionMultipleComponent,
    NumberBoxPercentageComponent,
    ProcuraFuncionarioComponent,
    SelectOptionComponent,
    DatePickerComponent,
    CpfCnpjComponent,
    EmailComponent,
    MoneyComponent,
    PhoneComponent,
    CepComponent,
    ChipsAutocompleteComponent,
    ColorComponent,
    AutocompleteComponent,
    TextAreaComponent,
  ],
  bootstrap: [],
})
export class ComponentsModule { }
