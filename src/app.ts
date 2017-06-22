import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as $ from 'jquery';
import * as Rx from 'rxjs';

import {
    getUsers
} from './data.service'

import {
    renderUserList,
    showLoading,
    clear
} from './render.service'

const $input = $('#keyword')[0] as any;

const users$ = Rx.Observable.fromEvent($input, 'keydown')
    .debounceTime(400)
    .map(() => $input.value.trim())
    .filter(text => !!text)
    .distinctUntilChanged()
    .do(showLoading)
    .switchMap(getUsers)
    .pluck('items')
    .do(i => console.log(i));

users$.subscribe({
    next: renderUserList,
    error: clear
});



