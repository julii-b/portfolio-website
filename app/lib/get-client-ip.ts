import "server-only";

import { headers } from "next/headers";

/**
 * Retrieves the client's IP address in a server action.
 * If that's not possible, it returns "0.0.0.0".
 */
export async function getClientIpInServerAction(): Promise<string> {
  const headersList = await headers();
  // Get client IP for forwarded requests:
  const xForwardedFor = headersList.get("x-forwarded-for");
  if (xForwardedFor) {
    const clientIp = xForwardedFor.split(",")[0].trim();
    return clientIp;
  }
  // Get client IP from X-Real-IP header:
  const clientIp = headersList.get("x-real-ip");
  if (clientIp) {
    return clientIp;
  }
  // Fallback:
  return "0.0.0.0";
}
