const getId = localStorage.getItem("USER_ID");
const getPass = localStorage.getItem("USER_PASSWORD");
console.log(getId);
console.log(getPass);

const loginTure = document.querySelector(".loginText");
const logoutButton = document.querySelector(".logoutButton");

const SHOWING_LOGIN = "showing_Login";
const CLOSE_LOGIN = "none";
const LoginText =  `${getId}님 안녕하세요!`;

function login(){
    const idValue = document.getElementById("id");
    const passwordValue = document.getElementById("password");
    if(!idValue.value) {
        alert("아이디를 입력해주세요");
    } else if(!passwordValue.value) {
        alert("비밀번호를 입력해주세요");
    } else if(idValue.value !== getId){
        alert("존재하지 않는 아이디입니다.");
        idValue.value = "";
        idValue.focus();
    } else if(passwordValue.value !== getPass){
        alert("비밀번호가 틀렸습니다");
        passwordValue.value = "";
        passwordValue.focus();
    } else if(getId && getPass === null){
       showingClass()
    } else {
        sessionStorage.setItem("LOGIN_ID", idValue);
        sessionStorage.setItem("LOGIN_PASS", passwordValue);
        alert(`반갑습니다 ${getId} 님`);
        window.location.reload();
        storage();
    }
}

function showingClass(){
    const loginClass = document.getElementById("loginContainer");
    loginClass.classList.add(SHOWING_LOGIN);
}

function Paint (){
    const loginClass = document.getElementById("loginContainer");
    loginClass.classList.add(CLOSE_LOGIN);
    logoutButton.classList.remove(CLOSE_LOGIN);
    logoutButton.classList.add(SHOWING_LOGIN);
    loginTure.classList.remove(CLOSE_LOGIN);
    loginTure.classList.add(SHOWING_LOGIN);
    loginTure.innerHTML = LoginText;

}

function storage(){
    const loginId = sessionStorage.getItem("LOGIN_ID");
    if(loginId === null){
        showingClass();
    } else {
        Paint();
    }
}
storage();

function logout(){
    sessionStorage.removeItem("LOGIN_ID");
    sessionStorage.removeItem("LOGIN_PASS");
    window.location.reload();
}


function popup() {
    window.open("membership.html", "회원가입", "width=500, height=790, left=100, top=50");
}

function bottomPopup() {
    window.open("../membership.html", "회원가입", "width=500, height=790, left=100, top=50");
}

   
   