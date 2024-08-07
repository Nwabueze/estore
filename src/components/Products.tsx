import { Box, Flex } from "@chakra-ui/react"
import ErrorBoundary from "./ErrorBoundary"
import { useMediaQuery } from "react-responsive"
import React, { memo, startTransition, useEffect, useState } from "react";
import { getRequest } from "../utils";
import Product from "./Product";
import { ProductType } from "../interface";

const Page = () => {
    const [productsList, setProductsList] = useState<ProductType[]>([]);

    useEffect(() => {
        getRequest("products",[]).then((res) => {
            startTransition(() => {
                if(res?.data){
                    setProductsList(res?.data);
                    sessionStorage.setItem("E_STORE_PRODUCTS", JSON.stringify(res?.data))
                }
            });
        }).catch(() => setProductsList([]));
    },[]);

    return <ErrorBoundary>
        
        <Box className="container ml-auto mr-auto pb-[100px]">
            {productsList.map(item => <React.Fragment key={item.product_id}>
                <Product product={item}/>
            </React.Fragment>)}
        </Box>
    </ErrorBoundary>
}

const Products = memo(Page);
export default Products