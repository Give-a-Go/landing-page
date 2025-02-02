import { Flex } from "@chakra-ui/react";

export default function Navbar(){
    return <>
    <Flex
    width="100vw"
    justifyContent="center"
    paddingTop="20px">

    <Flex
        width = "80%"
        padding="20px"
        height="50px"
        color="white"
        justifyContent="space-between"
        borderRadius="20px"
        alignItems="center"
        border="1px solid white"
        >
            <div className="logo">
                LOGO
            </div>
            <Flex className="links"
            justifyContent="space-between"
            gap="20px"
            >
                <Flex
                border="1px solid"
                // background="green"
                padding="5px"
                borderRadius="5px"
                >
                    Sign Up
                </Flex>
                <Flex
                border="1px solid"
                // background="red"
                padding="5px"
                borderRadius="5px"
                >
                    Log In
                </Flex>

                <Flex
                border="1px solid"
                // background="red"
                padding="5px"
                borderRadius="5px"
                >
                    Blog
                </Flex>
            </Flex>

        </Flex>

    </Flex>
        
    </>
}