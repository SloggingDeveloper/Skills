'use strict';

for(let i = 5; i >= 0; i--){
    setTimeout(function(){console.log(i);}, (5 - i)*5000);
}