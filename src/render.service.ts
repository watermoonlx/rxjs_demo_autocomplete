import * as $ from 'jquery';

const $container = $('#container') as any;

export function renderUserList(userList: any[]) {
    let userListHtml = userList.map(getItemHtml).join('');
    $container.html(`<div class="row">${userListHtml}</div>`);
}

function getItemHtml(user: any) {
    return `
        <div class="col-sm-3 col-md-2">
            <div class="thumbnail">
                <a href="${user.html_url}">
                    <img src="${user.avatar_url}" alt="${user.login}">
                </a>
                <div class="caption">
                    <a href="${user.html_url}"><h3>${user.login}</h3></a>
                    <p>Score: <span class="badge">${user.score}</span></p>
                </div>
            </div>
        </div>
    `
}

export function showLoading() {
    let imgUrl = 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif';
    let loadingHtml = `
        <div style="text-align: center;">
            <img src="${imgUrl}" alt="loading...">
        </div>
    `
    $container.html(loadingHtml);
}

export function clear() {
    $container.html('');
}