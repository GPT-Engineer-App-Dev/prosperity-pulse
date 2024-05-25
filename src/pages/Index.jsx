import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/news" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            News
          </Link>
          <Link as={RouterLink} to="/markets" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Markets
          </Link>
          <Link as={RouterLink} to="/opinion" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/more" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            More
          </Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Article
        </Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 1
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 2
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 3
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
        <Text>
          <Link as={RouterLink} to="/contact" p={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Contact Information
          </Link>
          |
          <Link as={RouterLink} to="/privacy" p={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Privacy Policy
          </Link>
          |
          <Link as={RouterLink} to="/terms" p={2} _hover={{ textDecoration: "none", color: "gray.400" }}>
            Terms of Service
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default Index;