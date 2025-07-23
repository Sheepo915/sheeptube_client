import { Suspense, useState } from "react";
import ModelSuspense from "@/components/model/ModelSuspense.tsx";
import Pagination from "@/components/common/Pagination.tsx";
import { ModelHeader, ModelShowcase } from "@/components/model";
import { usePagination } from "@/hooks";
import type { ModelData } from "@/types/model";
import { randomString } from "@/utils";

const test: ModelData[] = new Array(30).fill({ id: Math.random() * 10, name: randomString(5) });
const itemsPerPage = 10;

export default function Models() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();

  const { paginated, pagination, handleNext, handlePrev, handleFirst, handleLast } =
    usePagination<ModelData>({ data: test, itemsPerPage: itemsPerPage });

  return (
    <section className="px-3 py-2 gap-y-2 max-h-full h-full w-full flex flex-col">
      <ModelHeader
        searchValue={searchValue}
        expanded={isExpanded}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => {
          if (!searchValue) setIsExpanded(false);
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="grid grid-cols-5 gap-3 flex-grow">
        <Suspense fallback={<ModelSuspense paginated={paginated} />}>
          <ModelShowcase models={paginated} />
        </Suspense>
      </div>
      <Pagination
        paginate={pagination}
        firstPageHandler={handleFirst}
        previousPageHandler={handlePrev}
        nextPageHandler={handleNext}
        lastPageHandler={handleLast}
      />
    </section>
  );
}
