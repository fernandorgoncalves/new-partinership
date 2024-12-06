import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

//ASSETS
import hero from '../../assets/Hero.svg';
import heroViagem from '../../assets/HeroViagem.svg';
import heroCelular from '../../assets/HeroCelular.svg';

export function CardCarousel() {
  return (
    <Carousel withIndicators height={400}>
      <Carousel.Slide>
         <img src={hero}/>
       </Carousel.Slide>
      <Carousel.Slide>
      <img src={heroViagem}/>
      </Carousel.Slide>
      <Carousel.Slide>
      <img src={heroCelular}/>
      </Carousel.Slide>
    </Carousel>
  );
}