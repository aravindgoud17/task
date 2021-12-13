import { AbstractControl } from "@angular/forms";

export function Cuasomvalidator (control:AbstractControl){
    if(control.value>=20 && control.value <=30){
        return null
    }
    else{
        return {range:true}
    }
}

