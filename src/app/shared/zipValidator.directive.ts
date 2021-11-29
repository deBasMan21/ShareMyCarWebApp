import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn
} from '@angular/forms';
import { Directive } from '@angular/core';

const regEx = new RegExp(/([\d]{4}[A-Z]{2})/g);

export function valid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value != null) {
            return regEx.test(control.value) ? null : { succes: false };
        } else {
            return null;
        }
    }
}

@Directive({
    selector: '[validZip]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ZipValidatorDirective,
        multi: true
    }]
})
export class ZipValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return valid()(control);
    }
}