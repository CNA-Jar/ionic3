import { Component, OnInit } from '@angular/core';
import { MovieServices } from './movie.services';
import { NavController, Refresher } from 'ionic-angular';
import { MovieDetails } from './movie-details/movieDetails';
import * as _ from 'lodash';

@Component({
	selector: 'movie-page',
	templateUrl: 'movie.html',
	providers: [ MovieServices ]
})

export class MoviePage implements OnInit{
	list = []
	data = []

	constructor(public navCtrl: NavController, 
	private movieServices: MovieServices) {}

	ngOnInit() {
		this.getMoviesDetail();
	}

	/**
	 * [getMovieDetail description]
	 * @author Yang 2017-07-31
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 */
	getMoviesDetail() {
		this.movieServices.getDetail().then( data => {
			this.list = _.slice(data, 0, 6);
			this.data = data;
		}).catch( (err: Response) => {
			console.log(err);
		});
	}

	getMovieDetail(id: string) {
		console.log(id);
		this.navCtrl.push(MovieDetails, {
			id: id
		});
	}

	doRefresh(refresher: Refresher) {
		const list = _.slice(this.data, 7, 13);
		this.list.push(list);
		console.log(list);
		setTimeout(() => {
			refresher.complete();
		}, 1000);
	}

	doPulling(refresher: Refresher) {
    console.log('DOPULLING', refresher.progress);
  }

}