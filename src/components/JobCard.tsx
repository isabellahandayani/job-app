import { Flex, Text, Box, Spacer } from "@chakra-ui/react";
import TimeAgo from "react-timeago";

interface IJobs {
  title: string;
  company: string;
  location: string;
  type: string;
  created_at: string;
}

const JobCard = ({ title, company, location, type, created_at }: IJobs) => {
  return (
    <Flex p={2}>
      <Box>
        <Text>{title}</Text>
        <Text>
          {company} - {type}
        </Text>
      </Box>
      <Spacer />
      <Box textAlign={"right"}>
        <Text>{location}</Text>
        <TimeAgo date={created_at} />
      </Box>
    </Flex>
  );
};

export default JobCard;
