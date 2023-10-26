import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordMatchingValidator:ValidatorFn=(control:AbstractControl):ValidationErrors|null=>{
    let password=control.get('password');
    let confirmPassword=control.get('confirmPassword');
    if(password && confirmPassword && password?.value!=confirmPassword?.value)
    {
      return{
        passmatcherror:true
      }
    }
    return null
  }