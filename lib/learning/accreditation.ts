/**
 * Accreditation feature flag.
 *
 * Credit recommendation (ACE) and institutional partnership details are still
 * being finalized. Until they are confirmed, nothing about accreditation,
 * credit hours, or institutional partners may be shown to learners.
 *
 * The underlying data (`module.accreditation`, `topic.courseAccreditation`)
 * is kept intact so it can be switched back on in one place.
 */
export const ACCREDITATION_ENABLED = false
