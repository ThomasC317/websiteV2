"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useState } from 'react';
import BlogComponent from "@/components/component/blog";

const Blog = () => {

  return (  <div className="min-h-screen bg-white">
      <Navbar />  <main className="mx-auto px-24 py-12 mt-16"><BlogComponent></BlogComponent></main></div>);

};

export default Blog;
