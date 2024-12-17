import { Grid, GridItem } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import "../../css/gridbodi.css"



export default function Bodi(){
    return(
        <Provider>
            <Grid
            templateColumns="repeat(auto-fit,200px)"
            gap={6}
            className="gridbodi"
            >
                {[
                    "pexels-aleksandra-larry-77353944-29715252.jpg",
                    "pexels-anyela-malaga-341169564-29683927.jpg",
                    "pexels-holodna-29498917.jpg",
                    "pexels-anyela-malaga-341169564-29683927.jpg",
                    "pexels-eugenia-sol-1769194548-29749744.jpg",

                ].map((src,index) => (
                    <GridItem key={index} className="gridItem" style={{ border: "1px solid" }}>
                        <img src={`/images/${src}`} className="imgGrid" />
                        <h1>hi</h1>
                    </GridItem>
                ))}
            </Grid>
        </Provider>
    )
}