// import sinta1 from "../../public/sinta.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import GroomCarousel from "./items/GroomCarousel";
import FotoGery from "../../public/Image Prewed Alone/Gery.jpg";
import FotoSinta from "../../public/Image Prewed Alone/Sinta.jpg";

import Image from "next/image";

export default function Pengantin() {
  const shadowStyle = {
    boxShadow: "0px 3px 15px 4px rgba(0,0,0,0.3)"
  };

  return (
    <div className="h-auto bg-pinkLighter flex justify-center p-10 lg:hidden md:hidden">
      <div>
        <div className="px-10">
          <div className="flex justify-center mb-5">
            <p className="text-white font-dancing text-4xl">The Bride</p>
          </div>
          <div className="h-96 w-72 flex justify-center rounded-full border-4 border-cream overflow-hidden" style={shadowStyle}>
            {/* <BrideCarousel /> */}
            <div className="h-auto overflow-hidden">
              <Image
                src={FotoSinta}
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
          <div className="flex justify-center py-7 px-3 text-white">
            <div className="text-center">
              <p className="font-dancing  text-3xl">
                Kezia Sinta Sharon Ngongoloy
              </p>
              <p className="font-serif  text-sm mt-6">
                Putri Pertama Bapak Revi Ngongoloy & Ibu Monita Sarah
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-36 h-9 rounded-md border-4 flex justify-center items-center border-white bg-transparent" style={shadowStyle}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    style={{ color: "white" }}
                    className="mr-1"
                  />
                  <a
                    className="font-serif  text-sm"
                    href="https://www.instagram.com/keziasintasn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  >
                    @keziasintasn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 mt-20">
          <div className="flex justify-center mb-5">
            <p className="text-white font-dancing text-4xl">The Groom</p>
          </div>
          <div className="h-96 w-72 flex justify-center rounded-full border-4 border-cream overflow-hidden" style={shadowStyle}>
            {/* <GroomCarousel /> */}
            <div className="h-auto overflow-hidden">
              <Image
                src={FotoGery}
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
          <div className="flex justify-center py-7 px-3 text-white">
            <div className="text-center">
              <p className="font-dancing  text-3xl">Garry Yonatan Pangalila</p>
              <p className="font-serif  text-sm mt-6">
                Putra Ketiga Bapak Boyke Pangalila & Ibu Tinneke Keintjem
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-36 h-9 rounded-md border-4 flex justify-center items-center border-white bg-transparent" style={shadowStyle}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    style={{ color: "white" }}
                    className="mr-1"
                  />
                  <a
                    className="font-serif  text-sm"
                    href="https://www.instagram.com/garrypangalila?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  >
                    @garrypangalila
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
