import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [emoji, setEmoji]=useState("🍕")
  const[emojiColor, setEmojiColor]=useState('lavendor')
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg]=useState(0)
  

useEffect(()=>{
    const a=localStorage.getItem("emoji");
    const b=localStorage.getItem("emojiColor");
    const c=localStorage.getItem("emojiSize");
    const d=localStorage.getItem("emojiDeg");

    if(a){
      setEmoji(a);
    }

    if(b){
      setEmojiColor(b);
    }

    if(c){
      setEmojiSize(c);
    }

    if(d){
      setEmojiDeg(d);
    }
},[])

  useEffect(()=>{
    if(emoji){
      localStorage.setItem("Emoji",emoji);
    }

    if(emojiColor){
      localStorage.setItem("EmojiColor",emojiColor);
    }

    if(emojiSize){
      localStorage.setItem("EmojiSize",emojiSize);
    }

    if(emojiDeg){
      localStorage.setItem("Emoji",emojiDeg);
    }
  }, [emoji,emojiColor,emojiSize,emojiDeg])
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

           <div>
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
      </div>
  
  );
}

export default App;
