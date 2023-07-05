import '../Hero/Hero.css'
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Bu Sezonda En iyisini bul 🔥</span>
        <h2>Herkese Ozel Koleksiyon</h2>
        <a href="/">Simdi Kesfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="sa" className='hero-image'/>
      </div>
    </section>
  );
};

export default Hero;
