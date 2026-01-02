/**
 * Get a Duolingo user's current streak.
 * Function from from https://leanrada.com/notes/get-duolingo-streak/
 * @param username Duolingo username
 * @returns The user's current streak
 */
async function getDuolingoStreak(username: string): Promise<number> {
  const res = await fetch(
    `https://www.duolingo.com/2017-06-30/users?username=${username}&fields=streak,streakData%7BcurrentStreak,previousStreak%7D%7D`
  );
  const data = await res.json();
  const userData = data.users[0];
  // I didn't know which of these fields matter, so I just get the max of them.
  const streak = Math.max(
    userData?.streak ?? 0,
    userData?.streakData?.currentStreak?.length ?? 0,
    userData?.streakData?.previousStreak?.length ?? 0
  );
  return streak;
}
export default getDuolingoStreak;