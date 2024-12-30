import { Center, Flex } from "@chakra-ui/react";
import "../../css/luma.css"
import { Provider } from "@/components/ui/provider";

export default function Luma(){
    return(
        <div className="luma">

            <iframe
                className="lumaEvent"
                src="https://lu.ma/embed/event/evt-Y4HDJMBpUaF3jQJ/simple"
                width="800"
                height="450"
                frameBorder="0"
                style={{border: "5px solid #bfcbda88", borderRadius: "20px"}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                />
        </div>
        
    )
}