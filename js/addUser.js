// File penghubung UI dengan Model (User.js)
document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById("username").value,
    };

    const result = userManager.saveUser(userData);

    if (result.success) {
      return (window.location.href = "../taskiaa-bwa.github.io/signin.html");
      // return (window.location.href = "../signin.html");
    } else {
      console.log("gagal");
    }

    console.log("Berhasil di Submit");
  });
});
