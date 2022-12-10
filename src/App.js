import { useState } from 'react';
import './App.css';

function App() {

  const [emoji, setEmoji]=useState("🍕")
  const[emojiColor, setEmojiColor]=useState('black')
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg]=useState(0)
  return (
    
      <div className='container'>
        <div className='app-title-container'>
           <h1 className='app-title'>Fun with Emoji🤩😍</h1>
        </div>
       <div className='fun-emoji'>
        <div className='emoji-editor-container'>
          <div className='main-emoji-container' style={{backgroundColor:emojiColor, transform: `rotate(${emojiDeg*3.6}deg)`}}>
             <div className='main-emoji' style={{fontSize: `${emojiSize * 2}px`}}>
                 {emoji}
             </div>
          </div>
        <div>
          <div className='emoji-container'>
            <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>🍕</div>
            <div className='emoji-item' onClick={()=>{setEmoji('🥪')}}>🥪</div>
            <div className='emoji-item' onClick={()=>{setEmoji('🍿')}}>🍿</div>
            <div className='emoji-item' onClick={()=>{setEmoji('🍔')}}>🍔</div>
            <div className='emoji-item' onClick={()=>{setEmoji('🍟')}}>🍟</div>
          </div>
        </div>

        
          <div className='colors-container'>
            <div className='color-item bg-salmon' onClick={()=>{setEmojiColor("salmon")}}></div>
            <div className='color-item bg-lavendor' onClick={()=>{setEmojiColor("lavendor")}}></div>
            <div className='color-item bg-pink' onClick={()=>{setEmojiColor("pink")}}></div>
            <div className='color-item bg-green' onClick={()=>{setEmojiColor("greenyellow")}}></div>
            <div className='color-item bg-palevioletred' onClick={()=>{setEmojiColor("palevioletred")}}></div>
          </div>

          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiSize(e.target.value)}}/>
          </div>

          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
          </div>
        </div>
        </div>
        
      
      </div>
  
  );
}

export default App;
