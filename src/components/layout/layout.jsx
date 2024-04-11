import {Outlet} from "react-router-dom";
import {Menu} from "../menu/menu";

export const Layout = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-around items-center p-5 bg-[#E4E4E4]">
                <div className="flex gap-2 flex-wrap">
                    <a href="">
                        <img src="https://www.minskmuseum.by/images/vk.png"/>
                    </a>
                    <a>
                        <img src="https://www.minskmuseum.by/images/fb.png"/>
                    </a>
                    <a>
                        <img src="https://www.minskmuseum.by/images/yt.png"/>
                    </a>
                    <a>
                        <img src="https://www.minskmuseum.by/images/inst.png"/>
                    </a>
                </div>
                <h1 className="font-bold text-4xl text-red-500">МУЗЕЙ ИСТОРИИ ГОРОДА МИНСКА</h1>
                <div>
                    <p>Т. (029) 333 33 33</p>
                    <p>info@museum.by</p>
                </div>
            </div>
            <div className="max-w-[1450px] w-full">
                    <Menu/>
                <Outlet/>
            </div>
            <div className="w-full bg-[#E4E4E4] p-5 flex justify-between flex-wrap gap-2">
                <img src="https://www.minskmuseum.by/images/tem-ratusha1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-savicki1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-art1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-shemelev1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-loshica1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-kareta1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-arheolog1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-konka1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-misko1.png" width="101" height="101"/>
                <img src="https://www.minskmuseum.by/images/tem-rakovskaya1.png" width="101" height="101"/>
            </div>
            <div className="w-full bg-[#404040] p-5 text-center">
                <Menu/>
                    <div className="w-full gap-5 flex justify-center flex-wrap">
                        <img src="https://www.minskmuseum.by/images/gerb_by.png" alt="" width="100"/>
                        <img src="https://www.minskmuseum.by/gerb.png" alt="" width="100"/>
                        <img src="https://www.minskmuseum.by/images/year-kach.png" alt="" width="200"/>
                        <img src="https://www.minskmuseum.by/logo_afisha_relax.by_color.png" alt="" width="250"/>
                        <img src="https://www.kayak.com/news/wp-content/uploads/sites/19/2019/11/design_image_kayak_travel-guides_rectangle_orange_featured-on-kk-tg_250x100_20022x.png" alt="" width="300"/>
                    </div>
                <p className="text-white text-xl mt-5">г. Минск, пл. Свободы, 15 т. (017) 337 24 30 т./факс (017) 342 24 38 email: info@minskmuseum.by
                    <br/>
                    Музей истории города Минска @copyright</p>
            </div>
        </div>
    )
}