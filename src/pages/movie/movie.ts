import { Component, OnInit } from '@angular/core';
import { MovieServices } from './movie.services';

@Component({
	selector: 'movie-page',
	templateUrl: 'movie.html',
	providers: [ MovieServices ]
})

export class MoviePage implements OnInit{
	list = []

	constructor(private movieServices: MovieServices) {}

	ngOnInit() {
		this.getMovieDetail();
	}

	/**
	 * [getMovieDetail description]
	 * @author Yang 2017-07-31
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 */
	getMovieDetail() {
		this.movieServices.getDetail().then( data => {
			console.log(data);
			this.list = data;
		}).catch( (err: Response) => {
			console.log(err);
		});
	}

}