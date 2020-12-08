window.onload = function () {
    // 0.0.1 调用初始化函数
    disruption();
    lqjSwitch();
    judge();
}
function disruption() {
    var imageArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    var imgalt = imageArray.sort(function () { return 0.5 - Math.random(); })
    var index = 0;
    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++) {
            var _id = "d" + i + j;
            var index1 = imageArray[index];
            index++;
            var image = document.getElementById(_id).getElementsByTagName("img")[0];
            image.setAttribute("src", "./img/" + index1 + ".png")
            image.setAttribute("alt", index1);
            if (index1 == 16) {
                image.setAttribute("id", "empty")
            }
        }
    }
    console.log(imgalt);
}

function lqjSwitch() {
    var left1 = document.getElementById("left");
    var li1 = left1.getElementsByTagName("li");
    for (var i = 0; i < li1.length; i++) {
        li1[i].onclick = function () {
            var currentLi = this.id.substr(-1, 1);
            var currentUl = this.parentNode.id.substr(-1, 1);
            var currentImg = this.getElementsByTagName("img")[0];
            var empty = document.getElementById("empty");
            var emptyParent = empty.parentNode.id.substr(-1, 1);
            var emptyParents = empty.parentNode.parentNode.id.substr(-1, 1);
            var currentLiFront = parseInt(currentLi) - 1;
            var currentLiAfter = parseInt(currentLi) + 1;
            var currentUlFront = parseInt(currentUl) - 1;
            var currentUlAfter = parseInt(currentUl) + 1;
            if (emptyParent == currentLi) {
                if (currentUlFront == emptyParents || currentUlAfter == emptyParents) {
                    exchangeImg(currentImg, empty)
                }
            }//同列
            if (emptyParents == currentUl) {
                if (currentLiFront == emptyParent || currentLiAfter == emptyParent) {
                    exchangeImg(currentImg, empty)
                }
            }//同行

        }
    }
}
function exchangeImg(current, empty) {
    var v1 = empty.getAttribute("src");
    empty.setAttribute("src", current.src)
    current.setAttribute("src", v1);
    var v2 = empty.getAttribute("alt");
    empty.setAttribute("alt", current.alt)
    current.setAttribute("alt", v2);
    var v3 = empty.getAttribute("id");
    empty.setAttribute("id", "")
    current.setAttribute("id", v3);
}
function judge() {
    var li = document.getElementById("left").getElementsByTagName("img");
    var str = "";
    for (var i = 0; i < li.length; i++) {
        str += li[i].getAttribute("alt");
    }
    if (str == "12345678910111213141516") {
        console.log("拼图成功");
    }
}
