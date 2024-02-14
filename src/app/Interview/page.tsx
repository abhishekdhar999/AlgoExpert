import { IoLogoYoutube } from "react-icons/io5";
// import { FaHtml5 } from "react-icons/fa";
import img from "../../../public/office_04.jpg"
import Image from "next/image";
export default function Interview() {
    return (
        <>
            <div className="bg-gradient-to-r from-slate-400 to-stone-500  my-[-15px]">

                <div className="heading flex justify-center my-3 text-4xl font-extrabold ">
                    <span className="bg-gradient-to-r from-stone-800 to-slate-600 text-transparent bg-clip-text my-4"> INTERVIEW PREPRATION</span>
                   
                </div>

                <div className="sub-heading flex justify-center ">
                    <p className="text-xl font-bold text-neutral-700 ">A brief interview preparation guide to help you prepare for your coding interviews.</p>

                </div>

                <div className="rounded-lg flex justify-center my-4" >
                <div className="mx-2">
                    <Image src={"https://img.freepik.com/free-vector/successful-business-meeting-job-interview_3446-684.jpg?w=1060&t=st=1707738270~exp=1707738870~hmac=a20c46056aee16fa8b2b35ba752dbddeef2114b14bbfde33aac9a9b2050bab6a"} width={200} height={50} alt="" className="rounded-lg"></Image>
                    </div>

                    <div className="flex justify-around">
                    <div className="mx-2">
                    <Image src={img} width={240} height={50} alt="" className="rounded-lg"></Image>
                    </div>

                    

                    <div className="mx-2"> 
                    <Image src={"https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?w=1060&t=st=1707738429~exp=1707739029~hmac=d11c70889a6d9655acf2709ad000927b6ea2c164d9e06729ca6d7d2c1de1f245"} width={200} height={50} alt="" className="rounded-lg"></Image>
                    </div>
                    
                    </div>
                </div>
                <div className="body flex justify-between mx-4 my-8">


                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRONTEND DEVELOPER </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
                        <a href="https://www.interviewbit.com/front-end-developer-interview-questions/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Visit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>

                        <div className="yt-links">
                            <p className="text-white my-2">Youtube Links below :</p>
                            <div className="flex flex-col my-2 ">
                                <div className="one flex">
                                    <a href="https://www.youtube.com/watch?v=pwLNA_LMw0c&pp=ygUwaW50ZXJ2aWV3IHF1ZXN0aW9ucyBmb3IgZnJvbnQgZW5kIHdlYiBkZXZlbG9wZXIg" className="mx-2">
                                        <IoLogoYoutube className=" text-red-600 my-1" />

                                    </a>
                                    <p className="text-white">Simplilearn</p>
                                </div>
                                <div className="two flex">
                                    <a href="https://www.youtube.com/watch?v=kBSSg6JMoQI&pp=ygUwaW50ZXJ2aWV3IHF1ZXN0aW9ucyBmb3IgZnJvbnQgZW5kIHdlYiBkZXZlbG9wZXIg" className="mx-2">
                                        <IoLogoYoutube className="text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Intellipaat</p>
                                </div>

                                <div className="three flex">
                                    <a href="https://www.youtube.com/watch?v=U2L-FU9kVvQ&pp=ygUwaW50ZXJ2aWV3IHF1ZXN0aW9ucyBmb3IgZnJvbnQgZW5kIHdlYiBkZXZlbG9wZXIg" className="mx-2">
                                        <IoLogoYoutube className="text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Deepak jadiwal</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* second */}

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 mx-2">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BACKEND DEVELOPER </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
                        <a href="https://www.ideamotive.co/backend/interview" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Visit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>

                        <div className="yt-links">
                            <p className="text-white my-2">Youtube Links below :</p>
                            <div className="flex flex-col my-2 ">
                                <div className="one flex">
                                    <a href="https://www.youtube.com/watch?v=a0lYL_rrSC8&list=PL-Jc9J83PIiHI7u_6G8j1oKyhQn_plX8i" className="mx-2">
                                        <IoLogoYoutube className=" text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Pepcoding</p>
                                </div>
                                <div className="two flex">
                                    <a href="https://www.youtube.com/watch?v=2cnEZb_3sd8&pp=ygUbYmFja2VuZCBpbnRlcnZpZXcgcXVlc3Rpb25z" className="mx-2">
                                        <IoLogoYoutube className="text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Simplilearn</p>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* third */}

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">REACT DEVELOPER </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
                        <a href="https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Visit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>

                        <div className="yt-links">
                            <p className="text-white my-2">Youtube Links below :</p>
                            <div className="flex flex-col my-2 ">

                                <div className="flex">
                                    <a href="https://www.youtube.com/watch?v=IMEzmmP3WAs&pp=ygUZcmVhY3QgaW50ZXJ2aWV3IHF1ZXNkdGlvbg%3D%3D" className="mx-2">
                                        <IoLogoYoutube className=" text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Interview Happy</p>
                                </div>

                                <div className="flex">
                                    <a href="https://www.youtube.com/watch?v=uE925hp9KDk&pp=ygUZcmVhY3QgaW50ZXJ2aWV3IHF1ZXNkdGlvbg%3D%3D" className="mx-2">
                                        <IoLogoYoutube className="text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">Akshay Saini</p>
                                </div>

                                <div className="flex">
                                    <a href="https://www.youtube.com/watch?v=XBTJDpT2XaI&pp=ygUZcmVhY3QgaW50ZXJ2aWV3IHF1ZXNkdGlvbg%3D%3D" className="mx-2">
                                        <IoLogoYoutube className="text-red-600 my-1" />
                                    </a>
                                    <p className="text-white">freecodecamp.org</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="body flex justify-between mx-4 my-8">

{/* fourth */}

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JAVA DEVELOPER </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
    <a href="https://www.toptal.com/java/interview-questions" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Visit
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
    </a>

    <div className="yt-links">
        <p className="text-white my-2">Youtube Links below :</p>
        <div className="flex flex-col my-2 ">
            <div className="one flex">
                <a href="https://www.youtube.com/watch?v=-rw8iIsAF5I&pp=ygUkamF2YSBpbnRlcnZpZXcgcXVlc3Rpb25zIGFuZCBhbnN3ZXJz" className="mx-2">
                    <IoLogoYoutube className=" text-red-600 my-1" />

                </a>
                <p className="text-white">Simplilearn</p>
            </div>
            <div className="two flex">
                <a href="https://www.youtube.com/watch?v=qNZfFeanV58&pp=ygUkamF2YSBpbnRlcnZpZXcgcXVlc3Rpb25zIGFuZCBhbnN3ZXJz" className="mx-2">
                    <IoLogoYoutube className="text-red-600 my-1" />
                </a>
                <p className="text-white">SimpliCode</p>
            </div>

            <div className="three flex">
                <a href="https://www.youtube.com/watch?v=oYXivKMSEqM&pp=ygUkamF2YSBpbnRlcnZpZXcgcXVlc3Rpb25zIGFuZCBhbnN3ZXJz" className="mx-2">
                    <IoLogoYoutube className="text-red-600 my-1" />
                </a>
                <p className="text-white">edureka!</p>
            </div>

        </div>
    </div>
</div>


{/* fifth */}

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 mx-2">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ANDROID DEVELOPER </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
    <a href="https://www.interviewbit.com/android-interview-questions/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Visit
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
    </a>

    <div className="yt-links">
        <p className="text-white my-2">Youtube Links below :</p>
        <div className="flex flex-col my-2 ">
            <div className="one flex">
                <a href="https://www.youtube.com/watch?v=ZgzM95QxdLQ&pp=ygU-YW5kcm9pZCBkZXZlbG9wZXIgaW50ZXJ2aWV3IHF1ZXN0aW9ucyBhbmQgYW5zd2VycyBmb3IgZnJlc2hlcnM%3D" className="mx-2">
                    <IoLogoYoutube className=" text-red-600 my-1" />
                </a>
                <p className="text-white">SCALER</p>
            </div>
            <div className="two flex">
                <a href="https://www.youtube.com/watch?v=GLLI8h67ryo&list=PL_I3TGB7aK6jNBMZkw3FYdJXyf7quHdI8" className="mx-2">
                    <IoLogoYoutube className="text-red-600 my-1" />
                </a>
                <p className="text-white">Amit Shekhar</p>
            </div>


        </div>
    </div>
</div>

{/* third */}

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IOS DEVELOPER </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Questions to ace the interview of an frontend developer to know click below... </p>
    <a href="https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Visit
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
    </a>

    <div className="yt-links">
        <p className="text-white my-2">Youtube Links below :</p>
        <div className="flex flex-col my-2 ">

            <div className="flex">
                <a href="https://www.youtube.com/watch?v=Lzl9h_MovJg&list=PLV7VzbWXa60EiWHqcH_pNjuVYxW0JpcET" className="mx-2">
                    <IoLogoYoutube className=" text-red-600 my-1" />
                </a>
                <p className="text-white">App Developer</p>
            </div>

            <div className="flex">
                <a href="https://www.youtube.com/watch?v=XTAziR-tY-A&pp=ygU6aW9zIGRldmVsb3BlciBpbnRlcnZpZXcgcXVlc3Rpb25zIGFuZCBhbnN3ZXJzIGZvciBmcmVzaGVycw%3D%3D" className="mx-2">
                    <IoLogoYoutube className="text-red-600 my-1" />
                </a>
                <p className="text-white">Sean Allen</p>
            </div>

            <div className="flex">
                <a href="https://www.youtube.com/watch?v=XBTJDpT2XaI&pp=ygUZcmVhY3QgaW50ZXJ2aWV3IHF1ZXNkdGlvbg%3D%3D" className="mx-2">
                    <IoLogoYoutube className="text-red-600 my-1" />
                </a>
                <p className="text-white">freecodecamp.org</p>
            </div>

        </div>
    </div>
</div>

</div>
                
            </div>
        </>
    )
}