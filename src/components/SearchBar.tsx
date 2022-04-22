import {
  Wrap,
  Input,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

interface ISearch {
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  type: boolean;
  setType: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
}

const SearchBar = ({
  desc,
  setDesc,
  location,
  setLocation,
  type,
  setType,
  handleClick,
}: ISearch) => {
  return (
    <Wrap
      direction={"row"}
      mt={5}
      align="center"
      justify={"center"}
      spacing={"50px"}
    >
      <WrapItem w={400}>
        <FormControl>
          <FormLabel>Job Description</FormLabel>
          <Input
            placeholder="Filter by title, benefits, companies, experties"
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormControl>
      </WrapItem>
      <WrapItem w={400}>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            placeholder="Filter by city, state, zip code or country"
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
      </WrapItem>
      <WrapItem w={170}>
        <Checkbox onChange={() => setType(!type)}>Full Time Only</Checkbox>
      </WrapItem>
      <WrapItem>
        <Button
          p={5}
          color="white"
          backgroundColor={"grey"}
          onClick={handleClick}
        >
          Search
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export default SearchBar;
