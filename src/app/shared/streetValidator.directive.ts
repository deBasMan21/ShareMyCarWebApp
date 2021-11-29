import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn
} from '@angular/forms';
import { Directive } from '@angular/core';

const regEx = new RegExp(/([a-z][\s]{1}[\d]{1,4})/g);

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
    selector: '[validStreet]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: StreetValidatorDirective,
        multi: true
    }]
})
export class StreetValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return valid()(control);
    }
}