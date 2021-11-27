import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagemOficina1 from "../../img/banners/oficina1.jpg"
import imagemOficina2 from "../../img/banners/oficina2.jpg"
import imagemOficina3 from "../../img/banners/oficina3.jpg"
import imagemOficina4 from "../../img/banners/oficina4.jpg"

export function Carousel() {
    var settings = {
        autoplay: true,
        speed: 2000,
        fade: true,
        autoplaySpeed: 2000,
    };

    return (
        <body style={{overflowY: "hidden"}}>
            <div style={{height: "100%", overflow: "hidden"}} id="carrosel_fundo">
                <Slider {...settings}>
                    <div><img className="carrosel" src={imagemOficina1} alt="" /></div>
                    <div><img className="carrosel" src={imagemOficina2} alt="" /></div>
                    <div><img className="carrosel" src={imagemOficina3} alt="" /></div>
                    <div><img className="carrosel" src={imagemOficina4} alt="" /></div>
                </Slider>
            </div>
        </body>
    )
}