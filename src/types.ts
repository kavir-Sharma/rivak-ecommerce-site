interface User {
  name: string;
  email: string;
  password: string;
  signupTime: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm') as HTMLFormElement;

  if (signupForm) {
    signupForm.addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const nameInput = document.getElementById('signupName') as HTMLInputElement;
      const emailInput = document.getElementById('signupEmail') as HTMLInputElement;
      const passwordInput = document.getElementById('signupPassword') as HTMLInputElement;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      const newUser: User = {
        name,
        email,
        password,
        signupTime: new Date().toISOString()
      };

      const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      signupForm.reset();
      alert('Signup successful! User data stored in local storage.');
    });
  }
});
