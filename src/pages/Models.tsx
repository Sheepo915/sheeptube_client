import {Suspense, useState} from "react";
import ModelSuspense from "@/components/model/ModelSuspense.tsx";
import Pagination from "@/components/common/Pagination.tsx";
import {ModelHeader, ModelShowcase} from "@/components/model";
import {usePagination} from "@/hooks";


const test = new Array(30).fill(1);

export default function Models() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>();

  const {
    paginated,
    paginate,
    itemsPerPage,
    gridRef,
    handleNext,
    handlePrev,
    handleFirst,
    handleLast,
  } = usePagination({data: test});

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
      <div ref={gridRef} className="grid grid-cols-5 gap-3 flex-grow">
        <Suspense fallback={<ModelSuspense paginated={paginated}/>}>
          <ModelShowcase/>
        </Suspense>
      </div>
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        firstPageHandler={handleFirst}
        previousPageHandler={handlePrev}
        nextPageHandler={handleNext}
        lastPageHandler={handleLast}
      />
    </section>
  );
}
