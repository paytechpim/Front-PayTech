import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HoleriteService } from '@app/services/holerite.service';

@Component({
  selector: 'app-folha-pagamento',
  templateUrl: './folha-pagamento.component.html',
  styleUrls: ['./folha-pagamento.component.scss']
})
export class FolhaPagamentoComponent {

  holerite = new FormGroup({
    id: new FormControl(),
    id_colaborador: new FormControl("", [Validators.required]),
    data_competencia: new FormControl("", [Validators.required]),
    horas_faltas: new FormControl(),
    horas_extra: new FormControl(),
    porcentagem_horas_extra: new FormControl(),
    vale_transporte: new FormControl(),
  });
  
  constructor(
    private holeriteService: HoleriteService
  ){

  }

  onIniciar(){
    this.holeriteService.gerarHolerite(this.holerite.controls.id_colaborador.value, this.holerite.controls.data_competencia.value, this.holerite.controls.porcentagem_horas_extra.value, this.holerite.controls.vale_transporte.value, this.holerite.controls.horas_faltas.value, this.holerite.controls.horas_extra.value).subscribe(response => {
      if(response.sucesso){
        alert("Holerite gerado com sucesso" + JSON.stringify(response.dados));
      }else{
        alert("Ocorreu um erro ao gerar o holerite: " + response.mensagem);
      }
    });
  }
}
