import './Home.css';

function Home() {
  return (
    <>
      <main className="main-showcase">
        <div>
          <div>
            <h2>Your Tech Haven - Elevate Your Electronics Experience</h2>
            <p data-testid="welcome-paragraph">
              Welcome to <b>Fake Electronics Shop</b> – your premier electronics
              destination! We're your go-to source for cutting-edge tech,
              offering everything from smartphones to gaming consoles. Our
              commitment to top brands and superior service ensures you stay
              connected and ahead in the world of electronics. Welcome to the
              future of tech shopping; welcome to Fake Electronics Shop!
            </p>
          </div>
          <div className="product-showcase"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
