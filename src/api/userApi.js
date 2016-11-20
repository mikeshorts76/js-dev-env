import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

function get(url) {    
    return fetch(baseUrl + url).then(onSuccess, error);
}

function onSuccess(response) {
    return response.json();
}

function error() {
    console.log(error); //eslint-disable-line no-console
}