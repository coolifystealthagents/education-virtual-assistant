import type {Metadata} from 'next';
import {HomeExperience} from './experience';
export const metadata:Metadata={title:"Education Virtual Assistant",description:"Thoughtful administrative support for the people who make learning happen. Keep courses, calendars, learner records, and communication organized around your education team.",alternates:{canonical:"/"}};
export default function Page(){return <HomeExperience/>}
