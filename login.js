

    function login() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        if (username.trim() === "" || password.trim() === "") {
            var errorMessage = document.getElementById("loginErrorMessage");
            errorMessage.innerHTML = "Vui lòng nhập tài khoản và mật khẩu.";
            errorMessage.style.display = "block";
            return;
        }

        // Tiếp tục xử lý đăng nhập nếu tài khoản và mật khẩu không trống
        // ...

        // Sau khi xử lý đăng nhập thành công, bạn có thể chuyển hướng đến trang chủ
        window.location.href = "example.html";
    }