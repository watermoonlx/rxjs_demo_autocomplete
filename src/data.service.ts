import * as $ from 'jquery';
import * as Rx from 'rxjs';

export function getUsers(keyword: string) {
    const GitHub_Repo_API_URL = 'https://api.github.com/search/users?q=';
    let promise = $.get(`${GitHub_Repo_API_URL}${keyword}`).promise();
    return Rx.Observable.fromPromise(promise);
}