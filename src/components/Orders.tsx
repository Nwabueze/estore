import { Box } from "@chakra-ui/react"
import ErrorBoundary from "./ErrorBoundary"
import { memo, startTransition, useEffect, useState } from "react"
import { getRequest } from "../utils";
import OrderTable from "./OrderTable";

type ItemType = { "product_id": number, "quantity": number }
type OrderType = { "order_id": number, "user_id": number, "items": ItemType[], "total_price": number, "status": string }
const Page = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);
    useEffect(() => {
        getRequest("orders",[]).then((res) => {
            startTransition(() => {
                if(res?.data){
                    setOrders(res?.data);
                }
            });
        }).catch(() => null);
    },[]);

    return <ErrorBoundary>
        <Box>
            <OrderTable orders={orders} itemsPerPage={2} />
        </Box>
    </ErrorBoundary>
}

const Orders = memo(Page);
export default Orders;