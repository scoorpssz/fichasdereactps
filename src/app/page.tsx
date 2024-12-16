import Image from "next/image";
import styles from "./page.module.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
export default function Home() {
  return (
   <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
   </div>
  );
}
