
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./page.module.css";
 import styles from "./globals.css";

export default function Home() {

  
  return (

    <>
      <div className="container">
        <h2> Home </h2>
       
        <div className="row mt-4">
         <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </p>
         <div className='col-lg-6 col-md-6'> 
         <img src='pizza_123.jpg'/>
         </div>
        </div>

      </div>


    </>
  );
}
