"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useState } from 'react';
import BlogComponent from "@/components/component/blog";
import ParticleBackground from "@/components/component/particleBackground";
const Blog = () => {

  return (      <div className="min-h-screen bg-white">
    <div className="flex gap-main-page items-center justify-center py-12 bg-gray-100">
        <Navbar isMainPage={false} />
        <div style={{ position: "relative", height: "100vh" }}>
        <ParticleBackground/>
        <main className="w-full max-w-4xl bg-white bg-opacity-80 mx-auto mt-24 rounded-lg" style={{"position":"relative", "zIndex":1}}>
          <BlogComponent></BlogComponent>
          </main></div>
          </div>
          </div>);

};

export default Blog;
