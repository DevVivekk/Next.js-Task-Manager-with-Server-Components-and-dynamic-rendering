'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Sider from '@/components/sidebar/sider';

const SidebarWrapper = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const isSidebarVisible = 
    (pathname === '/' || 
    searchParams.get('sort') === 'true' ||  searchParams.get('edit') === 'true')
  return isSidebarVisible ? <Sider /> : null;
};

export default SidebarWrapper;
