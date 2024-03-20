import React from "react";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/react";
import { animals } from "../data";

const Tautocomplete = () => {
 
    return (
        <React.Fragment>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Autocomplete 
          label="Select an animal" 
          className="max-w-xs" 
        >
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          label="Favorite Animal"
          placeholder="Search an animal"
          className="max-w-xs"
          defaultItems={animals}
        >
          {(item) => 
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
      </React.Fragment>
      
    );
  }
  export default Tautocomplete