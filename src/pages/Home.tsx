import { Box, Button, IconButton } from "@chakra-ui/react"
import { memo } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import Products from "../components/Products"
import Carousel from "../components/Carousel";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const items = [
    <img key="1" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner1.jpeg" alt="carousel item1"/>,
    <img key="2" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner2.jpeg" alt="carousel item2"/>,
    <img key="3" className="h-64 w-[100%] bg-red-500 flex items-center justify-center text-white" src="barner3.jpeg" alt="carousel item3"/>,
  ];

const Page = () => {
    const navigate = useNavigate();
    const goToOrdersPage = () => {
        navigate('/orders');
    }
    return <ErrorBoundary>
        <Box>
            <Carousel items={items} />
        </Box>
        <Box className="w-[90%] mt-3 mb-[50px] p-2">
            <Button onClick={goToOrdersPage} float={'right'} variant={'outline'} colorScheme="gray" aria-label="View Orders">View your Orders</Button>
        </Box>
        <Box className="mt-[30px]">
            <Products />
        </Box>
    </ErrorBoundary>
}

const HomePage = memo(Page)
export default HomePage