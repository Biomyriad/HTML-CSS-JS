
// set current like button's onClick
var definitionEntrys = document.querySelectorAll(".post-entry");
for(var i = 0; i < definitionEntrys.length; i++) {
    var likeButton = definitionEntrys[i].querySelector('button.post-like-btn');
    likeButton.onclick = event => { likeButtonClick(event); };
}

// like button onClick
function likeButtonClick(e) {
    var targetBtn = e.currentTarget;
    var likeCntNode = targetBtn.parentNode.querySelector("span");

    var likeCnt = parseInt(likeCntNode.innerText);
    likeCntNode.innerText = likeCnt + 1;
}