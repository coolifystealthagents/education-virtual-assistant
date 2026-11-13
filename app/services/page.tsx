import type {Metadata} from 'next';
import {ServicesExperience} from '../experience';
export const metadata:Metadata={title:"Services",description:"Thoughtful administrative support for the people who make learning happen. Keep courses, calendars, learner records, and communication organized around your education team.",alternates:{canonical:"/services"}};
export default function Page(){return <ServicesExperience/>}
