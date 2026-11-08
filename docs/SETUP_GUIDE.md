# Project Exodus: Setup Play-by-Play

Everything that needs a human (you!) to switch the new features on.
Do the parts in order. Each one ends with a ✅ check so you know it worked.
If you get stuck, take a screenshot of the screen you're on and send it to Claude.

**Time needed:** about 45–60 minutes in total. You can stop between parts.

**What you'll have open:** a notes app (to paste keys into for a moment), your
Vercel account, your GitHub account, and a few new sign-ups (all have free tiers
except Anthropic, which needs a little credit).

> 🔐 **Keys are passwords.** Never post them in chat, GitHub issues or screenshots.
> If one leaks, delete it on the site that made it and create a new one.
> When you paste a key, make sure there are no spaces before or after it.

---

## Part 0: A quick look around Vercel (5 min)

You need to know two things before adding anything.

1. Go to **vercel.com** and log in.
2. Click your **Project Exodus** project.
3. Write down your site address. It's shown near the top of the project page
   (something like `project-exodus.vercel.app`, or your own domain if you added one).
   We'll call this **YOUR-SITE**. Write it with `https://` in front, e.g. `https://project-exodus.vercel.app`.
4. Click **Settings** (top menu) → **Git** (left menu). Find **Production Branch**
   and write down the branch name shown. You'll need it in Part 7.

✅ You have **YOUR-SITE** and the **production branch name** written down.

### How to add a setting ("environment variable") in Vercel

You'll do this several times, so here it is once:

1. Project → **Settings** → **Environment Variables**.
2. In **Key**, type the name exactly as written in this guide (capital letters, underscores).
3. In **Value**, paste the value.
4. Under environments, tick **Production** and **Preview** (Development is optional).
5. Click **Save**.

Settings only take effect on the **next** deploy. That happens automatically in
Part 7, so you don't need to redeploy after each one.

---

## Part 1: Check the basics are already there (2 min)

Your site already runs, so these should exist. In **Settings → Environment Variables**,
look for:

- `DATABASE_URL`
- `AUTH_SECRET`

If both are listed: ✅ leave them alone, don't change them.

If `AUTH_SECRET` is missing:
1. Open **generate-secret.vercel.app/32** in a new tab. It shows a random string.
2. Copy it and add it as `AUTH_SECRET`.

Now add one new one:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **YOUR-SITE** (e.g. `https://project-exodus.vercel.app`, no slash at the end) |

This makes the links inside emails point to your real site.

✅ `DATABASE_URL`, `AUTH_SECRET` and `NEXT_PUBLIC_SITE_URL` are all listed.

---

## Part 2: Turn on Sage (Claude) (10 min)

Without this, Sage still answers, but only with simple keyword replies.

1. Go to **console.anthropic.com** and sign up / log in.
2. Add credit: find **Billing** (or **Plans & Billing**) and add a small amount
   (e.g. $10–20) so the key works. Setting a monthly spending limit there is a good idea.
3. Go to **API Keys** → **Create Key**. Name it `project-exodus`.
4. **Copy the key right away**: it starts with `sk-ant-` and is only shown once.
5. In Vercel, add:

| Key | Value |
|---|---|
| `ANTHROPIC_API_KEY` | the `sk-ant-…` key |

**Optional, to keep costs down:** Sage uses Claude Opus 5.5 by default, the most capable
(and most expensive) model. To use the cheaper, faster Sonnet instead, also add:

| Key | Value |
|---|---|
| `SAGE_MODEL` | `claude-sonnet-5-5` |

✅ `ANTHROPIC_API_KEY` is listed in Vercel.

---

## Part 3: Make rate limits work (Upstash) (10 min)

This stops people spamming sign-up, password reset and Sage. It's free.

1. Go to **console.upstash.com** and sign up (you can use "Continue with GitHub").
2. Click **Create Database** (choose **Redis** if it asks).
3. **Name:** `exodus-ratelimit`.
   **Region:** pick the one closest to your Vercel region. If unsure, pick
   **US East (N. Virginia) / us-east-1**, which is Vercel's default.
   Leave the plan on **Free**. Click **Create**.
4. On the database page, scroll to the **REST API** section. You'll see two values:
   - `UPSTASH_REDIS_REST_URL` (starts with `https://`)
   - `UPSTASH_REDIS_REST_TOKEN` (a long string; there may be an eye or copy icon)
5. In Vercel, add both, using exactly those names:

| Key | Value |
|---|---|
| `UPSTASH_REDIS_REST_URL` | the `https://…upstash.io` address |
| `UPSTASH_REDIS_REST_TOKEN` | the long token |

✅ Both Upstash keys are listed in Vercel.

---

## Part 4: Email: verification and password reset (Resend) (15–20 min)

Right now no emails go out. This makes sign-up verification and "Forgot password?" work.

**You need a domain you own** (like `projectexodus.com`). Resend only sends from
domains you prove you own. (Without one, Resend can only email *your own* address,
which is fine for testing but not for real users.)

### 4a. Create the account and add your domain
1. Go to **resend.com** and sign up.
2. Go to **Domains** → **Add Domain**. Type your domain (e.g. `projectexodus.com`).
   Pick the region closest to your users (US is fine). Click **Add**.
3. Resend now shows a short list of **DNS records** (usually 3–4 rows: some
   `TXT`, one `MX`). Keep this tab open.

### 4b. Add the DNS records where your domain lives
Your domain lives wherever you bought it or manage it (GoDaddy, Namecheap,
Cloudflare, Google/Squarespace Domains, or Vercel itself).

1. Log in there and find **DNS settings** for your domain
   (it may be called "DNS", "Manage DNS", "DNS records" or "Advanced DNS").
