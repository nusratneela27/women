"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import "./VideoBanner.css";
import { FaPlayCircle } from "react-icons/fa";

const VideoBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="VideoBanner bg-fixed py-52 space-y-3 flex flex-col items-center">
      <FaPlayCircle
        className="h-28 w-28 text-amber-200 cursor-pointer hover:text-amber-950 hover:duration-200 hover:ease-in-out"
        onClick={handleOpen}
      />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {" "}
            Our dress Video
          </ModalHeader>
          <ModalBody>
            <video controls preload="none">
              <source src="../../../../assets/video.mp4" type="video/mp4" />
              <track
                src="../../../../assets/video.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VideoBanner;
