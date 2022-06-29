
const redis = require('redis');

export async function checkIfRedisIsRunning() {
  try {
    const client = await redis.createClient();

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
