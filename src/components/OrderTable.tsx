import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Center, Checkbox } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { putRequest } from '../utils';

interface Item {
    product_id: number;
    quantity: number;
}

interface Order {
    order_id: number;
    user_id: number;
    items: Item[];
    total_price: number;
    status: string;
}

interface OrderTableProps {
    orders: Order[];
    itemsPerPage?: number;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
    const [selectedOrderId, setSelectedOrderId] = useState<number>(0);
    const [target, setTarget] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const handleChangePage = (newPage: number) => {
        const newTotalPages = Math.ceil(filteredOrders.length / itemsPerPage);
        if (newPage > 0 && newPage <= newTotalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleStatusChange = (status: string) => {
        setSelectedStatus(status);
        setCurrentPage(1); // Reset to the first page when status changes
    };

    const handleSelectOrder = (e:any, order_id: number) => {
        // unselect the previous item
        document.getElementById(`o${selectedOrderId}`)?.click();
        if(e.target.checked){
            setSelectedOrderId(order_id);
        }else{
            setSelectedOrderId(0);
        }
    }

    // Update the status of selected order
    const updateOrderStatus = () => {
        const s = orders.filter((order) => order.order_id === selectedOrderId);
        if(!s.length) return;
        const data = { oder_id: s[0].order_id, user_id: s[0].user_id, status: "Picked",  };
        setLoading(true);
        putRequest("orders", data, "").then(() => {
            setLoading(false);
            setSelectedOrderId(0);
            // unselect the order after successful request
            document.getElementById(`o${selectedOrderId}`)?.click();
            setTarget(null);
        }).catch(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        if (selectedStatus) {
            setFilteredOrders(orders.filter(order => order.status === selectedStatus));
        } else {
            setFilteredOrders(orders);
        }
    }, [selectedStatus, orders]);

    
    const currentOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const uniqueStatuses = Array.from(new Set(orders.map(order => order.status)));

    return (
        <Box className="w-full mt-5 p-3">
            <Box className='flex'>
                <Box className='w-[150px]'></Box>
                <Box className='ml-auto'></Box>
                <Box className='w-[200px] p-2'>
                    <Select
                        onChange={(e) => handleStatusChange(e.target.value)}
                        value={selectedStatus}
                    >
                        <option value="">Filter by Status</option>
                        {uniqueStatuses.map((status, index) => (
                            <option key={index} value={status}>
                                {status}
                            </option>
                        ))}
                    </Select>
                </Box>
            </Box>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Order ID</Th>
                        <Th>User ID</Th>
                        <Th>Items</Th>
                        <Th>Total Price</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {currentOrders.map((order) => (
                        <Tr key={order.order_id}>
                            <Td><Checkbox id={`o${order.order_id}`} className='mr-3 mt-[2px]' onChange={(e) => handleSelectOrder(e, order.order_id)} /></Td>
                            <Td>{order.order_id}</Td>
                            <Td>{order.user_id}</Td>
                            <Td>
                                {order.items.map((item, index) => (
                                    <Box key={index}>
                                        Product ID: {item.product_id}, Quantity: {item.quantity}
                                    </Box>
                                ))}
                            </Td>
                            <Td>${order.total_price.toFixed(2)}</Td>
                            <Td>{order.status}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            
            {/** Updating order status */}
            {selectedOrderId > 0 && <Box className='mt-2 mb-2 p-2'>
                <Box>You've selected order with OrderId {selectedOrderId}</Box>
                <Button onClick={updateOrderStatus} variant={'outline'} colorScheme='gray' isLoading={loading} loadingText="Updating...">Update as Picked</Button>
            </Box>}

            <Box className='w-[300px] flex flex-row gap-[15px] ml-auto mr-auto mt-[50px]'>
                <Box onClick={() => handleChangePage(currentPage - 1)} className='pointer p-1 w-[25px] h-[25px] flex flex-col align-center justify-center'><Center><FaChevronLeft /></Center></Box>
                <React.Fragment>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => <Box onClick={() => handleChangePage(page)} className='p-1 w-[25px] h-[25px] pointer rounded-full border flex flex-col align-center justify-center' backgroundColor={page === currentPage ? "blue" : "white"} color={page === currentPage ? "white" : "gray"} key={page}><Center>{page}</Center></Box>)}
                </React.Fragment>
                <Box onClick={() => handleChangePage(currentPage + 1)} className='pointer p-1 w-[25px] h-[25px] flex flex-col align-center justify-center'><Center><FaChevronRight /></Center></Box>
            </Box>
        </Box>
    );
};

export default OrderTable;
