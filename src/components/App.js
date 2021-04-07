import DisplayVideo from "./DisplayVideo";
import video from "../data/video.js";

function App() {

  return (
    <div className="App">
      <DisplayVideo
      title = {video.title}
      source = {video.embedUrl}
      />
    </div>
  );
}

export default App;
