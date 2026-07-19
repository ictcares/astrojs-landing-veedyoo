// Promo banner config — edit THIS file to change or retire the campaign.
// The banner pre-fills the code at sign-up and shows live redemptions via
// the app's public /api/invite-status endpoint.
export const banner = {
  enabled: true,
  code: "LAUNCH",
  kicker: "BETA ACCESS",
  rewardHtml: 'start with a <strong class="text-paper">$2 free trial</strong>',
  limitHtml: 'limited to the first <strong class="text-sand">30 beta testers</strong>',
  ctaLabel: "Claim $2 trial →",
  // Live counter (set to false to hide even when the API is reachable)
  showCounter: true,
  statusApi: "https://app.veedyoo.com/api/invite-status"
};
