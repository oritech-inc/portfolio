$(()=>{
    handleCookie()
});

$(document).ready(()=>{
    $('.cp-year').html("&copy;"+handleDates().getFullYear());
})

$('.lnk-popMenu').mouseenter((e)=>{
    e.preventDefault()
    $('#popMenu-'+
        $('.lnk-popMenu ').attr('data-type')
    ).addClass('show');
});
$(".lnk-popMenu").mouseleave((e)=>{
    e.preventDefault()
    $('#popMenu-'+
        $('.lnk-popMenu ').attr('data-type')
    ).addClass('show');
});


function handleDates(){
    return new Date();
}

function handleScreens(){
    const elem = window.getElementById('app-main');
    // alert(elem.screen.availWidth )
}

function handleCookie() {
    // const app_data = getCookie("appData");
    const app_data = ("appData") =>{
        getCookie("appData");
    }
    if (app_data !== "") {
        alert("Cookie "+app_data);
    } else {
        if (app_data !== "" && app_data !== null) {
            setCookie("appData", app_data, 2);
        }
    }

}
function getCookie(val) {
    let str = val + "=";
    let ca = document.cookie.split(';');
    for(const element of ca) {
        let c = element;
        while (c.charAt(0) === '') {
            c = c.substring(1);
        }
        if (c.indexOf(str) === 0) {
            return c.substring(str.length, c.length);
        }
    }
    return "";
}

function setCookie(txt, val, dt) {
    const d = () =>{
        (handleDates().setTime(
            handleDates().getTime() + 1000 * dt * 24 * 60 * 60
        ));
    }
    document.cookie = txt + "=" + val + ";" + "expires="+d.toUTCString() + ";path=/";
}

let locate_gps;
navigator.geolocation.getCurrentPosition(showPosition, showError);

function showPosition(position) {
    let gps = "Geo Location is not supported";
    if (navigator.geolocation)
        gps = `
        {"latitude":${position.coords.latitude},
        "longitude":${position.coords.longitude},
        "accuracy":${position.coords.accuracy},}`;
    locate_gps = `"locate":${gps}`;
    alert(locate_gps)
}

function showError(error) {
    let str;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            str = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            str = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            str = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            str = "An unknown error occurred."
            break;
    }
    return str;
}

export function initAppObj() {
    return (
        [{
            "screen": {
                "height": screen.height,
                "width": screen.width,
                "h_vail": screen.availHeight,
                "w_vail": screen.availWidth,
                "pixels": screen.pixelDepth,
            },
            "locale": {
                "href": window.location.href,
                "host": window.location.hostname,
                "path": window.location.pathname,
                "prtc": window.location.protocol,
            },
            "browse": {
                "enabled": navigator.cookieEnabled,
                "appname": navigator.appName,
                "version": navigator.appVersion,
                "appcode": navigator.appCodeName,
            }
        }]
    )
}