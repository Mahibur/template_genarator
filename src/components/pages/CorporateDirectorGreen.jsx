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
import InputBox from "../InputBox";

const CorporateDirectorGreen = () => {
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
        <Heading text="Corporate Director" className="bg-[#0AC202]"/>
        <InputBox imgClass="bg-[url(/16.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-71 rounded-[50%]"/>
    </div>
  );
};

export default CorporateDirectorGreen;
