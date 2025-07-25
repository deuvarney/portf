import SchoolAwards from "@/components/Awards";
import BreadCrumbs from "@/components/Breadcrumbs";
import DescAndResponsibilites from "@/components/DescAndResponsibilities";
import HeaderTypography from "@/components/HeaderTypography";
import LargeBackgroundWithLogo from "@/components/LargeBackgroundWithLogo";
import { ContainerWithBetterName, MainContentContainerWithBetterName } from "@/components/SectionContainer";
import { workHistoryData } from "@/utils/workHistory";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next/types";



function Company({params, searchParams}) {
    console.log('params', params, searchParams)
    const company = workHistoryData.find(comp => comp.urlPath === params.company);

    if(company){
        const {images, awards} = company;

        const items = company.roles.map(role => {
            return {
                url: `/history/${params.company}/role/${role.urlPath}`,
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
                        <HeaderTypography variant="h2" sizeLevel={2} addBottomMargin={true}>About the Company</HeaderTypography>
                        <p>{company.summary}</p>
                    </ContainerWithBetterName>
                    <DescAndResponsibilites 
                        listHeader="Roles"
                        listHeaderVariant="h2"
                        listHeaderSizeLevel={2}
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

export async function generateMetadata({ params }): Promise<Metadata> {
const company = workHistoryData.find((comp) => comp.urlPath === params.company);
  if (company) {
    return {
      title: `${company.name} - Work History`,
      description: company.summary,
    };
  }
  return {
    title: 'Work History Company',
    description: 'Work history company information for Deuvarney\'s portfolio.',
  };
}