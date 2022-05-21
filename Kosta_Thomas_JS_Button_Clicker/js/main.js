
// set current like button's onClick
var definitionEntrys = document.querySelectorAll(".definition-entry");
for(var i = 0; i < definitionEntrys.length; i++) {
    var likeButton = definitionEntrys[i].querySelector('button');
    likeButton.onclick = event => { likeButtonClick(event); };
}

// set the "add definition" button's onClick
document.getElementById("add-definition-btn").onclick = e => {
    e.currentTarget.style.visibility = "hidden";
    document.getElementById("definition-entry-form").style.visibility = "visible";

}

// set the login button's onClick
document.getElementById("login").onclick = e => {
    if(e.currentTarget.innerHTML == "Logout"){
        e.currentTarget.innerHTML = "Login";
    }
    else {
        e.currentTarget.innerHTML = "Logout";
    }
}

// form button "submit" / process form data and create new definition entry
document.getElementById("form-submit").onclick = e => {
    // get form data
    var word = document.getElementById("word").value;
    var wordClass = document.getElementById("word-class").value;
    var plural = document.getElementById("plural").value;
    var wordDefinition = document.getElementById("word-definition").value;

    // validate all info present. (maybe add whats missing like red border?)
    if(word == "") return;
    if(wordClass == "") return;
    if(plural == "none") return;
    if(wordDefinition == "") return;

    // "deactivate and HTML tags"
    var search = '<';
    var replaceWith = ' ';
    var wordDefinition = wordDefinition.replaceAll(search, replaceWith);

    var search = '>';
    var wordDefinition = wordDefinition.replaceAll(search, replaceWith);

    // create the DOM Nodes from sting & set data from form
    let doc = new DOMParser().parseFromString(
    `<div class="definition-entry">
        <div>
            <p class="entry-word">` + word + `</p>
            <p class="entry-word-class">` + wordClass + `</p>
            <p class="entry-word-plural">Plural: <span>` + plural + `</span></p>
            <button class="std-button entry-like-btn" type="button"><span>0</span> Likes</button>
        </div>
        <div>
            <p class="entry-word-definition">` + wordDefinition + `</p>
        </div>
    </div>`, 'text/html');
    let div = doc.body.firstChild;
    document.getElementById("definitions-column").appendChild(div);

    // set onclick
    document.querySelector(".definition-entry:last-child button").onclick = event => { likeButtonClick(event); };

    // hide form and show original button
    document.getElementById("add-definition-btn").style.visibility = "visible";
    document.getElementById("definition-entry-form").style.visibility = "hidden";

    // clear form
    document.getElementById("word").value = "";
    document.getElementById("word-class").selectedIndex = "0";
    document.getElementById("plural").value = "";
    document.getElementById("word-definition").value = "";
}

// like button onClick
function likeButtonClick(e) {
    var targetBtn = e.currentTarget;
    var cList = targetBtn.classList;
    var likeCnt = parseInt(targetBtn.querySelector("span").innerHTML);

    var isFound = false;
    for(var i = 0; i < cList.length; i++){ if(cList[i] == "liked") isFound=true;}

    if(isFound) {
        targetBtn.classList.remove("liked");
        targetBtn.querySelector("span").innerHTML = likeCnt - 1;
        alert("\nNinja was unliked\n\n(Like count updated, click again to like))");
    } else {
        targetBtn.classList.add("liked");
        targetBtn.querySelector("span").innerHTML = likeCnt + 1;
        alert("\nNinja was liked\n\n(Like count updated, click again to unlike)");
    }
}

