import "../styles/Articles.css";

export default function Articles({ lang }: any) {
  const t = {
    pt: { title: "Artigos", loading: "Em breve..." },
    en: { title: "Articles", loading: "Coming soon..." }
  };
  const content = lang === "en" ? t.en : t.pt;

  return (
    <section className="articles-page" id="articles">
      <h1 className="articles-title">{content.title}</h1>
      <div className="articles-content">
        <p className="loading-text">{content.loading}</p>
      </div>
    </section>
  );
}