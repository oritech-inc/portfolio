

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