import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Registering:", { email, username, password });
  };

  return (
    <Box p={8}>
      <h1>Registration Page</h1>
      <form onSubmit={handleRegister}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Register;
