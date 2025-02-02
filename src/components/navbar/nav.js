import { Button, Flex } from "@chakra-ui/react";import { useEffect } from "react"; 

const buttonStyles = {
    background: 'green',
    padding: '5px',
    borderRadius: '10px',
    bg: 'transparent',
    color: 'white',
    _hover: {color:'black', bg:'white'}
    
};

const NavbarStyle ={
    width: '100vw',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 11,
    paddingTop: '20px',
}

const boxStyles = {
    width: '80%',
    padding: '20px',
    height: '50px',
    color: 'white',
    justifyContent: 'space-between',
    borderRadius: '20px',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    background: 'rgb(0,0,0,0.2)',
};


export default function Navbar(){

    useEffect(()=>{
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap";
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    },[]);
    
    return <Flex
    {...NavbarStyle}
    >

    <Flex
        {...boxStyles}
        >

            <div style={{fontFamily:'Pixelify Sans', fontSize:'1.5rem'}}>
                G(o)G
            </div>

            <Flex
            justifyContent="space-between"
            gap="20px"
            >
                <Button
                {...buttonStyles}
                >
                    Sign Up
                </Button>

                <Button
                {...buttonStyles}
                >
                    Log In
                </Button>

                <Button
                {...buttonStyles}
                >
                    Blog
                </Button>

            </Flex>

        </Flex>

    </Flex>
}