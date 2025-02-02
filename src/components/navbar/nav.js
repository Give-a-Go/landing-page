import { Flex } from "@chakra-ui/react";

export default function Navbar(){
    return <>
        <Flex
        width = "100vw"
        background="white"
        padding="10px"
        height="50px"
        color="black"
        justifyContent="space-between"

        >
            <div className="logo">
                hi
            </div>
            <Flex className="links"
            >
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
            </Flex>

        </Flex>
    </>
}