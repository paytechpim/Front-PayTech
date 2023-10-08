import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string): string {
    // Verifique se o CPF é válido antes de formatá-lo
    if (!cpf || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      return cpf; // Retorna o CPF não formatado se for inválido
    }

    // Formata o CPF no formato ###.###.###-##
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
