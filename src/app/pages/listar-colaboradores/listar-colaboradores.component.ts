import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { colaboradorService } from '@app/services/colaborador.service';
import { DialogInfoComponent } from '@app/shared/components/dialog-info/dialog-info.component';

@Component({
  selector: 'app-listar-colaboradores',
  templateUrl: './listar-colaboradores.component.html',
  styleUrls: ['./listar-colaboradores.component.scss']
})
export class ListarColaboradoresComponent {
  formulario = new FormGroup({
    tipoPesquisa: new FormControl("", [
      Validators.required,
    ]),
    palavraChave: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
    ]),
    like: new FormControl(),
  });

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dt_admissao','salario', 'acao'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _snackBar: MatSnackBar,
    private colaboradorService: colaboradorService,
    private dialog: MatDialog,
    private router: Router, 
  ){
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.formulario.controls.tipoPesquisa.setValue('Nome');
  }

  onPesquisar(){
    this.dataSource.data = [];
    if(!this.formulario.valid){
      this._snackBar.open('Preencha todos os campos obrigatórios!', 'ok', {
        duration: 10000,
      });
      return;
    }

    if(this.formulario.controls.tipoPesquisa.value == "CPF"){
      this._snackBar.open('Não implementado!', 'ok', { duration: 10000});
      return;
    }

    this.colaboradorService.buscarColaboradorPorParametro("" + this.formulario.controls.tipoPesquisa.value, "" + this.formulario.controls.palavraChave.value).subscribe(response => {
      if(response.sucesso){
        this.dataSource.data = response.dados;
      }else{
        this._snackBar.open(response.mensagem, 'ok', {
          duration: 10000,
        });
      }
    });
  }

  onEditar(element: any){
    console.log(element);
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {
        titulo: "Atenção!", 
        descricao: "Deseja editar o colaborador " + element.id + "?",
        opcao1: "Cancelar",
        opcao2: "Editar",
        color1: "btn-light",
        color2: "btn-primary"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.router.navigateByUrl('/admin/colaboradores/' + element.id);  
      }
    });
  }

  onExcluir(element: any){
    console.log(element);
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {
        titulo: "Atenção!", 
        descricao: "Deseja excluir o colaborador " + element.id + "?",
        opcao1: "Cancelar",
        opcao2: "Excluir",
        color1: "btn-light",
        color2: "btn-danger"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.colaboradorService.deleteColaborador(element.id).subscribe(response => {
          if(response.sucesso){
            this._snackBar.open("Colaborador excluído com sucesso", 'ok', {
              duration: 10000,
            });
          }else{
            this._snackBar.open(response.mensagem, 'ok', {
              duration: 10000,
            });
          }
          this.onPesquisar();
        });
      }
    });
  }

}
