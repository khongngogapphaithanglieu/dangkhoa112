function register() {
    var name = document.getElementById("registerName").value;
    var age = document.getElementById("registerAge").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var registerErrorMessage = document.getElementById("registerErrorMessage");

    if (!name || !age || !email || !password) {
        registerErrorMessage.textContent = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    // Kiểm tra xem tài khoản đã tồn tại chưa
    var storedUser = localStorage.getItem(email);

    if (storedUser) {
        registerErrorMessage.textContent = "Tài khoản đã tồn tại.";
    } else {
        // Lưu thông tin người dùng vào localStorage
        var userObj = { name: name, age: age, email: email, password: password };
        localStorage.setItem(email, JSON.stringify(userObj));
        alert("Đăng ký thành công!");
        registerErrorMessage.textContent = "";
    }
}