import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { getDetail } from "../../service/JobsServices";
import { useParams } from "react-router-dom";

const JobsDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      let data = await getDetail(id);
      setDetail(data);
    };
    fetchDetail();
  }, [id]);

  return (
    detail && (
      <Flex
        width={"90%"}
        margin="auto"
        boxShadow={"md"}
        p={10}
        borderRadius={10}
        mt={10}
      >
        <Box width={"60%"}>
          <Box>
            <Text>
              {detail.type} / {detail.location}
            </Text>
            <Heading>{detail.title}</Heading>
          </Box>
          <Box>{parse(detail.description)}</Box>
        </Box>
        <Spacer />
        <Box width={"30%"} p={4}>
          <Box boxShadow={"md"}>
            <Heading as="h3" size="md" p={2} borderRadius={5}>
              {detail.company}
            </Heading>
            <Image
              src={detail.company_logo}
              fallbackSrc={
                "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
              }
            />
            <Box p={2}>
              <Link p={2} href={detail.company_url} color="blue">
                {detail.company_url}
              </Link>
            </Box>
          </Box>
          <Box mt={4} p={4} boxShadow={"md"} borderRadius={5}>
            <Heading as="h3" size="md">
              How to Apply
            </Heading>
            <Text>{parse(detail.how_to_apply)}</Text>
          </Box>
        </Box>
      </Flex>
    )
  );
};

export default JobsDetail;
