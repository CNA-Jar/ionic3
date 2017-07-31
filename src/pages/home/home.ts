import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviePage } from '../movie/movie';
import { HomeServices } from './home.services';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ HomeServices ]
})
export class HomePage {
	user = {
		account: '',
		password: '',
	}

  constructor(public navCtrl: NavController, private homeServies: HomeServices) {

  }

  login() {
    Cookie.delete('access_token');
  	const params = {
  		username: this.user.account,
  		password: this.user.password
  	};
  	this.homeServies.login(params).then( data => {
  		const { access_token } = data;
  		Cookie.set('access_token', access_token);
  		this.navCtrl.push(MoviePage);
  	}).catch( (err: Response) => {
  		console.log(err);
  	});
  }
}
