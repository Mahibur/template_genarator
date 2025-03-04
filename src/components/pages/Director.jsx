import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { useDropzone } from "react-dropzone";
import { Button, Modal, Form } from "react-bootstrap";
import { getCroppedImg } from "../../utils/cropUtils";
import { toJpeg } from "html-to-image";
import Container from "../layers/Container";

const Director = () => {
  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const divRef = useRef();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setShowModal(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const handleCancel = () => {
    setShowModal(false);
    setImageSrc(null);
  };

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

  return (
    <div>
      <h1 className="bg-[#E700C3] text-3xl text-white font-bold text-center py-6">
      Director
        </h1>
      <Container>
        
        <div className="border-2 border-blue-600 mt-10 py-4 mx-2 px-8 flex flex-col gap-y-3.5">
          <p className="text-xl font-semibold text-center pb-1">Please Enter the Name of person and Also please upload a headshot image of Person.</p>
          <Form.Control
            className="inline-block py-3 w-full outline-none border border-black rounded-md px-1.5"
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-between md:gap-x-4">
          <div {...getRootProps()} className="w-35 bg-[#cecece] py-3 px-1 rounded-md cursor-pointer">
            <input {...getInputProps()} />
            <p className="text-center">Upload Image</p>
          </div>
          <a className="bg-red-400 py-4 px-5 rounded-md w-35 text-center" href="/">Back to Home</a>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Crop Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {imageSrc && (
              <div className="relative w-full h-[300px] "
              >
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  rotation={0}
                  restrictPosition={false}
                />
                <div style={{ position: "absolute", top: 10, right: 10 }}>
                  <Button
                    variant="secondary"
                    onClick={handleCancel}
                    className="mr-4 bg-blue-200 p-1 rounded-sm"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-blue-400 p-1 rounded-sm" variant="primary" onClick={showCroppedImage}>
                    Done
                  </Button>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
        {croppedImage && (
          <div className="py-10">
                        <Button
              variant="success"
              onClick={handleDownload}
              className=" bg-blue-500 px-2 py-1 rounded-md mb-3 text-center text-base"
            >
              Download as JPG
            </Button>
            <div ref={divRef} className={`relative bg-[url(/17.jpg)] bg-cover bg-no-repeat object-cover  bg-center w-[1024px] py-[512px]`}>
              <p className="absolute left-1/2 bottom-[10%] translate-x-[-50%] text-4xl font-bold italic capitalize text-[#e7f7f4]">{name}</p>
              <img className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]" src={croppedImage} alt="Cropped" />
            </div>

          </div>
        )}
      </Container>
    </div>
  );
};

export default Director;
