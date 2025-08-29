import React from 'react';
import logo from './svgs/logo.svg';
import styles from './App.module.css';
import location from './svgs/location.svg';
import home from './svgs/home.svg';
import subscribe from './svgs/subscribe.svg';

const headerButtons = [
  { name: 'location', src: location },
  { name: 'home', src: home },
  { name: 'subscribe', src: subscribe },
]

const navLinksArray = [
  { name: 'О бренде', href: '#about', },
  // { name: 'Ladurée в Москве', href: '#inMoscow', },
  { name: 'Ресторан Ladurée à-la Russe', href: '#alaRusse', },
  { name: 'Кондитерская Ladurée', href: '#condi', },
  { name: 'Подарки и кейтеринг', href: '#present', },
  { name: 'Свадьба', href: '#wedding', },
  // { name: 'Адреса', href: '#adress', },
];

const mainBlocks = [
    { name: 'Ресторан Ladurée à-la Russe', id: '#about',  },
]

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerButtons}>
          {headerButtons.map((item, i) => <button className={styles.headerButton}><img src={item.src} /></button>)}
        </div>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigationBlock}>
            {navLinksArray.map((i, k) => <li className={styles.navigationLink}><a href={i.href}>{i.name}</a></li>)}
          </ul>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
