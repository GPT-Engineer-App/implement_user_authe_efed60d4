import React, { useState, useEffect } from "react";
import { Box, Avatar, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const ProfileCard = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [followings, setFollowings] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "47e2a82623msh562f6553fe3aae6p10b5f4jsn431fcca8b82e",
          "X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch("https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=veitgram&response_type=short&corsEnabled=false", options);
        const data = await response.json();
        const profile = data[0];
        setUsername(profile.username || "");
        setFollowers(profile.follower_count ? profile.follower_count.toLocaleString() : "");
        setFollowings(profile.following_count ? profile.following_count.toLocaleString() : "");
        setProfileImageUrl(profile.profile_pic_url || "");
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box px={{ base: 4, md: 8 }} py={"5"} shadow={"xl"} border={"1px solid"} borderColor={useColorModeValue("gray.800", "gray.500")} rounded={"lg"} bg={cardBg} textAlign="center">
      <Avatar size="xl" name={username} src={profileImageUrl} />
      <VStack spacing={2}>
        <Text fontWeight={"medium"}>{username}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          Followers: {followers}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          Followings: {followings}
        </Text>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
