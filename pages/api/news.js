export default async function handler(req, res) {
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_NEWS_API_KEY;

  if (!API_KEY) {
    console.error("API key is missing");
    res.status(400).json({ error: "API key is missing" });
    return;
  }

  const url = `https://newsapi.org/v2/everything?q=premier+league+england+football&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

  console.log("Fetching news with API_KEY:", API_KEY);
  console.log("Request URL:", url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `News API returned an error: HTTP ${response.status} - ${response.statusText}`
      );
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("News API returned data:", data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: error.message });
  }
}
