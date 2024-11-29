"use client";

import { ISolplaceLogsNewSchema } from "./form.schema";

export const useInitialize = () => {
  const onSubmit = (data: ISolplaceLogsNewSchema) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
