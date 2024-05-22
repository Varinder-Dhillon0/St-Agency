import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
      setOpen(!open);
      const html = document.querySelector("html");
      open ? html.style.overflowY = "auto" : html.style.overflowY = "hidden";
    };

    function getWindowWidth() {
        const width = window.innerWidth;
        console.log(width);
        if(width >= 880){
            setOpen(false);
            console.log("done");
        }
    }
    
    window.addEventListener('resize', getWindowWidth);

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
        <div className={`${scrolled ? "bg-black" : ""} w-[100vw] fixed h-[80px] lsm:h-[100px] z-50 nav`}>
            <div className="flex mdl:w-[70%] w-[90%] font-mont pt-7 mx-auto justify-between top-5 text-white">
                <div className="font-extrabold text-xl lsm:text-2xl w-[50%] mdl:w-[30%]">
                    <h3><span className="text-primary">!st</span> Agency</h3>
                </div>
                <div className={`text-xs pt-5 font-semibold justify-between mdl:flex align-bottom mdl:w-[70%] lg:w-[50%] ${open ? "flex justify-between flex-col h-[100vh] absolute bg-[#000] w-[100vw] left-0 items-center !pt-32 pb-32 top-0 " : "hidden"}`} onClick={toggleOpen}>
                    <a href="#">HOME</a>
                    <a href="#services">ABOUT US</a>
                    <a href="#blog">BLOG</a>
                    <a href="#services">SERVICES</a>
                    <a href="#profile">PAGES</a>
                    <a href="#contact">CONTACT US</a>
                </div>
                <button onClick={toggleOpen} className="flex items-center space-x-2 z-50 mdl:hidden focus:outline-none">
        
                    <div className="w-6 flex items-center justify-center relative">
                    <span className={`transform transition w-full h-px bg-current absolute ${open ? 'translate-y-0 rotate-45' : '-translate-y-2'}`}></span>
                    <span className={`transform transition w-full h-px bg-current absolute ${open ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
                    <span className={`transform transition w-full h-px bg-current absolute ${open ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`}></span>
                    </div>
                </button>
            </div>
        </div>
    );
}
