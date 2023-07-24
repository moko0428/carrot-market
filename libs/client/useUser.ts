import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { User } from "@prisma/client";

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const { data, error } = useSWR<ProfileResponse>("/api/users/me"); //첫번째는 요청을 보낼 url, 두번째는 fetcher 함수
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  });

  return { user: data?.profile, isLoading: !data && !error };
}
