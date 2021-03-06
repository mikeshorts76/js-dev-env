import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, error);
}

function del(url) {
    debugger;
    const request = new Request(baseUrl + url,  {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onerror);
}

function onSuccess(response) {
    return response.json();
}

function error() {
    console.log(error); //eslint-disable-line no-console
}
