import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page-body">
      <Link className="link" to={`/slimes`}>
        <h1 className="home-button">Slimes</h1>
      </Link>
      <Link className="link" to={`/foods`}>
        <h1 className="home-button">Foods</h1>
      </Link>
      <Link className="link" to={`/toys`}>
        <h1 className="home-button">Toys</h1>
      </Link>
    </section>
  );
}

export default HomePage;
