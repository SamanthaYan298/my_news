import news_feed from './sample_news_stories.json';
import './index.css';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div>
        {stories.map((story, index) => (
          <div key={index} className='story'>
            <div>
              <img 
                src={story.image_url || 'https://placehold.co/600x400'}
                alt={story.title}
                style={{
                  width: '20%',
                  height: 'auto'
                }}
              />
            </div>
            <a href={story.link}><h2>{story.title}</h2></a>
            <h4>By: {story.creator}</h4>
            <p>{story.description}</p>
            <span className='delete'>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
