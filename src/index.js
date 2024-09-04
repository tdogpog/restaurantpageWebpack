console.log('test');
import "./styles.css";
import {loadHomePage} from './home.js';
import {loadMenuPage} from './menu.js';
import {loadContactPage} from './contact.js';

document.addEventListener('DOMContentLoaded',()=>{
    loadHomePage();
})

document.getElementById('home_btn').addEventListener('click',()=>{
    loadHomePage();
})

document.getElementById('menu_btn').addEventListener('click',()=>{
    loadMenuPage();
})

document.getElementById('contact_btn').addEventListener('click',()=>{
    loadContactPage();
})