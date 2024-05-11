function generatePassword() {
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*"
    var password = "";
    var len = document.getElementById("Range").value
    var passwordScreen = document.getElementById("password")
    console.log(passwordScreen)
    for (var i = 0; i < len ; i++) {
        var idx = Math.floor(Math.random() * char.length)
        password += char[idx]
        passwordScreen.value = password
    }
}


