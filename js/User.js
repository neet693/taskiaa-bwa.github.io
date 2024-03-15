// File Untuk mengelola data logic (Controller)

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    //proses pengecekan signin existing user
    const userExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );
    if (userExist) {
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Username tidak ditemukan",
      };
    }
    //proses return value
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
