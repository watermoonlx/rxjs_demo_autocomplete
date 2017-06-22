import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as $ from 'jquery';
import * as Rx from 'rxjs';

import {
    getUsers
} from './data.service'

import {
    renderUserList
} from './render.service'

const $input = $('#keyword')[0] as any;

const repoes$ = Rx.Observable.fromEvent($input, 'keydown')
    .debounceTime(400)
    .map(() => $input.value.trim())
    .filter(text => !!text)
    .distinctUntilChanged()
    .switchMap(getUsers)
    .pluck('items')
    .do(i=>console.log(i));

repoes$.subscribe(renderUserList);



