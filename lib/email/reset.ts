export function buildResetEmail(resetUrl: string) {
  const subject = 'Reset your Project Exodus password'
  const text = [
    'Someone asked to reset the password for your Project Exodus account.',
    '',
    `Choose a new password here (the link works for 1 hour): ${resetUrl}`,
    '',
    "If this wasn't you, ignore this email: your password stays the same.",
  ].join('\n')
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>Reset your password</h2>
      <p>Someone asked to reset the password for your Project Exodus account. The link below works for 1 hour.</p>
      <p>
        <a href="${resetUrl}" style="display:inline-block;padding:10px 16px;background:#2f6b3c;color:#fff;text-decoration:none;border-radius:6px;">
          Choose a new password
        </a>
      </p>
      <p style="font-size:12px;color:#555;">If this wasn't you, ignore this email: your password stays the same.</p>
    </div>
  `
  return { subject, html, text }
}
