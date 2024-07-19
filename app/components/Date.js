import Image from "next/image";

import foto from "../../public/PageWedding/Sinta&Gery.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Date() {
  return (
    <div className="h-auto bg-gradient-to-b from-pinkLighter to-white md:hidden lg:hidden px-6 py-8">
      <div className="flex justify-center">
        <div>
          <div className="mb-10 flex justify-center">
            <p className="font-dancing text-4xl">Wedding Event</p>
          </div>
          <div className="h-auto bg-cream rounded-xl shadow-lg shadow-black">
            <div className="relative h-80 w-full bg-white rounded-t-xl overflow-hidden">
              <Image
                src={foto}
                layout="responsive"
                objectFit="cover"
                quality={100}
                alt="foto Pengantin"
                className="z-10 brightness-50 object-bottom"
              />
            </div>

            <div className="flex text-black">
              <div className="h-auto bg-pinkLighter w-1/4 flex rounded-bl-xl items-center justify-center">
                <div className="-rotate-90 flex gap-x-3">
                  <p className="text-4xl text-white">Save</p>
                  <p className="text-4xl text-white">The</p>
                  <p className="text-4xl text-white">Date</p>
                </div>
              </div>
              <div className="py-3 w-3/4">
                <div className="flex justify-center">
                  <div className="flex h-20 items-center">
                    <div className="">
                      <p className="text-5xl">07</p>
                    </div>
                    <div className="ml-4 text-left">
                      <p>Sabtu</p>
                      <p>September</p>
                      <p>2024</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="h-auto w-4/5">
                    <hr className="border-black" />
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  <p className="font-serif text-lg font-medium">Pemberkatan</p>
                </div>
                <div className="flex px-6">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      size="md"
                      className="bg-white"
                    />
                  </div>
                  <div className="text-center ml-2">
                    <p className="font-serif text-base">08:00-10:00</p>
                  </div>
                </div>
                <div className="py-2 px-6">
                  <p className="text-sm font-serif">
                    Gereja GPIB Sumber Kasih Bontang
                  </p>
                  <p className="text-xs font-serif">
                    Jl. Alexander RT 10 Kelurahan Brebas Tengah Kecamatan
                    Selatan, Berbas Tengah, Kec. Bontang Sel., Kota Bontang,
                    Kalimantan Timur 75325
                  </p>
                </div>
                <div className="py-2 px-6 flex justify-center">
                  <div className="w-24 h-8 bg-pinkLight border-2 border-white flex justify-center rounded-full items-center shadow-md shadow-black">
                    <a
                      className="text-white font-serif text-sm"
                      href="https://maps.app.goo.gl/kEQQ3y9p3ckhPNyd7"
                    >
                      Buka Maps
                    </a>
                  </div>
                </div>
                <div className="flex justify-center py-2">
                  <div className="h-auto w-4/5">
                    <hr className="border-black" />
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  <p className="font-serif text-lg font-medium">Resepsi</p>
                </div>
                <div className="flex px-6">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      size="md"
                      className="bg-white"
                    />
                  </div>
                  <div className="text-center ml-2">
                    <p className="font-serif text-base">10:00-Selesai</p>
                  </div>
                </div>
                <div className="py-2 px-6">
                  <p className="text-sm font-serif">
                    Gereja GPIB Sumber Kasih Bontang
                  </p>
                  <p className="text-xs font-serif">
                    Jl. Alexander RT 10 Kelurahan Brebas Tengah Kecamatan
                    Selatan, Berbas Tengah, Kec. Bontang Sel., Kota Bontang,
                    Kalimantan Timur 75325
                  </p>
                </div>
                <div className="py-2 px-6 flex justify-center">
                  <div className="w-24 h-8 bg-pinkLight border-2 border-white flex justify-center rounded-full items-center shadow-md shadow-black">
                    <a
                      className="text-white font-serif text-sm"
                      href="https://maps.app.goo.gl/kEQQ3y9p3ckhPNyd7"
                    >
                      Buka Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
