import { Skeleton } from "@/components/ui/skeleton"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "@/components/ui/image";

export function MovieCardSkeleton({ ...props }) {
  return (
    <div className="inter-var px-2 place-content-center py-20 inline">
      <div className={`bg-white items-center relative group/card dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border `}>
        <div className="h-7 bg-gray-200 rounded-full mb-4 w-full"></div>
        <div className="h-5 bg-gray-200 rounded-full mb-4 w-full"></div>
        <div className="h-72 bg-gray-200 rounded-xl mb-4 w-full"></div>
        <div className="flex justify-center items-center mt-20">
            <div className="h-8 px-4 py-2 w-4/5 rounded-xl bg-gray-200 dark:text-black text-white text-xs font-bold"></div>
        </div>
      </div>
    </div>
  );
}