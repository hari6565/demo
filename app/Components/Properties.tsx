"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TiCalculator } from "react-icons/ti";
import { AiTwotoneSwitcher } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillDiff } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Progress } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {Tooltip} from "@nextui-org/react";
import { BiPencil } from "react-icons/bi";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { FaSearchPlus } from "react-icons/fa";
import {RadioGroup, Radio} from "@nextui-org/react";
import Image from "next/image";
import Picture from "../assets/List.jpg"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
import {ScrollShadow,Slider} from "@nextui-org/react";







export default function App() {
  const defaultContent = <input type="text" placeholder="HomePage" />;
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleButtonClick = () => {
    // Toggle the visibility of the textbox
    setIsTextBoxVisible(!isTextBoxVisible);
  };
 
 

  const defaultContents = "opacity";
  

  return (
    <div className=" border-[2px]">
      <div className=" bg-gray-200  w-[310px] h-[88vh] overflow-x-auto ">
        <Input
          label=""
          variant="bordered"
          placeholder="PageParameters"
          className="text-white"
          endContent={
           
            <button className="focus:outline-none" type="button">
              <CiCirclePlus className="w-6 h-6 text-blue-500" />
            </button>
           
          }
        />
        <div>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Route Settings"
              subtitle=""
              title="Route Settings"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-between my-3">
          <div className="flex gap-2">
            <TiCalculator className="mr-2" />
            <h1>Scaffold</h1>
          </div>
          
          <div className="flex gap-2">
          <Tooltip content="Duplicate this page">
          
            <Button isIconOnly>
              <AiTwotoneSwitcher className="" />
            </Button>
            </Tooltip>
            <Tooltip content="Delete this page">
            
            <Button isIconOnly>
              <RiDeleteBinLine className="" />
            </Button>
            </Tooltip>
            
          </div>
        </div>
        <div>
          <Input
            type="Homepage"
            label="HomePage"
            className="text-white bg-gray-200 flex items-center w-13 my-3 ml-4 "
           
          />
          {/* <Button className="">
          <BiPencil />
          </Button>  */}
          
        </div>

 <div className="flex w-full flex-col">
 
      <Tabs aria-label="Options">
        
        <Tab className=""key="" title={<AiFillDatabase className="w-5" />}>
       
        </Tab>
        
        <Tab key="music" title={<AiFillCaretRight className="w-10" />}>
          <Card>
            <CardBody>
            
      
      <Tabs aria-label="Options">
        <Tab key="Actions" title="Actions">
          <Card>
            <CardBody>
              <div className="">
           
              <Chip>ActionFlowEditor</Chip>
           
          
          <Button className="ml-15" color="primary"onClick={handleButtonClick}>
      open
    </Button>
    {isTextBoxVisible && (
      <div className="text-sm">
         
      <Accordion  variant="shadow">
      <AccordionItem className="text-sm" key="1" aria-label="Accordion 1" title="Backend/Data">
        {defaultContent}
      </AccordionItem>
      
        {/* <Button className="mr-10" color="primary">
        close
      </Button> */}
      
       
    </Accordion>
    </div>
    
    
      )}
      <p className="font-bold">Define Action</p>
      <h1>PageLoad</h1>
      <Input
            type="Homepage"
            label="HomePage"
            className="text-white bg-gray-200 flex items-center w-13 my-3 ml-1 "
            endContent={ <FaSearchPlus className="text-black" />}
           
          />
          <p className="font-bold">Type of action</p>
           <div className="flex justify-between">
                <p>On pageload </p>
                <RadioGroup>
                <Radio value="buenos-aires"></Radio>
                </RadioGroup>
               
                
                
                
              </div>
         


      
      
    </div>
          

            
            </CardBody>
          </Card>  
        </Tab>
        
        <Tab key="ActionBlock" title="ActionBlock">
          <Card>
            <CardBody>
              <div className="flex">
              <p>Scope </p>
              <CiCirclePlus className="my-1"/>
              </div>
              <div>
              <Image className="w-20 h-20 mx-12"src={Picture} alt=""></Image>
              </div>
              <p className="font-bold mx-10">No Action Blocks</p>
              <p className="text-sm mx-10">create action blocks </p>
              <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Action Block Name</ModalHeader>
              <ModalBody>
                 <p className=" text-sm">please give your action block a name below</p> 
                 <Input type="" label="" />
                
                
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>

            </CardBody>
          </Card>  
        </Tab>
       
      </Tabs>
    
         
         
             
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="icon" title={<AiFillDiff className="" />}>
          <Card>
            <CardBody>
            <Button color="primary">
      Add Query
      </Button>  
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title={<FaArrowUpRightFromSquare className=" mx-1" />}>
          <Card>
            <CardBody>
            <Button color="danger">
      Animation not allowed for scaffold
      </Button>  
            
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="ertt" title={<FaLocationArrow className="w-11" />}>
          
          <Card>
            <CardBody>
              <div className="flex ">
            <h1>Local Page State variables</h1>
            <CiCirclePlus className="my-1"/>

            </div>
            <Button color="primary">
        Add Field
      </Button>  
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
        
        <div className="border-none rounded-none my-4">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Visibility"
              subtitle=""
              title="Visibility"
            >
             
              <Slider
                size="sm"
                label="Opacity"
                step={0.01}
                maxValue={1}
                minValue={0}
                defaultValue={0.4}
                className="max-w-md"
              />
              <Input type="text" placeholder="1" />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="border-none rounded-none my-4">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Page(Scaffold)Properties"
              subtitle=""
              title="Page(Scaffold)Properties"
            >
              <h2>Background color</h2>
              <Input type="text" placeholder="Primarybackground" />
              <div className="flex justify-between">
                <h3 className="text-gray-500 text-sm my-3">Safearea</h3>
                <Switch
                  defaultSelected
                  aria-label="Automatic updates"
                  className="ml-2"
                />
              </div>

              <div className="flex justify-between">
                <h4 className=" text-gray-500 text-sm my-3">
                  High Keyboard on tap
                </h4>
                <Switch
                  className=" ml-2"
                  defaultSelected
                  aria-label="Automatic updates"
                />
              </div>

              <div className="flex justify-between">
                <h5 className=" text-gray-500 text-sm my-3">
                  Disable Android back button
                </h5>
                <Switch defaultSelected color="default"></Switch>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion className="text-gray-500">
            <AccordionItem
              key="1"
              aria-label="NavBar Item Properties"
              subtitle=""
              title="NavBar Item Properties"
            >
              <div className="flex justify-between ">
                <h6>Show on NavBar</h6>
                <Switch
                  className="ml-2 my-3"
                  defaultSelected
                  color="default"
                ></Switch>
              </div>
              <div className="flex justify-between">
                <p>Always show Navbar on page</p>
                <Switch
                  className="ml-2"
                  defaultSelected
                  color="default"
                ></Switch>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
