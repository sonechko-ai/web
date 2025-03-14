document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення форми

    // Очищення попередніх повідомлень про помилки
    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    let isValid = true;

    // Отримання значень полів
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let group = document.getElementById("group").value;

    // Валідація імені
    if (name === "") {
        document.getElementById("nameError").textContent = "Ім'я обов'язкове!";
        isValid = false;
    }

    // Валідація email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Введіть коректний email!";
        isValid = false;
    }

    // Валідація пароля
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Пароль має містити мінімум 6 символів!";
        isValid = false;
    }

    // Перевірка співпадіння паролів
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Паролі не співпадають!";
        isValid = false;
    }

    // Валідація віку
    if (age === "" || isNaN(age) || age < 10) {
        document.getElementById("ageError").textContent = "Вік має бути від 10 років!";
        isValid = false;
    }

    // Валідація статі
    if (!gender) {
        document.getElementById("genderError").textContent = "Оберіть стать!";
        isValid = false;
    }

    // Валідація групи
    if (group === "") {
        document.getElementById("groupError").textContent = "Оберіть групу!";
        isValid = false;
    }

    // Якщо всі перевірки пройдено, виводимо повідомлення
    if (isValid) {
        alert("Реєстрація успішна!");
        document.getElementById("registrationForm").reset(); // Очищення форми після успішної реєстрації
    }
});
