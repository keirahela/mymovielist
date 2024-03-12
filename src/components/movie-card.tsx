"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
  return (
    <CardContainer className="inter-var px-2 place-content-center">
      <CardBody props={{backgroundImage: props.thumbnail || 'https://via.placeholder.com/1000', onClick: () => { window.open(`/player/${props.id}`); }}} className={`
      bg-gray-50 relative group/card dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.4] dark:border-white/[0.2]
      border-black/[0.1] w-8/12 sm:w-[30rem] h-96 rounded-xl p-6 border `
      }>
        <div className="flex flex-row flex-wrap-2 order-2 justify-center">
          <CardItem
              as="h2"
            translateZ="50"
            className="text-xl font-bold text-neutral-600 pr-2 dark:text-white align-middle"
          >
              {props.title || "N/A"}
          </CardItem>
          <CardItem
            translateZ={50}
            className="text-sm text-neutral-500 dark:text-neutral-300 mt-2"
          >
            <p className="text-neutral-500 text-sm dark:text-neutral-300">
              {(props.rating as number).toFixed(1) || "N/A"} <b style={{color: "gold"}}>★</b>
            </p>
          </CardItem>
        </div>
        <div className="flex justify-center text-center">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {createShortcut(props.description || "N/A", 65)}
        </CardItem>
        </div>
        {/* <div className="flex justify-center items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 w-4/5 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() => {
                window.open(`/player/${props.id}`);
            }}
          >
            {t("WATCH")}
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}