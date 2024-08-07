import { Box, Button, Center, IconButton } from "@chakra-ui/react"
import ErrorBoundary from "./ErrorBoundary"
import { memo, useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { ProductType, ReviewType } from "../interface";
import { useParams } from "react-router-dom";


const Page = () => {
    const { id } = useParams();
    const savedProducts = sessionStorage.getItem("E_STORE_PRODUCTS");
    const [count, setCount] = useState(0);

    const [product, setProduct] = useState<ProductType | null>(null);
    useEffect(() => {
        if (savedProducts) {
            const p = JSON.parse(savedProducts);
            const sp = p.filter((item: ProductType) => item.product_id === Number(id));
            if (sp.length) {
                setProduct(sp[0]);
            }
        }
    }, []);

    const addItem = () => {
        setCount((prev) => prev+1);
    }

    const removeItem = () => {
        if(count < 1) return;
        setCount((prev) => prev-1);
    }

    return <ErrorBoundary>
        {product ? <Box className="pb-[100px]">
            <Box className="container">
                <Center className="item">
                    <img className="w-[300px] h-[300px] object-contain" src={`/${product.image.split("/").pop()}`} alt={product.name} />
                </Center>
                <Box className="item flex flex-column items-center content-center">
                    <Box>
                        <Box>Name: {product.name}</Box>
                        <Box>Price: {product.price}</Box>
                        <Box>Deacription: {product.description}</Box>
                        <Box>Brand: {product.brand}</Box>
                        <Box>Rating: {product.rating}</Box>
                    </Box>
                </Box>
            </Box>
            <Box className="p-3 mt-3" borderTop={'1px solid gainsboro'}>
                <Box className="flex gap-[10px]">
                    <Box className="text-[20px]">Qty: {count}</Box>
                    <Box className="ml-[50px]"></Box>
                    <IconButton aria-label="Increment" onClick={addItem} icon={<FaPlus />}></IconButton>
                    <IconButton aria-label="Decrement" onClick={removeItem} icon={<FaMinus />}></IconButton>
                    <Button variant={'outline'} colorScheme="gray">Add to Cart</Button>
                </Box>

                <Box className="text-[17px] p-2">Reviews</Box>
                {product.reviews && <Box className="pl-3">
                    {product.reviews.map((review: ReviewType) => <Box>
                        <Box>{review.comment}</Box>
                        <Box className="pl-2 text-[12px] text-red-200">User rating {review.rating}</Box>
                    </Box>)}
                </Box>}
            </Box>
        </Box> : <Box>No product found</Box>}
    </ErrorBoundary>
}

const Details = memo(Page);
export default Details;