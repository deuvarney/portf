'use client'

import SchoolAwards from "@/components/Awards";
import BreadCrumbs from "@/components/Breadcrumbs";
import DescAndResponsibilites from "@/components/DescAndResponsibilities";
import HeaderTypography from "@/components/HeaderTypography";
import LargeBackgroundWithLogo from "@/components/LargeBackgroundWithLogo";
import { ContainerWithBetterName, MainContentContainerWithBetterName } from "@/components/SectionContainer";
import { workHistoryData } from "@/utils/workHistory";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";



function Company({params, searchParams}) {
    const company = workHistoryData.find(comp => comp.urlPath === params.company);
    const pathname = usePathname();

    if(company){
        const {images, awards} = company;
        // console.log('###compnay', images);

        const items = company.roles.map(role => {
            return {
                url: `${pathname}/role/${role.urlPath}`,
                name: role.name,
                date: role.dates,
            }
        })
        const breadcrumbs = [
            <Link 
                // underline="hover"
                key="1"
                color="inherit"
                href="/history"
                // onClick={handleClick}
            >
              Experience
            </Link>,
            // <Link
            //   underline="hover"
            //   key="2"
            //   color="inherit"
            //   href="/material-ui/getting-started/installation/"
            // //   onClick={handleClick}
            // >
            //   Core
            // </Link>,
            <Typography key="3" color="text.primary">
              {company.name}
            </Typography>,
          ];
        return (
            <>
                <BreadCrumbs breadcrumbs={breadcrumbs}/>
                <LargeBackgroundWithLogo
                    name={company.name} l
                    location={company.location}
                    role={company?.roles[0]?.name}
                    duration={company.dates}
                    largeLogo={images?.largeLogo}
                    backgroundPositionFocus={images?.largePositionFocus}
                    largeBackgroundImg={images?.largeBackground}
                />
                <MainContentContainerWithBetterName>
                    <ContainerWithBetterName>
                        <HeaderTypography variant="h2" sizeLevel={4}>About the Company</HeaderTypography>
                        <p>{company.summary}</p>
                    </ContainerWithBetterName>
                    <DescAndResponsibilites 
                        listHeader="Roles"
                        resumeTasks={items}
                    />
                    {
                        !!awards?.length && ( <SchoolAwards awards={awards}/> )
                    }
                </MainContentContainerWithBetterName>
            </>
        );

    }
    return (<p>Todo: render 404 page</p>)
}

export default Company;