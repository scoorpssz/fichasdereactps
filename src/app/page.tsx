"use client"
import styles from "./page.module.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content'; 
import './globals.css'
import React, { useState } from "react";

export default function Home() {
  const [my_name] = useState<string>("José Cláudio");
  const [project_name] = useState<string>("League of Heroes");

  return (
    <div>
      
      <Header my_name={my_name} project_name={project_name} />
      
      
      <Content></Content>
      
      <Footer my_name={my_name} project_name={project_name} />
    </div>
  );
}