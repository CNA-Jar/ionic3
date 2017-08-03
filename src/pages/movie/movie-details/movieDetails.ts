import { Component, OnInit, Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MovieDetailsServices } from './movieDetails.services';

@Component({
	selector: 'movie-details',
	templateUrl: 'movie-details.html',
	providers: [ MovieDetailsServices ]
})

export class MovieDetails implements OnInit{
	itemObj = {}
	constructor(private navParams: NavParams,
		private movieDetailsServices: MovieDetailsServices) {}

	ngOnInit() {
		const id = this.navParams.get('id');
		this.getMovieDetails(id);
	}

	getMovieDetails(id: string) {
		this.movieDetailsServices.getDetail(id).then( data => {
			console.log(data);
			this.itemObj = data;
		}).catch( (err: Response) => {
			console.log(err);
		})
	}
}