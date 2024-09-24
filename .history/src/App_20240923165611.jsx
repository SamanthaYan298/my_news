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
            <div>
              <img 
                src={story.image_url}
                alt={story.title}
                style={{
                  width: '110px',
                  height: '60px'
                }}
              />
            </div>
            <a href={story.link}><h2>{story.title}</h2></a>
            <h4>By: {story.creator}</h4>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
