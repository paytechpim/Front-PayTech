import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { colaboradorService } from '@app/services/colaborador.service';
import { HoleriteService } from '@app/services/holerite.service';
import { DialogInfoComponent } from '@app/shared/components/dialog-info/dialog-info.component';

@Component({
  selector: 'app-folha-pagamento',
  templateUrl: './folha-pagamento.component.html',
  styleUrls: ['./folha-pagamento.component.scss']
})
export class FolhaPagamentoComponent {

  holerite = new FormGroup({
    id: new FormControl(),
    id_colaborador: new FormControl("", [Validators.required]),
    horas_faltas: new FormControl(),
    horas_extra: new FormControl(),
    porcentagem_horas_extra: new FormControl(),
    vale_transporte: new FormControl(),
    data: new FormGroup({
      inicio: new FormControl("", [Validators.required]),
      fim: new FormControl("", [Validators.required]),
    }),
  });

  colaborador: any;
  holeriteResponse: any;
  nome = "";
  
  constructor(
    private holeriteService: HoleriteService,
    private colaboradorService: colaboradorService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
  ){

  }

  public onLimpar(){
    this.holerite.reset();
    this.colaborador = [];
    this.holeriteResponse = [];
    this.nome = "";
  }

  public onBuscar(id?: string) {
    if(this.holerite.controls.id_colaborador.value != ""){
      this.colaboradorService.buscarColaborador(parseInt("" +this.holerite.controls.id_colaborador.value)).subscribe(response => {
        if(response.dados.id > 0){
          this.colaborador = response.dados;
          this.nome = this.colaborador.nome;
        }else{
          this.onLimpar();
          this._snackBar.open('Colaborador(a) não encontro(a)!', 'ok', {
            duration: 5000,
          });
        }
      });
    }else{
      this.onLimpar();
    }
  }

  onIniciar(){
    this.holeriteService.gerarHolerite(this.holerite.controls.id_colaborador.value, this.holerite.controls.data.controls.inicio.value, this.holerite.controls.data.controls.fim.value, this.holerite.controls.porcentagem_horas_extra.value, this.holerite.controls.vale_transporte.value, this.holerite.controls.horas_faltas.value, this.holerite.controls.horas_extra.value).subscribe(response => {
      if(response.sucesso){
        this.holeriteResponse = response.dados;
        const dialogRef = this.dialog.open(DialogInfoComponent, {
          data: {
            titulo: "Holerite gerado com sucesso", 
            descricao: "Holerite " + this.holeriteResponse.id + " Gerado com sucesso",
            opcao1: "Cadastrar novo",
            opcao2: "Download",
            color1: "btn-light",
            color2: "btn-primary"
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result == 2){
            this.onDownloadExcel(this.holeriteResponse.id);
          }else{
            this.onLimpar();
          }
        });
      }else{
        alert("Ocorreu um erro ao gerar o holerite: " + response.mensagem);
      }
    });
  }

  onDownloadExcel(id_Holerite: number){
    this.holeriteService.downloadExcel(id_Holerite).subscribe(response => {
      if(response.sucesso){
        var arquivo = this.base64ToBlob(response.dados);
        const fileName = 'Ibank_holerite_' + id_Holerite + ".xlsx"; // Substitua pelo nome desejado

        var fileURL = window.URL.createObjectURL(arquivo);
        window.open(fileURL, fileName);
      }else{
        alert("Ocorreu um erro ao gerar o holerite: " + response.mensagem);
      }
    });
  }

  private base64ToBlob(data: any): Blob {

    var dataURI = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + data;

    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
     var byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  
    // write the bytes of the string to an ArrayBufferx
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    try {
      return new Blob([ab], {type: mimeString});
    } catch (e) {
      return new Blob();
    }
  }
}
