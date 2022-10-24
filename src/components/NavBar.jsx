import { Box, Text, Link } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg="black" w="100%" p={4} color="white">
      <h3>Mi tienda</h3>
      <Link href="/">
        <Text fontSize="16px" color="pink">
          Categoría A
        </Text>
      </Link>
      <Link href="/">
        <Text fontSize="16px" color="yellow">
          Categoría B
        </Text>
      </Link>
      {/* Importar y renderizar  acá el CartWidget */}
    </Box>
  );
}

export default NavBar;
