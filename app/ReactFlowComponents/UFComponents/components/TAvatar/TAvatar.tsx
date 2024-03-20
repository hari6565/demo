"use client";
import React from "react";
import { Avatar, AvatarGroup, AvatarIcon, useAvatar } from "@nextui-org/react";
import { forwardRef } from "react";




const Tavatar = forwardRef((props, ref) => {
  const {
    src,
    icon = <AvatarIcon />,
    alt,
    classNames,
    slots,
    name,
    showFallback,
    fallback: fallbackComponent,
    getInitials,
    getAvatarProps,
    getImageProps,
  } = useAvatar({

    ...props,
  });







  return (
    <React.Fragment>
      <div className="flex gap-4 items-center">
        <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>



      <AvatarGroup isBordered>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

      </AvatarGroup>




    </React.Fragment>
  )
  
  })
  

export default Tavatar;