"use client"
import React from "react";
import {Popover, PopoverTrigger, PopoverContent,Button} from "@nextui-org/react";
const Tpopover =()=>{
    return(
        <Popover placement="right">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>

    )
}
export default Tpopover