import news_feed from './sample_news_stories.json';
import './index.css';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  function trim(sentences, length) {
    if(sentences && sentences.length > length) {
      return sentences.substring(0,length).trim() + '...';
    }
    return sentences;
  }

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div>
        {stories.map((story, index) => (
          <div key={index} className='story'>
            <div className='story_header'>
              <img 
                src={story.image_url || 'https://placehold.co/600x400?text=New+Story'}
                alt={story.title}
                style={{
                  width: '20%',
                  
                }}
              />
              <div>
                <a href={story.link} className='links'><h2>{story.title}</h2></a>
                <h4>By: {story.creator}</h4>
              </div>
            </div>
            <p>{trim(story.description, 300)}</p>
            <span className='delete'>x</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
