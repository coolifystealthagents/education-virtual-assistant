import type {Metadata} from 'next';
import {AboutExperience} from '../experience';
export const metadata:Metadata={title:"About",description:"Thoughtful administrative support for the people who make learning happen. Keep courses, calendars, learner records, and communication organized around your education team.",alternates:{canonical:"/about"}};
export default function Page(){return <AboutExperience/>}
