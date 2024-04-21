import React from "react";
import { Box, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, useColorModeValue, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import AreaGraph from "../components/AreaGraph";

import { FaChartLine, FaUserFriends, FaShoppingCart, FaDollarSign } from "react-icons/fa";

import ProfileCard from "../components/ProfileCard";

const Index = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" pt="100px" pb={5}>
        <Heading as="h1" size="xl" mb={6}>
          Analytics Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={5}>
          <ProfileCard username="John Doe" followers="5.2K" followings="1.2K" imageUrl="https://bit.ly/dan-abramov" />
          <StatsCard icon={<FaChartLine size="3em" />} title="Total Visitors" stat="34,254" progress={{ value: 70, label: "Since last month" }} />
          <StatsCard icon={<FaUserFriends size="3em" />} title="New Users" stat="1,200" progress={{ value: 30, label: "Since last month" }} />
          <StatsCard icon={<FaShoppingCart size="3em" />} title="Total Sales" stat="938" progress={{ value: 80, label: "Since last month" }} />
          <StatsCard icon={<FaDollarSign size="3em" />} title="Total Revenue" stat="$48,390" progress={{ value: 45, label: "Since last month" }} />
        </SimpleGrid>
        <Heading as="h2" size="lg" my={6}>
          Growth in Days
        </Heading>
        <Box mt={10}>
          <AreaGraph />
        </Box>
      </Container>
    </>
  );
};

const StatsCard = ({ title, stat, icon, progress }) => {
  const { value, label } = progress;
  return (
    <Stat px={{ base: 4, md: 8 }} py={"5"} shadow={"xl"} border={"1px solid"} borderColor={useColorModeValue("gray.800", "gray.500")} rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatHelpText>
            <StatArrow type={value > 50 ? "increase" : "decrease"} />
            {label}
          </StatHelpText>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
      <Box>
        <Progress size="sm" colorScheme={value > 50 ? "green" : "red"} value={value} />
      </Box>
    </Stat>
  );
};

// Removed the local ProfileCard component

export default Index;
