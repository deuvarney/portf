

import { workHistoryData } from "@/utils/workHistory";
import Role from './Role';
import { Metadata } from "next/types";

function Page({ params, searchParams, }){

    let company;
    let role;
    // TODO: This needs to be memoized or utilize state?
    for (const comp of workHistoryData) {
        if (comp.urlPath === params.company) {
            company = comp;
            role = comp.roles.find(role => role.urlPath === params.role);
            break;
        }
    }
    const { projectId } = searchParams || {};

    if (!company || !role) {
        // Dev purposes, replace with an actual 404 page
        return (<p>Todo: render 404 page For Role</p>)
    }

    return (<Role role={role} company={company} projectId={projectId}/>)
}

export default Page;

// export const metadata: Metadata = {
//   title: 'Work History Role',
//   description: 'Work history information for Deuvarney\'s portfolio.',
// }

export async function generateMetadata({ params }): Promise<Metadata> {
  const company = workHistoryData.find((comp) => comp.urlPath === params.company);
  const role = company?.roles.find((role) => role.urlPath === params.role);
  
  if (company && role) {
    return {
      title: `${company.name} - ${role.name} Role`,
      description: role.summary || 'Role details for Deuvarney\'s portfolio.',
    };
  }
  
  return {
    title: 'Work History Role',
    description: 'Work history information for Deuvarney\'s portfolio.',
  };
}

