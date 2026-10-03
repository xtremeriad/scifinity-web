import { signInWithPassword } from '../services/firebase/auth.ts';

export function renderAdminLoginPage(): string {
  return `
    <main class="admin-login-page" style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
      background: var(--color-bg, #f7f7f5);
    ">
      <section style="
        width: 100%;
        max-width: 440px;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.08);
      ">
        <div style="text-align:center; margin-bottom:32px;">
          <h1 style="
            margin:0 0 8px;
            font-size:28px;
            font-weight:700;
          ">SCIFINITY Admin</h1>

          <p style="
            margin:0;
            color:#666;
            font-size:15px;
          ">
            Owner & authorized staff access
          </p>
        </div>

        <form id="adminLoginForm">

          <div style="margin-bottom:18px;">
            <label for="adminEmail" style="
              display:block;
              margin-bottom:7px;
              font-size:14px;
              font-weight:600;
            ">
              Email
            </label>

            <input
              id="adminEmail"
              name="email"
              type="email"
              autocomplete="email"
              required
              style="
                width:100%;
                box-sizing:border-box;
                padding:13px 14px;
                border:1px solid #d8d8d8;
                border-radius:10px;
                font-size:15px;
              "
            />
          </div>

          <div style="margin-bottom:12px;">
            <label for="adminPassword" style="
              display:block;
              margin-bottom:7px;
              font-size:14px;
              font-weight:600;
            ">
              Password
            </label>

            <input
              id="adminPassword"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              style="
                width:100%;
                box-sizing:border-box;
                padding:13px 14px;
                border:1px solid #d8d8d8;
                border-radius:10px;
                font-size:15px;
              "
            />
          </div>

          <div
            id="adminLoginError"
            style="
              display:none;
              margin:12px 0;
              padding:10px 12px;
              border-radius:8px;
              background:#fff0f0;
              color:#b42318;
              font-size:14px;
            "
          ></div>

          <button
            id="adminLoginButton"
            type="submit"
            style="
              width:100%;
              margin-top:12px;
              padding:14px 18px;
              border:0;
              border-radius:10px;
              background:#111827;
              color:#fff;
              font-size:15px;
              font-weight:600;
              cursor:pointer;
            "
          >
            Sign in
          </button>

        </form>
      </section>
    </main>
  `;
}

/**
 * Connect the rendered login form to Firebase Authentication.
 */
export function attachAdminLoginHandlers(): void {
  const form = document.getElementById('adminLoginForm') as HTMLFormElement | null;
  const emailInput = document.getElementById('adminEmail') as HTMLInputElement | null;
  const passwordInput = document.getElementById('adminPassword') as HTMLInputElement | null;
  const button = document.getElementById('adminLoginButton') as HTMLButtonElement | null;
  const errorBox = document.getElementById('adminLoginError');

  if (!form || !emailInput || !passwordInput || !button || !errorBox) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    errorBox.style.display = 'none';
    errorBox.textContent = '';

    button.disabled = true;
    button.textContent = 'Signing in...';

    try {
      await signInWithPassword(email, password);

      errorBox.style.display = 'block';
      errorBox.style.background = '#eefbf3';
      errorBox.style.color = '#067647';
      errorBox.textContent = 'Sign-in successful.';

    } catch (error) {
      console.error('Admin login failed:', error);

      errorBox.style.display = 'block';
      errorBox.style.background = '#fff0f0';
      errorBox.style.color = '#b42318';
      errorBox.textContent = 'Invalid email or password. Please try again.';
    } finally {
      button.disabled = false;
      button.textContent = 'Sign in';
    }
  });
}
