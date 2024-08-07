import { Box, Button, Center } from "@chakra-ui/react"
import { memo } from "react"
import ErrorBoundary from "./ErrorBoundary";
import { ProductType } from "../interface";
import { useNavigate } from "react-router-dom";

type PageProp = { product: ProductType }
const Page = ({ product }: PageProp) => {
    const navigate = useNavigate();
    const handlePage = (id: number) => {
        navigate(`/details/${id}`);
    }

    return <ErrorBoundary>
        <Box className="item border rounded pointer">
            <Center className="p-1">
                <img className="w-[250px] h-[250px] object-contain" src={`/${product.image.split("/").pop()}`} alt={product.name} />
            </Center>
            <Box className="p-1">
                <Box className="flex flex-row p-2">
                    <Box className="p-1">{product.name}</Box>
                    <Box className="ml-auto"></Box>
                    <Box className="text-[12px] text-red-400">Ratings {product.rating}</Box>
                </Box>
                <Box className="flex gap-[10px] pl-3">
                    <Box>${product.discount > 0 ? product.price - product.discount : product.price}</Box>
                    {product.discount > 0 && <Box className="line-through text-[12px] text-red-400">${product.price}</Box>}
                </Box>
            </Box>
            <Box className="flex gap-[15px] p-2 mt-2" borderTop="1px solid gainsboro">
                <Button className="text-gray-400 text-[12px]" variant="outline" colorScheme="gray">Add to Cart</Button>
                <Button onClick={() => handlePage(product.product_id)} className="text-gray-400 teext-[12px]" variant="outline" colorScheme="gray">More Details</Button>
            </Box>
        </Box>
    </ErrorBoundary>
}

const Product = memo(Page);
export default Product;