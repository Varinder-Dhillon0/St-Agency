import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${scrolled ? "bg-black" : ""} w-[100vw] fixed h-[100px] z-50 nav`}>
            <div className="flex mdl:w-[70%] w-[80%] font-mont pt-7 mx-auto justify-between top-5 text-white">
                <div className="font-extrabold text-2xl w-[50%] mdl:w-[30%]">
                    <h3><span className="text-primary">!st</span> Agency</h3>
                </div>
                <div className="text-xs pt-5 font-semibold justify-between hidden mdl:flex align-bottom mdl:w-[70%] lg:w-[50%]">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">BLOG</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PAGES</a>
                    <a href="#">CONTACT US</a>
                </div>
                <div className="mdl:hidden flex space-x-2">
                    <div className="w-2 h-2 bg-white"></div>
                    <div className="w-2 h-2 bg-white"></div>
                    <div className="w-2 h-2 bg-white"></div>
                </div>
            </div>
        </div>
    );
}
