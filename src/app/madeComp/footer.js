import { Provider } from '@/components/ui/provider';
import "../../css/footer.css";
import { 
    Button, 
    Card, 
    Image, 
    Text,
    Badge } from "@chakra-ui/react"

import { 
    PiLinkedinLogo,
    PiGithubLogo
 } from "react-icons/pi";


function Box(values){
    return(
    <>
    
    <Card.Root overflow="hidden" padding="10px" backgroundColor="black" border="none">
        <Image
          src={values.link}
          alt={values.alt}
          height="230px"
          width="200px"
        />
        <Card.Body gap="2" padding="10px" color="white">
          <Card.Title>{values.title}</Card.Title>
          <Card.Description style={{display:"flex"}}>
            <Badge padding="5px" colorPalette="yellow">{values.description}</Badge>
            <div style={{display:"flex", gap:"5px", padding:"5px", color:"white"}} > 
                <PiLinkedinLogo style={{ width: "20px", height: "auto" }}/><PiGithubLogo style={{ width: "20px", height: "auto" }}/>
            </div>
            
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

                <div className='mod'>Mods</div>
                
                <Box 
                    link = "images/pexels-holodna-29498917.jpg"
                    title = "Akshat Pasbola"
                    alt = "Frontend Developer"
                    description= "Developer"
                />
                

                <Box 
                    link = "images/pexels-lucadross-29525865.jpg"
                    title = "Harsh Chandra"
                    alt = "Frontend Developer"
                    description= "Developer"
                />

                <Box 
                    link = "images/pexels-artem-yellow-422929671-15193578.jpg"
                    title = "Sanat"
                    alt = "Frontend Developer"
                    description= "Developer"
                />
                
            </div>
    </Provider>
    );
}