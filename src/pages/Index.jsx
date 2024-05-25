import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>
            Featured Article Headline
          </Heading>
          <Text fontSize="lg">
            This is a brief summary of the featured article. It provides an overview of the main points and entices the reader to click through to read more.
          </Text>
        </Container>
      </Box>

      {/* Additional Articles Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
              <Text>
                Brief summary of the article content. This should be a short snippet that gives an idea of what the article is about.
              </Text>
            </Box>
            <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
              <Text>
                Brief summary of the article content. This should be a short snippet that gives an idea of what the article is about.
              </Text>
            </Box>
            <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
              <Text>
                Brief summary of the article content. This should be a short snippet that gives an idea of what the article is about.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;