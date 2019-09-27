const SHOWING_COMMENT = "showingComment";
const CLOSING_COMMENT = "colsingComment";

function outComment(){
    const inBottom = document.querySelector(".arrowBottom");
    const outBottom = document.querySelector(".arrowTop");
    const outComment = document.getElementById("commentText");
    outComment.classList.add(CLOSING_COMMENT);
    inBottom.classList.add(SHOWING_COMMENT);
    outBottom.classList.add(CLOSING_COMMENT);

}

function inComment(){
    const inBottom = document.querySelector(".arrowBottom");
    const outBottom = document.querySelector(".arrowTop");
    const outComment = document.getElementById("commentText");
    const inComment = document.getElementById("commentText");
    outComment.classList.remove(CLOSING_COMMENT);
    inComment.classList.add(SHOWING_COMMENT);
    inBottom.classList.remove(SHOWING_COMMENT);
    outBottom.classList.remove(CLOSING_COMMENT);
    
}