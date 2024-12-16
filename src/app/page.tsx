"use client"
import styles from "./page.module.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content.jsx';
import './globals.css'
import React, {useState} from "react";

export default function Home() {
  const [my_name] = useState<String>("José Cláudio")
  const [project_name] = useState<String>("League of Heroes")

  return (
   <div className={styles.page}>
      <Header my_name={my_name} project_name={project_name}></Header>
      <Content></Content>
       <Footer my_name={my_name} project_name={project_name}></Footer>  
   </div>
  );
}
