"use client";
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { db, storage } from '@/firebase';
import { addDoc , collection ,doc,serverTimestamp,updateDoc, } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";



const  DropzoneComponent = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const { isLoaded, user, isSignedIn } = useUser();
  const maxSize = 20971520;
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };
  const uploadPost = async (selectedFile: File) => {
    if (loading) {
      return;
    }

    if(!user){
      return ;
    }
    setLoading(true);
     
    const docRef = await addDoc(collection(db, `users/${user.id}/files`), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });
    const imgRef = ref(storage, `users/${user.id}/files/${docRef.id}`);
    uploadBytes(imgRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imgRef);
      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
    });

  setLoading(false);

  };
   



  return (
    <Dropzone
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center border border-dashed rounded-lg text-center p-5",
                isDragActive
                  ? "bg-[#035ffe text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  File is too large try compressing or selecting a different
                  file
                </div>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};
export default DropzoneComponent;