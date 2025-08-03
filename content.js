
function extractLeetCodeData(range) {
  const history = [
    { date: "2025-07-28", difficulty: "Easy" },
    { date: "2025-07-28", difficulty: "Medium" },
    { date: "2025-06-20", difficulty: "Hard" }
  ];

  const now = new Date();
  let threshold;
  if (range === "week") threshold = new Date(now - 7 * 24 * 60 * 60 * 1000);
  else if (range === "month") threshold = new Date(now.setMonth(now.getMonth() - 1));
  else threshold = new Date(now.setFullYear(now.getFullYear() - 1));

  const filtered = history.filter(h => new Date(h.date) >= threshold);

  let easy = 0, medium = 0, hard = 0;
  for (const q of filtered) {
    if (q.difficulty === "Easy") easy++;
    else if (q.difficulty === "Medium") medium++;
    else if (q.difficulty === "Hard") hard++;
  }

  const avg = filtered.length;

  return { easy, medium, hard, avg };
}
