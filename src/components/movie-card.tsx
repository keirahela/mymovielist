"use client";

import Image from "@/components/ui/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useTranslation } from "react-i18next";

const CUTTING_EXPRESSION = /\s+[^\s]*$/;

const createShortcut = (text: string, limit: number) => {
    if (text.length > limit) {
        const part = text.slice(0, limit - 3);
        if (part.match(CUTTING_EXPRESSION)) {
          	return part.replace(CUTTING_EXPRESSION, ' ...');
        }
        return part + '...';
    }
    return text;
};
 
export function Card({ ...props }) {
    const { t } = useTranslation();
  return (
    <CardContainer className="inter-var px-2 place-content-center">
      <CardBody className={`bg-gray-50 relative group/card dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border `}>
        <CardItem
            as="h2"
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white align-middle"
        >
            {props.title || "N/A"}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            {createShortcut(props.description || "N/A", 65)}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.thumbnail || "https://via.placeholder.com/1000"}
            height="1000"
            width="1000"
            className="h-72 w-full rounded-xl group-hover/card:shadow-xl justify-center"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 w-4/5 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() => {
                window.open(`https://www.themoviedb.org/movie/${props.id}`, "_blank");
            }}
          >
            {t("WATCH")}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}