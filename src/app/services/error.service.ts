import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public showError: boolean = false;
  public errorMessage: string = 'Er is iets misgegaan. Probeer het later opniew. Sorry voor het ongemak!';
  public message: string = 'Er is iets misgegaan. Probeer het later opniew. Sorry voor het ongemak!';

  constructor() { }

  setDefault() {
    this.showError = false;
    this.errorMessage = this.message;
  }

}
