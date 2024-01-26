import Image from 'next/image';
import Link from 'next/link'
import { SignIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { Themetoggler } from '@/components/ui/Themetoggler';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from '@/components/ui/button';





function Header() {
  return (
    <header className="flex items-center justify-between">
      
      <Link href="/" className="flex items-center space-x-2">
     <div>
             
      <Image src="https://www.shareicon.net/data/128x128/2015/08/31/93614_dropbox_512x512.png" alt="logo"
       className="invert"
       height={50}
       width={50}
      />
    



     </div>

      
       
      



      <h1 className="font-bold text-xl">DropBox@2.0 By Manish Yadav</h1>

      <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Products</MenubarTrigger>
        <MenubarContent>
         
          <MenubarItem>
            <Link href="https://www.dropbox.com/"> DropBox@2.0 Products <MenubarShortcut>⌘T</MenubarShortcut> </Link> 
          </MenubarItem>
          
          <MenubarItem>
          <Link href="https://www.dropbox.com/">  Backup  </Link>
          </MenubarItem>
          <MenubarItem>
          <Link href="https://www.dropbox.com/">  Sign  </Link>
          </MenubarItem>
          <MenubarItem>
          <Link href="https://www.dropbox.com/">  Docsend   </Link>
          </MenubarItem>
          <MenubarItem>
             Capture
          </MenubarItem>
          <MenubarItem>
             Replay 
          </MenubarItem>
          <MenubarItem>
             Dash 
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Early Access</MenubarSubTrigger>
            
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Connect with me</MenubarTrigger>
        <MenubarContent>
          <MenubarItem  >
          <Link href="https://github.com/Manishyad14">  My  Github Profile    </Link>
          </MenubarItem>
          <MenubarItem>
          <Link href="https://www.linkedin.com/in/manish-yadav-696888217/">   Linkedin  </Link>
          </MenubarItem>
         
          <MenubarItem>
          <Link href="https://www.dropbox.com/">   My Portfolio</Link>
          </MenubarItem>
          
        </MenubarContent>
      </MenubarMenu>
    
    </Menubar>
      
      
      </Link>
      

      <div className="px-5 flex space-x-2">


        {/*  Theme toggler        */}
        <Themetoggler/>
      
       <UserButton   afterMultiSessionSingleSignOutUrl='/' / >
         
         <SignedOut>
           <SignInButton afterSignInUrl="/dashboard " mode='modal'/>

         </SignedOut>


      </div>
      


      
      </header>

  )
}

export default Header