import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'stripNativeName' })
export class StripNativeNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s*\(.*?\)/, '').trim();
  }
}