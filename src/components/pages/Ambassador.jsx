import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { useDropzone } from "react-dropzone";
import { Button, Form } from "react-bootstrap";
import { getCroppedImg } from "../../utils/cropUtils";
import { toJpeg } from "html-to-image";
import Container from "../layers/Container";
import { Link } from "react-router-dom";

const Ambassador = () => {
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
      <h1 className="bg-[#FD6400] text-3xl font-bold text-center py-6">
        Ambassador
      </h1>
      <Container>
        <div className="border-2 border-blue-600 mt-10 py-4 mx-2 px-8 flex flex-col gap-y-3.5">
          <p className="text-xl font-semibold text-center pb-1">
            Please Enter the Name of person and Also please upload a headshot
            image of Person.
          </p>
          <Form.Control
            className="inline-block py-3 w-full outline-none border border-black rounded-md px-1.5"
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-between md:gap-x-4">
            <div
              {...getRootProps()}
              className="w-35 bg-[#cecece] py-3 px-1 rounded-md cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-center">Upload Image</p>
            </div>
            <Link
              className="bg-red-400 py-4 px-5 rounded-md w-35 text-center"
              to="/"
            >
              Back to Home
            </Link>
          </div>
          {imageSrc && (
            <div className="relative w-full h-[300px] mt-4">
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
              <div className="absolute top-0 left-0 right-0 flex flex-col items-center p-4 bg-white bg-opacity-75 z-10">
                <div className="flex justify-between w-full">
                  <label htmlFor="zoom">Zoom</label>
                  <input
                    id="zoom"
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e) => setZoom(e.target.value)}
                    className="w-1/3"
                  />
                  <label htmlFor="rotation">Rotation</label>
                  <input
                    id="rotation"
                    type="range"
                    min={0}
                    max={360}
                    step={1}
                    value={rotation}
                    onChange={(e) => setRotation(e.target.value)}
                    className="w-1/3"
                  />
                </div>
                <div className="absolute top-10 right-10">
                  <Button
                    variant="secondary"
                    onClick={handleCancel}
                    className="mr-4 bg-blue-200 p-1 rounded-sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-400 p-1 rounded-sm"
                    variant="primary"
                    onClick={showCroppedImage}
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        {croppedImage && (
          <div className="py-10">
            <Button
              variant="success"
              onClick={handleDownload}
              className="bg-blue-500 px-2 py-1 rounded-md mb-3 text-center text-base"
            >
              Download
            </Button>
            <div
              ref={divRef}
              className={`relative bg-[url(/8.jpg)] bg-cover bg-no-repeat object-cover bg-center w-[1024px] py-[512px]`}
            >
              <p className="absolute left-1/2 bottom-[10%] translate-x-[-50%] text-4xl font-bold italic capitalize text-[#e7f7f4]">
                {name}
              </p>
              <img
                className="absolute top-1/2 left-1/2 translate-x-[-53%] translate-y-[-24%] block w-70.5 rounded-[50%]"
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

export default Ambassador;
