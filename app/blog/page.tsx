"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useState } from 'react';
import BlogComponent from "@/components/component/blog";
import ParticleBackground from "@/components/component/particleBackground";
import Footer from "@/components/component/footer/footer";

const Blog = () => {

  return (      
  <div className="min-h-screen bg-white">
   
        <Navbar isMainPage={false} />
        <div style={{ position: "relative" }}>
        <ParticleBackground/>
        <main className="mx-auto px-24 py-12 mt-16" style={{"position":"relative", "zIndex":1}}>
          <BlogComponent></BlogComponent>
          </main>  <Footer></Footer></div>
          </div>);

};

export default Blog;
