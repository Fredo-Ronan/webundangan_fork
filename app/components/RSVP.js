import Image from "next/image";

import fotoPrewed from "../../public/rsvp/rsvpimage.jpg";

export default function Rsvp() {
  return (
    <div className="h-auto lg:hidden relative md:hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={fotoPrewed}
          alt="Prewed"
          layout="fill"
          objectFit="cover"
          className="blur-sm brightness-105"
        />
      </div>
      <div className="bg-gradient-to-b from-white from-10% via-transparent via-40% to-pinkLighter to-95% h-auto w-full z-50 px-20 py-24 flex justify-center">
        <div className="">
          <div className="mb-10 text-center">
            <p className="text-gray-500 text-5xl">RSVP</p>
          </div>
          <div className="flex justify-center">
            <div className="h-96 w-80 rounded-3xl shadow-lg shadow-gray-900 bg-white bg-opacity-60 px-6 py-5">
              <div className="text-left text-black font-serif text-sm mt-6">
                <p>
                  Berikan konfirmasi kehadiran Anda kepada pasangan pengantin
                  melalui formulir berikut :
                </p>
              </div>
              <div className="mt-10">
                <form>
                  <div className="mb-5">
                    <p className="text-black font-serif text-base">Nama : </p>
                    <input type="text" placeholder="Nama Lengkap..." className="font-serif w-full px-2 text-black h-9 rounded-lg" required/>
                  </div>
                  <div className="mb-5">
                    <p className="text-black font-serif text-base">Jumlah Tamu : </p>
                    <input type="number" placeholder="Jumlah Tamu..." className="font-serif w-full px-2 text-black h-9 rounded-lg" required/>
                  </div>
                  <button className="w-20 bg-pinkLight h-7 rounded-lg font-serif" type="submit">Kirim</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
