import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { useDropzone } from "react-dropzone";
import { Button, Form } from "react-bootstrap";
import { getCroppedImg } from "../../utils/cropUtils";
import { toJpeg } from "html-to-image";
import Container from "../layers/Container";
import { Link } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { IoReturnDownBack } from "react-icons/io5";
import Heading from "../../Heading";

const ManagingDirector = () => {
  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropOptions, setShowCropOptions] = useState(false);
  const divRef = useRef();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setShowCropOptions(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setShowCropOptions(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const handleDownload = () => {
    toJpeg(divRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "uploaded-details.jpg";
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download image:", err);
      });
  };

  const handleCancel = () => {
    setShowCropOptions(false);
    setImageSrc(null);
  };

  return (
    <div>
        <Heading text="Managing Director" className="bg-[#30CC89]"/>
      <Container className="px-0.5 flex flex-col items-center justify-center">
        <div className="border-2 max-w-160 mx-auto border-blue-600 mt-10 p-5 md:p-10 flex flex-col items-center gap-y-3.5">
          <p className="text-base font-semibold text-center pb-1">
            Please Enter the Name of person and Also please upload a headshot
            image of Person.
          </p>
          <Form.Control
            className="inline-block py-1 w-65 sm:w-112  outline-none border border-black px-1.5"
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            {...getRootProps()}
            className="flex gap-x-0.5 items-center text-base rounded-sm px-2.5 py-0.5 text-[#333] bg-[#f0f0f0] border-2 border-[#ccc] cursor-pointer"
          >
            <input {...getInputProps()} />
            <CiImageOn />
            <p className="text-center">Upload Image</p>
          </button>
          {imageSrc && (
            <div className="relative w-60 h-60 md:w-100 md:h-75 mt-4 mb-16 mx-auto">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                restrictPosition={false}
              />
              <div className="zoom absolute bottom-[70%] md:bottom-[60%] -left-[68%] md:-left-[43%] flex items-center gap-x-2 rotate-270 w-[300px]">
                <label htmlFor="zoom">Zoom</label>
                <input
                  id="zoom"
                  type="range"
                  min={-3}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(e.target.value)}
                  className="w-1/3"
                />
              </div>
              <div className=" rotation absolute -bottom-[10%] left-[20%] flex gap-x-5 w-full">
                <label htmlFor="rotation">Rotation</label>
                <input
                  id="rotation"
                  type="range"
                  min={-360}
                  max={360}
                  step={1}
                  value={rotation}
                  onChange={(e) => setRotation(e.target.value)}
                  className="w-1/3"
                />
              </div>
              <div className="absolute top-full right-0 flex mt-8 justify-between w-full">
                <Button
                  variant="secondary"
                  onClick={handleCancel}
                  className="mr-4 bg-blue-200 hover:bg-blue-300 transition-all py-2 px-7 md:px-16 rounded-xs"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-blue-400 hover:bg-blue-500 transition-all py-2 px-7 md:px-16 rounded-xs"
                  variant="primary"
                  onClick={showCroppedImage}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
          {/* cropping part ends here */}
        </div>
        <Link
          className="flex gap-x-1 items-center mt-4 text-base rounded-sm px-2.5 py-1.5 text-[#fff] bg-red-500 cursor-pointer text-center"
          to="/"
        >
          <IoReturnDownBack />
          Back to Homepage
        </Link>
        {croppedImage && (
          <div className="py-3 flex flex-col items-center gap-y-1">
            <Button
              variant="success"
              onClick={handleDownload}
              className="bg-blue-500 px-4 py-2 rounded-md mb-3 text-center text-base"
            >
              Download
            </Button>
            <div
              ref={divRef}
              className={`relative bg-[url(/1.jpg)] bg-cover bg-no-repeat object-cover bg-center w-[1024px] py-[512px]`}
            >
              <p className="absolute left-1/2 bottom-[10%] translate-x-[-50%] text-4xl font-bold italic capitalize text-[#e7f7f4]">
                {name}
              </p>
              <img
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"
                src={croppedImage}
                alt="Cropped"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ManagingDirector;
