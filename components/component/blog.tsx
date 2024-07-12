"use client"
import { Button } from "@/components/ui/button"
import React, { useState,useEffect  } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import BlogPost from "./blogPost";
import MapEmbed from "./mapEmbed/mapEmbed";
import jsonData from '../../public/blog.json';

const BlogComponent= ()=> {

const blogs = jsonData.blogs;
const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
const [selectedCategory, setSelectedCategory] = useState(blogs[0].category);
const [openCategories, setOpenCategories] = useState([]);
const [isFirstBlog, setIsFirstBlog] = useState(true);
const [isLastBlog, setIsLastBlog] = useState(false);

const groupedBlogs = blogs.reduce((acc, blog) => {
  if (!acc[blog.category]) {
    acc[blog.category] = [];
  }
  acc[blog.category].push(blog);
  return acc;
}, {});
const SetBlog = (index) => {
  setSelectedBlog(blogs[index])
  if(selectedCategory != blogs[index].category)
    setSelectedCategory(blogs[index].category)
};

const handleCategoryClick = (category) => {
  setOpenCategories((prev) => {
    if (prev.includes(category)) {
      return prev.filter((cat) => cat !== category);
    } else {
      return [...prev, category];
    }
  });
};

const SetLastBlog = (index) => {
  if(!(index <= 0))
    setSelectedBlog(blogs[index-1])
};

const SetNextBlog = (index) => {
  if(!(index >= blogs.length))
    setSelectedBlog(blogs[index+1])
};

useEffect(() => {
  if (!openCategories.includes(selectedBlog.category)) {
    setOpenCategories(prev => [...prev, selectedBlog.category]);
  }
  if(selectedBlog.title == blogs[0].title)
    setIsFirstBlog(true);
  else
    setIsFirstBlog(false);
  if(selectedBlog.title == blogs[blogs.length-1].title)
    setIsLastBlog(true);
  else
    setIsLastBlog(false);
}, [selectedBlog]);

useEffect(() => {
  setOpenCategories(prev => [...prev, selectedBlog.category]);
}, []);

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex h-full w-64 flex-col border-r bg-background p-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Blog</h2>
        </div>
        <div className="flex-1 overflow-auto">
        {Object.keys(groupedBlogs).map((category, index) => {
  return (
    <Collapsible className="space-y-1" key={index} open={openCategories.includes(category)}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"   onClick={() => handleCategoryClick(category)}>
        <div className="flex items-center gap-2">
          <FolderIcon className="h-4 w-4" />
          <span>{category}</span>
        </div>
        <ChevronRightIcon className="h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1">
        {groupedBlogs[category].map((blog, innerIndex) => (
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted ${blog.title == selectedBlog.title ? "selected-blog" : ""}`}
            prefetch={false}
            key={innerIndex}
            onClick={() => SetBlog(blog.id)}
          >
              {blog.title === selectedBlog.title ? (
                <ChevronRightIcon></ChevronRightIcon>
          ) : (
            // Render a FileIcon when blog title does not match selectedBlog title
            <FileIcon className="h-4 w-4" />
          )}
            <span>{blog.title}</span>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
})}
        </div>
      </div>
      <div className="flex-1">
      <BlogPost selectedBlog={selectedBlog} goToLastBlog={SetLastBlog} goToNextBlog={SetNextBlog} isFirstBlog={isFirstBlog} isLastBlog={isLastBlog}></BlogPost>
      </div>
    </div>
  );
};

export default BlogComponent;


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function FolderIcon(props) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}

