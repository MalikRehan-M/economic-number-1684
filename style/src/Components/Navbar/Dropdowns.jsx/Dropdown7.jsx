import { Flex, VStack, Text ,Image} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function Dropdown7() {
  return (
    <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo7" bg="white" right="2px" top="40px" position="absolute" w="800px" minH="200px">
    <Flex flexDirection="column" gap="5px">
        <NavLink style={{color:"#670b19"}}>CLOTHING</NavLink>
        <NavLink>Kurta Pajama</NavLink>
        <NavLink>Dhoti Kurta</NavLink>
        <NavLink>Nehru Jacket</NavLink>
        <NavLink>Kurtas</NavLink>
        <NavLink>Blazers</NavLink>
        <NavLink>Sherwani</NavLink>
        <NavLink>Pathani Suits</NavLink>
        <NavLink>Bandhgala</NavLink>
        <NavLink>Dhoti</NavLink>
    </Flex>
    <Flex flexDirection="column" gap="5px">
        <NavLink style={{color:"#670b19"}}>JEWELLERY</NavLink>
        <NavLink>Earrings</NavLink>
        <NavLink>Studs</NavLink>
        <NavLink>Bracelets</NavLink>
        <NavLink>Pendants</NavLink>
    </Flex>
    <Flex flexDirection="column" gap="5px">
        <NavLink style={{color:"#670b19"}}>ACCESSORIES</NavLink>
        <NavLink>Turbans</NavLink>
        <NavLink>Cufflinks</NavLink>
    </Flex>
    <Flex flexDirection="column" gap="5px">
        <NavLink style={{color:"#670b19"}}>FOOTWEAR</NavLink>
        <NavLink>Casual</NavLink>
    </Flex>
    <Image src="https://assets0.mirraw.com/menus/14/mens-apparels__main.jpg?1524217138" />
</Flex>
  );
}
