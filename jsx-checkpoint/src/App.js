import React from 'react';
import image from './learn.img2.jpg'
import  './style.css';

const App = () => {

  return (

      <div className="container" >
        <h1 className='red'>KEHINDE BILLIONS</h1>
        <img src='learn.img1.jpg' style={{ width: '80vh', height: '80vh' }} className='learnImage1' alt=''  />
        <img src={image} style={{ width: '80vh', height: '80vh' }}className='learnImage2' alt=''  />
        
        <iframe width="500" height="480" src="https://www.youtube.com/embed/5q87K1WaoFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  );
}

export default App;
