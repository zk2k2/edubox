import * as React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5654184026c4462d7f910635338bfea71fc10f3cca1d479902fd7170cca2395d?apiKey=f0567170fbe140ca8ae93d451355cc9e&"
        alt="EduBox logo"
        className="logo"
      />
      <div className="header-divider" />
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Your home for instant <br /> code deployment, and more...
        </h1>
        <p className="hero-description fade-in-delayed">
          Welcome to EduBox, here we provide you with a platform to deploy
          Virtual Machines to run your code, run bash scripts, and more!
        </p>
        <a href="/Login">
          <button className="cta-button fade-in-delayed-2s ">
            <span className="cta-text">Get started</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e0f740e45ad4d502757752260195dab9c7bb7b057572a5c5b53530075cc265?apiKey=f0567170fbe140ca8ae93d451355cc9e&"
              alt="Right arrow icon"
              className="cta-icon"
            />
          </button>
        </a>
      </div>
      <div className="hero-image-container ">
        <img
          loading="lazy"
          src="images/welcome-image.png"
          alt="welcome"
          className="hero-image fade-in-delayed-2s"
        />
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main-content">
          <HeroSection />
        </main>
      </div>
      <style jsx>{`
        .container {
          background-color: #f9f9fa;
          display: flex;
          flex-direction: column;
          padding-bottom: 54px;
        }

        .header {
          background-color: #326de6;
          display: flex;
          justify-content: space-between;
          padding: 15px 48px;
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .header {
            flex-wrap: wrap;
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .logo {
          width: 189px;
          max-width: 100%;
          aspect-ratio: 4.17;
          object-fit: auto;
          object-position: center;
        }

        .header-divider {
          background-color: #326de6;
          border-radius: 50%;
          width: 29px;
          height: 29px;
          margin: auto 0;
        }

        .main-content {
          align-self: center;
          margin-top: 64px;
          max-width: 1269px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .main-content {
            margin-top: 40px;
            max-width: 100%;
          }
        }

        .hero-section {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .hero-section {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          font-weight: 600;
          line-height: normal;
          margin-left: 0;
          margin-top: 36px;
          padding: 0 20px;
          width: 50%;
        }

        @media (max-width: 991px) {
          .hero-content {
            margin-top: 40px;
            max-width: 100%;
            width: 100%;
          }
        }

        .hero-title {
          color: #124076;
          font: 58px Inter, sans-serif;
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 40px;
            max-width: 100%;
          }
        }

        .hero-description {
          color: #000;
          font: 400 26px Inter, sans-serif;
          margin-top: 61px;
          opacity: 0;
        }

        .cta-button {
          align-self: start;
          background-color: rgba(50, 109, 230, 1);
          border-radius: 10px;
          color: #fff;
          display: flex;
          font-size: 20px;
          gap: 15px;
          margin-top: 46px;
          padding: 13px 47px;
          opacity: 0;
        }

        .cta-button:hover {
          background-color: #0056b3;
        }

        .cta-text {
          flex-basis: auto;
          flex-grow: 1;
          font-family: Inter, sans-serif;
          margin: auto 0;
        }

        .cta-icon {
          width: 29px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
        }

        .hero-image-container {
          display: flex;
          flex-direction: column;
          line-height: normal;
          margin-left: 20px;
          width: 50%;
        }

        @media (max-width: 991px) {
          .hero-image-container {
            width: 100%;
          }
        }

        .hero-image {
          width: 100%;
          aspect-ratio: 0.95;
          flex-grow: 1;
          object-fit: auto;
          object-position: center;
          opacity: 0;
        }

        @media (max-width: 991px) {
          .hero-image {
            margin-top: 40px;
            max-width: 100%;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInDelayed {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        .fade-in-delayed {
          animation: fadeInDelayed 1s ease-in-out forwards;
          animation-delay: 1s;
        }

        .fade-in-delayed-2s {
          animation: fadeInDelayed 1s ease-in-out forwards;
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}

export default Home;
