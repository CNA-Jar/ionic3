import { Component, OnInit } from '@angular/core';
import { MovieServices } from './movie.services';
import { NavController } from 'ionic-angular';
import { MovieDetails } from './movie-details/movieDetails';

@Component({
	selector: 'movie-page',
	templateUrl: 'movie.html',
	providers: [ MovieServices ]
})

export class MoviePage implements OnInit{
	list = []

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
			console.log(data);
			this.list = data;
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

}