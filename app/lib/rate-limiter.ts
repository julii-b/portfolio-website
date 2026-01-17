import { RateLimiterRedis } from "rate-limiter-flexible";
import redisClient from "./redis-client";

/**
 * Create a rate limiter.
 * Use .consume(key) to consume a point for a given key.
 * 
 * @param namespace - The namespace for the rate limiter - used as key prefix in Redis
 * @param intervalInS - The time interval in seconds
 * @param maxRequests - The maximum number of requests allowed within the interval
 * @returns The rate limiter instance
 */
export default function createRateLimiter(namespace: string, intervalInS: number, maxRequests: number) {
  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    useRedisPackage: true,
    keyPrefix: namespace,
    points: maxRequests,
    duration: intervalInS,
  });
  return limiter;
}
