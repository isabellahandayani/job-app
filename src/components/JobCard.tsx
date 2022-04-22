import { Flex, Text, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

interface IJobs {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  created_at: string;
}

const JobCard = ({ id, title, company, location, type, created_at }: IJobs) => {
  return (
    <Link to={`/detail/${id}`}>
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
    </Link>
  );
};

export default JobCard;
