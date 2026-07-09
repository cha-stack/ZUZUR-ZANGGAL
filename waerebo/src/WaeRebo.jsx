import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import background from "./assets/backgroud.png";
import mbaruniang from "./assets/mbaruniang.png";
import upacarapenti from "./assets/upacarapenti.png";
import masyarakat from "./assets/masyarakat.png";
import tariancaci from "./assets/tariancaci.png";
import tenun from "./assets/tenun.png";
import alam from "./assets/alam.png";
import wr1 from "./assets/wr1.jpg";
import wr2 from "./assets/wr2.jpg";
import wr3 from "./assets/wr3.jpg";
import wr4 from "./assets/wr4.jpg";
import wr5 from "./assets/wr5.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className="bg-black/20 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Pertanyaan — selalu keliatan */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <span className="text-amber-400 text-lg">{question.icon}</span>
          <h4 className="font-bold text-white text-sm md:text-base">
            {question.text}
          </h4>
        </div>
        <span className={`text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      {/* Jawaban — muncul dengan animasi smooth */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-0 text-gray-300 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function WaeReboPage() {

  // ========== AUTO DETECT BAHASA ==========
  const [lang, setLang] = React.useState(() => {
    const saved = localStorage.getItem('waerebo-lang');
    if (saved) return saved;
    const browserLang = navigator.language || '';
    if (browserLang.startsWith('en')) return 'en';
    return 'id';
  });
  // =======================================

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const galleryPrevRef = useRef(null);
  const galleryNextRef = useRef(null);
  const [openFaq, setOpenFaq] = React.useState(null); // null = semua tutup
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative font-sans text-white antialiased overflow-x-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay seluruh website */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06291d]/85 via-[#0A3D2E]/65 to-[#06291d]/80"></div>
      <div className="relative z-10">

      {/* NAVBAR */}
      <nav
          id="navbar"
          className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center text-white
            ${isScrolled 
              ? "bg-[#06291d]" 
              : "bg-transparent"
            }`}
        >
          <div className="text-xl font-bold tracking-widest">WAE REBO.</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-amber-400 transition-colors"
            >
              {lang === 'id' ? 'Home' : 'Home'}
            </a>
          </li>
          <li>
            <a href="#tentang" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Tentang' : 'About'}
            </a>
          </li>
          <li>
            <a href="#budaya" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Budaya' : 'Culture'}
            </a>
          </li>
          <li>
            <a href="#wisata" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Wisata' : 'Tourism'}
            </a>
          </li>
          <li>
            <a href="#galeri" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Galeri' : 'Gallery'}
            </a>
          </li>
          <li>
            <a
              href="#informasi"
              className="hover:text-amber-400 transition-colors"
            >
              {lang === 'id' ? 'Informasi' : 'Information'}
            </a>
          </li>
        </ul>

        {/* TOMBOL BAHASA + HAMBURGER */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const newLang = lang === 'id' ? 'en' : 'id';
              setLang(newLang);
              localStorage.setItem('waerebo-lang', newLang);
            }}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300"
          >
            <span>{lang === 'id' ? '🇮🇩' : '🇬🇧'}</span>
            <span>{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
        {menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-[#06291d] shadow-lg">
    <a href="#home" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Home' : 'Home'}</a>
    <a href="#tentang" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Tentang' : 'About'}</a>
    <a href="#budaya" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Budaya' : 'Culture'}</a>
    <a href="#wisata" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Wisata' : 'Tourism'}</a>
    <a href="#galeri" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Galeri' : 'Gallery'}</a>
    <a href="#informasi" onClick={()=>setMenuOpen(false)} className="block px-6 py-4">{lang === 'id' ? 'Informasi' : 'Information'}</a>
  </div>
)}
        </div>
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white"
      >
        <div className="z-10 px-4">
          <h2 className="subtitle fade-up text-lg md:text-xl font-normal tracking-wide mb-2 text-amber-500">
            {lang === 'id' ? 'Flores, Nusa Tenggara Timur' : 'Flores, East Nusa Tenggara'}
          </h2>
          <h1 className="title fade-up font-bold text-5xl md:text-8xl leading-tight mb-4">
            {lang === 'id' ? 'Desa di Atas' : 'Village Above'} <br />
            {lang === 'id' ? 'Awan' : 'the Clouds'}
          </h1>
          <p className="fade-up text-lg md:text-sm font-light text-gray-200">
            {lang === 'id' ? 'Menyatu dengan alam, menjaga warisan leluhur.' : 'Blending with nature, preserving ancestral heritage.'}
          </p>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-light uppercase tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 6 5 5 5-5" />
              <path d="m7 13 5 5 5-5" />
            </svg>
          </span>
          <div className="w-px h-7 bg-white/50"></div>
        </div>
      </section>

     {/*TENTANG SECTION*/}
<section
  id="tentang"
  className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#082B1D]/85 via-[#0A3D2E]/60 to-[#082B1D]/85"></div>
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Judul Section */}
            <div className="text-center mb-20">
              <p className="text-amber-400 tracking-[5px] uppercase text-sm mb-3">
                {lang === 'id' ? 'Tentang' : 'About'}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {lang === 'id' ? 'Desa Adat Wae Rebo' : 'Wae Rebo Traditional Village'}
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-20">
              {/* --- BAGIAN 1: Teks Kiri, Foto Kanan --- */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 text-gray-200">
                  <h3 className="text-3xl font-bold text-amber-400 mb-6">
                    {lang === 'id' ? 'Sejarah Singkat Wae Rebo' : 'Brief History of Wae Rebo'}
                  </h3>
                  <p className="leading-8 text-justify">
                    {lang === 'id' 
                      ? 'Wae Rebo merupakan desa adat yang berada di Kabupaten Manggarai, Nusa Tenggara Timur. Desa ini telah dihuni secara turun-temurun selama ratusan tahun dan dikenal sebagai salah satu desa adat yang masih mempertahankan budaya, tradisi, serta bentuk rumah adatnya hingga saat ini.'
                      : 'Wae Rebo is a traditional village located in Manggarai Regency, East Nusa Tenggara. This village has been inhabited for generations over hundreds of years and is known as one of the traditional villages that still maintains its culture, traditions, and traditional house architecture to this day.'
                    }
                    <br />
                    <br />
                    {lang === 'id' 
                      ? 'Berdasarkan cerita masyarakat setempat, desa ini didirikan oleh seorang leluhur bernama '
                      : 'According to local stories, the village was founded by an ancestor named '
                    }
                    <strong>Empu Maro</strong>
                    {lang === 'id'
                      ? '. Beliau dipercaya datang dari arah barat Pulau Flores sebelum akhirnya menetap di kawasan Wae Rebo bersama keluarganya. Kisah tersebut masih diwariskan dari generasi ke generasi sebagai bagian dari sejarah desa.'
                      : '. He is believed to have come from the western part of Flores Island before finally settling in the Wae Rebo area with his family. This story continues to be passed down from generation to generation as part of the village\'s history.'
                    }
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={alam}
                    alt="Pemandangan Alam Wae Rebo"
                    className="w-full h-[350px] lg:h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
                  />
                </div>
              </div>

              {/* --- BAGIAN 2: Foto Kiri, Teks Kanan --- */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-1 lg:order-1 grid grid-cols-2 gap-4">
                  <img
                    src={tariancaci}
                    alt="Tarian Caci"
                    className="w-full h-[250px] lg:h-[350px] object-cover rounded-2xl shadow-xl hover:scale-[1.03] transition duration-500"
                  />
                  <img
                    src={upacarapenti}
                    alt="Upacara Penti"
                    className="w-full h-[250px] lg:h-[350px] object-cover rounded-2xl shadow-xl hover:scale-[1.03] transition duration-500"
                  />
                </div>
                <div className="order-2 lg:order-2 text-gray-200 lg:pl-8">
                  <h3 className="text-3xl font-bold text-amber-400 mb-6">
                    {lang === 'id' ? 'Asal Nama Wae Rebo' : 'Origin of the Name Wae Rebo'}
                  </h3>
                  <p className="leading-8 text-justify">
                    {lang === 'id' 
                      ? 'Nama '
                      : 'The name '
                    }
                    <strong>Wae Rebo</strong>
                    {lang === 'id'
                      ? ' berasal dari bahasa Manggarai. Kata '
                      : ' comes from the Manggarai language. The word '
                    }
                    <strong>"Wae"</strong>
                    {lang === 'id'
                      ? ' berarti air atau mata air, sedangkan '
                      : ' means water or spring, while '
                    }
                    <strong>"Rebo"</strong>
                    {lang === 'id'
                      ? ' merupakan nama wilayah tempat desa ini berada.'
                      : ' is the name of the area where the village is located.'
                    }
                    <br />
                    <br />
                    {lang === 'id'
                      ? 'Mata air memiliki peran penting bagi kehidupan masyarakat Wae Rebo. Selain menjadi sumber kebutuhan sehari-hari, keberadaannya juga melambangkan hubungan yang erat antara masyarakat dengan alam. Nilai tersebut menjadi salah satu alasan mengapa budaya dan lingkungan di Wae Rebo tetap terjaga hingga sekarang.'
                      : 'Spring water plays a vital role in the lives of the Wae Rebo community. Besides being a source of daily needs, its existence also symbolizes the close relationship between the community and nature. This value is one of the reasons why the culture and environment in Wae Rebo remain well-preserved today.'
                    }
                  </p>
                </div>
              </div>

              {/* --- BAGIAN 3: Teks Kiri (Penghargaan), Foto Kanan --- */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 text-gray-200">
                  <h3 className="text-3xl font-bold text-amber-400 mb-2">
                    {lang === 'id' ? 'Penghargaan' : 'Awards'}
                  </h3>
                  <p className="mb-6 text-gray-300">
                    {lang === 'id' 
                      ? 'Pengakuan dan penghargaan yang telah diterima oleh Kampung Adat Wae Rebo:'
                      : 'Recognition and awards received by Wae Rebo Traditional Village:'
                    }
                  </p>
                  
                  {/* List Penghargaan */}
                  <div className="flex flex-col gap-4">
                    {/* Award 1 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-amber-500/20 text-amber-500 font-bold text-sm border border-amber-500/30">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg leading-tight">
                            {lang === 'id' ? 'UNESCO Asia-Pacific Heritage Award' : 'UNESCO Asia-Pacific Heritage Award'}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            {lang === 'id' ? 'Kementerian Pariwisata RI' : 'Ministry of Tourism, Indonesia'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Award 2 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-gray-400/20 text-gray-300 font-bold text-sm border border-gray-400/30">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg leading-tight">
                            {lang === 'id' ? 'Juara Anugerah Desa Wisata Indonesia (ADWI) 2021' : 'Winner of Indonesian Tourism Village Award (ADWI) 2021'}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">UNESCO</p>
                        </div>
                      </div>
                    </div>

                    {/* Award 3 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-orange-700/20 text-orange-400 font-bold text-sm border border-orange-700/30">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg leading-tight">
                            {lang === 'id' ? 'ASEAN Community Based Tourism Award (2023)' : 'ASEAN Community Based Tourism Award (2023)'}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">UNWTO</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Gelar */}
                  <div className="mt-8 inline-flex items-center justify-center w-full lg:w-auto bg-amber-500/10 border border-amber-500/40 text-amber-400 px-6 py-3.5 rounded-xl font-semibold hover:bg-amber-500/20 transition-colors">
                    {lang === 'id' 
                      ? 'Dinobatkan sebagai Desa Tercantik ke-2 di Dunia'
                      : 'Awarded as the 2nd Most Beautiful Village in the World'
                    }
                  </div>
                </div>

                {/* Bagian Foto Kanan */}
                <div className="order-1 lg:order-2">
                  <img
                    src={mbaruniang}
                    alt="Mbaru Niang Wae Rebo"
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500 border border-white/5"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </section>

 {/* BUDAYA SECTION */}
<section
  id="budaya"
  className="bg-black/10 text-white pt-20 pb-28 px-6 md:px-12 lg:px-24"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-12">
      {lang === 'id' ? 'Kekayaan Budaya' : 'Cultural Heritage'}
    </h2>

<Swiper
  modules={[Navigation, Autoplay]}
  navigation
  loop
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  className="budayaSwiper"
>
      {/* Card 1 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={mbaruniang}
            alt="Mbaru Niang"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Mbaru Niang' : 'Mbaru Niang'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id' 
                ? 'Rumah adat berbentuk kerucut dengan lima tingkat yang menjadi simbol kehidupan masyarakat Wae Rebo.'
                : 'A cone-shaped traditional house with five levels that symbolizes the life of the Wae Rebo community.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 2 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img src={upacarapenti} alt="Tradisi" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Tradisi & Ritual' : 'Traditions & Rituals'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id'
                ? 'Upacara Penti menjadi bentuk rasa syukur masyarakat atas panen dan pergantian tahun adat.'
                : 'The Penti ceremony is an expression of gratitude for harvest and the traditional new year celebration.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 3 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img src={masyarakat} alt="Masyarakat" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Kehidupan Masyarakat' : 'Community Life'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id'
                ? 'Mayoritas masyarakat hidup dari kopi, vanili, dan tenun khas Manggarai.'
                : 'Most people make a living from coffee, vanilla, and traditional Manggarai weaving.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 4 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img src={tariancaci} alt="Tarian Caci" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Tarian Caci' : 'Caci Dance'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id'
                ? 'Tarian perang tradisional yang melambangkan keberanian dan persaudaraan.'
                : 'A traditional war dance that symbolizes courage and brotherhood.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 5 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img src={tenun} alt="Tenun" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Kain Tenun' : 'Woven Fabric'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id'
                ? 'Kain tenun khas Manggarai dibuat secara tradisional dengan motif penuh makna.'
                : 'Traditional Manggarai woven fabric made with meaningful motifs using traditional methods.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 6 */}
      <SwiperSlide>
        <div className="group bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <img src={alam} alt="Panorama Alam" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              {lang === 'id' ? 'Panorama Alam' : 'Natural Panorama'}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === 'id'
                ? 'Dikelilingi pegunungan hijau dan kabut yang menjadi daya tarik utama Desa Wae Rebo.'
                : 'Surrounded by green mountains and mist, making it the main attraction of Wae Rebo Village.'
              }
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

     {/* WISATA SECTION */}
<section
  id="wisata"
  className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-gradient-to-b from-[#18230F] via-[#18230F] to-[#1a2510]"
>
  <div className="text-center mb-16">
    <h2 className="reveal text-3xl md:text-4xl font-bold text-white mb-4">
      {lang === 'id' ? 'Wisata Alam & Edukasi' : 'Nature & Educational Tourism'}
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
      {lang === 'id'
        ? 'Jelajahi keindahan alam Wae Rebo, nikmati budaya yang masih terjaga, serta rasakan pengalaman menginap di desa adat yang berada di atas awan.'
        : 'Explore the natural beauty of Wae Rebo, enjoy its well-preserved culture, and experience staying in a traditional village above the clouds.'
      }
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="reveal-left group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 hover:bg-white/10 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)]">

      <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
        </svg>

      </div>

      <h3 className="text-2xl font-bold text-amber-500 mb-4">
        {lang === 'id' ? 'Trekking' : 'Trekking'}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {lang === 'id'
          ? 'Perjalanan mendaki selama 2-3 jam melewati hutan tropis, sungai, jembatan bambu, dan panorama pegunungan hingga tiba di Desa Wae Rebo.'
          : 'A 2-3 hour trek through tropical forests, rivers, bamboo bridges, and mountain panoramas to reach Wae Rebo Village.'
        }
      </p>

    </div>

    {/* CARD 2 */}
    <div className="reveal-up group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 hover:bg-white/10 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)]">

      <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
          <path d="M6 2v2" />
        </svg>

      </div>

      <h3 className="text-2xl font-bold text-amber-500 mb-4">
        {lang === 'id' ? 'Kopi Wae Rebo' : 'Wae Rebo Coffee'}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {lang === 'id'
          ? 'Nikmati kopi Arabika dan Robusta yang dipetik langsung oleh masyarakat, kemudian diolah menggunakan metode tradisional khas Manggarai.'
          : 'Enjoy Arabica and Robusta coffee picked directly by the community and processed using traditional Manggarai methods.'
        }
      </p>

    </div>

    {/* CARD 3 */}
    <div className="reveal-right group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 hover:bg-white/10 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)]">

      <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M10 22v-6.57" />
          <path d="M12 11h.01" />
          <path d="M12 7h.01" />
          <path d="M14 15.43V22" />
          <path d="M15 16a5 5 0 0 0-6 0" />
          <path d="M16 11h.01" />
          <path d="M16 7h.01" />
          <path d="M8 11h.01" />
          <path d="M8 7h.01" />
          <rect x="4" y="2" width="16" height="20" rx="2" />
        </svg>

      </div>

      <h3 className="text-2xl font-bold text-amber-500 mb-4">
        {lang === 'id' ? 'Menginap di Mbaru Niang' : 'Stay at Mbaru Niang'}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {lang === 'id'
          ? 'Rasakan pengalaman bermalam di rumah adat Mbaru Niang, ditemani kehangatan tungku api serta keramahan masyarakat lokal.'
          : 'Experience staying overnight in a Mbaru Niang traditional house, accompanied by the warmth of a fireplace and local hospitality.'
        }
      </p>

    </div>

  </div>
</section>

{/* GALERI SECTION */}
<section id="galeri" className="py-24 px-6 md:px-12 lg:px-24 bg-[#1a2510] overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-12 text-white">
      {lang === 'id' ? 'Galeri' : 'Gallery'}
    </h2>

    <Swiper
      modules={[Autoplay, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      watchSlidesProgress={true}
      speed={500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="gallerySwiper"
    >
      <SwiperSlide>
        <img src={mbaruniang} className="w-full h-[380px] object-cover" alt="Mbaru Niang" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={upacarapenti} className="w-full h-[380px] object-cover" alt="Upacara Penti" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={masyarakat} className="w-full h-[380px] object-cover" alt="Masyarakat" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tariancaci} className="w-full h-[380px] object-cover" alt="Tarian Caci" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tenun} className="w-full h-[380px] object-cover" alt="Tenun" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wr1} className="w-full h-[380px] object-cover" alt="wr1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wr2} className="w-full h-[380px] object-cover" alt="wr2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wr3} className="w-full h-[380px] object-cover" alt="wr3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wr4} className="w-full h-[380px] object-cover" alt="wr4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={wr5} className="w-full h-[380px] object-cover" alt="wr5" />
      </SwiperSlide>
    </Swiper>

    {/* Keterangan swipe */}
    <div className="flex items-center justify-center gap-3 mt-8 text-gray-400">
      <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
      <p className="text-sm tracking-wide uppercase">
        {lang === 'id' ? 'Geser untuk melihat galeri' : 'Swipe to see the gallery'}
      </p>
    </div>
  </div>
</section>


   {/* ============================================================
    INFORMASI PENTING — Layout baru: FAQ di atas (lebar penuh),
    Lokasi + Kontak/Reservasi di bawah (2 kolom)
    Style: transparan, glassmorphism, ngikutin background image
    ============================================================ */}
<section
  id="informasi"
  className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
>
  {/* Background overlay biar teks kebaca — pake transparan, bukan solid */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#06291d]/70 via-[#0A3D2E]/50 to-[#06291d]/70"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Judul Section */}
    <div className="text-center mb-14">

      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {lang === 'id' ? 'Informasi Penting' : 'Important Information'}
      </h2>
      <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>
    </div>

    {/* ===== FAQ ACCORDION — LEBAR PENUH DI ATAS ===== */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-6 hover:border-amber-500/50 transition-all">
      <div className="flex items-center justify-center gap-3 mb-6">
        <h3 className="text-xl font-bold text-white">
          {lang === 'id' ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions (FAQ)'}
        </h3>
      </div>

    <div className="flex flex-col gap-3">
  {/* FAQ Item 1 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apakah ada listrik di Wae Rebo?' : 'Is there electricity in Wae Rebo?'
    }}
    answer={
      lang === 'id'
        ? 'Ya. Listrik berasal dari panel surya dan penggunaannya terbatas, umumnya tersedia pada malam hari sekitar pukul 18.00–22.00.'
        : 'Yes. Electricity comes from solar panels and is generally available from 6 PM to 10 PM.'
    }
    isOpen={openFaq === 0}
    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
  />

  {/* FAQ Item 2 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apakah ada sinyal atau internet?' : 'Is there phone signal or internet?'
    }}
    answer={
      lang === 'id'
        ? 'Sinyal tersedia di beberapa titik, tetapi tidak stabil. Akses internet sangat terbatas.'
        : 'Phone signal is available in some areas but is unstable. Internet access is very limited.'
    }
    isOpen={openFaq === 1}
    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
  />

  {/* FAQ Item 3 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Berapa lama trekking menuju Wae Rebo?' : 'How long is the trek to Wae Rebo?'
    }}
    answer={
      lang === 'id'
        ? 'Perjalanan trekking dari Desa Denge menuju Wae Rebo memakan waktu sekitar 2–3 jam.'
        : 'The trek from Denge Village to Wae Rebo takes approximately 2–3 hours.'
    }
    isOpen={openFaq === 2}
    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
  />

  {/* FAQ Item 4 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Bagaimana suhu udara di Wae Rebo?' : 'What is the temperature like?'
    }}
    answer={
      lang === 'id'
        ? 'Udara cukup sejuk hingga dingin, terutama malam hari. Disarankan membawa jaket hangat.'
        : 'The weather is cool, especially at night. Bringing a warm jacket is recommended.'
    }
    isOpen={openFaq === 3}
    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
  />

  {/* FAQ Item 5 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apakah harus menggunakan pemandu lokal?' : 'Do I need a local guide?'
    }}
    answer={
      lang === 'id'
        ? 'Sangat disarankan menggunakan pemandu lokal agar perjalanan lebih aman dan mendapatkan informasi mengenai budaya Wae Rebo.'
        : 'Using a local guide is highly recommended for safety and cultural insights.'
    }
    isOpen={openFaq === 4}
    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
  />

  {/* FAQ Item 6 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apakah bisa menginap di Wae Rebo?' : 'Can visitors stay overnight?'
    }}
    answer={
      lang === 'id'
        ? 'Bisa. Pengunjung dapat menginap di rumah adat Mbaru Niang dengan fasilitas yang sederhana.'
        : 'Yes. Visitors can stay overnight in the traditional Mbaru Niang houses with basic facilities.'
    }
    isOpen={openFaq === 5}
    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
  />

  {/* FAQ Item 7 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apa yang sebaiknya dibawa saat berkunjung?' : 'What should I bring?'
    }}
    answer={
      lang === 'id'
        ? 'Bawalah jaket, sepatu trekking, jas hujan, air minum, obat pribadi, dan pakaian yang nyaman.'
        : 'Bring a jacket, trekking shoes, a raincoat, drinking water, personal medicine, and comfortable clothing.'
    }
    isOpen={openFaq === 6}
    onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
  />

  {/* FAQ Item 8 */}
  <FaqItem
    question={{
      text: lang === 'id' ? 'Apa aturan yang harus dipatuhi saat berkunjung?' : 'Are there any rules for visitors?'
    }}
    answer={
      lang === 'id'
        ? 'Hormati adat dan budaya setempat, jaga kebersihan, jangan merusak lingkungan, serta ikuti arahan pemandu dan masyarakat.'
        : 'Respect local customs, keep the environment clean, avoid damaging nature, and follow the guide’s instructions.'
    }
    isOpen={openFaq === 7}
    onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
  />
      </div>
    </div>

    {/* ===== BAGIAN BAWAH: 2 KOLOM (LOKASI + KONTAK) ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* LOKASI — KIRI */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-3 hover:border-amber-500/50 transition-all flex flex-col">
        <div className="flex items justify-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-white text-center">
            {lang === 'id' ? 'Lokasi' : 'Location'}
          </h3>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {lang === 'id'
            ? 'Satar Lenda, Kecamatan Satar Mese Barat, Kabupaten Manggarai, Nusa Tenggara Timur.'
            : 'Satar Lenda, West Satar Mese District, Manggarai Regency, East Nusa Tenggara.'}
        </p>

        {/* Rute perjalanan */}
        <div className="bg-black/30 rounded-xl p-4 mb-4 border border-white/5">
          <div className="flex items-center gap-2 text-sm text-gray-300 flex-wrap">
            <span className="text-amber-400">✈️</span>
            <span>Labuan Bajo</span>
            <span className="text-gray-500">→</span>
            <span className="text-amber-400">🚗</span>
            <span>Denge</span>
            <span className="text-gray-500">→</span>
            <span className="text-amber-400">🥾</span>
            <span className="font-semibold text-white">Trekking</span>
          </div>
        </div>

        <a
          href="https://www.google.com/maps?q=Labuan+Bajo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300 hover:underline transition-all mt-auto"
        >
          {lang === 'id' ? 'Lihat rute di Google Maps' : 'View route on Google Maps'}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* KONTAK & RESERVASI — KANAN */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-3 hover:border-amber-500/50 transition-all flex flex-col">
        <div className="flex items justify-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-white text-center">
            {lang === 'id' ? 'Kontak & Reservasi' : 'Contact & Reservation'}
          </h3>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-3 text-left">
          {lang === 'id'
            ? 'Untuk mengunjungi Wae Rebo, disarankan menyewa pemandu lokal dari Desa Denge.'
            : 'To visit Wae Rebo, it is recommended to hire a local guide from Denge Village.'}
        </p>

        {/* Card Pemandu */}
        <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex items-center gap-4 flex-wrap">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xl border border-amber-500/30 flex-shrink-0">
            👤
          </div>
          <div className="flex-1 min-w-[140px]">
            <p className="text-white font-semibold text-sm">
              {lang === 'id' ? 'Pemandu Lokal Denge' : 'Local Guide Denge'}
            </p>
            <p className="text-gray-400 text-xs">
              {lang === 'id' ? 'Berpengalaman & ramah' : 'Experienced & friendly'}
            </p>
          </div>
          <a
            href="https://wa.me/6288214225876?text=Halo,%20saya%20tertarik%20untuk%20berkunjung%20ke%20Wae%20Rebo.%20Boleh%20minta%20informasinya?"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all text-sm text-center shadow-md hover:shadow-lg"
          >
            {lang === 'id' ? '💬 Hubungi Sekarang' : '💬 Contact Now'}
          </a>
        </div>

        {/* Catatan Reservasi */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 border-t border-white/5 pt-4">
          <span>📌</span>
          <span>
            {lang === 'id' 
              ? 'Reservasi sebaiknya dilakukan H-1' 
              : 'Reservation is recommended 1 day in advance'}
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-[#081d15] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {lang === 'id' ? 'Desa Adat Wae Rebo' : 'Wae Rebo Traditional Village'}
              </h3>

              <p className="mt-3 text-gray-400 leading-7 max-w-md">
                {lang === 'id'
                  ? 'Website ini dibuat sebagai media informasi mengenai Desa Adat Wae Rebo agar masyarakat dapat mengenal budaya, sejarah, serta keindahan alamnya dengan lebih mudah.'
                  : 'This website was created as an information medium about Wae Rebo Traditional Village so that people can learn about its culture, history, and natural beauty more easily.'
                }
              </p>

            </div>
          <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {lang === 'id' ? 'Sumber Informasi' : 'Information Sources'}
              </h4>
              <a
              href="https://www.waereboofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
              >
              {lang === 'id' ? 'Website Resmi Wae Rebo' : 'Official Wae Rebo Website'} ↗
              </a>
          </div>
        </div>
            <div className="mt-10 pt-5 border-t border-white/10 text-center text-gray-500 text-sm">
              © 2026 Wae Rebo Explorer
            </div>
          </div>
        </footer>
    </div>
  </div>
  );
}