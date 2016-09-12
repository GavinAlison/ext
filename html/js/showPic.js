/**
 * Created by Administrator on 2016/9/12.
 */
function showPic(whichPic){
    var placeholder = document.getElementById("placeholder");
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
    return false;
}

