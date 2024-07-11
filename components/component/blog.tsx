"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import BlogPost from "./blogPost";

const BlogComponent= ()=> {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex h-full w-64 flex-col border-r bg-background p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Blog</h2>
        </div>
        <div className="flex-1 overflow-auto">
          <Collapsible className="space-y-1">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-4 w-4" />
                <span>Centres d'intérêts</span>
              </div>
              <ChevronRightIcon className="h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Voyage</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Séries/films</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Jeux vidéos</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Cuisine</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Science Fiction</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Océan</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-1">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-4 w-4" />
                <span>Musique</span>
              </div>
              <ChevronRightIcon className="h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Production</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Mes goûts</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Ce que ça m'a apporté</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-1">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-4 w-4" />
                <span>Développement</span>
              </div>
              <ChevronRightIcon className="h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Carrière</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Intérêts actuels</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <FileIcon className="h-4 w-4" />
                <span>Projets personnel</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="flex-1">
      <BlogPost></BlogPost>
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

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
