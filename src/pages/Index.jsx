import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Apple World
        </Heading>
        <Box boxSize="200px">
          <Image src="/images/apple-logo.png" alt="Apple Logo" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the amazing world of apples. Learn about different varieties, health benefits, and delicious recipes.
        </Text>
        <Button colorScheme="red" size="lg" leftIcon={<FaApple />}>
          Learn More
        </Button>
      </VStack>
      <VStack spacing={6} mt={10}>
        <Heading as="h2" size="xl" textAlign="center">
          History of Apples
        </Heading>
        <Box boxSize="200px">
          <Image src="/images/history-of-apples.jpg" alt="History of Apples" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and Christian traditions.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;