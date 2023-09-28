'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const GetPath = () => {
  const [path, setPath] = useState();
  const pathName = usePathname().split('/');
  console.log(pathName);
  return pathName[1];
};
