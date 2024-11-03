// import Header from "./components/header";
// import  Footer  from "./components/footer";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <div className="banner">
        <div className="banner_right">
          <h2>PROJECT</h2>
          <h3>Lorum</h3>
          <Image
            src={"/arrow-2-left.png"}
            alt="Arrows"
            width={24}
            height={24}
            className="arrow"
          />
          <Image
            src={"/arrow-2-right.png"}
            alt="Arrows"
            width={24}
            height={24}
            className="arrow"
          />
          <Image
            src={"/slide-numbers.png"}
            alt="Slide"
            width={142}
            height={52}
            className="Slide"
          />
        </div>
        <div className="banner_left">
          <Image
            src={"/banner_back.jpg"}
            alt="banner image"
            width={770}
            height={829}
            className="banner-image"
          />
          <button className="buttons">
            {" "}
            View Project{" "}
            <Image
              src={"/arrow-banner.png"}
              alt="Arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div className="About-us">
        <div className="sec-left">
          <div className="img1">
            <Image
              src={"/A-img-1.jpg"}
              alt="Projects"
              width={270}
              height={265}
            />
            <Image
              src={"/A-img-2.jpg"}
              alt="Projects"
              width={270}
              height={140}
              className="img-bottom"
            />
          </div>
          <div className="img">
            <Image
              src={"/A-img-3.jpg"}
              alt="Projects"
              width={270}
              height={345}
            />
          </div>
        </div>

        <div className="sec-right">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="but">
            Read More{" "}
            <Image
              src={"/arrow-banner.png"}
              alt="Arrow"
              width={24}
              height={24}
              className="img_1"
            />
          </button>
        </div>
      </div>

      <div className="main-focus">
        <h2>Main Focus/Mission Statement</h2>
        <div className="col-1">
          <h2>1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="col-2">
          <h2>2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>

      <div className="projects">
        <h2 className="head">Our Projects</h2>
        <div className="row1">
          <div className="row-1-col-1">
            <Image
              src={"/img1.jpg"}
              alt="Arrow"
              width={570}
              height={255}
              className="img_1"
            />
            {/* <div className="row-1-col-1-card">
                <h2>Sample <span> Project</span></h2>

            </div> */}
          </div>
          <div className="row-1-col-2">
            <Image
              src={"/img2.jpg"}
              alt="Arrow"
              width={570}
              height={255}
              className="img_2"
            />
          </div>
        </div>
        <div className="row-2">
          <div className="row-2-col-1">
            <Image
              src={"/img3.jpg"}
              alt="Arrow"
              width={270}
              height={255}
              className="img_3"
            />
          </div>
          <div className="row-2-col-2">
            <Image
              src={"/img4.jpg"}
              alt="Arrow"
              width={470}
              height={255}
              className="img_4"
            />
          </div>
          <div className="row-2-col-3">
            <Image
              src={"/img5.jpg"}
              alt="Arrow"
              width={370}
              height={255}
              className="img_5"
            />
          </div>
        </div>
        <div className="row-3">
          <Link href="/" className="links-projects">
            All Projects
            <Image
              src={"/white-arrow.png"}
              alt="Arrow"
              width={24}
              height={24}
              className="projects-img"
            />
          </Link>
        </div>
      </div>

      <div className="about-us">
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="section-main">
          <div className="section-left">
            <form>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Interested In" />
              <textarea placeholder="Message" required />

              <button type="submit" className="Submit">
                Send Email{" "}
                <Image
                  src={"/white-arrow.png"}
                  alt="Submit"
                  width={24}
                  height={24}
                  className="cont-img"
                />
              </button>
            </form>
          </div>
          <div className="section-right">
            <Image
              src={"/Contact.jpg"}
              alt="Contact Us"
              width={749}
              height={369}
              className="cont-img-1"
            />
          </div>
        </div>
      </div>

      {/* <Footer/> */}
      
      </div>
  );
}
