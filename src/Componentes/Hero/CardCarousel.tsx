import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

//ASSETS
import hero from '../../assets/Hero.svg';
import heroViagem from '../../assets/HeroViagem.svg';
import heroCelular from '../../assets/HeroCelular.svg';
import styles from './CardCarousel.module.css';


export function CardCarousel() {
  return (
    <Carousel withIndicators height={500}>
      <Carousel.Slide >
         <img src={hero} className={styles.slide}/>
       </Carousel.Slide>
      <Carousel.Slide>
      <img src={heroViagem} className={styles.slide}/>
      </Carousel.Slide>
      <Carousel.Slide>
      <img src={heroCelular} className={styles.slide}/>
      </Carousel.Slide>
    </Carousel>
  );
}