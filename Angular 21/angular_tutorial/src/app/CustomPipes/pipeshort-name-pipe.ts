import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeshortName',
})
export class PipeshortNamePipe implements PipeTransform {
  transform(fullName: string,): unknown {
    const parts=fullName.split(' ');

    if(parts.length<2) return fullName;

    const first=parts[0].charAt(0).toUpperCase();
    const last=parts[1];
    return  `${first}. ${last}`
  }
}
