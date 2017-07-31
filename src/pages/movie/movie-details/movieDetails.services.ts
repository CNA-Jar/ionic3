import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../../service/services';

@Injectable()

export class MovieDetailsServices extends BaseService implements OnInit {
	private _url: string;
	constructor(public http: Http) {
		super(http);
	}

	/**
	 * [getDetail description]
	 * @author Yang 2017-07-31
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @return  {Promise<any>} [description]
	 */
	getDetail(id: string): Promise<any> {
		this._url = 'system/rest/issue_extend/'+id;
		// const _params = {
		// 	pagingTool: {
		// 		currentPage: 0,
		// 		pageSize: -1
		// 	}
		// };
		// this.params = JSON.stringify(_params);

		return this.getRquest(this._url);
	}

	ngOnInit() {
		console.log(this.url);
	}
}