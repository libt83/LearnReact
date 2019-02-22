import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youTube';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onVideoSelect = video => {
    this.setState({selectedVideo:  video});
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column" >
              <VideoList 
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;