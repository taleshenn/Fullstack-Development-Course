import { data } from './userdata.js'; //must have a -type module- on the html script element so the export actually work

let username;
let btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', filterUser);

function filterUser() {
    username = document.getElementById('username').value;
    let user = data.find(user => {
        return user.username === username;
    });
    
    console.log(user);
}