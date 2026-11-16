# Password reset email deployment

Password reset uses Resend. Deploying code does not provision an email provider.

In the Vercel project that owns **www.projxodus.com**, set these server-side environment variables for Production (and Preview when testing there):

| Variable | Required value |
| --- | --- |
| `RESEND_API_KEY` | A Resend API key with permission to send from the verified domain. Enter it directly in Vercel; never commit it. |
| `EMAIL_FROM` | A sender on a domain verified in that Resend account, such as `Project Exodus <accounts@projxodus.com>` once that domain is verified. |
| `NEXT_PUBLIC_SITE_URL` | `https://www.projxodus.com` |
| `NEXTAUTH_URL` | `https://www.projxodus.com` |

Verify the actual project's Domains settings first: there are multiple Vercel projects named Project Exodus. Redeploy after changing environment variables. Resend's test sender cannot deliver to arbitrary community members; use a verified owned domain for public launch.

References: [Resend domain verification](https://resend.com/docs/dashboard/domains/introduction) and [send email API](https://resend.com/docs/api-reference/emails/send-email).

## Verification before announcing the initiative

1. Request one reset using the owner's existing password account at `/auth/forgot-password`.
2. Confirm Resend accepted the message and reports delivery; then confirm it arrived in the owner's inbox. HTTP 200 alone is not evidence of delivery.
3. The owner follows the link and personally enters/submits their new password. Verify the link opens `https://www.projxodus.com/auth/reset-password` and expires after one hour.
4. Sign in with the new password, open Riverknoll, and check its join control. Verify the used reset link cannot change the password again.

## Failure behavior

- Missing provider configuration returns 503 before looking up any account. The form displays the service error instead of a false success notice.
- Unknown and provider-only accounts receive the same neutral response as password accounts. Provider rejection remains private to server logs to avoid exposing registered email addresses.
- Failed delivery removes only the newly created token; earlier delivered links remain valid.
- Only development mode may return a test reset URL. Production never exposes the reset token in JSON.
- A successful reset atomically consumes the token and invalidates other reset links for the account. Concurrent reuse cannot reset the password twice.

Run the isolated regression checks with `node scripts/test-password-reset.mjs`. They mock the email provider and database; they do not send mail or alter any account.
