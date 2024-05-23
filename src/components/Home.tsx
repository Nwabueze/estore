import { Box, Flex, Img, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 800 })
    const [selected, setSelected] = useState(-1);

    const loanItem1 = [
        { title: "Instant Approval", desc: "Get approved for loans in just 24 hours!", icon: "", bg: "./rec1.png" },
        { title: "Flexible Repayment", desc: "Choose from 3 to 24 months repayment terms.", icon: "", bg: "./rec2.png" },
        { title: "Secure and Safe", desc: "Industry-standard security measures to protect your data.", icon: "", bg: "./rec3.png" },
    ]

    const loanItem2 = [
        { title: "Virtual Card", desc: "Generate a virtual card for online transactions, with a unique card", icon: "", bg: "./rec4.png" },
        { title: "Multi-Channel Support", desc: "24/7 support via phone, email, chat, or mobile app.", icon: "./faq.png", bg: "./rec5.png" },
        { title: "Bill Payment", desc: "Pay bills to over 100 billers, including utility companies, insurance providers, and more.", icon: "./bill.png", bg: "./rec6.png" },
    ]

    const trustItem = [
        [
            { title: "Secure Badge", desc: "Generate a virtual card for online transactions, with a unique card", icon: "" },
            { title: "Insurance", desc: "Cash Deposits are covered and protected by NDIC", icon: "./trust1.png" },
            { title: "Customer Support", desc: "24/7 support via phone, email, or chat", icon: "./trust2.png" },
        ],
        [
            { title: "Partnerships", desc: "Trusted partners with leading financial institutions", icon: "./trust3.png" },
            { title: "Regulatory Compliance", desc: "All partners are duly licensed and regulated by CBN", icon: "./trust4.png" },
            { title: "Industry Recognition", desc: "Winner of the 2022 Fintech Innovation Award", icon: "./trust5.png" },
        ]
    ];

    const commentsList = [
        {
            title: "How do I get started with Easyspend?",
            desc: "Getting started with Easyspend is easy! Simply sign up for an account, link your preferred payment method (such as a credit or debit card), and verify your identity. Once you've completed these steps, you can start using Easyspend to make payments online or in-person."
        },
        {
            title: "What kind of support does Easyspend offer ?",
            desc: "Getting started with Easyspend is easy! Simply sign up for an account, link your preferred payment method (such as a credit or debit card), and verify your identity. Once you've completed these steps, you can start using Easyspend to make payments online or in-person."
        },
        {
            title: "Can I use Easyspend for online and in-person transactions?",
            desc: "Getting started with Easyspend is easy! Simply sign up for an account, link your preferred payment method (such as a credit or debit card), and verify your identity. Once you've completed these steps, you can start using Easyspend to make payments online or in-person."
        },
        {
            title: "Are there any fees associated with using Easyspend?",
            desc: "Getting started with Easyspend is easy! Simply sign up for an account, link your preferred payment method (such as a credit or debit card), and verify your identity. Once you've completed these steps, you can start using Easyspend to make payments online or in-person."
        }
    ]

    const contactMeList = [
        { icon: "./send.png", desc: "EasySpend.cc" },
        { icon: "./mail.png", desc: "customer.support@easyspend.cc" },
        { icon: "./locate.png", desc: "5 Ojo Peters Crescent, Amuwo-Odofin Lagos, Nigeria" }
    ]

    return <Box className="bg-gradient-to-b from-fuchsia-200 to white">
        <Flex className="pt-5 pl-3 pr-3">
            <Box>Home</Box>
            <Box className="ml-auto"></Box>
            <Box>Terms & conditions</Box>
        </Flex>
        <Box className="mt-3 rounded-tl-2xl rounded-tr-2xl bg-gray-50 w-full p-2 md:p-4 bg-gradient-to-t from-fuchsia-100">
            {isMobile && <Box className="visible md:visible rounded-full ml-auto mr-auto" p={1} border="1px solid purple" w="100%">
                <Flex className="gap-[15px]">
                    <Flex className="pt-3 pb-3 pl-2" gap="15px">
                        <Box className="cursor-pointer text-[11px] md:text-base">Why EasySpend</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">Features</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">FAQ</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">Contact</Box>
                    </Flex>
                    <Box className="ml-auto"></Box>
                    <Box className="rounded-full bg-purple-500 pl-5 pr-5 pt-3 pb-3 text-white">Submit</Box>
                </Flex>
            </Box>}
            {!isMobile && <Box className="rounded-full ml-auto mr-auto" p={1} border="1px solid purple" w="80%">
                <Flex gap="15px">
                    <Flex className="items-center content-center pl-2"><Img src="./searchLogo.png" className="w-[150px] h-[40px] object-contain" /></Flex>
                    <Flex className="pt-3 pb-3" gap="15px">
                        <Box className="cursor-pointer text-[11px] md:text-base">Why EasySpend</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">Features</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">FAQ</Box>
                        <Box className="cursor-pointer text-[11px] md:text-base">Contact</Box>
                    </Flex>
                    <Box className="ml-auto"></Box>
                    <Box className="rounded-lg md:rounded-full bg-purple-500 pl-5 pr-5 pt-3 pb-3 text-white">Submit a ticket</Box>
                </Flex>
            </Box>}
            {/** Intro & app store box started here */}
            <Box className="mt-3 md:mt-[50px] p-2 md:p-5 ml-auto mr-auto" w="80%">
                <Box aria-label="orange-dot" className="flex flex-row">
                    <Box className="w-1/2"></Box>
                    <Box className="w-1/2 flex flex-row align-center justify-center mt-3">
                        <Box aria-label="dot" className="rounded-full h-[15px] w-[15px] bg-orange-400"></Box>
                    </Box>
                </Box>
                <Box className="flex flex-col md:flex-row">
                    <Box className="h-[400px] w-1/1 md:w-1/2">
                        <Box className="text-[40px] w-[350px] text-purple-500 font-bold">
                            Unlock Effortless
                            Spending with
                            EasySpend!
                        </Box>
                        <Box className="mt-2 md:mt-4 text-gray-800">
                            Get instant access to flexible loan, rewards, and finantial freedom
                        </Box>
                        <Box aria-label="orange-dot">
                            <Flex className="flex-row align-center justify-center mt-3">
                                <Box aria-label="dot" className="rounded-full h-[15px] w-[15px] bg-red-300"></Box>
                            </Flex>
                        </Box>
                        <Box aria-label="mobile-icons">
                            <Flex className="gap-15 mt-2">
                                <Box aria-label="ios-app"><Img src="./ios-store.png" className="w-[150px] h-[40px] object-contain" /></Box>
                                <Box aria-label="android-app"><Img src="./play-store.png" className="w-[150px] h-[40px] object-contain" /></Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Flex className="h-[400px] w-1/1 md:w-1/2 align-center justify-center">
                        <Flex className=" w-[400px] h-[300px] align-center justify-center md:justify-end">
                            <Box className="bg-fuchsia-200" w="100%" h="100%"></Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box className="w-1/1 h-[100px]"></Box>
            </Box>
            {/** Intro & app store box ends here */}
        </Box>
        <Box aria-label="virtual-card" className="z-10 mt-3 rounded-tl-2xl md:rounded-tl-[100px] rounded-tr-2xl md:rounded-tr-[100px] md:mt-[50px] p-2 md:p-5 relative bottom-20 bg-white" w="100%" >
            <Box className="ml-auto mr-auto" w="80%">
                <Box className="flex flex-col md:flex-row flex-grow">
                    <Box className="w-1/1 md:w-1/2 flex align-center justify-center">
                        <Img src="./mobile.png" />
                    </Box>
                    <Box className="w-1/1 md:w-1/2 flex flex-col align-center justify-center">
                        <Box className="mt-[100px] md:mt-0">
                            <Box className="text-[30px] text-purple-500 text-center md:text-left">Virtual card:</Box>
                            <Box className="text-gray-600 text-center md:text-left">Get a virtual card for secure and convinient online transactions</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box className="z-1 special-rounded-bottom bg-white"></Box>
        <Box className="w-[80%] md:w-[70%] ml-auto mr-auto flex flex-col md:flex-row flex-grow">
            <Box className="flex flex-col align-center justify-center w-1/1 md:w-1/2">
                <Box>
                    <Box className="text-purple-500 text-[30px] font-bold">
                        See What <br />
                        Others Say
                    </Box>
                    <Box className="text-gray-600">Join 1.6 milliom users across the globe</Box>
                </Box>
            </Box>

            <Box className="flex flex-col align-center justify-center w-1/1 md:w-1/2">
                <Img src="./people.png" />
            </Box>
        </Box>
        <Box className="flex flex-col align-center justify-center">
            <Box className="bg-fuchsia-200 rounded-2xl ml-auto mr-auto pl-5 pr-5" w="fit-content">
                <Box className="h-0 w-[100%]"><Img className="relative right-10 bottom-5 w-[50px] h-[50px]" src="./quote.png" /></Box>
                <Box className="p-5">
                    <Box className="text-gray-800">"Easyspend has revolutionalize my finantial life! I can</Box>
                    <Box className="text-gray-800">now afford the things I want without worrying about cash."</Box>
                </Box>
                <Box className="mt-5 text-gray-800 font-bold text-center mb-5">Olamide, Lagos</Box>
            </Box>
        </Box>

        <Box className="text-center text-purple-500 text-[30px] font-bold mt-[100px] mb-5">Features</Box>

        <Box aria-label="skew-boxes" className="mt-5 gap-5 md:gap-0 flex flex-col md:flex-row flex-grow content-evenly justify-around ml-auto mr-auto" w="80%">
            {loanItem1.map(item => <Box className="p-3 rounded-lg" backgroundImage={item.bg}>
                <Box className="flex flex-row align-center justify-center p-2">
                    <Box className="rounded-full w-[50px] h-[50px] bg-white mt-3"></Box>
                </Box>
                <Box className="font-bold text-gray-800 mt-3 text-center">{item.title}</Box>
                <Box className="text-gray-700 mt-3 text-center w-[200px] text-sm">{item.desc}</Box>
            </Box>)}
        </Box>
        <Box aria-label="skew-boxes" className="mt-5 gap-5 md:gap-0 flex flex-col md:flex-row flex-grow content-evenly justify-around ml-auto mr-auto" w="80%">
            {loanItem2.map(item => <Box className="p-3 rounded-lg" backgroundImage={item.bg}>
                <Box className="flex flex-row align-center justify-center p-2">
                    <Box className="rounded-full w-[50px] h-[50px] bg-white mt-3">{item.icon && <Img src={item.icon} className="w-[50px] h-[50px]" />}</Box>
                </Box>
                <Box className="font-bold text-gray-800 mt-3 text-center">{item.title}</Box>
                <Box className="text-gray-700 mt-3 text-center w-[200px] text-sm">{item.desc}</Box>
            </Box>)}
        </Box>

        <Box className="z-30 sticky flex flex-row align-center justify-center mt-[100px] bg-gradient-to-t from-white to-fuchsia-50">
            <Box className="rounded-full pl-5 pr-5 pt-3 pb-3 bg-purple-800 text-white">Register Now and Experience Effortless Spending!</Box>
        </Box>

        <Box className="z-10 special-rounded-bottom bg-gradient-to-t from-white to-fuchsia-50"></Box>

        <Box className="z-1 relative bottom-[200px] w-1/1 bg-gradient-to-t from-white to-fuchsia-100">
            <Box className="text-center text-purple-500 text-[30px] font-bold pt-[150px] mb-5">Trust Element</Box>
            <Box aria-label="trust-element-boxes" className="mt-5 gap-5 md:gap-0 flex flex-col md:flex-row flex-grow content-evenly justify-around ml-auto mr-auto" w="80%">
                {
                    trustItem[0].map(item => <Box>
                        <Box className="p-2 flex flex-row align-center justify-center h-[50px]">{item.icon && <Img src={item.icon} className="h-[50px]" />}</Box>
                        <Box className="text-center font-bold text-gray-800 text-[25px] pt-5">{item.title}</Box>
                        <Box className="text-center text-gray-600 text-[12px] w-[250px] pt-5">{item.desc}</Box>
                    </Box>)
                }
            </Box>
            <Box aria-label="trust-element-boxes" className="mt-5 gap-5 md:gap-0 flex flex-col md:flex-row flex-grow content-evenly justify-around ml-auto mr-auto" w="80%">
                {
                    trustItem[1].map(item => <Box>
                        <Box className="p-2 flex flex-row align-center justify-center h-[50px]">{item.icon && <Img src={item.icon} className="h-[50px]" />}</Box>
                        <Box className="text-center font-bold text-gray-800 text-[25px] pt-5">{item.title}</Box>
                        <Box className="text-center text-gray-600 text-[12px] w-[250px] pt-5">{item.desc}</Box>
                    </Box>)
                }
            </Box>
        </Box>

        <Box className="bg-fuchsia-100 w-1/1 p-5  md:pt-[100px]">
            <Box className="w-1/1 flex flex-col md:w-[600px] ml-auto mr-auto">
                {commentsList.map((item, i) => (
                    <>
                        {selected === i ? <Box className="w-1/1 pt-[1px] flex flex-row border-t-50 border-gray-800" borderTop="1px solid gainsboro">
                            <Box className="w-[70px] h-[50px] text-[20px] pt-[10px] text-gray-400 font-bold">
                                <Box className="w-1/1 text-center">0{i + 1}</Box>
                            </Box>
                            <Box className="pt-[15px] pb-[15px] pl-3 pr-3 font-bold md:w-[460px]">{item.title}</Box>
                            <Box className="w-[70px] h-[50px] pt-[15px]">
                                <Box className="w-[100%] flex flex-row align-center justify-center">
                                    <Box className="rounded-full p-0 bg-gray-900 cursor-pointer" onClick={() => setSelected(-1)}>
                                        <Img src="./x.png" className="w-[25px] h-[25px]" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box> :
                            <Box className="w-1/1 pt-[1px] flex flex-row bg-gray-100 border-t-50 border-gray-800" borderTop="1px solid gainsboro">
                                <Box className="w-[70px] h-[70px] text-[20px] pt-[10px] text-gray-400 font-bold">
                                    <Box className="w-1/1 text-center">0{i + 1}</Box>
                                </Box>
                                <Box className="pt-[15px] pb-[15px] pl-3 pr-3 font-bold md:w-[460px]">{item.title}</Box>
                                <Box className="w-[70px] h-[70px] pt-[15px]">
                                    <Box className="w-[100%] flex flex-row align-center justify-center">
                                        <Box className="rounded-full p-2 bg-white cursor-pointer" onClick={() => setSelected(i)}>
                                            <Img src="./plus.png" className="w-[10px] h-[10px]" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>}
                        {selected === i && <Box className="w-1/1 flex flex-row">
                            <Box className="w-[70px] h-[70px] text-gray-400 font-bold">
                                <Box className="w-1/1 text-center">&nbsp;</Box>
                            </Box>
                            <Box className="pr-5 text-sm text-gray-500 md:w-500" w="calc(100% - 70px)">
                                {item.desc}
                            </Box>
                        </Box>}
                    </>
                ))}
            </Box>
        </Box>

        <Box className="text-center text-purple-500 text-[30px] font-bold mt-[100px] mb-5">Features</Box>
        <Box className="text-center text-gray-400 mt-2 text-[12px]">Any question or remarks? Just write us a message!</Box>

        <Box className="w-[100%] md:w-[80%] ml-auto mr-auto mt-5 p-5 bg-white flex flex-col md:flex-row rounded-lg">
            <Box aria-label="contact-us-info" className="rounded-lg p-3 bg-purple-500 w-1/1 md:w-[40%] md:pl-[50px]">
                <Box className="text-white text-[20px]">Contact Information</Box>
                <Box className="text-gray-200 text-[12px] mt-2">Say something to start a live chat!</Box>

                <Box aria-label="contact-me" className="pt-[50px] pb-[50px] md:pb-[200px]">
                    {contactMeList.map(item => <Box className="flex flex-row gap-5 mt-5">
                        <Box className="p-1"><Img src={item.icon} /></Box>
                        <Box className="underline text-white p-1 text-[12px] cursor-pointer">{item.desc}</Box>
                    </Box>)}
                </Box>
                <Box aria-label="media-icons" className="flex flex-row gap-3">
                    <Box className="w-[30px] h-[30px] rounded-full bg-white flex flex-col align-center justify-center">
                        <Box className="w-1/1">
                            <Img className="ml-auto mr-auto" src="./twitter.png" />
                        </Box>
                    </Box>
                    <Box className="w-[30px] h-[30px] rounded-full bg-white flex flex-col align-center justify-center">
                        <Box className="w-1/1">
                            <Img className="ml-auto mr-auto" src="./instagram.png" />
                        </Box>
                    </Box>
                    <Box className="w-[30px] h-[30px] rounded-full flex flex-col align-center justify-center">
                        <Box className="w-1/1">
                            <Img className="ml-auto mr-auto" src="./youtube.png" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box aria-label="form-input" className="mt-[100px] md:mt-0 rounded-lg p-3 md:p-[30px] bg-white w-1/1 md:w-[60%]">
                <Box className="flex flex-row align-center justify-center">
                    <Box className="w-[100%] md:w-[400px] ml-auto mr-auto flex flex-col md:flex-row gap-[30px]">
                        <Box>
                            <Box>First Name</Box>
                            <Input variant="flushed" />
                        </Box>
                        <Box>
                            <Box>Last Name</Box>
                            <Input variant="flushed" />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex flex-col align-center justify-center">
                    <Box className="w-[100%] md:w-[400px] mt-5 ml-auto mr-auto flex flex-col md:flex-row gap-[30px]">
                        <Box>
                            <Box>Email</Box>
                            <Input variant="flushed" />
                        </Box>
                        <Box>
                            <Box>Password</Box>
                            <Input variant="flushed" />
                        </Box>
                    </Box>
                </Box>

                <Box className="mt-[50px] md:mt-5 w-1/1 md:w-[400px] ml-auto mr-auto">
                    <Box>Select Subject</Box>
                    <RadioGroup defaultValue='1' className="mt-5 w-1/1">
                        <Box className="text-[11px] flex flex-col md:flex-row gap-[20px]">
                            <Radio value='1' className="text-[11px]">General Inquiry</Radio>
                            <Radio value='2' className="text-[11px]">Virtual Card</Radio>
                            <Radio value='3' className="text-[11px]">Bill Payment</Radio>
                        </Box>
                    </RadioGroup>
                </Box>
                <Box className="mt-[50px] md:mt-5 w-1/1 md:w-[400px] ml-auto mr-auto">
                    <Box className="color-gray-400">Message</Box>
                    <Input variant="flushed" placeholder="Message" className="w-1/1" />
                </Box>

                <Box className="mt-5 w-1/1 md:w-[400px] ml-auto mr-auto">
                    {isMobile ? <Box className="flex flex-row align-center justify-center">
                        <Box className="w-[200px] rounded-full bg-purple-500 text-gray-100 text-center p-3">Send Message</Box>
                    </Box>: <Box className="flex flex-row">
                        <Box className="w-[50px] h-[50px]"></Box>
                        <Box className="ml-auto"></Box>
                        <Box className="w-[150px] rounded-full bg-purple-500 text-gray-100 text-center p-3">Send Message</Box>
                    </Box>}
                </Box>
            </Box>
        </Box>

        <Box aria-label="footer" className="bg-purple-500 mt-[100px] p-[50px] md:p-[100px]" w="100%">
            <Box className="flex flex-row align-center justify-center"><Img src="./logob.png" /></Box>
            <Box className="w-[100%] mt-[10px] h-[10px]" borderTop="1px solid white"></Box>

            <Box className="flex flex-col md:flex-row mt-[30px]">
                <Box className="w-[100%] md:w-[60%] flex flex-col md:flex-row">
                    <Box className="w-[100%] md:w-1/2 text-white">
                        <Box className="text-[20px]">Reach Us</Box>
                        <Box className="mt-2">
                            {contactMeList.map(item => <Box className="flex flex-row gap-5 mt-5">
                                <Box className="p-1"><Img src={item.icon} /></Box>
                                <Box className="underline text-white p-1 text-[12px] cursor-pointer">{item.desc}</Box>
                            </Box>)}
                        </Box>
                    </Box>
                    {isMobile && <Box className="w-[100%] mt-[20px] h-[10px]" borderTop="1px solid white"></Box>}
                    <Box className="w-[100%] md:w-1/2 flex flex-row mt-5 md:mt-0">
                        <Box className="w-1/2 text-white">
                            <Box className="text-[20px]">About</Box>
                            <Box className="mt-2">
                                {['About', 'Contact', 'Blogs'].map(item => <Box className="mt-5 p-1 text-[13px]">{item}</Box>)}
                            </Box>
                        </Box>
                        <Box className="w-[100%] md:w-1/2 text-white">
                            <Box className="text-[20px]">Legal</Box>
                            <Box className="mt-2">
                                {['Privacy Policy', 'Terms & Services', 'Terms of Use', 'Refund Policy'].map(item => <Box className="mt-5 p-1 text-[13px]">{item}</Box>)}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {isMobile && <Box className="w-[100%] mt-[20px] h-[10px]" borderTop="1px solid white"></Box>}
                <Box className="w-[100%] md:w-[40%] mt-5 md:mt-0">
                    <Box className="bg-purple-900 rounded-lg text-white p-5">
                        <Box className="text-center">Join Our Newsletter</Box>
                        <Box className="mt-5 flex flex-row">
                            <Input className="w-[60%] rounded-l-lg" borderTopRightRadius="0px" borderBottomRightRadius="0px" bg="white" />
                            <Box className="w-[40%] bg-purple-500 text-white text-center p-2 rounded-l-0 rounded-r-lg">Suscribe</Box>
                        </Box>
                        <Box className="text-[12px] text-purple-400 text-center mt-3">Will send you weekly updates for your better tool management.</Box>
                        <Box className="flex flex-row mt-5">
                            <Box aria-label="ios-app"><Img src="./ios-store.png" className="w-[150px] h-[40px] object-contain" /></Box>
                            <Box className="ml-auto"></Box>
                            <Box aria-label="android-app"><Img src="./play-store.png" className="w-[150px] h-[40px] object-contain" /></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Home;