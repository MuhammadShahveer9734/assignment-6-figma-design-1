import Image from "next/image"
export default function Gallery(){
    return(
        <div>
            <div className="main-con">
              <div className="row-1-con">
                <h1>Photo</h1>
                <h2>Gallery</h2>
              </div>
              <div className="row-2-con">
                <div className="container">
                    <Image src={"/gal-1.jpg"} alt="pic" width={210} height={260}/>
                    <Image src={"/gal-2.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-3.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-4.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-5.jpg"} alt="pic" width={210} height={260} />
                    
              </div>
              <div className="container-2">
                    <Image src={"/gal-6.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-7.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-8.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-9.jpg"} alt="pic" width={210} height={260} />
                    <Image src={"/gal-10.jpg"} alt="pic" width={210} height={260} />
              </div>
              <div className="last-row">
              <Image src={"/gal-slide.jpg"} alt="pic" width={140} height={52} />
              <Image src={"/gal-arrow1.jpg"} alt="pic" width={54} height={53} />
              <Image src={"/gal-arrow.jpg"} alt="pic" width={54} height={53} />
              

              </div>
              </div>

            </div>
        </div>
    )
}