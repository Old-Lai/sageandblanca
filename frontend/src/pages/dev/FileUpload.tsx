import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ".jpg,.jpeg,.png";

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
        .filter((file) =>
          ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
        )
        .filter((file) => file.size < MAX_UPLOAD_SIZE);
      setFiles(selectedFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    updateFileInput(newFiles);
  };

  const handleClearAll = () => {
    setFiles([]);
    updateFileInput([]);
  };

  const updateFileInput = (newFiles: File[]) => {
    if (fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      newFiles.forEach((file) => dataTransfer.items.add(file));
      fileInputRef.current.files = dataTransfer.files;
    }
  };

  return (
    <div className="mx-auto my-20 w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="file-upload">Upload Files</Label>
        <Input
          id="file-upload"
          type="file"
          multiple
          accept={ACCEPTED_FILE_TYPES}
          ref={fileInputRef}
          onChange={handleFileChange}
          className="cursor-pointer"
        />
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          <Label>Uploaded Files</Label>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="bg-secondary flex items-center justify-between rounded-md p-2"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative h-20 w-20 overflow-hidden rounded">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview of ${file.name}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg?height=40&width=40";
                      }}
                    />
                  </div>
                  <span className="truncate text-sm">{file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFile(index)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="outline" onClick={handleClearAll} className="w-full">
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}
