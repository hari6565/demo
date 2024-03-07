
"use client"
import React from 'react'
import { useState } from 'react';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { FaSearchPlus } from "react-icons/fa";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, useDisclosure } from "@nextui-org/react";



const StoryBoard  = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };




  return (
    <div className='mr-52'>

      <div className='flex font-bold gap-2'>
        <h1 className='font-bold my-4'>
          StoryBoard
        </h1>
        <HiOutlineExclamationCircle className='mx-2 my-5' />
        <div className="flex gap-4 items-center">
          <Button size="sm">
            Beta
          </Button>
        </div>
        <div className='mb-3 my-3 color="green'>________</div>
        <h2 className='my-4' >Navigate/LogicActions</h2>
        <div className='my-4'>-----</div>
        <h3 className='my-4'>Botton Sheet Action</h3>
        <FaArrowAltCircleRight className='my-5' />
        <h4 className='my-4'>Hidden Widgets</h4>
        <HiOutlineExclamationCircle className=' my-5' />


      </div>

      <div className="block border border-black p-10 w-[1000px] h-96 ">

      </div>
      <div className='flex justify-end' >




        <Button className=' fixed bottom-0 right-0 z-10' onPress={onOpen}><FaSearchPlus /></Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>

          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">HI Great</ModalHeader>
                <ModalBody>
                  <p>
                    <h1 className='font-bold mr-48'>Next ui</h1>

                  </p>
                  <div className='flex justify end gap-3'>

                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  </div>
                  <div>
                    <Accordion>
                      <AccordionItem key="1" aria-label="Project Sample" title="Project Sample">

                      </AccordionItem>
                      <AccordionItem key="2" aria-label="My project freezes after opening" title="My project freezes after opening">

                      </AccordionItem>
                      <AccordionItem key="3" aria-label="How do i upgrade a paid plan" title="How do i upgrade a paid plan">

                      </AccordionItem>
                    </Accordion>
                  </div>

                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>

                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* </div>  */}
      </div>




    </div>


  )
}

export default StoryBoard






