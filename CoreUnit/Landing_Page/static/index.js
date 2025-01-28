document.getElementById("greet-btn").addEventListener("click", function () {
    let name = document.getElementById("name-input").value.trim();
    let greetingText = name ? `*Hello ${name}` : "Please enter a name!";
    document.getElementById("greeting").textContent = greetingText;
});
