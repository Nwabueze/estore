import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary';

interface CarouselProps {
    items: React.ReactNode[];
    interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(handleNext, interval);
        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [currentIndex, interval]);

    return (
        <ErrorBoundary>
            <Box className="relative w-full overflow-hidden">
                <Box className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <Box key={index} className="w-full flex-shrink-0">
                            {item}
                        </Box>
                    ))}
                </Box>
                <Box className='h-0 w-[100%] flex flex-row pl-2 pr-2'>
                    <IconButton
                        aria-label="Previous"
                        icon={<FaChevronLeft />}
                        onClick={handlePrev}
                        className="block relative bottom-[100px] transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700"
                    />
                    <Box className="ml-auto"></Box>
                    <IconButton
                        aria-label="Next"
                        icon={<FaChevronRight />}
                        onClick={handleNext}
                        className="block relative bottom-[100px] transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700"
                    />
                </Box>
            </Box>
        </ErrorBoundary>
    );
};

export default Carousel;
