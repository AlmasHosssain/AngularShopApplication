import { AbstractControl } from "@angular/forms"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  emailMatch = (domainName: string) => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let email = control.value;
      if (email == '' || email == domainName) {
        return null
      } else {
        return { 'emailMismatch': true }
      }
    }
  }

  passwordMatch = (domainName: string) => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let password = control.value;
      if (password == '' || password == domainName) {
        return null
      } else {
        return { 'passwordMismatch': true }
      }
    }
  }
}