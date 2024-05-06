import Image from "next/image";
import Button from "./ui/button";
import Tabs from "./ui/tabs";
import { FaRegHeart } from "react-icons/fa";

type ChowsSectionProps = {
  title: string;
  description: string;
  onButtonClick: () => void;
};

const ChowsSection: React.FC<ChowsSectionProps> = ({
  title,
  description,
  onButtonClick,
}) => {
  const tabs = [
    { name: "Description", title, description },
    {
      name: "Nutrition facts",
      title: "Nutrition facts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu fermentum enim, pretium accumsan velit.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen min-w-full">
      <Image
        className="w-[200%]"
        src="https://ciaochow.plusnarrative.biz/uploads/thumbnail_carrots_3_60f5a864c1.jpeg"
        alt="Chow"
        width={245}
        height={137}
      />
      <div className="bg-white rounded-3xl relative top-[-30px]">
        <div className=" px-8 mt-6 flex justify-between">
          <h1 className="text-[24px] text-gray-700 font-bold">{title}</h1>
          <div className="bg-gray-500 rounded h-[25px] w-[25px] flex items-center justify-center hover:bg-chow">
            <FaRegHeart className=" text-white rounded" />
          </div>
        </div>
        <Tabs tabs={tabs} />
        <div className=" px-8">
          <Button className="bg-chow text-white mt-4 py-3 text-base w-full flex">
            <div onClick={onButtonClick} className="w-full">
              Nah! Find something else.
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChowsSection;
