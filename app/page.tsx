import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/table/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Footer from './footer';







export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
       <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox@2.0  <br />
            Storing everything for you and your business needs. All in one place
          </h1>


      <p className="pb-20">
       Enhance your personal storage with DropBox@2.0,Offering the simple and efficient way to
       upload , organize , update and access your file from anywhere in the world.
        <br/>
        Securely store important data , files and media and experience the convenience of the 
        easy file management and sharing in one centralized  solution at DropBOx@2.0


      </p>
      
      <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
        
            Try it out for free!
            <ArrowBigRight className="ml-5" />
            
           
           </Link>






           <div>


          


           </div>
           




         </div>

         <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
         <video autoPlay loop muted width="2000" height="1200"  >
      <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" type="video/mp4"/>
     </video>
     
        </div>
         
       

     



        
           
        </div>

         
      

       

       

      
      <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
         <video autoPlay loop muted width="2000" height="1200"  >
      <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dash/dbx-header-blur-1920x1080.mp4" type="video/mp4"/>
     </video>
        </div>





        <p className="text-bold ">Tech Stack Used in this project</p>
         <div className="flex  bg-#351dbf-500 p-5 w-fit">
        
        
        <Card className="w-[250px] ml-5">
      <CardHeader>
        <CardTitle className="px-25">Front-end</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Next JS </Label>
             
             
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">React</Label>
              
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Tailwind CSS</Label>
              <CardDescription>  UI design with Tailwind CSS!</CardDescription>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Typescript</Label>
              <CardDescription> TypeScript to reduce the overall number of Bugs and Errors</CardDescription>

              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Shadcn UI</Label>
              <CardDescription> UI & UX for  Dropbox clone  the highly Popular Shadcn!</CardDescription>
              
            </div>
            
          </div>
        </form>
      </CardContent>
     
    </Card>

    
    <Card className="w-[250px] ml-5">
      <CardHeader>
        <CardTitle className="px-25">Back-end</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Firebase </Label>
              <CardDescription>upload all File types to Firebase storage just like the real Dropbox!</CardDescription>
             
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Firestorage</Label>
              <CardDescription>integrate full CRUD Functionality for the files </CardDescription>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Deployed on vercel</Label>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Clerk authentication</Label>
              <CardDescription>A Login and Logout Authentication flow using Clerk Authentication!</CardDescription>
              
            </div>
            
          </div>
        </form>
      </CardContent>
     
    </Card>


  </div>






        

   
       
      



 

    
      
      


   <div className="text-center font-bold text-xl pt-5 flex-auto">
    <Footer />
  </div>


   
    <p className="text-center font-bold text-xl pt-5 flex-auto">Disclaimer</p>
      <p className="text-center font-light p-2 flex-auto">
        This WebPage  is made for  educational purposes only. I
        do not own or affiliate with Dropbox or/and any of its subsidiaries in
        any form. Copyright Disclaimer under section 107 of the Copyright Act
        1976, allowance is made for &#34; fair use &#34; of this project for educational
        purposes.
      </p>
     
    



    </main>
  )
}
