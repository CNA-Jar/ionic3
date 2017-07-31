import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { BaseService } from '../../service/services';

@Injectable()

export class MovieServices extends BaseService implements OnInit {
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
	getDetail(): Promise<any> {
		this._url = 'system/rest/issue_extend/list';
		const _params = {
			pagingTool: {
				currentPage: 0,
				pageSize: -1
			}
		};
		this.params = JSON.stringify(_params);

		return this.postRquest(this._url);
	}

	ngOnInit() {
		console.log(this.url);
	}
}