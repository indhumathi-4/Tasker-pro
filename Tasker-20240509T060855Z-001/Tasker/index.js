document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailerror').style.display = 'none';
    document.getElementById('passerror').style.display = 'none';

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault(); 

        document.getElementById('emailerror').style.display = 'none';
        document.getElementById('passerror').style.display = 'none';

        var email = document.getElementById('ine').value;
        var password = document.getElementById('inp').value;

    
        var emailValid = validateEmail(email);
        var passwordValid = validatePassword(password);

        if (emailValid && passwordValid) {
          localStorage.setItem('email',email);
          localStorage.setItem('password',password);
            window.location.href = 'second.html';
        } else {
            
            if (!emailValid) {
                document.getElementById('emailerror').style.display = 'block';
            }
            if (!passwordValid) {
                document.getElementById('passerror').style.display = 'block';
            }
        }
    });
});

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}
