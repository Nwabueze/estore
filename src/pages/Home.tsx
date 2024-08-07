import { Box } from "@chakra-ui/react"
import { memo } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import Products from "../components/Products"
import Carousel from "../components/Carousel";

const items = [
    <img key="1" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner1.jpeg" alt="carousel item1"/>,
    <img key="2" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner2.jpeg" alt="carousel item2"/>,
    <img key="3" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner3.jpeg" alt="carousel item3"/>,
  ];

const Page = () => {
    
    return <ErrorBoundary>
        <Box>
            <Carousel items={items} />
        </Box>
        <Box className="mt-[30px]">
            <Products />
        </Box>
    </ErrorBoundary>
}

const HomePage = memo(Page)
export default HomePage