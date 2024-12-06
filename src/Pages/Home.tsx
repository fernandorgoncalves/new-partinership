import { HeaderMegaMenu } from "../Componentes/Header/HeaderMegaMenu";
import { CardCarousel } from "../Componentes/Hero/CardCarousel";
import { Beneficios } from "../Componentes/Beneficios/Beneficios";
import { Grid } from "../Componentes/Grid/Grid";
import { Footer } from "../Componentes/Footer/Footer";

export default function Home(){
    return(
        <div>
        <HeaderMegaMenu/>
        <CardCarousel/>
        <Beneficios/>
        <Grid/>
        <Footer/>
        </div>
    )
}