import './Home.css';
import img from '../../assets/japanese-tea.jpg';

function Home() {
  return (
    <>
      <main className="main-showcase">
        <div>
          <div>
            <h2>Experience Japan Through Our Teas</h2>
            <p>
              Welcome to our world of Japanese tea excellence. Delve into the
              traditions and flavors of Japan with us.
            </p>
            <img src={img} alt="" style={{ maxWidth: '350px' }} />
          </div>
          <div className="product-showcase"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
