import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myUppercase' })
export class MyUppercasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}