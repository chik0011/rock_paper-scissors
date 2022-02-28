function initGame(signeUser) {
    
    let signBot = getRandomInt(3);
    let result = winOrLose(signeUser, signBot);

    document.querySelector(".btn-actions").style.display = "none";
    document.querySelector(".result").style.display = "flex";
    document.querySelector(".replay").style.display = "flex";
    document.querySelector(".identity").style.display = "flex";

    var img = document.createElement("img");
    var imgbis = document.createElement("img");

    if (signeUser == 0) {
        img.src = "img/letter-s.png";
    } else if (signeUser == 1) {
        img.src = "img/hello.png";
    } else if (signeUser == 2) {
        img.src = "img/letter-k.png";
    }
    img.setAttribute("style", "display:flex; width : 70%");

    var div = document.querySelector(".user-result");
    div.appendChild(img);

    if (signBot == 0) {
        imgbis.src = "img/letter-s.png";
    } else if (signBot == 1) {
        imgbis.src = "img/hello.png";
    } else if (signBot == 2) {
        imgbis.src = "img/letter-k.png";
    }
    imgbis.setAttribute("style", "display:flex; width : 70%");
    var div = document.querySelector(".computer-result");
    div.appendChild(imgbis);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
*  return if you lose 0, equal 1, else 2
*/
function winOrLose(signeUser, signBot) {
    if (signeUser == 0) {
        if (signBot == 0) {
            return 1 
        } else if (signBot == 1) {
            return 0
        } else if (signBot == 2) {
            return 2
        }
    } else if (signeUser == 1) {
        if (signBot == 0) {
            return 2 
        } else if (signBot == 1) {
            return 1
        } else if (signBot == 2) {
            return 0
        }
    } else if (signeUser == 2) {
        if (signBot == 0) {
            return 0 
        } else if (signBot == 1) {
            return 2
        } else if (signBot == 2) {
            return 1
        }
    }
}