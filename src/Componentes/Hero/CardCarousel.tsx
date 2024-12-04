import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

import hero from '../../assets/Hero.svg';
import heroViagem from '../../assets/HeroViagem.svg';

export  function CardCarousel() {
  return (
    <Carousel withIndicators height={201}>
              <img src={hero}/>
              <img src={heroViagem}/>
    </Carousel>
  );
}