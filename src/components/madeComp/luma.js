import { Center, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";

export default function Luma() {
  return (
    <div className="luma snap-item">
      <iframe
        className="lumaEvent"
        src="https://lu.ma/embed/event/evt-Y4HDJMBpUaF3jQJ/simple"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}
