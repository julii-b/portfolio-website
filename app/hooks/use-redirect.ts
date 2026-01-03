'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * Custom hook to handle URL hash and search parameter manipulations, and scrolling to elements.
 * @returns  An object with methods to set hash, scroll to an element, set search parameters, and remove search parameters.
 */
export default function useRedirect() {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const setHash = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(window.location.hash);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = encodeURIComponent(id);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const setSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    const hash = window.location.hash;
    router.replace(`${pathname}?${params.toString()}${hash}`);
  };

  const removeSearchParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    const hash = window.location.hash;
    router.replace(`${pathname}?${params.toString()}${hash}`);
  };

  return { setHash, scrollTo, setSearchParam, removeSearchParam };
}