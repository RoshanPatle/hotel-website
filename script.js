'use strict'

let button=document.querySelector('.btn-light');
let read=document.querySelector('.hidden');
let blurbackground=document.querySelector('.blur');
let hotelmeel=document.querySelector('.meels');
let viewmeel=document.querySelector('.view');
let btnclosemeel=document.querySelector('.close-meel');
let viewgym=document.querySelector('.view2');
let gymroom=document.querySelector('.gyms');
let btnclosegym=document.querySelector('.close-gym')

button.addEventListener('click' , function(){
    read.classList.remove('hidden');
}
)


viewmeel.addEventListener('click', function(){
    blurbackground.classList.remove('hidden');
    hotelmeel.classList.remove('hidden2')
})




btnclosemeel.addEventListener('click', function(){
    blurbackground.classList.add('hidden');
    hotelmeel.classList.add('hidden2');
    
})

viewgym.addEventListener('click', function(){
gymroom.classList.remove('hidden3');
blurbackground.classList.remove('hidden');

})

btnclosegym.addEventListener('click', function(){
    blurbackground.classList.add('hidden');
    gymroom.classList.add('hidden3');
})










