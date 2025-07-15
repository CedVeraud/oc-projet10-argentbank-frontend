import Styles from "./Hero.module.scss";

function Hero({ title, subtitles, text }) {
  return (
    <section className={Styles.hero}>
      <div className={Styles.hero_content}>
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p className={Styles.hero_subtitle} key={index}>
            {subtitle}
          </p>
        ))}

        <p className={Styles.hero_text}>{text}</p>
      </div>
    </section>
  )
}

export default Hero