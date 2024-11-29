"use client";

import { useParams } from "next/navigation";
import { ISolplaceLogsDetailEditSchema } from "./form.schema";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FETCH_SOLPLACE_LOG } from "@/commons/apis/graphql/queries/fetch-solplace-log.query";

export const useInitialize = ({ setValue }: { setValue: UseFormSetValue<ISolplaceLogsDetailEditSchema> }) => {
  const params = useParams();
  const id = params.solplaceLogId.toString();
  const { data } = useQuery(FETCH_SOLPLACE_LOG, {
    variables: { id },
  });

  useEffect(() => {
    if (!data) return;

    const { title, contents, image, address, lat, lng } = data.fetchSolplaceLog;
    setValue("title", title);
    setValue("contents", contents);
    setValue("images", image);
    setValue("address", address);
    setValue("lat", lat);
    setValue("lng", lng);
  }, [data]);

  const onSubmit = (data: ISolplaceLogsDetailEditSchema) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
