import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqldata'
})
export class SqldataPipe implements PipeTransform {

  transform(formatSqlDate: string): string {
    //2023-10-05T00:00:00	

    if(formatSqlDate?.length != "2023-10-05T00:00:00".length) return formatSqlDate;

    var data = formatSqlDate.split("T")[0];

    var dataquebrada = data.split("-");

    return dataquebrada[2] + "/" + dataquebrada[1] + "/" + dataquebrada[0];
  }

}
