import Image from "next/image"
import Link from "next/link"
export default function Learn() {
    return (
        <>
            <div className="PAGE bg-gradient-to-r from-gray-500  to-gray-800 ">

                <div className="LANGUAGES">
                    <div className="LANGUAGES-HEADING flex justify-center text-center ">
                        <h1 className="my-4 text-3xl bg-gradient-to-r from-black  to-gray-400 text-transparent bg-clip-text font-extrabold">LEARN FROM THE BEST </h1>
                    </div>
                    <div className="marquee flex flex-row justify-between align-middle text-center mx-2 bg-black h-16 rounded-lg " >
                        <p className="text-white my-4 mx-2">JAVA</p>
                        <p className="text-white my-4 mx-2">JAVASCRIPT</p>
                        <p className="text-white my-4 mx-2">REACT</p>
                        <p className="text-white my-4 mx-2">PYTHON</p>
                        <p className="text-white my-4 mx-2">NEXT.JS</p>
                        <p className="text-white my-4 mx-2">FRONTEND</p>
                        <p className="text-white my-4 mx-2">BACKEND</p>

                      {/* <div className="text-white my-4 mx-2" >JAVA</div> 
                      <div className="text-white my-4 mx-2">JAVASCRIPT</div>
                      <div className="text-white my-4 mx-2">REACT</div>
                      <div className="text-white my-4 mx-2">PYTHON</div>
                      <div className="text-white my-4 mx-2">NEXT.JS</div>
                      <div className="text-white my-4 mx-2">FRONTEND </div>
                      <div className="text-white my-4 mx-2">BACKEND</div> */}
                    </div>
                    <div className="LANGUAGES-BLOCK">
                        <div className="FIRST-LANGUAGE">
                            <div className="first-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline" >JAVA</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"}>
                                        <Image src={"https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyFQ0oe6H-Ti29BAon05OD2dTC3Q"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CODE WITH HARRY</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"}>
                                        <Image src={"https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB953onHqGMzlmf8cMVs-n9pUaNRA"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">APNA COLLEGE</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"}>
                                        <Image src={"https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCVLdFTYGBOx_XHYIv_sHrVY9shRw"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KUNAL KUSHWAHA</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>
                   
                   
                        <div className="SECOND-LANGUAGE">
                            <div className="SECOND-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">JAVASCRIPT</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=PkZNo7MFNFg&t=4612s&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApFIl4BE7rM2IGt1VjOWW5456--A"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREE CODE CAMP</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg&t=4612s&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=VlPiVmYuoqw&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/VlPiVmYuoqw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB896i1qlQgSZkU77Na-XjBXaMbcA"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">APNA COLLEGE</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=VlPiVmYuoqw&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=EfAl9bwzVZk&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/EfAl9bwzVZk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1VBDg0rfGs6AM4gsCVDhc5EV9yg"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DAVE GRAY</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=EfAl9bwzVZk&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>
                   
                   
                   

                        <div className="THIRD-LANGUAGE">
                            <div className="THIRD-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">REACT</h1>
                            </div>
                            <div className="THIRD-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=bMknfKXIFA8&t=600s&pp=ygUMUkVBQ1QgQ09VUlNF"}>
                                        <Image src={"https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREE CODE CAMP</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=bMknfKXIFA8&t=600s&pp=ygUMUkVBQ1QgQ09VUlNF" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"}>
                                        <Image src={"https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHBmNMkrlki0bJx7dkyaYw7lu7sQ"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CODE WITH HARRY</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=4DqAvWonPAg&pp=ygUMUkVBQ1QgQ09VUlNF"}>
                                        <Image src={"https://i.ytimg.com/vi/4DqAvWonPAg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsBnK0yEYFG8xe3XCa7Hy3Q8Xnzg"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HITESH CHAUDHARY</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=4DqAvWonPAg&pp=ygUMUkVBQ1QgQ09VUlNF" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>



                        <div className="FOURTH-LANGUAGE">
                            <div className="FOURTH-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">PYTHON</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3"}>
                                        <Image src={"https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFfxTTv31qjpdalu6WVYgDswHgcg"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TELUSKO</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=nLRL_NcnK-4&pp=ygUHUEFZVEhPTg%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5lx7Ejw4EXmM_Vlc1_bZ3RLKQ7g"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREE CODE CAMP</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=nLRL_NcnK-4&pp=ygUHUEFZVEhPTg%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=_uQrJ0TkZlc&pp=ygUHUEFZVEhPTg%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/_uQrJ0TkZlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpUFKfUMVNbg8mqTcZ8UdSUjpilw"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROGRAMMING WITH MOSH</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&pp=ygUHUEFZVEhPTg%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>
                   



                        <div className="FIFTH-LANGUAGE">
                            <div className="FOURTH-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">NEXT JS</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"}>
                                        <Image src={"https://i.ytimg.com/vi/ZjAqacIC_3c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDO8bDdkMvDHDYxENXcCZG-x-zOCg"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CODEVOLUTION</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=vCOSTG10Y4o&t=258s&pp=ygUHTkVYVCBKUw%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/vCOSTG10Y4o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjsqEMhvot6anbvykVVo2N-aCcGQ"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LAMA DEV</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=vCOSTG10Y4o&t=258s&pp=ygUHTkVYVCBKUw%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=ETV17M4SauU&t=15496s&pp=ygUHTkVYVCBKUw%3D%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/ETV17M4SauU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPvWiHu-nE7YvmjzZstOm-MbnKDA"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREE CODE CAMP</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=ETV17M4SauU&t=15496s&pp=ygUHTkVYVCBKUw%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>
                   






                        <div className="SIXTH-LANGUAGE">
                            <div className="SIXTH-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">FRONTEND WEB DEVELOPMENT</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=zJSY8tbf_ys&pp=ygUaZnJvbnQgZW5kIHdlYiBkZXZlbG9wbWVudCA%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/zJSY8tbf_ys/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiTtHDuTDXajbwFXx5QvVfW6D55A"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREECODECAMP.ORG</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=zJSY8tbf_ys&pp=ygUaZnJvbnQgZW5kIHdlYiBkZXZlbG9wbWVudCA%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=4dprtEzunIk&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-"}>
                                        <Image src={"https://i.ytimg.com/vi/4dprtEzunIk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAoQiFJWT6ViIqSedEaJoDvUqKXEA"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SHERIYANS CODING SCHOOL</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=4dprtEzunIk&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"}>
                                        <Image src={"https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBvlMuWkLXMncxKtS-odl1tOp17Mw"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CODE WITH HARRY</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>







                        <div className="SEVENTH-LANGUAGE">
                            <div className="SEVENTH-language-heading">
                                <h1 className="flex justify-center text-center text-2xl text-gray-400 font-bold my-4 underline">BACKEND DEVELOPMENT</h1>
                            </div>
                            <div className="first-language-links  flex sm:flex-row flex-col justify-center align-middle text-center  ">

                                {/* first */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=fupTFbQv3MQ&list=PL-Jc9J83PIiEnK1q9tuVrrORqKBexcE_J"}>
                                        <Image src={"https://i.ytimg.com/vi/fupTFbQv3MQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDTfD9iuJc8pRvZ6mqmJ4-TyFPOgQ"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PEPCODING</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=fupTFbQv3MQ&list=PL-Jc9J83PIiEnK1q9tuVrrORqKBexcE_J" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* second */}
                                <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=SUghFlFh2cw&list=PL7zl8TDRnbuk2MalECSOQ9qtg6N4ewbGs"}>
                                        <Image src={"https://i.ytimg.com/vi/SUghFlFh2cw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDesaqUS8-GjYI_m-A_hjTpwKDt4g"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DEVTOWN</h5>

                                       
                                        <a href="https://www.youtube.com/watch?v=SUghFlFh2cw&list=PL7zl8TDRnbuk2MalECSOQ9qtg6N4ewbGs" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* third */}

                                <div className=" max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700   mx-2">
                                    <Link href={"https://www.youtube.com/watch?v=jBzwzrDvZ18&pp=ygUXYmFja2VuZCB3ZWIgZGV2ZWxvcG1lbnQ%3D"}>
                                        <Image src={"https://i.ytimg.com/vi/jBzwzrDvZ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzdXWT7-jbNSBa1ySX9scrbBi_nA"} width={400} height={100} className="rounded-xl" alt=""></Image>
                                    </Link>

                                    <div className="p-5">

                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FREE CODE CAMP</h5>

                                        
                                        <a href="https://www.youtube.com/watch?v=jBzwzrDvZ18&pp=ygUXYmFja2VuZCB3ZWIgZGV2ZWxvcG1lbnQ%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            LEARN
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                
                            </div>
                       
                        </div>






                    </div>
                </div>

            </div>
        </>
    )
}