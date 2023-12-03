let app = $('main').attr('id');
let btTop = "#"+$('#to-top').attr('id');

import {initAppObj as dataObj} from "./mods.js";

console.log(dataObj())


$(document).ready(()=>{
    $('footer').html("Samm  &copy;"+new Date().getFullYear());
});

// To Top Event
$(btTop). mouseenter(() => {
    setTimeout(()=>{
        $('#to-top').html('<i class="bi bi-chevron-double-up"></i>')
    },200);
})
$(btTop). mouseleave(() => {
    setTimeout(()=>{
        $('#to-top').html('<i class="bi bi-chevron-up"></i>')
    },200);
})

//
//
//