2. For **each row** Resend shows, click **Add record** and copy across:
   - **Type** (TXT or MX)
   - **Name / Host** (copy exactly what Resend shows; some sites want only the part
     before your domain, e.g. `resend._domainkey`)
   - **Value / Content** (copy exactly, it's long)
   - **Priority** (only for the MX row; use the number Resend shows)
3. Save each record.
4. Back in Resend, click **Verify DNS Records**. It can take a few minutes
   (occasionally up to a few hours). Status turns **Verified** when done.

*If your domain is managed in Vercel:* Vercel → your account's **Domains** page →
click the domain → add the records there.

📸 If this step confuses you, screenshot the Resend records **and** your DNS page and send both.

### 4c. Create the key and tell Vercel
1. In Resend, go to **API Keys** → **Create API Key**. Name `project-exodus`,
   permission **Sending access**. Copy it (starts with `re_`, shown once).
2. In Vercel, add:

| Key | Value |
|---|---|
| `RESEND_API_KEY` | the `re_…` key |
| `EMAIL_FROM` | `Project Exodus <hello@YOURDOMAIN.com>` (use your real domain; the part after @ must be the domain you verified) |

✅ Resend shows your domain as **Verified**, and both keys are in Vercel.

---

## Part 5: Live document collaboration (PartyKit): let's do this one together

This part needs a terminal command, so it's easiest done with Claude:

1. Start a session and say **"let's set up PartyKit"**.
2. Claude will start a login and give you a short code and a link.
3. Open the link on your phone or computer, sign in with GitHub, and enter the code.
4. Claude deploys the collaboration server, creates the shared secret, and tells you
   the exact two values to paste into Vercel:
   `PARTYKIT_SECRET` and `NEXT_PUBLIC_PARTYKIT_HOST`.

Until then, documents still work and save normally. Only the live
"several people typing at once" feature stays off.

---

## Part 6: Optional extras (skip if unsure)

| Key | What it's for | How to get it |
|---|---|---|
| `CRON_SECRET` | Protects the scheduled clean-up job | Copy a string from **generate-secret.vercel.app/32** |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | "Sign in with Google" | Ask Claude for a walkthrough when you want it |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | "Sign in with GitHub" | Ask Claude for a walkthrough when you want it |

---

## Part 7: Put the new code live (10 min)

All the new work is on the branch `claude/project-exodus-onboarding-tf3eo3`.
Merging it into your production branch makes Vercel build and publish it, using
all the settings you just added.

> Prefer not to do this part yourself? Just tell Claude **"open the pull request"**,
> and then you only need to do step 4 onwards.

1. Go to **github.com/ThreeKingsRE/ProjectExodus**.
2. Click **Pull requests** → **New pull request**.
3. Set the two dropdowns:
   - **base:** your production branch (from Part 0)
   - **compare:** `claude/project-exodus-onboarding-tf3eo3`

   Click **Create pull request**, give it a title like "Hardening, products, Sage 2.0,
   drawings, email", then **Create pull request** again.
4. Wait 3–5 minutes. Near the bottom of the pull request, Vercel posts a
   **Preview** link and the checks turn green ✓.
   - Open the preview link and click around: home page, Products, Architecture → Explore.
   - If something is red ✗, screenshot it and send it to Claude. **Don't merge yet.**
5. If it all looks good, click **Merge pull request** → **Confirm merge**.
6. Vercel now deploys to your real site (another 3–5 minutes). Watch it in
   Vercel → **Deployments**. The newest one should say **Ready**.

✅ The newest deployment in Vercel says **Ready**.

---

## Part 8: Test it on the real site (10 min)

Do these on **YOUR-SITE**:

1. **Sign up** with a new email address you can check (not your main account).
   You should get a "Verify your Project Exodus account" email within a minute.
   Click the button in it. *(Check spam the first time.)*
2. **Sign out**, go to **Sign in** → **Forgot password?** → enter that email.
   You should get "Reset your Project Exodus password". Click it, set a new password,
   and sign in with it.
3. **Open Sage** (the chat bubble) and ask: *"What products do you have for saving water?"*
   It should answer word by word (streaming) and mention real items from your site.
4. **Products page:** filters and the compare tray should work.
5. **Architecture → Explore:** the new paper-style drawings should show.
   Try *Gazebo* or *Yurt* for the new 3D ones.

| If this happens… | It probably means… |
|---|---|
| No email arrives (and it's not in spam) | Resend domain not verified yet, or `EMAIL_FROM` isn't on that domain |
| Email arrives but the link goes to the wrong site | `NEXT_PUBLIC_SITE_URL` is wrong, or it was added after the last deploy (redeploy: Deployments → ⋯ → Redeploy) |
| Sage gives short canned answers | `ANTHROPIC_API_KEY` missing, or no credit on the Anthropic account |
| The deploy fails | Screenshot the red error in Vercel → Deployments → the failed one → **Build Logs**, and send it |

---

## Your checklist

- [ ] Part 0: wrote down YOUR-SITE and the production branch
- [ ] Part 1: `DATABASE_URL`, `AUTH_SECRET` present; added `NEXT_PUBLIC_SITE_URL`
- [ ] Part 2: `ANTHROPIC_API_KEY` (and optionally `SAGE_MODEL`)
- [ ] Part 3: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- [ ] Part 4: Resend domain verified; `RESEND_API_KEY`, `EMAIL_FROM`
- [ ] Part 5: PartyKit, done together with Claude
- [ ] Part 7: pull request merged, deployment **Ready**
- [ ] Part 8: sign-up email, password reset, Sage and drawings all tested
