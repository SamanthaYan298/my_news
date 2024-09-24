import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div>
        {stories.map((story, index) => (
          <div key={index}>
            <h2>{story.title}</h2>
            <a href=><h4>{story.link}</h4></a>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
