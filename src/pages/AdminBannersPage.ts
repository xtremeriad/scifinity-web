/*
 * ============================================================================
 * SCIFINITY ADMIN — HOMEPAGE BANNER MANAGER
 * ============================================================================
 *
 * V1:
 * - List homepage banners from Firestore
 * - Create a banner
 * - Archive a banner
 *
 * Image upload is intentionally URL-based for now.
 * Firebase Storage will be connected later.
 */

import {
  archiveHomepageBanner,
  createHomepageBanner,
  getAllHomepageBanners,
  publishHomepageBanner,
  type BannerStatus,
  type BannerType,
  type HomepageBanner,
} from '../services/content/homepageBannerService.ts';

let banners: HomepageBanner[] = [];
let isLoading = false;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderStatus(status: BannerStatus): string {
  return `
    <span style="
      display:inline-block;
      padding:5px 9px;
      border-radius:999px;
      background:#f2f4f7;
      color:#475467;
      font-size:12px;
      font-weight:600;
    ">
      ${escapeHtml(status)}
    </span>
  `;
}

function renderBannerRow(banner: HomepageBanner): string {
  const title =
    banner.title.en ||
    banner.title.bn ||
    'Untitled banner';

  const imageUrl = banner.desktopImage.url;

  return `
    <article style="
      display:grid;
      grid-template-columns:120px 1fr auto;
      gap:20px;
      align-items:center;
      padding:18px 0;
      border-bottom:1px solid #eaecf0;
    ">

      <div style="
        width:120px;
        height:70px;
        border-radius:10px;
        overflow:hidden;
        background:#f2f4f7;
        border:1px solid #eaecf0;
      ">
        ${
          imageUrl
            ? `
              <img
                src="${escapeHtml(imageUrl)}"
                alt=""
                style="
                  width:100%;
                  height:100%;
                  object-fit:cover;
                  display:block;
                "
              />
            `
            : ''
        }
      </div>

      <div>
        <h3 style="
          margin:0 0 6px;
          font-size:16px;
          color:#111827;
        ">
          ${escapeHtml(title)}
        </h3>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          align-items:center;
        ">
          ${renderStatus(banner.status)}

          <span style="
            font-size:12px;
            color:#667085;
          ">
            ${escapeHtml(banner.bannerType)}
          </span>

          <span style="
            font-size:12px;
            color:#667085;
          ">
            Priority: ${banner.priority}
          </span>
        </div>
      </div>

      <div>
${
  banner.status !== 'ARCHIVED'
    ? `
      ${
        banner.status !== 'PUBLISHED'
          ? `
            <button
              type="button"
              class="admin-banner-publish"
              data-banner-id="${escapeHtml(banner.id)}"
              style="
                border:0;
                background:#111827;
                color:#ffffff;
                padding:8px 12px;
                border-radius:8px;
                font-size:13px;
                font-weight:600;
                cursor:pointer;
                margin-right:8px;
              "
            >
              Publish
            </button>
          `
          : ''
      }

      <button
        type="button"
        class="admin-banner-archive"
        data-banner-id="${escapeHtml(banner.id)}"
        style="
          border:1px solid #d0d5dd;
          background:#ffffff;
          color:#344054;
          padding:8px 12px;
          border-radius:8px;
          font-size:13px;
          font-weight:600;
          cursor:pointer;
        "
      >
        Archive
      </button>
    `
    : `
      <span
        style="
          font-size:12px;
          color:#98a2b3;
        "
      >
        Archived
      </span>
    `
}
      </div>

    </article>
  `;
}

