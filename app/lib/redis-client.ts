import { createClient } from "redis";

const redisClient = createClient({  url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => {
  console.error("Redis error", err);
});

// Connect to Redis server
await redisClient.connect();

export default redisClient;