import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/component/navbar"
import CommandPrompt from "@/components/component/commandPrompt"
export default function Home() {
  return (
    <div className="min-h-screen flex gap-main-page items-center justify-center py-12 bg-gray-100">
      <Navbar/>
      <div className="w-full max-w-4xl bg-white bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-24">
        <main className="flex flex-col gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je m'appelle Thomas CERDERA
            </h1>
            <p className="text-lg text-gray-700 md:text-xl lg:text-2xl">
              Je suis un développeur Full-Stack, actuellement très intéressé pour développer mes compétences en Front.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="outline" className="w-full sm:w-auto">
              Mes expériences
            </Button>
          </div>
        </main>
      </div>
      <div className="w-full max-w-2xl bg-white bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-12">
        <div className="mx-auto space-y-8">
        <CommandPrompt />
          {/* <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-lg text-gray-700 md:text-xl">
              I'd love to hear from you. Whether you have a project in mind or just want to say hello, feel free to
              reach out.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} placeholder="Your message..." />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form> */}
        </div>
      </div>
    </div>);
}
