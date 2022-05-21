// set current like button's onClick
var entrys = document.querySelectorAll(".connection_request_entry");

for(var i = 0; i < entrys.length; i++) {

    var acceptButton = entrys[i].querySelector('.connection_request_accept');
    var denyButton = entrys[i].querySelector('.connection_request_deny');

    acceptButton.onclick = event => {acceptDenyButtons (event, true);};
    denyButton.onclick = event => {acceptDenyButtons (event, false);};

}

document.getElementsByClassName("edit_profile_link")[0].onclick = e => {
    document.getElementsByClassName("member_card_info_name")[0].innerHTML = "BioMyriad";
};

function acceptDenyButtons (e, isAccept) {
    var btnClicked = e.currentTarget;

    var requestCNT = document.getElementsByClassName("request_cnt")[0];
    var connectionsCNT = document.getElementsByClassName("connections_cnt")[0];

    if(isAccept) {
        connectionsCNT.innerHTML  = parseInt(connectionsCNT.innerHTML) + 1;

        var profileImgURL = btnClicked.parentNode.parentNode.querySelector('img').getAttribute('src');
        var username = btnClicked.parentNode.parentNode.querySelector('p').innerHTML;

        let doc = new DOMParser().parseFromString(
            `<div class="current_connection_entry">
            <img src="` + profileImgURL + `" alt="profile image">
            <p>`+ username +`</p>
        </div>`, 'text/html');
        let div = doc.body.firstChild;

        var connectionsContainer = document.querySelector(".current_connection .basic_card_content_container");
        connectionsContainer.insertBefore(div, connectionsContainer.children[0]);
    }    
    requestCNT.innerHTML = parseInt(requestCNT.innerHTML) - 1;

    btnClicked.parentNode.parentNode.remove();
    
}