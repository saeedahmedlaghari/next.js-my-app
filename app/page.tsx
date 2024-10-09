
import Link from "next/link";

export default function Frintpage() {
  return (
    <div className="frintpage">
      <h1> Welcome </h1>
      <br/>
      <h1>Karachi Kitab Ghar Sindh</h1>
      <br/>
      <nav>
        <ul>
          <li style={{display: 'flex', gap: '15px'}}>
            <Link href="home" target="_blank">
               <strong> Home </strong>
            </Link>

            <Link href="services" target="-blank">
              <strong> Services </strong>
            </Link>

            <Link href="about" target="-blank">
              <strong> About </strong>
            </Link>

            <Link href="contact" target="-blank">
              <strong> Contact </strong>
            </Link>
            
            <Link href="services/thanks" target="-blank">
              <strong> Thanks </strong>
            </Link>
            
          </li>
          
          {/* <li>
            <Link href="about" target="-blank">
              <strong> About </strong>
            </Link>
          </li>
          <li>
            <Link href="contact" target="-blank">
              <strong> Contact </strong>
            </Link>
          </li>
          <li>
            <Link href="services" target="-blank">
              <strong> Services </strong>
            </Link>
          </li> */}
        </ul>
      </nav>
      
    </div>
  );
}
