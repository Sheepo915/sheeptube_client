import {lazy} from "react";

import ModelShowcaseCard from "@/components/model/ModelShowcaseCard.tsx";
import ModelSuspense from "@/components/model/ModelSuspense.tsx";
import ModelHeader from "@/components/model/ModelHeader.tsx";

const ModelShowcase = lazy(() => import("./ModelShowcase.tsx"));
export {ModelShowcase, ModelSuspense, ModelShowcaseCard, ModelHeader};