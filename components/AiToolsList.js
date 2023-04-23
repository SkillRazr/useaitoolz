import {useState, useEffect} from 'react';

export default function AiToolsList() {
    const [aiTools, setAiTools] = useState([

    {
      category: 'Text', tools: [{name: 'chatGpt', url: ''}, {name: 'gpt-4', url: ''}, {name: 'notion AI', url: ''}],
      category: 'Image', tools: [{name: 'stable diffusion', url: ''}, {name: 'image creator', url: ''}, {name: 'Mid journey', url: ''}, {name: 'Lexica', url: ''},{name: 'Dolly', url: ''}],
      category: 'Video', tools: [{name: 'Runway', url: ''}, {name: 'Fliki', url: ''}, {name: 'Wonder Studio', url: ''}],
      category: '3D', tools: [{name: 'Point-E', url: ''}, {name: 'Magic3D', url: ''}, {name: 'Imagine 3D', url: ''}],
      category: 'Audio', tools: [{name: 'JukeBox', url: ''}, {name: 'MusicLM', url: ''}, {name: 'Text to Speech', url: ''}],
      category: 'Coding', tools: [{name: 'Codex', url: ''}, {name: 'Codewhisperer', url: ''}, {name: 'Copilot-X', url: ''}],
    }


    ]);
    useEffect(() => {
      const fetchData = async () => {
        // const response = await axios.get('https://api.example.com/aitools');
        setAiTools([{name: 'AutoGPT', link: 'afe'}, {name: 'ChatGPT', link: 'afef'}]);
      };
      fetchData();
    }, []);
    return (
      <div>
        <h2>Popular AI Tools</h2>
        <ul>
          {aiTools.map((tool) => (
            <li key={tool.id}>
              <a href={tool.link}>{tool.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  