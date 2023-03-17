import { useState } from 'react';
import styles from './App.module.css';

function App() {

  const akatsuki = [
    {src: './images/deidara.jpg', title: 'Deidara', alt: 'Deidara'},
    {src: './images/hidan.jpg', title: 'Hidan', alt: 'Hidan'},
    {src: './images/itachi.jpg', title: 'Itachi', alt: 'Itachi'},
    {src: './images/kakuzu.jpg', title: 'Kakuzu', alt: 'Kakuzu'},
    {src: './images/kisame.jpg', title: 'Kisame', alt: 'Kisame'},
    {src: './images/konan.jpg', title: 'Konan', alt: 'Konan'},
    {src: './images/orochimaru.jpg', title: 'Orochimaru', alt: 'Orochimaru'},
    {src: './images/nagato.jpg', title: 'Nagato', alt: 'Nagato'},
    {src: './images/sasori.jpg', title: 'Sasori', alt: 'Sasori'},
    {src: './images/tobi.jpg', title: 'Tobi', alt: 'Tobi'},
    {src: './images/zetsu.jpg', title: 'Zetsu', alt: 'Zetsu'}

  ]

  const [current, setCurrent]= useState(0);

  function nextSlide() {
    setCurrent(current === akatsuki.length - 1 ? 0 : current + 1)
  }
  function prevSlide() {
    setCurrent(current === 0 ? akatsuki.length - 1 : current - 1)
  }
  return (
    <div className={styles.App}>
      <h1>Akatsuki Members</h1>
      <h3>Wanted Criminals</h3>
      <button onClick={nextSlide}>Next</button>
      <button onClick={prevSlide}>Next</button>
      <div>
        {
          akatsuki.map((index) => <img src={index.src} title={index.title} alt={index.alt} 
          height='250' width='250' style={{border: 'solid', backgroundColor: '#ff1d58'}} />)
        }
      </div>
    </div>
  );
}

export default App;
