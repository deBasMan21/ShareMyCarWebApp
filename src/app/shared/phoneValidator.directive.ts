import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn
} from '@angular/forms';
import { Directive } from '@angular/core';

const regEx = new RegExp(/^([0]{1}[6]{1}[\d]{8})$/g);

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
    selector: '[validPhone]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidatorDirective,
        multi: true
    }]
})
export class PhoneValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return valid()(control);
    }
}