"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,  Checkbox, Input, Link,useDisclosure} from "@nextui-org/react";
import Image from "next/image";
// import Picture from '../assets/blue.ico'
 function App() {
//   const[open,setOpen] = useState();
const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <> 
    {/* <Image src={Picture} alt=""/> */}
    <div className="flex justify-center " >
    <h1 >No Data Types Created</h1> 
    <Button className="my-52" onPress={onOpen} color="primary">+ Create Data Type</Button>
    </div>
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="top-center"
    >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <h1 className="font-bold">Create Data Type</h1>
                <p className="text-sm">Note:if you have existing firestore data.make sure the names match</p>
                <Input
                  autoFocus
                  
                  label=""
                  placeholder="Data type name"
                  variant="bordered"
                />
                
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default App
