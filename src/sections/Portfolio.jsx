export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Our Products</h2>

      <div className="card-container">

        <div className="card">
          <h3>LexStudy</h3>

          <p>
            LLB exam preparation platform with syllabus, question banks, answers,
            previous papers, solved papers and AIBE exam preparation resources.
          </p>

          <button className="btn">
            Learn More
          </button>
        </div>

        <div className="card">
          <h3>LexPetition</h3>

          <p>
            Smart legal drafting platform for petitions and legal documents.
          </p>

          <button className="btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}