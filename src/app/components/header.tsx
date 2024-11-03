import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <div className="main-container">
      <div className="navbav">
        <div className="nav-logo">
          <Image src={"/logo.png"} alt="pic" width={70} height={43} />
        </div>
        <div className="navbar-links">
          <Link href={"/"} className="links">
            Main
          </Link>
          <Link href={"/gallery"} className="links">
            GALLERY
          </Link>
          <Link href={"/project"} className="links">
            PROJECTS
          </Link>
          <Link href={""} className="links">
            CERTIFICATIONS
          </Link>
          <Link href={""} className="links">
            COntacts
          </Link>
        </div>
      </div>

      

      
    </div>
  );
}
