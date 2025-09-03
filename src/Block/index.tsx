import { useInView } from "react-intersection-observer";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './index.module.css';

import img1 from '../1.jpg';
import img2 from '../3.jpg';
import img3 from '../4.jpg';

interface IBlock {
    item: {
        name: string;
        href: string,
        content?: {
            [key: string]: string,
        }[]
    },
    width?: number
}

const content1 = [
    { img1: img1, text1: 'Ladurée à-la Russe расположен в самом сердце Москвы, в трех шагах от Красной площади, на Никольской улице. Предполагается, что ресторан станет излюбленным местом, как для москвичей, так и для гостей нашего города и сюда будут заходить как те, кто с громадным пиететом относится с бренду Ladurée, так и те, кто ни разу не слышал этого имени. И тем, и другим обеспечен восторг — и от интерьеров, и от десертов и от еды.' },
    { img2: img2, text2: 'Управлять всеми проектами Ladurée в России будет Объединённая компания «Рестораны Раппопорта», которая придумала объединить все самое лучшее за триста лет российско-французской дружбы и создать уникальные декорации для Ladurée à-la Russe. Отправной точкой для них стали театральная антреприза Сергея Дягилева «Русские сезоны» в целом и эскизы художника Льва Бакста в частности, перевернувшие в начале XX века представление о мире моды, театра и искусства. Филигранные работы мастера спустя столетие вдохновили на создание яркого, сказочного, чуть лубочного интерьера, который просто обязан взорвать инстаграм. Кондитерская часть строго курируется французской стороной: прославленные пирожные макарон с классическими и сезонными вкусами, тарталетки, эклеры, бриоши, мильфеи, финансье, десерты «Сант-Оноре» и «Испахан» по-прежнему в строю. А вот концепт меню создан в России. В нем нашла отражение идея взаимопроникновения и взаимодействия России и Франции во многих областях — от искусства и литературы до языка и кулинарии. Получился русский ресторан с явно выраженным французским акцентом.' },
    { img3: img3, text3: 'Шеф-повар Роман Палкин («Морошка для Пушкина», Beef Zavod, Big Wine Freaks) создал изысканное русское меню с французским изводом. Все блюда отдают дань традициям, но в то же время видоизменены в авторском ключе, следующем современным веяниям. Так, котлеты по-киевски готовят из перепелки (580 руб.), волован из закуски превращается в горячее блюдо (840 руб.), бриошь приобретает вкус и аромат бородинского хлеба (240 руб.), фуа-гра (1200 руб.) соседствует с соленьями (от 120 руб.) и пирожками (50 руб.), а уха из трех рыб (880 руб.) и мясная солянка (920 руб.) — с луковым супом (380 руб.). Оливье, который за пределами России называют Salade Russe, освежен черным трюфелем, пикелированным языком и ферментированными желтками (860 руб.), а знаменитые бургундские виноградные улитки подаются в стиле à-la строганов (900 руб.). О русских традициях поста и французской любви к огородным овощам напоминают карамелизированные тыква, пастернак и другие корнеплоды.' },
]

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Block = ({ item, width = 1800 }: IBlock) => {
    const duration = 1.5;
    // const [isTextAnimationFinished, setIsTextAnimationFinished] = useState(false);
//   const [textMoved, setTextMoved] = useState(false);
    const titleRef = useRef(null);
    const blockRef = useRef(null);

    const blockHorizontalRef = useRef(null);
    const textHorizontalRef = useRef(null);
//   const { ref: titleRef, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

    gsap.registerPlugin(ScrollTrigger);

    
 
    useIsomorphicLayoutEffect(() => {
        // if (inView) {
            gsap.to(titleRef.current, {
                ScrollTrigger: {
                    trigger: titleRef.current,
                    // start: ,
                    // end: 0,
                },
            x: 40,
                duration: duration,
            }
            )
        
        gsap.to(blockRef.current, {
            scrollTrigger: {
                trigger: blockRef.current, 
            },
            opacity: 1,
            duration: duration,
        })
    
        gsap.to(blockHorizontalRef.current, {
            scrollTrigger: {
                trigger: blockHorizontalRef.current,
                
            },
            x: 40,
            duration: duration,
            })
            // gsap.to(titleRef.current, {
            //     ScrollTrigger: {
            //         trigger: titleRef.current,
            //     },
            //     x: 0,
            //     duration: 1.5,
            // }
            // )
        // }
        
    }, [width])





    return (<>
        
        <h2 ref={titleRef} className={styles.title}>{item.name}</h2>
        <div className={`${styles.contentRow} main`} ref={blockRef}>
            <img  className={`img ${styles.img}`} src={content1[0].img1} />
            <p>{content1[0].text1}</p>
        </div>
            <div className={styles.contentRow}>
            <img className={`img ${styles.img}`} src={content1[1].img2} ref={blockHorizontalRef} />
                <p>{content1[1].text2}</p>
            </div>
            <div className={styles.contentRow}>
            <p>{content1[2].text3}</p>
                <img className={`img ${styles.img}`} src={content1[2].img3} />
            </div>
        
    </>)
}

export default Block;