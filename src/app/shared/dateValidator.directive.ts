import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn
} from '@angular/forms';
import { Directive } from '@angular/core';

export function valid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return new Date(control.value) < new Date() ? { isValid: true } : null;
    }
}

@Directive({
    selector: '[validDate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DateValidatorDirective,
        multi: true
    }]
})
export class DateValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return valid()(control);
    }
}