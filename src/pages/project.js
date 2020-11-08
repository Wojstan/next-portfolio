import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Quote from "../Components/Quote";

project.getInitialProps = async ({ query }) => {
  return { id: query.id };
}

export default function project({ id }) {
  const [projectData, setProjectData] = useState({ quotes: [], technologies: [] });

  useEffect(() => {
    const fetchData = async () => {
      const getResponse = await fetch(`/api/projects/${id}`);
      const data = await getResponse.json();
      setProjectData(data);
    }
    fetchData();
  }, [])

  return (
    <div className="project-container">
      <Header />

      <main className={projectData.cssName}>
        <header>
          <section className="video">
            <video loop muted autoPlay src={projectData.video}></video>
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
