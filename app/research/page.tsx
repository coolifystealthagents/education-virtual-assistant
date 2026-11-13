import type {Metadata} from 'next';
import {LibraryExperience} from '../experience';
export const metadata:Metadata={title:"Research",description:"Thoughtful administrative support for the people who make learning happen. Keep courses, calendars, learner records, and communication organized around your education team.",alternates:{canonical:"/research"}};
export default function Page(){return <LibraryExperience kind="research"/>}
