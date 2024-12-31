import { Provider } from '@/components/ui/provider';
import "../../css/footer.css";
import { 
    Button, 
    Card, 
    Image, 
    Text,
    Badge } from "@chakra-ui/react"


function Box(values){
    return(
    <>
    
    <Card.Root maxW="sm" overflow="hidden" padding="10px" backgroundColor="grey" border="none">
        <Image
          src={values.link}
          alt={values.alt}
          height="200px"
          width="200px"
        />
        <Card.Body gap="2" padding="10px">
          <Card.Title>{values.title}</Card.Title>
          <Card.Description >
            <Badge padding="5px" colorPalette="green">{values.description}</Badge>
            
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </>
    )
}

export default function Footer() {
    return (
        <Provider>
            <div className="footer">

                <div className='mod'>MODs</div>
                
                <Box 
                    link = "images/pexels-holodna-29498917.jpg"
                    title = "Akshat Pasbola"
                    alt = "Frontend Developer"
                    description= "Developer"
                >
                </Box>

                <Box 
                    link = "images/pexels-lucadross-29525865.jpg"
                    title = "Harsh Chandra"
                    alt = "Frontend Developer"
                    description= "Developer"
                >
                </Box>

                <Box 
                    link = "images/pexels-artem-yellow-422929671-15193578.jpg"
                    title = "Sanat"
                    alt = "Frontend Developer"
                    description= "Developer"
                >
                </Box>
            </div>
    </Provider>
    );
}