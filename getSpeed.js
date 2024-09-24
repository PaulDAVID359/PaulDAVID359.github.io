let id;

function posChange (pos) {
     console.log(pos);
}

id = navigator.geolocation.watchPosition(posChange);
