import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div>
        {stories.map(() => )}
      </div>
    </div>
  );
}

export default App;
