import React from "react";
import { useRouter } from 'next/router';
import { Breadcrumb } from "flowbite-react";

const BreadCrumb = () => {
    const router = useRouter();
    const linkPath = router.asPath.split('/');
    linkPath.shift();

    const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path.replace(/-/g,' ') , href: '/' + linkPath.slice(0, i + 1).join('/') };
    });

    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/">
            <span class="material-icons text-[17px] mr-1">home</span>
                Home
            </Breadcrumb.Item>
                
            {pathArray && pathArray.length > 0 && pathArray.map(crumb => {
                return(
                    <Breadcrumb.Item className="capitalize">
                        {crumb.breadcrumb}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    )
}

export default BreadCrumb;