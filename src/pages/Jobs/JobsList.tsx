import { Box, Heading, Stack, Spinner, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import JobCard from "../../components/JobCard";
import SearchBar from "../../components/SearchBar";
import { getList } from "../../service/JobsServices";

const JobsList = () => {
  const [list, setList] = useState<any[]>([]);
  const [moreItem, setMoreItem] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [desc, setDesc] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [type, setType] = useState<boolean>(false);
  const [isSearch, setSearch] = useState<boolean>(false);

  const fetchList = async () => {
    let data = await getList({
      location: location,
      description: desc,
      type: type,
    });
    setList(data);
  };

  const handleClick = () => {
    if (desc || location || type) {
      setSearch(true);
    }
    fetchList();
  };

  const loadPage = () => {
    setTimeout(() => {
      getList({ page: page })
        .then((res) => {
          if (res.status === 500) {
            setMoreItem(false);
            return;
          } else {
            setMoreItem(true);
          }
          const newList = list.concat(res);
          setList(newList);
          setPage(page + 1);
        })
        .catch((_) => {
          setMoreItem(false);
        });
    }, 1500);
  };

  useEffect(() => {
    document.title = "Github Jobs - Jobs List";
  }, []);

  return (
    <Box width={"80%"} margin="auto">
      <SearchBar
        {...{
          desc,
          setDesc,
          location,
          setLocation,
          type,
          setType,
          handleClick,
        }}
      />
      <Stack p={4} boxShadow={"2xl"} borderRadius={20} mt={10} mb={10}>
        <Heading size="lg">
          {isSearch ? `Showing ${list.length} jobs` : "Jobs List"}
        </Heading>
        <InfiniteScroll
          threshold={0}
          pageStart={0}
          loadMore={loadPage}
          hasMore={moreItem}
          loader={
            <Center>
              <Spinner />
            </Center>
          }
        >
          {list &&
            list.map((item, index) => {
              return <JobCard key={index} {...item} />;
            })}
        </InfiniteScroll>
      </Stack>
    </Box>
  );
};

export default JobsList;
