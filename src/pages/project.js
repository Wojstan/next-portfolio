import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Quote from "../Components/Quote";

import { server } from "../config/index";

project.getInitialProps = async ({ query }) => {
  const getResponse = await fetch(`${server}/api/projects/${query.id}`);
  const data = await getResponse.json();

  return { projectData: data }
}

export default function project({ projectData }) {

  return (
    <div className="project-container">
      <Header />

      <main className={projectData.cssName}>
        <header>
          <section className="video">
            <video loop muted autoPlay playsInline src={projectData.video}></video>
          </section>
        </header>

        <article>
          <h1>
            Parę słów o <strong>działaniu</strong>...
          </h1>
          <p>{projectData.about}</p>

          <ul className="important-quotes">
            {projectData.quotes.map((row) => (
              <Quote
                key={row.id}
                id={row.id}
                title={row.name}
                memo={row.memo}
              />
            ))}
          </ul>

          <h2>
            Zastosowane <strong>technologie</strong>
          </h2>
          <ul className="technologies">
            {projectData.technologies.map((row, i) => (
              <li key={i}>
                <img src={row} alt="" />
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
}
