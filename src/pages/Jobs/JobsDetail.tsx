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
        boxShadow={"lg"}
        p={10}
        borderRadius={20}
        mt={10}
        mb={10}
      >
        <Box width={"60%"}>
          <Box>
            <Text color="grey">
              {detail.type} / {detail.location}
            </Text>
            <Heading>{detail.title}</Heading>
          </Box>
          <Box>{parse(detail.description)}</Box>
        </Box>
        <Spacer />
        <Box width={"30%"} p={4}>
          <Box boxShadow={"lg"} borderRadius={10} p={4}>
            <Heading as="h3" size="md" p={2}>
              {detail.company}
            </Heading>
            <Image
              src={detail.company_logo}
              fallbackSrc={
                "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
              }
            />
            <Box mt={2}>
              <Link href={detail.company_url} color="blue">
                {detail.company_url}
              </Link>
            </Box>
          </Box>
          <Box mt={4} p={4} boxShadow={"lg"} borderRadius={20}>
            <Heading as="h3" size="md" borderBottom="1px" p={2}>
              How to Apply
            </Heading>
            <Text p={2}>{parse(detail.how_to_apply)}</Text>
          </Box>
        </Box>
      </Flex>
    )
  );
};

export default JobsDetail;
