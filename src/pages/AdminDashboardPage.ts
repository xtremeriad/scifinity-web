import { signOutCurrentUser } from '../services/firebase/auth.ts';

export function renderAdminDashboardPage(): string {
  return `
    <main style="
      min-height:100vh;
      background:#f7f7f5;
      padding:32px 24px;
    ">
      <div style="
        max-width:1200px;
        margin:0 auto;
      ">

        <header style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          margin-bottom:32px;
        ">
          <div>
            <h1 style="
              margin:0 0 6px;
              font-size:32px;
              font-weight:700;
              color:#111827;
            ">
              SCIFINITY Admin
            </h1>

            <p style="
              margin:0;
              color:#667085;
              font-size:15px;
            ">
              Website content & platform management
            </p>
          </div>

          <button
            id="adminSignOutButton"
            type="button"
            style="
              border:1px solid #d0d5dd;
              background:#ffffff;
              color:#344054;
              padding:10px 16px;
              border-radius:10px;
              font-size:14px;
              font-weight:600;
              cursor:pointer;
            "
          >
            Sign out
          </button>
        </header>

        <section style="
          background:#ffffff;
          border:1px solid #eaecf0;
          border-radius:18px;
          padding:28px;
          margin-bottom:24px;
        ">
          <h2 style="
            margin:0 0 8px;
            font-size:21px;
            color:#111827;
          ">
            Dashboard
          </h2>

          <p style="
            margin:0;
            color:#667085;
            font-size:15px;
          ">
            Welcome to the SCIFINITY administration area.
          </p>
        </section>

        <section style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:16px;
        ">

          ${renderAdminCard(
            'Homepage Banners',
            'Manage campaigns, notices and featured homepage content.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Courses',
            'Manage SCIFINITY courses and academic programs.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Batches',
            'Manage batch schedules, locations and admission status.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Notices',
            'Publish important announcements for students and parents.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Events',
            'Manage workshops, campaigns and upcoming events.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Resources',
            'Manage educational resources and downloadable materials.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Articles',
            'Manage educational articles and platform content.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Question Banks',
            'Manage structured questions and future model tests.',
            'Coming next'
          )}

          ${renderAdminCard(
            'Settings',
            'Manage website-level settings and administration.',
            'Coming later'
          )}

        </section>

      </div>
    </main>
  `;
}

function renderAdminCard(
  title: string,
  description: string,
  status: string
): string {
  return `
    <article style="
      background:#ffffff;
      border:1px solid #eaecf0;
      border-radius:16px;
      padding:22px;
      min-height:150px;
      box-sizing:border-box;
    ">
      <h3 style="
        margin:0 0 8px;
        font-size:17px;
        color:#111827;
      ">
        ${title}
      </h3>

      <p style="
        margin:0 0 18px;
        color:#667085;
        font-size:14px;
        line-height:1.55;
      ">
        ${description}
      </p>

      <span style="
        display:inline-block;
        padding:5px 9px;
        border-radius:999px;
        background:#f2f4f7;
        color:#667085;
        font-size:12px;
        font-weight:600;
      ">
        ${status}
      </span>
    </article>
  `;
}

/**
 * Connect dashboard actions to Firebase.
 */
export function attachAdminDashboardHandlers(): void {
  const signOutButton = document.getElementById(
    'adminSignOutButton'
  ) as HTMLButtonElement | null;

  if (!signOutButton) {
    return;
  }

  signOutButton.addEventListener('click', async () => {
    signOutButton.disabled = true;
    signOutButton.textContent = 'Signing out...';

    try {
      await signOutCurrentUser();

      window.history.pushState({}, '', '/admin/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (error) {
      console.error('Admin sign-out failed:', error);

      signOutButton.disabled = false;
      signOutButton.textContent = 'Sign out';
    }
  });
}