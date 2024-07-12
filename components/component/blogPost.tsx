
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Trema from './trema';

const BlogPost = ({selectedBlog, goToLastBlog, goToNextBlog, isFirstBlog, isLastBlog}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  console.log(selectedBlog)
  if (selectedBlog && selectedBlog.title) {
    console.log(selectedBlog.title);
  } else {
    console.log("selectedBlog is not defined or title is missing");
  }
  if (!isVisible) return null;

  return (
    <div className="relative max-w-3xl mx-auto p-6 shadow-lg border bg-white mb-16">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-between p-4">
        <div className="text-sm text-muted-foreground">C:\Users\ThomasCerdera\{selectedBlog.category}\{selectedBlog.title}</div>
        <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => goToLastBlog(selectedBlog.id)} disabled={isFirstBlog}>
            <LessThanIcon></LessThanIcon>
            <span className="sr-only">Minimize</span>
          </Button>
        <Button variant="ghost" size="icon" onClick={() => goToNextBlog(selectedBlog.id)} disabled={isLastBlog}>
            <GreaterThanIcon></GreaterThanIcon>
            <span className="sr-only">Minimize</span>
          </Button>
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
        <div className="bg-primary rounded-lg px-4 py-2 text-primary-foreground inline-block mb-4">{selectedBlog.title}</div>
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }}>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

function LessThanIcon () {
  return (
    <span>&lt;</span>
  );
};

function GreaterThanIcon () {
  return (
    <span>&gt;</span>
  );
};
    
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