function renderBannerForm(): string {
  return `
    <section style="
      background:#ffffff;
      border:1px solid #eaecf0;
      border-radius:18px;
      padding:24px;
      margin-bottom:24px;
    ">

      <h2 style="
        margin:0 0 6px;
        font-size:20px;
        color:#111827;
      ">
        Create Homepage Banner
      </h2>

      <p style="
        margin:0 0 22px;
        color:#667085;
        font-size:14px;
      ">
        Add a campaign, notice, event, course or featured item to the
        homepage.
      </p>

      <form id="adminBannerForm">

        <div style="
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:16px;
        ">

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              English title
            </span>

            <input
              name="titleEn"
              required
              type="text"
              placeholder="e.g. SSC 2027 Revision Program"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              বাংলা শিরোনাম
            </span>

            <input
              name="titleBn"
              type="text"
              placeholder="যেমন: SSC 2027 রিভিশন প্রোগ্রাম"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              Banner type
            </span>

            <select
              name="bannerType"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
                background:#ffffff;
              "
            >
              <option value="CAMPAIGN">Campaign</option>
              <option value="NOTICE">Notice</option>
              <option value="EVENT">Event</option>
              <option value="RESOURCE">Resource</option>
              <option value="COURSE">Course</option>
              <option value="GENERAL">General</option>
            </select>
          </label>

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              Priority
            </span>

            <input
              name="priority"
              type="number"
              value="0"
              min="0"
              step="1"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

          <label style="display:block;grid-column:1/-1;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              Desktop image URL
            </span>

            <input
              name="desktopImageUrl"
              type="url"
              placeholder="https://..."
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              CTA label
            </span>

            <input
              name="ctaLabelEn"
              type="text"
              placeholder="Learn more"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

          <label style="display:block;">
            <span style="
              display:block;
              margin-bottom:6px;
              font-size:13px;
              font-weight:600;
              color:#344054;
            ">
              CTA URL
            </span>

            <input
              name="ctaUrl"
              type="text"
              placeholder="/admission"
              style="
                width:100%;
                box-sizing:border-box;
                padding:11px 12px;
                border:1px solid #d0d5dd;
                border-radius:9px;
                font-size:14px;
              "
            />
          </label>

        </div>

        <div style="
          display:flex;
          gap:10px;
          align-items:center;
          margin-top:20px;
        ">

          <button
            type="submit"
            id="createBannerButton"
            style="
              border:0;
              background:#111827;
              color:#ffffff;
              padding:11px 18px;
              border-radius:9px;
              font-size:14px;
              font-weight:600;
              cursor:pointer;
            "
          >
            Create Draft
          </button>

          <span
            id="adminBannerFormStatus"
            style="
              font-size:13px;
              color:#667085;
            "
          ></span>

        </div>

      </form>
    </section>
  `;
}

export function renderAdminBannersPage(): string {
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
          margin-bottom:28px;
        ">

          <div>
            <a
              href="/admin"
              data-route
              style="
                display:inline-block;
                margin-bottom:12px;
                color:#667085;
                text-decoration:none;
                font-size:13px;
              "
            >
              ← Back to Dashboard
            </a>

            <h1 style="
              margin:0 0 6px;
              font-size:30px;
              color:#111827;
            ">
              Homepage Banners
            </h1>

            <p style="
              margin:0;
              color:#667085;
              font-size:15px;
            ">
              Manage homepage campaigns, notices and featured content.
            </p>
          </div>

        </header>

        ${renderBannerForm()}

        <section style="
          background:#ffffff;
          border:1px solid #eaecf0;
          border-radius:18px;
          padding:24px;
        ">

          <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:8px;
          ">
            <h2 style="
              margin:0;
              font-size:20px;
              color:#111827;
            ">
              Existing Banners
            </h2>

            <button
              id="reloadAdminBanners"
              type="button"
              style="
                border:1px solid #d0d5dd;
                background:#ffffff;
                color:#344054;
                padding:8px 12px;
                border-radius:8px;
                font-size:13px;
                font-weight:600;
                cursor:pointer;
              "
            >
              Refresh
            </button>
          </div>

          <div
            id="adminBannersList"
            style="margin-top:16px;"
          >
            <p style="
              color:#667085;
              font-size:14px;
            ">
              Loading banners...
            </p>
          </div>

        </section>

      </div>
    </main>
  `;
}

async function loadBanners(): Promise<void> {
  const list = document.getElementById('adminBannersList');

  if (!list) {
    return;
  }

  isLoading = true;

  list.innerHTML = `
    <p style="
      color:#667085;
      font-size:14px;
    ">
      Loading banners...
    </p>
  `;

  try {
    banners = await getAllHomepageBanners();

    if (banners.length === 0) {
      list.innerHTML = `
        <div style="
          padding:30px 10px;
          text-align:center;
          color:#667085;
          font-size:14px;
        ">
          No homepage banners have been created yet.
        </div>
      `;

      return;
    }

    list.innerHTML = banners.map(renderBannerRow).join('');

    attachArchiveHandlers();
    attachPublishHandlers();
  } catch (error) {
    console.error('Failed to load homepage banners:', error);

    list.innerHTML = `
      <div style="
        padding:16px;
        border-radius:10px;
        background:#fef3f2;
        color:#b42318;
        font-size:14px;
      ">
        Unable to load banners. Check Firestore access and try again.
      </div>
    `;
  } finally {
    isLoading = false;
  }
}
function attachPublishHandlers(): void {
  document
    .querySelectorAll<HTMLButtonElement>('.admin-banner-publish')
    .forEach((button) => {
      button.addEventListener('click', async () => {
        const bannerId = button.dataset.bannerId;

        if (!bannerId || isLoading) {
          return;
        }

        const confirmed = window.confirm(
          'Publish this homepage banner?'
        );

        if (!confirmed) {
          return;
        }

        button.disabled = true;
        button.textContent = 'Publishing...';

        try {
          await publishHomepageBanner(bannerId);
          await loadBanners();
        } catch (error) {
          console.error(
            'Failed to publish homepage banner:',
            error
          );

          button.disabled = false;
          button.textContent = 'Publish';

          window.alert(
            'The banner could not be published. Please try again.'
          );
        }
      });
    });
}
function attachArchiveHandlers(): void {
  document
    .querySelectorAll<HTMLButtonElement>('.admin-banner-archive')
    .forEach((button) => {
      button.addEventListener('click', async () => {
        const bannerId = button.dataset.bannerId;

        if (!bannerId || isLoading) {
          return;
        }

        const confirmed = window.confirm(
          'Archive this homepage banner?'
        );

        if (!confirmed) {
          return;
        }

        button.disabled = true;
        button.textContent = 'Archiving...';

        try {
          await archiveHomepageBanner(bannerId);
          await loadBanners();
        } catch (error) {
          console.error('Failed to archive homepage banner:', error);

          button.disabled = false;
          button.textContent = 'Archive';

          window.alert(
            'The banner could not be archived. Please try again.'
          );
        }
      });
    });
}

function attachCreateFormHandler(): void {
  const form = document.getElementById(
    'adminBannerForm'
  ) as HTMLFormElement | null;

  const button = document.getElementById(
    'createBannerButton'
  ) as HTMLButtonElement | null;

  const status = document.getElementById(
    'adminBannerFormStatus'
  );

  if (!form || !button || !status) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    const formData = new FormData(form);

    const titleEn = String(
      formData.get('titleEn') ?? ''
    ).trim();

    const titleBn = String(
      formData.get('titleBn') ?? ''
    ).trim();

    const bannerType = String(
      formData.get('bannerType') ?? 'GENERAL'
    ) as BannerType;

    const priority = Number(
      formData.get('priority') ?? 0
    );

    const desktopImageUrl = String(
      formData.get('desktopImageUrl') ?? ''
    ).trim();

    const ctaLabelEn = String(
      formData.get('ctaLabelEn') ?? ''
    ).trim();

    const ctaUrl = String(
      formData.get('ctaUrl') ?? ''
    ).trim();

    if (!titleEn) {
      status.textContent = 'English title is required.';
      return;
    }

    button.disabled = true;
    button.textContent = 'Creating...';
    status.textContent = 'Saving banner...';

    try {
      await createHomepageBanner({
        title: {
          en: titleEn,
          bn: titleBn,
        },

        desktopImage: {
          url: desktopImageUrl,
          altText: {
            en: titleEn,
            bn: titleBn || titleEn,
          },
        },

        mobileImage: {
          url: desktopImageUrl,
          altText: {
            en: titleEn,
            bn: titleBn || titleEn,
          },
        },

        cta: {
          enabled: Boolean(ctaUrl),
          label: {
            en: ctaLabelEn,
            bn: '',
          },
          url: ctaUrl,
          external: ctaUrl.startsWith('http'),
        },

        bannerType,

        priority: Number.isFinite(priority)
          ? priority
          : 0,

        status: 'DRAFT',

        featured: false,
      });

      form.reset();

      const priorityInput = form.elements.namedItem(
        'priority'
      ) as HTMLInputElement | null;

      if (priorityInput) {
        priorityInput.value = '0';
      }

      status.textContent = 'Draft created successfully.';

      await loadBanners();
    } catch (error) {
      console.error('Failed to create homepage banner:', error);

      status.textContent =
        'Unable to create banner. Check Firestore access.';
    } finally {
      button.disabled = false;
      button.textContent = 'Create Draft';
    }
  });
}

export function attachAdminBannersHandlers(): void {
  attachCreateFormHandler();

  const refreshButton = document.getElementById(
    'reloadAdminBanners'
  ) as HTMLButtonElement | null;

  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      loadBanners();
    });
  }

  loadBanners();
}