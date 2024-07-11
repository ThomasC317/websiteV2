
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Trema from './trema';

const BlogPost = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative max-w-3xl mx-auto p-6 shadow-lg border bg-white mb-16">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-between p-4">
        <div className="text-sm text-muted-foreground">C:\Users\YourUsername\Documents\Blog</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Trema></Trema>
            <span className="sr-only">Minimize</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
      <div className={`pt-6 ${isOpen ? "blog-opened-state" : "blog-closed-state"}`}>
        <div className="bg-primary rounded-lg px-4 py-2 text-primary-foreground inline-block mb-4">Featured Post</div>
        <h1>Designing for the Future</h1>
        <p>
          In the ever-evolving landscape of design, it's crucial to stay ahead of the curve and anticipate the needs
          of the future. As designers, we have the power to shape the experiences that will define the years to come.
          In this article, we'll explore the key principles and strategies that will help you design for the future.
        </p>
        <h2>Embracing Emerging Technologies</h2>
        <p>
          The rapid advancements in technology have transformed the way we interact with the digital world. As
          designers, it's essential to stay informed about the latest trends and innovations in technology. From
          virtual reality and augmented reality to artificial intelligence and the Internet of Things, these emerging
          technologies present new opportunities to create immersive and intuitive experiences.
        </p>
        <h2>Prioritizing User-Centered Design</h2>
        <p>
          The foundation of future-proof design lies in a deep understanding of your users. By placing their needs,
          behaviors, and pain points at the center of your design process, you can create solutions that truly
          resonate and stand the test of time. Embrace user research, iterative design, and continuous feedback to
          ensure your designs remain relevant and adaptable.
        </p>
        <h2>Fostering Adaptability and Flexibility</h2>
        <p>
          The future is inherently unpredictable, and your designs must be prepared to adapt to changing
          circumstances. Incorporate flexibility into your designs, allowing for easy modifications and updates.
          Embrace modular design principles, scalable systems, and open-ended solutions that can evolve alongside user
          needs and technological advancements.
        </p>
        <h2>Embracing Sustainability and Ethical Design</h2>
        <p>
          As designers, we have a responsibility to consider the long-term impact of our work. Incorporate sustainable
          design practices that minimize environmental footprint and promote ethical decision-making. Explore
          renewable materials, energy-efficient systems, and design solutions that empower users to make more
          sustainable choices.
        </p>
        <h2>Fostering Collaboration and Interdisciplinary Thinking</h2>
        <p>
          The challenges of the future will require a collaborative approach, drawing on the expertise and
          perspectives of diverse disciplines. Embrace interdisciplinary collaboration, fostering partnerships with
          developers, researchers, subject matter experts, and other stakeholders. By combining your design expertise
          with complementary skills, you can create comprehensive solutions that are truly future-ready.
        </p>
        <p>
          Designing for the future is an exciting and rewarding endeavor. By embracing emerging technologies,
          prioritizing user-centered design, fostering adaptability and flexibility, promoting sustainability and
          ethical practices, and collaborating across disciplines, you can create designs that will stand the test of
          time and shape the experiences of generations to come.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
    
  function MaximizeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
    )
  }
  
  
  function MinimizeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3v3a2 2 0 0 1-2 2H3" />
        <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
        <path d="M3 16h3a2 2 0 0 1 2 2v3" />
        <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
      </svg>
    )
  }
    
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }