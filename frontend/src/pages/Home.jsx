import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      {/* main heading */}
      <div
        className="bg-with-heading"
        style={{ margin: "20% auto", display: "block", width: "100%" }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            letterSpacing: "2px",
            padding: "10px",
            margin: "5px",
          }}
        >
          Welcome to <span style={{ color: "green" }}>Pakistan</span> Tourism
        </h1>
        <button
          className="btn btn-success"
          style={{
            fontSize: "12px",
            letterSpacing: "2px",
            fontFamily: "TimeRoman",
            margin: "auto",
            display: "block",
          }}
        >
          Learn More
        </button>
      </div>

      {/* carousel for 2nd bg */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ display: "block", width: "100%", margin: "auto" }}
        >
          <div className="carousel-item active">
            <img
              src="./image/bgimg1.jpg"
              className="d-block"
              alt="image1"
              style={{
                display: "block",
                width: "90%",
                margin: "10px auto",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg2.jpg"
              className="d-block"
              alt="image2"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg3.jpg"
              className="d-block"
              alt="image3"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg4.jpg"
              className="d-block"
              alt="image3"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg5.jpg"
              className="d-block"
              alt="image3"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg6.jpg"
              className="d-block"
              alt="image3"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./image/bgimg7.jpg"
              className="d-block"
              alt="image3"
              style={{
                display: "block",
                margin: "10px auto",
                width: "90%",
                height: "70vh",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* text-width-image */}
      <div className="container">
        <h1
          style={{
            color: "green",
            textAlign: "center",
            letterSpacing: "3px",
            textTransform: "uppercase",
            filter: "drop-shadow(0px 2px 4px green)",
            margin: " 10px auto",
            display: "block",
            width: "100%",
            fontSize: "3rem",
            fontFamily: "TimeRoman",
          }}
        >
          Places
        </h1>
        <div className="container-1 d-flex">
          <div className="img1">
            <img src="./image/img1.jpg" alt="" />
          </div>
          <div className="heading">
            <h1>Naran</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam
              beatae obcaecati repellendus eaque sequi esse, adipisci explicabo.
              Minima, eum magnam. Esse quod qui asperiores id a perferendis,
              animi placeat iste accusantium veniam nihil blanditiis, saepe
              alias quia ipsa error quae explicabo consequatur, vel odio? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis eius
              voluptatibus asperiores officia voluptatem, quisquam vitae quae ea
              tempore maxime, commodi quo iusto omnis quasi aliquid dicta
              provident in consequuntur aut dignissimos! Obcaecati, odio saepe
              maxime aut facilis alias totam eos tempore. Illum, laboriosam sed.
            </p>
            <button className="btn btn-outline-success">Read More</button>
          </div>
        </div>
        <div className="container-2 d-flex">
          <div className="heading">
            <h1>Boating</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam
              beatae obcaecati repellendus eaque sequi esse, adipisci explicabo.
              Minima, eum magnam. Esse quod qui asperiores id a perferendis,
              animi placeat iste accusantium veniam nihil blanditiis, saepe
              alias quia ipsa error quae explicabo consequatur, vel odio? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis eius
              voluptatibus asperiores officia voluptatem, quisquam vitae quae ea
              tempore maxime, commodi quo iusto omnis quasi aliquid dicta
              provident in consequuntur aut dignissimos! Obcaecati, odio saepe
              maxime aut facilis alias totam eos tempore. Illum, laboriosam sed.
            </p>
            <button className="btn btn-outline-success">Read More</button>
          </div>
          <div className="img2">
            <img src="./image/img2.jpg" alt="" />
          </div>
        </div>
        <div className="container-1 d-flex">
          <div className="img1">
            <img src="./image/img3.jpg" alt="" />
          </div>
          <div className="heading">
            <h1>AeroPlane Traveling</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam
              beatae obcaecati repellendus eaque sequi esse, adipisci explicabo.
              Minima, eum magnam. Esse quod qui asperiores id a perferendis,
              animi placeat iste accusantium veniam nihil blanditiis, saepe
              alias quia ipsa error quae explicabo consequatur, vel odio? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis eius
              voluptatibus asperiores officia voluptatem, quisquam vitae quae ea
              tempore maxime, commodi quo iusto omnis quasi aliquid dicta
              provident in consequuntur aut dignissimos! Obcaecati, odio saepe
              maxime aut facilis alias totam eos tempore. Illum, laboriosam sed.
            </p>
            <button className="btn btn-outline-success">Read More</button>
          </div>
        </div>
      </div>

      {/* Patners Us */}
      <div className="continer-Patners m-2 p-3">
        <h1
          style={{
            color: "green",
            textAlign: "center",
            letterSpacing: "3px",
            textTransform: "uppercase",
            filter: "drop-shadow(0px 2px -4px green)",
            margin: " 10px auto",
            display: "block",
            width: "100%",
            fontSize: "3rem",
            fontFamily: "TimeRoman",
          }}
        >
          Patners
        </h1>
        <div
          className="patners d-flex justify-content-center m-2 p-4"
          style={{ background: "rgb(225, 221, 221)", borderRadius: "10px" }}
        >
          <img
            src="./image/ptnr-1.jpeg"
            alt=""
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              mixBlendMode: "multiply",
            }}
          />
          <img
            src="./image/ptnr-2.png"
            alt=""
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              mixBlendMode: "multiply",
            }}
          />
          <img
            src="./image/ptnr-3.jpg"
            alt=""
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              mixBlendMode: "multiply",
            }}
          />
          <img
            src="./image/ptnr-4.png"
            alt=""
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              mixBlendMode: "multiply",
            }}
          />
          <img
            src="./image/ptnr-5.png"
            alt=""
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>
      {/* Prices and offers */}
      <div className="container-prices">
        <h1
          style={{
            color: "green",
            textAlign: "center",
            letterSpacing: "3px",
            textTransform: "uppercase",
            filter: "drop-shadow(0px 2px -4px green)",
            margin: " 10px auto",
            display: "block",
            width: "100%",
            fontSize: "3rem",
            fontFamily: "TimeRoman",
          }}
        >
          Prices && Offer
        </h1>
        <div className="prices d-flex justify-content-center align-items-center m-2 flex-wrap text-align-center">
          <div class="card m-2 text-center" style={{ width: "18rem" }}>
            <img
              src="./image/img1.jpg"
              class="card-img-top"
              alt="..."
              style={{
                width: "50%",
                display: "block",
                margin: " 10px auto ",
                padding: "5px",
                borderRadius: "10px",
                filter: "drop-shadow(0px 2px 4px #3432e3)",
              }}
            />
            <div class="card-body">
              <h5 class="card-title">Mountains</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>Successfull Sold Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success" style={{width:"55%"}}>55%</div>
                </div>
              </li>
              <li class="list-group-item">
                <h5>Left Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger" style={{width:"45%"}}>45%</div>
                </div>
              </li>
              <li class="list-group-item m-2">
                Price <button className="btn btn-info">299.9$</button>
              </li>
            </ul>
            </ul>
            <div class="card-body">
              <button class="card-link btn btn-warning">Add To Cart</button>
              <button class="card-link btn btn-success">Pay Now</button>
            </div>
          </div>
          <div class="card m-2 text-center" style={{ width: "18rem" }}>
            <img
              src="./image/img2.jpg"
              class="card-img-top"
              alt="..."
              style={{
                width: "50%",
                display: "block",
                margin: " 10px auto ",
                padding: "5px",
                borderRadius: "10px",
                filter: "drop-shadow(0px 2px 4px #3432e3)",
              }}
            />
            <div class="card-body">
              <h5 class="card-title">Boating</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>Successfull Sold Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success" style={{width:"65%"}}>65%</div>
                </div>
              </li>
              <li class="list-group-item">
                <h5>Left Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger" style={{width:"35%"}}>35%</div>
                </div>
              </li>
              <li class="list-group-item m-2">
                Price <button className="btn btn-info">99.9$</button>
              </li>
            </ul>
            </ul>
            <div class="card-body">
              <button class="card-link btn btn-warning">Add To Cart</button>
              <button class="card-link btn btn-success">Pay Now</button>
            </div>
          </div>
          <div class="card m-2 text-center" style={{ width: "18rem" }}>
            <img
              src="./image/img3.jpg"
              class="card-img-top"
              alt="..."
              style={{
                width: "55%",
                display: "block",
                margin: " 10px auto ",
                padding: "5px",
                borderRadius: "10px",
                filter: "drop-shadow(0px 2px 4px #3432e3)",
              }}
            />
            <div class="card-body">
              <h5 class="card-title">Sky Diving</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>Successfull Sold Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success" style={{width:"70%"}}>70%</div>
                </div>
              </li>
              <li class="list-group-item">
                <h5>Left Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger" style={{width:"30%"}}>30%</div>
                </div>
              </li>
              <li class="list-group-item m-2">
                Price <button className="btn btn-info">599.9$</button>
              </li>
            </ul>
            </ul>
            <div class="card-body">
              <button class="card-link btn btn-warning">Add To Cart</button>
              <button class="card-link btn btn-success">Pay Now</button>
            </div>
          </div>
          <div class="card m-2 text-center" style={{ width: "18rem" }}>
            <img
              src="./image/img2.jpg"
              class="card-img-top"
              alt="..."
              style={{
                width: "50%",
                display: "block",
                margin: " 10px auto ",
                padding: "5px",
                borderRadius: "10px",
                filter: "drop-shadow(0px 2px 4px #3432e3)",
              }}
            />
            <div class="card-body">
              <h5 class="card-title">Sea Diving</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>Successfull Sold Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success" style={{width:"75%"}}>75%</div>
                </div>
              </li>
              <li class="list-group-item">
                <h5>Left Slots</h5>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger" style={{width:"25%"}}>25%</div>
                </div>
              </li>
              <li class="list-group-item m-2">
                Price <button className="btn btn-info">199.9$</button>
              </li>
            </ul>
            <div class="card-body">
              <button class="card-link btn btn-warning">Add To Cart</button>
              <button class="card-link btn btn-success">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
