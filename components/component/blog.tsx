"use client"
import { Button } from "@/components/ui/button"
import React, { useState,useEffect  } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import BlogPost from "./blogPost";

const BlogComponent= ()=> {
const blogs = [
  {
    id:0,
    title: "Voyage",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:1,
    title: "Séries & films",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:2,
    title: "Jeux vidéos",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:3,
    title: "Cuisine",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:4,
    title: "Science Fiction",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:5,
    title: "Océan",
    date:"Juillet 2024",
    category: "Centres d'intérêts",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:6,
    title: "Production",
    date:"Juillet 2024",
    category: "Musique",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:7,
    title: "Mes goûts",
    date:"Juillet 2024",
    category: "Musique",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:8,
    title: "Ce que ça m'a apporté",
    date:"Juillet 2024",
    category: "Musique",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:9,
    title: "Carrière",
    date:"Juillet 2024",
    category: "Développement",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:10,
    title: "Intérêts actuels",
    date:"Juillet 2024",
    category: "Développement",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  },
  {
    id:11,
    title: "Projets personnel",
    date:"Juillet 2024",
    category: "Développement",
    content: `Création d'un nouveau site Portfolio.<br/>
    - Recherche d'inspiration pour voir les modes des sites.<br/>
    - Mise en place des pages/ composants.<br/>
    - Responsivité.`
  }
]


const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
const [selectedCategory, setSelectedCategory] = useState(blogs[0].category);
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

const SetLastBlog = (index) => {
  if(!(index <= 0))
    setSelectedBlog(blogs[index-1])
};

const SetNextBlog = (index) => {
  if(!(index >= blogs.length))
    setSelectedBlog(blogs[index+1])
};

useEffect(() => {
  if (selectedBlog.category != selectedCategory) {
    setSelectedCategory(selectedBlog.category)
  }
}, [selectedBlog]);
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex h-full w-64 flex-col border-r bg-background p-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Blog</h2>
        </div>
        <div className="flex-1 overflow-auto">
        {Object.keys(groupedBlogs).map((category, index) => {
  return (
    <Collapsible className="space-y-1" key={index} open={selectedCategory == category}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted">
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
      <BlogPost selectedBlog={selectedBlog} goToLastBlog={SetLastBlog} goToNextBlog={SetNextBlog}></BlogPost>
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

