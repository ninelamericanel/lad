import React, { useRef, useLayoutEffect, useEffect  } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Block from './Block'
import logo from './svgs/logo.svg';
import styles from './App.module.css';
import location from './svgs/location.svg';
import home from './svgs/home.svg';
import subscribe from './svgs/subscribe.svg';
import img1 from './1.jpg';
import img2 from './3.jpg';
import img3 from './4.jpg';
import imgBg from './IMG_1584.jpg';

const headerButtons = [
  { name: 'location', src: location },
  { name: 'home', src: home },
  { name: 'subscribe', src: subscribe },
]

interface NavLinksI {
  name: string;
        href: string,
        content?: {
            [key: string]: string,
        }[]
}

const navLinksArray:NavLinksI[] = [
  // { name: 'О бренде', href: '#about', },
  // { name: 'Ladurée в Москве', href: '#inMoscow', },
  {
    name: 'Ресторан Ladurée à-la Russe', href: '#alaRusse',
    content: [
      { img1: img1, text1: 'Ladurée à-la Russe расположен в самом сердце Москвы, в трех шагах от Красной площади, на Никольской улице. Предполагается, что ресторан станет излюбленным местом, как для москвичей, так и для гостей нашего города и сюда будут заходить как те, кто с громадным пиететом относится с бренду Ladurée, так и те, кто ни разу не слышал этого имени. И тем, и другим обеспечен восторг — и от интерьеров, и от десертов и от еды.' },
      // { img2: img2, text2: 'Управлять всеми проектами Ladurée в России будет Объединённая компания «Рестораны Раппопорта», которая придумала объединить все самое лучшее за триста лет российско-французской дружбы и создать уникальные декорации для Ladurée à-la Russe. Отправной точкой для них стали театральная антреприза Сергея Дягилева «Русские сезоны» в целом и эскизы художника Льва Бакста в частности, перевернувшие в начале XX века представление о мире моды, театра и искусства. Филигранные работы мастера спустя столетие вдохновили на создание яркого, сказочного, чуть лубочного интерьера, который просто обязан взорвать инстаграм. Кондитерская часть строго курируется французской стороной: прославленные пирожные макарон с классическими и сезонными вкусами, тарталетки, эклеры, бриоши, мильфеи, финансье, десерты «Сант-Оноре» и «Испахан» по-прежнему в строю. А вот концепт меню создан в России. В нем нашла отражение идея взаимопроникновения и взаимодействия России и Франции во многих областях — от искусства и литературы до языка и кулинарии. Получился русский ресторан с явно выраженным французским акцентом.' },
      // { img3: img3, text3: 'Шеф-повар Роман Палкин («Морошка для Пушкина», Beef Zavod, Big Wine Freaks) создал изысканное русское меню с французским изводом. Все блюда отдают дань традициям, но в то же время видоизменены в авторском ключе, следующем современным веяниям. Так, котлеты по-киевски готовят из перепелки (580 руб.), волован из закуски превращается в горячее блюдо (840 руб.), бриошь приобретает вкус и аромат бородинского хлеба (240 руб.), фуа-гра (1200 руб.) соседствует с соленьями (от 120 руб.) и пирожками (50 руб.), а уха из трех рыб (880 руб.) и мясная солянка (920 руб.) — с луковым супом (380 руб.). Оливье, который за пределами России называют Salade Russe, освежен черным трюфелем, пикелированным языком и ферментированными желтками (860 руб.), а знаменитые бургундские виноградные улитки подаются в стиле à-la строганов (900 руб.). О русских традициях поста и французской любви к огородным овощам напоминают карамелизированные тыква, пастернак и другие корнеплоды.' },
    ],
  },
  { name: 'Кондитерская Ladurée', href: '#condi', },
  { name: 'Подарки и кейтеринг', href: '#present', },
  { name: 'Свадьба', href: '#wedding', },
  // { name: 'Адреса', href: '#adress', },
];

const mainBlocks = [
    { name: 'Ресторан Ladurée à-la Russe', id: '#about',  },
]

function App() {

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const widgetRef = useRef(null);
  const titleRef = useRef(null);

  
  useIsomorphicLayoutEffect(() => {
    gsap.to(widgetRef.current, {
      scrollTrigger: {
          trigger: widgetRef.current, 
      },
      opacity: 1,
      duration: 1.5,
    })

    gsap.to(titleRef.current, {
      scrollTrigger: {
          trigger: titleRef.current, 
      },
      x: -200,
      duration: 1.5,
    })
  }, [])
  

  gsap.registerPlugin(ScrollTrigger);

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
        <div className={styles.first}>
          <div className={styles.background}>
            <img src={imgBg}></img>
          </div>
          
          <div className={styles.widget} ref={widgetRef}>
                <h3 >
                Ресторан известных макарон в&nbsp;Москве
                </h3>
                <p>Излюбленное место для москвичей и&nbsp;гостей столицы</p>
              <div className={styles.buttons}>
                <button className={styles.button}><a href='https://laduree-russia.ru/docs/laduree_restaurant_main.pdf' target='_blank'>Меню ресторана</a></button>
                <button className={styles.button}><a href='#'>Расположение магазина</a></button>
              </div>
          </div>
          <h1 className={styles.title} ref={titleRef}>Ladurée à-la Russe</h1>
        </div>
        {navLinksArray.map((item, i) => <div className={styles.content}><Block item={item} /></div>)}
      </main>
    </div>
  );
}

export default App;
