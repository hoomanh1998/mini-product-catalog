"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type UploadImageInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function UploadImageInput({ ...props }: UploadImageInputProps) {
  const [image_url, set_image_url] = useState<string | null>(
    props.defaultValue as string
  );

  function handle_file_change(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const localUrl = URL.createObjectURL(selectedFile);
      set_image_url(localUrl);
    }
  }

  useEffect(() => {
    if (props.defaultValue) {
      set_image_url(props.defaultValue as string);
    }
  }, [props.defaultValue]);

  return (
    <div className="flex flex-col gap-y-1.5">
      <label className="text-sm font-medium capitalize">Select Image</label>

      <div className="border border-foreground/30 p-6 rounded-xl">
        <input
          id={props.id}
          name={props.name}
          type="file"
          onChange={handle_file_change}
          className="w-full text-sm text-gray-500 file:mr-4 file:cursor-pointer file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          required={!image_url}
        />
        {image_url && (
          <div className="mt-6">
            <p className="text-sm mb-2">Image Preview:</p>
            <Image src={image_url} alt="Uploaded" className="rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
}
