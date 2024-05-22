import Service from "../components/service";
import H2 from "../components/stylishh";
import { eye, setting, share } from "../assets"

const services = [
    {
        icon: eye,
        label: "Lorem Ipsum Dolor Sit Amet",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda tempore dolor provident esse ad! Totam, velit commodi ipsum veniam odio aperiam."
    },
    {
        icon: setting,
        label: "Lorem Ipsum Dolor Sit Amet",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda tempore dolor provident esse ad! Totam, velit commodi ipsum veniam odio aperiam."
    },
    {
        icon: share,
        label: "Lorem Ipsum Dolor Sit Amet",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda tempore dolor provident esse ad! Totam, velit commodi ipsum veniam odio aperiam."
    }
];

export default function Page3() {
    return (
        <div className="bg-[#007af3] pt-16 pb-16 text-white" id="services">
            <div className="w-[100%] xs:w-[94%] lg:w-[70%] ml-auto mr-auto">
                <div className="text-center">
                    <H2 label="Services" />
                    <h1 className="text-2xl font-extrabold">What I Do..</h1>
                </div>
                <div className="flex items-center md:flex-row flex-col justify-center md:justify-between">
                    {services.map((service, index) => {
                        return <Service icon={service.icon} label={service.label} desc={service.desc} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}