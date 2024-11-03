import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        
            <footer>
        <div className="footer-container">
          <div className="main-footer">
            <div className="footer-left">
              <div className="box">
                <div className="box-1">
                  <Image
                    src={"/logo-last.png"}
                    alt="logo"
                    width={145}
                    height={94}
                  />
                </div>
                <div className="box-2">
                  <h2>Information</h2>
                  <Link href={"/"}>Main</Link>
                  <Link href={"/"}>Gallery</Link>
                  <Link href={"/"}>Projects</Link>
                  <Link href={"/"}>Certifications</Link>
                  <Link href={"/"}>Contacts</Link>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="box-right">
                <div className="box-right-1">
                  <h2>Contacts</h2>
                  <p>
                    🚏 1234 Sample Street <span>Austin Texas 78704</span>
                  </p>

                  <p>📞 512.333.2222</p>
                  <p>📧 sampleemail@gmail.com</p>
                </div>
                <div className="box-right-2">
                  <h2>Socail Media</h2>
                  <Link href={"https://www.facebook.com"} target="_blank">
                    <Image
                      src={"/facebook.png"}
                      alt="Facebook"
                      width={10}
                      height={19}
                    />
                  </Link>
                  <Link href={"https://twitter.com/"} target="_blank">
                    <Image
                      src={"/twitter.png"}
                      alt="Twiter"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href={"https://www.linkedin.com"} target="_blank">
                    <Image
                      src={"/Linked-In.png"}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href={"https://www.pinterest.com"} target="_blank">
                    <Image
                      src={"/pininterest.png"}
                      alt="pininterest"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-footer">
          <p>© 2021 All Rights Reserved</p>
        </div>
      </footer>
        
    )
}