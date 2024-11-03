import Image from "next/image";
export default function Project() {
  return (
    <div>
      <div className="main-con">
        <div className="row-1-con">
          <h1>Our</h1>
          <h2>Projects</h2>
        </div>
        <div className="pro-row-2">
          <div className="projects-1">
            <div className="left-side">
              <Image src={"/pro-1.jpg"} alt="pic" width={670} height={435} />
            </div>
            <div className="right-side">
              <h2>Sample Project</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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


          <div className="projects-1">
            <div className="left-side">
              <Image src={"/pro2.jpg"} alt="pic" width={670} height={435} />
            </div>
            <div className="right-side">
              <h2>Sample Project 2</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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


          <div className="projects-1">
            <div className="left-side">
              <Image src={"/pro3.jpg"} alt="pic" width={670} height={435} />
            </div>
            <div className="right-side">
              <h2>Sample Project 3</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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

          <div className="last-row">
              <Image src={"/gal-slide.jpg"} alt="pic" width={140} height={52} />
              <Image src={"/gal-arrow1.jpg"} alt="pic" width={54} height={53} />
              <Image src={"/gal-arrow.jpg"} alt="pic" width={54} height={53} />
              

              </div>
          


        </div>
        
      </div>
      
    </div>
  );
}
