import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export function analyzeMood(text) {
  const result = sentiment.analyze(text);
  if (result.score > 3) return "Happy 😊";
  else if (result.score > 0) return "Excited 😄";
  else if (result.score === 0) return "Neutral 😐";
  else if (result.score > -3) return "Sad 😢";
  else return "Angry 😠";
}
