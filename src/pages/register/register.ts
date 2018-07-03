import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }
 
  goToDisplay(){
    this.navCtrl.push(DisplayPage);
  }

  // Register.html Line 17: form data passing through
  onRegister(form: NgForm) {
    this.authService.register(form.value.email, form.value.password)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

}
