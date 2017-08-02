import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MovieDetailsServices } from './movieDetails.services';
import { AmChart } from '../../../service/amCharts/amCharts';

@Component({
	selector: 'movie-details',
	templateUrl: 'movie-details.html',
	providers: [ MovieDetailsServices, AmChart ]
})

export class MovieDetails implements OnInit{
	constructor(private navParams: NavParams,
		private movieDetailsServices: MovieDetailsServices) {}

	ngOnInit() {
		const id = this.navParams.get('id');
		this.getMovieDetails(id);
	}

	getMovieDetails(id: string) {
		this.movieDetailsServices.getDetail(id).then( data => {
			console.log(data);
		}).catch( (err: Response) => {
			console.log(err);
		})
	}
}