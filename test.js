let email = document.getElementById("input-email");
let pass = document.getElementById("input-pass");
let repass = document.getElementById("input-repass");
let subBtn = document.getElementById("submit-btn");;
const addUser = () => {
    if (pass.value !== repass.value) {
        console.log("Mật khẩu không trùng");
        return;
    }
    let user = {
        email: email.value,
        password: pass.value,
        rePassword: repass.value
    };
    email.value = "";
    pass.value = "";
    repass.value = "";
    console.log(user);
};