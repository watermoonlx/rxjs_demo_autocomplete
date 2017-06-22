import * as $ from 'jquery';

const $container = $('.media-list') as any;

export function renderUserList(userList: any[]) {
    let userListHtml = userList.map(getItemHtml).join();
    $container.html(userListHtml);
}

function getItemHtml(user: any) {
    return `
    <li class="media">
        <div class="media-left">
        <a href="${user.html_url}">
            <img class="media-object" src="${user.avatar_url}" alt="${user.login}">
        </a>
        </div>
        <div class="media-body">
        <h2 class="media-heading">${user.login}</h2>
        Score: <span class="badge">${user.score}</span>
        </div>
    </li>
    `
}