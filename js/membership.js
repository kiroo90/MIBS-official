function idText(){
    const inputId = document.getElementById("memberId");
    const text = document.getElementById("textId");
    const idReg = /^[A-za-z0-9]{5,15}$/;
    const idTrue = "생성 가능한 아이디입니다."
    const idFalse = "5~20자의 영문 대 소문자, 숫자만 사용가능합니다."
   if(idReg.test(inputId.value)){
    text.innerHTML = idTrue;
   } else {
    text.innerHTML = idFalse;
    inputId.value = "";
    inputId.focus();
   }
};

function passText(){
    const inputPass = document.getElementById("memberPass");
    const textPass = document.getElementById("textPass");
    const passReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passTrue = "사용 가능한 비밀번호입니다."
    const passFalse = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
   if(passReg.test(inputPass.value)){
    textPass.innerHTML = passTrue;
   } else {
    textPass.innerHTML = passFalse;
    inputPass.value = "";
    inputPass.focus();
   }
};

function retrunPass() {
    const inputPass = document.getElementById("memberPass");
    const inputRePass = document.getElementById("memberPass2");
    const textRe = document.getElementById("rePass");
    const checkTrue = "일치합니다.";
    const checkFalse = "불일치합니다.";
    if(inputPass.value === inputRePass.value){
        textRe.innerHTML = checkTrue;
    } else {
        textRe.innerHTML = checkFalse;
        inputRePass.value = "";
        inputRePass.focus();
    }
}

function emailText(){
    const inputEmail = document.getElementById("memberEmail");
    const textEmail = document.getElementById("textEmail");
    const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailTure = ""
    const emailFalse = "이메일 주소를 다시 확인해주세요."
   if(emailReg.test(inputEmail.value)){
        textEmail.innerHTML = emailTure;
   } else {
        textEmail.innerHTML = emailFalse;
        inputEmail.focus();
        inputEmail.value = "";
   }
};

function checkValue(){
    const inputId = document.getElementById("memberId").value;
    const inputPass = document.getElementById("memberPass").value;
    const inputRePass = document.getElementById("memberPass2").value;
    const inputName = document.getElementById("memberName").value;
    const inputEmail = document.getElementById("memberEmail").value;

    localStorage.setItem("USER_ID", inputId);
    localStorage.setItem("USER_NAME", inputName);
    localStorage.setItem("USER_PASSWORD", inputPass);
    localStorage.setItem("USER_EMAIL", inputEmail);

    const text = document.getElementById("textId");
    const textPass = document.getElementById("textPass");
    const textRe = document.getElementById("rePass");
    const textName = document.getElementById("textName");
    const textEmail = document.getElementById("textEmail");

    const alertText = "필수 항목 입니다."

    if(inputId && inputPass && inputRePass && inputName && inputEmail){
        alert("가입을 축하드립니다.");
        opener.location.href = 'mibs.html';
        window.close()
    } else if(!inputId && !inputPass && !inputName && !inputRePass && !inputEmail){
        text.innerHTML = alertText;
        textPass.innerHTML = alertText;
        textRe.innerHTML = alertText;
        textName.innerHTML = alertText;
        textEmail.innerHTML = alertText;
    } else if(!inputId) {
        text.innerHTML = alertText;
    } else if(!inputPass) {
        textPass.innerHTML = alertText;
    } else if(!inputRePass){
        textRe.innerHTML = alertText;
    } else if(!inputName) {
        textName.innerHTML = alertText;
    } else if(!inputEmail) {
        textEmail.innerHTML = alertText;
    } 
}