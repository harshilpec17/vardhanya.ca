
import Image from "next/image";

const Skeleton = ({ src, alt = "Loading...", className }) => (
  src ? (
    <div className="relative w-full md:aspect-square aspect-[16/9] overflow-hidden rounded-xl cursor-pointer">
      <Image src={src} alt={alt} fill className={className} />
    </div>
  ) : (
    <div className="w-full aspect-[16/9] rounded-xl bg-neutral-200 dark:bg-neutral-800" />
  )
);
export const items = [
  {
    title: "Consultation & Strategy",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton src={"/Consulting_Bento1.png"} className={"object-fit"} />,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "UX/UI & Branding Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton src={"/UI_Image.png"} className={"object-fit"} />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
    {
    title: "E-Commerce Solutions",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton src={"/ECommerce.png"} className={"object-fit"} />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Enhanced Features for Existing Products",

    description:
      "Understand the impact of effective communication in our lives.",
       header: <Skeleton src="/AIImage.png" alt="AI-Enhanced Features " className="object-cover" />,
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Guideline: AI Consulting & Strategy",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton src="/Bento7.png" alt="The Pursuit of Knowledge" className="object-fit" />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Server Maintenance",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton src={"/Service_maintenance.png"} className={"object-fit"} />,
    // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Custom AI Integration",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton src="/Bento8.png" alt="The Spirit of Adventure" className="object-cover" />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];