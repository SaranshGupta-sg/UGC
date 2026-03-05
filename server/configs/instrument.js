import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://cdaba5f1c3083cff596d2088001876f7@o4510991672082432.ingest.us.sentry.io/4510991680471040",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});