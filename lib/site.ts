import type { SiteConfig } from './types';

export const site: SiteConfig = {
  name: 'Education Virtual Assistant',
  domain: 'educationvirtualassistant.com',
  siteId: 'education-virtual-assistant',
  niche: 'education organizations',
  audience: 'school leaders, course creators, tutors, and education teams',
  design: 'atelier',
  eyebrow: 'Learning support with thoughtful structure',
  hero: 'Give every learning program',
  heroAccent: 'room to stay curious.',
  heroBody: 'Specialist remote assistants support learner records, course administration, scheduling, family communication, resource organization, and reporting preparation while educators retain instructional judgment.',
  manifesto: 'Good education support removes administrative friction without flattening the human work of teaching.',
  primary: '#1947b8', secondary: '#f4c430', accent: '#ef5b4c', canvas: '#fffdf5', ink: '#132b5a',
  displayFont: 'Cooper Black', bodyFont: 'Verdana', heroImage: '/hero.png',
  heroAlt: 'Colorful paper craft learning atelier with open books, subject tabs, pencils, and a red desk lamp',
  services: [
    {
      slug: 'learner-records', name: 'Learner records support',
      short: 'Maintain approved enrollment, progress, and contact records with a visible source trail.',
      audience: 'Enrollment coordinators, tutoring programs, cohort operators, and school teams with recurring record updates and a named records owner.',
      problem: 'Learner details often arrive through forms, email, and staff notes. When updates are copied without a consistent check, incomplete fields and conflicting versions become difficult to resolve.',
      scope: ['Prepare approved enrollment and contact updates', 'Check required fields against an agreed checklist', 'Maintain source links and update notes', 'Queue corrections and sensitive changes for review'],
      inputs: ['Approved intake forms or change requests', 'Field definitions and record status rules', 'Access to the designated system of record', 'Named reviewer and escalation criteria'],
      workflow: [
        { title: 'Validate the request', detail: 'Confirm that the request uses an approved source and contains the required identifiers.' },
        { title: 'Prepare the record', detail: 'Enter or stage only the permitted fields and preserve the source reference.' },
        { title: 'Check completeness', detail: 'Compare the prepared record with the field checklist and flag conflicts rather than resolving them by assumption.' },
        { title: 'Route the exception', detail: 'Send sensitive, ambiguous, or policy dependent changes to the accountable records owner.' }
      ],
      deliverables: ['Updated or review-ready learner records', 'Incomplete request queue', 'Source and change log', 'Exception summary for the records owner'],
      boundaries: ['The assistant does not decide eligibility, placement, accommodations, discipline, or academic standing.', 'The organization defines access, retention, consent, and disclosure rules.', 'Conflicting identity or custody information pauses the workflow for an authorized reviewer.'],
      qualityControls: ['Required field check before completion', 'Source reference attached to each material change', 'Access limited to the systems needed for the role', 'Periodic sample review by the designated records owner'],
      examples: [
        { title: 'Enrollment packet handoff', detail: 'Compare an approved packet with the enrollment checklist, prepare complete fields, and return missing documents to the queue.' },
        { title: 'Contact detail correction', detail: 'Stage a requested correction with its source and route any conflicting contact or custody detail for review.' }
      ],
      faqs: [
        { q: 'Can an assistant approve enrollment?', a: 'No. The assistant can prepare and check records. Eligibility and enrollment approval remain with the authorized team member.' },
        { q: 'What should we provide first?', a: 'Provide the field checklist, approved source types, system access rules, and the person who reviews exceptions.' },
        { q: 'How is sensitive information handled?', a: 'Your organization sets access and handling requirements. The role should use least necessary access and a documented escalation path.' }
      ],
      relatedServices: ['reporting-preparation', 'family-learner-communication'],
      image: { src: '/october-12/student-enrollment-document-handoff.webp', alt: 'Illustrated student enrollment document handoff with forms, folders, and a review path', width: 1200, height: 630 }
    },
    {
      slug: 'course-administration', name: 'Course administration',
      short: 'Keep modules, release dates, resources, and routine delivery details aligned to the approved course plan.',
      audience: 'Course creators, program managers, tutoring organizations, and academic teams running repeatable online or blended courses.',
      problem: 'A course can have sound instruction while its links, dates, module states, and facilitator notes drift apart. Educators then spend delivery time finding preventable setup errors.',
      scope: ['Build modules from approved course plans', 'Maintain release calendars and routine settings', 'Check links, labels, and learner facing files', 'Track requested changes through review and publication'],
      inputs: ['Approved syllabus or course map', 'Current content files and naming rules', 'Release calendar and platform access', 'Content owner for instructional questions'],
      workflow: [
        { title: 'Reconcile the plan', detail: 'Compare the syllabus, course map, and release calendar before making platform changes.' },
        { title: 'Prepare the build', detail: 'Create or update modules, links, labels, and settings from approved material.' },
        { title: 'Run the delivery check', detail: 'Inspect learner visibility, links, dates, and file versions against the launch checklist.' },
        { title: 'Publish or route', detail: 'Publish only where authority is documented and route instructional uncertainty to the content owner.' }
      ],
      deliverables: ['Review-ready course modules', 'Release and change calendar', 'Link and visibility check log', 'Open content question list'],
      boundaries: ['Educators retain curriculum, assessment, grading, and instructional decisions.', 'The assistant does not rewrite substantive content without an approved brief.', 'Platform changes with unclear learner impact remain unpublished until review.'],
      qualityControls: ['Prelaunch view using the learner perspective', 'Version label on approved source files', 'Two source check for dates that appear in multiple places', 'Change log with reviewer and publication state'],
      examples: [
        { title: 'New cohort setup', detail: 'Duplicate an approved course shell, replace cohort dates, verify visibility, and present the shell for owner review.' },
        { title: 'Content revision release', detail: 'Replace the approved file, check every linked location, record the version, and archive the superseded asset.' }
      ],
      faqs: [
        { q: 'Can the assistant design the curriculum?', a: 'Not within this service. The assistant administers approved material while the educator owns curriculum and teaching choices.' },
        { q: 'Which platform can this support?', a: 'The workflow can be adapted to your learning platform when access, conventions, and a review path are available.' },
        { q: 'Should the assistant publish changes directly?', a: 'Only when publication authority and a tested checklist are explicit. New or high impact changes should be reviewed first.' }
      ],
      relatedServices: ['resource-library-support', 'scheduling-support'],
      image: { src: '/october-12/course-content-version-release.webp', alt: 'Illustrated course content version release showing modules, files, and approval markers', width: 1200, height: 630 }
    },
    {
      slug: 'scheduling-support', name: 'Education scheduling support',
      short: 'Coordinate sessions, availability, approved reminders, and calendar exceptions without making program decisions.',
      audience: 'Tutors, cohort programs, faculty support teams, and learning organizations with repeated sessions across people and time zones.',
      problem: 'Scheduling becomes expensive when availability, room or meeting links, attendance expectations, and exceptions live in separate conversations.',
      scope: ['Collect availability through an approved process', 'Prepare and update session calendars', 'Send approved confirmations and reminders', 'Identify conflicts, missing details, and unresolved exceptions'],
      inputs: ['Session plan and scheduling rules', 'Participant availability and time zone', 'Approved message templates', 'Escalation owner for exceptions'],
      workflow: [
        { title: 'Gather constraints', detail: 'Collect availability, duration, location, access, and deadline details in one scheduling record.' },
        { title: 'Prepare the option', detail: 'Apply documented rules to produce a proposed time or an exception list.' },
        { title: 'Confirm the schedule', detail: 'Send the approved confirmation and update the shared calendar and session record.' },
        { title: 'Monitor changes', detail: 'Process routine changes and route conflicts that require a policy or priority decision.' }
      ],
      deliverables: ['Current shared session calendar', 'Confirmation and reminder log', 'Conflict and exception queue', 'Session readiness checklist'],
      boundaries: ['The assistant does not decide attendance consequences, staffing priorities, or accommodation requests.', 'Educators decide whether missed instruction changes a learner plan.', 'Urgent welfare or safeguarding messages bypass routine scheduling and go to the named response path.'],
      qualityControls: ['Time zone shown in confirmations', 'Meeting link and access check before the session', 'Calendar and source request reconciled after changes', 'Unconfirmed sessions remain visibly open'],
      examples: [
        { title: 'Weekly tutoring rota', detail: 'Collect tutor availability, apply the approved matching rules, and route unmatched learners to the program lead.' },
        { title: 'Virtual class readiness', detail: 'Verify calendar entry, host, link, participant message, and materials before the scheduled session.' }
      ],
      faqs: [
        { q: 'Can the assistant choose which learner gets priority?', a: 'No. Priority rules must come from the program owner. Uncovered cases are escalated.' },
        { q: 'Can reminders be automated?', a: 'Routine approved reminders can use platform automation after the timing, audience, and exception path are tested.' },
        { q: 'What happens when a teacher cancels?', a: 'The assistant follows the approved cancellation path, records affected sessions, and routes decisions about substitutes or makeups.' }
      ],
      relatedServices: ['course-administration', 'family-learner-communication'],
      image: { src: '/october-12/virtual-class-session-readiness.webp', alt: 'Illustrated virtual class session readiness board with calendar, video window, and checks', width: 1200, height: 630 }
    },
    {
      slug: 'family-learner-communication', name: 'Family and learner communication',
      short: 'Prepare and route routine approved messages while preserving human judgment for sensitive conversations.',
      audience: 'Schools, tutoring programs, course teams, and learner support operations with recurring questions and status messages.',
      problem: 'Routine questions can crowd out complex learner support, yet a fast response is not useful if it lacks context, promises an outcome, or misses a sensitive concern.',
      scope: ['Triage inbound messages by approved categories', 'Draft or send routine template based replies', 'Record contact attempts and stated next steps', 'Route instructional, welfare, complaint, and policy questions'],
      inputs: ['Approved templates and tone guidance', 'Current program facts and contact directory', 'Message categories and response targets', 'Named escalation owners'],
      workflow: [
        { title: 'Read for intent and risk', detail: 'Identify the request, required context, and any trigger that needs immediate human attention.' },
        { title: 'Verify the facts', detail: 'Check the approved source before preparing a routine response.' },
        { title: 'Respond or route', detail: 'Use the approved language for in scope questions and transfer judgment based messages with context.' },
        { title: 'Record the handoff', detail: 'Log the response, status, next owner, and promised follow up without adding unsupported conclusions.' }
      ],
      deliverables: ['Triaged communication queue', 'Approved routine responses', 'Contact and follow up record', 'Context packet for escalated messages'],
      boundaries: ['The assistant does not give instructional, clinical, legal, disciplinary, or safeguarding advice.', 'Complaints and emotionally sensitive messages move to the accountable team member.', 'A template is never used to imply a decision that has not been made.'],
      qualityControls: ['Source check for dates, policies, and status', 'Recipient and attachment check before sending', 'Clear next owner on every escalated item', 'Routine review of templates and repeated unanswered questions'],
      examples: [
        { title: 'Program logistics question', detail: 'Confirm the published session detail, answer with the approved template, and record the interaction.' },
        { title: 'Learner support concern', detail: 'Acknowledge receipt without interpreting the concern, preserve the relevant context, and route it to the designated support owner.' }
      ],
      faqs: [
        { q: 'Can the assistant answer academic questions?', a: 'The assistant can route them and share approved logistical information. Teaching and academic judgment stay with educators.' },
        { q: 'Can the role manage a shared inbox?', a: 'Yes, when categories, templates, access, response targets, and urgent escalation triggers are documented.' },
        { q: 'How do we avoid impersonal replies?', a: 'Use templates as controlled source language, then allow relevant factual context within a clear tone guide and review process.' }
      ],
      relatedServices: ['learner-records', 'scheduling-support'],
      image: { src: '/october-12/student-support-referral-handoff.webp', alt: 'Illustrated student support referral handoff with message cards and a clear routing path', width: 1200, height: 630 }
    },
    {
      slug: 'resource-library-support', name: 'Resource library support',
      short: 'Organize approved learning materials so teams can identify the current, accessible, and intended version.',
      audience: 'Course teams, tutoring organizations, training programs, and educators maintaining shared banks of learning material.',
      problem: 'A folder can contain useful material and still be hard to use. Ambiguous names, duplicates, missing accessibility status, and outdated links make staff recheck the same resources.',
      scope: ['Inventory and classify approved resources', 'Apply naming, folder, and metadata conventions', 'Track review and version status', 'Route accessibility, rights, or content questions to owners'],
      inputs: ['Current files and links', 'Audience and subject taxonomy', 'Naming and archive rules', 'Content, accessibility, and rights owners'],
      workflow: [
        { title: 'Inventory the collection', detail: 'List each resource, location, format, stated audience, owner, and current status.' },
        { title: 'Normalize the metadata', detail: 'Apply approved names, categories, version labels, and review dates without changing instructional meaning.' },
        { title: 'Check usability', detail: 'Test access and links, note accessibility status, and identify duplicate or orphaned material.' },
        { title: 'Publish the index', detail: 'Make the approved collection findable and send unresolved content, rights, or access questions to their owners.' }
      ],
      deliverables: ['Searchable resource index', 'Consistent folder and naming structure', 'Version and review status register', 'Broken link and unresolved issue queue'],
      boundaries: ['Educators decide instructional suitability and sequence.', 'Qualified owners determine accessibility conformance and usage rights.', 'The assistant does not delete or replace source material without an approved archive rule.'],
      qualityControls: ['Stable naming and required metadata fields', 'Link and permission test from the intended user view', 'Visible owner and review date', 'Archive record for superseded material'],
      examples: [
        { title: 'Tutor resource bank', detail: 'Index approved worksheets by level and topic, identify duplicates, and expose the current version to tutors.' },
        { title: 'Accessible material request', detail: 'Record the requested format, locate the approved source file, and route conversion and approval to the responsible owner.' }
      ],
      faqs: [
        { q: 'Can the assistant choose the best teaching resource?', a: 'No. The role can improve discovery and status. An educator decides instructional suitability.' },
        { q: 'Will this fix inaccessible files?', a: 'The assistant can identify and track status. Remediation and conformance decisions stay with people assigned that responsibility.' },
        { q: 'Where should the library live?', a: 'Use the approved platform that your intended users can access. The operating model matters more than a particular tool.' }
      ],
      relatedServices: ['course-administration', 'reporting-preparation'],
      image: { src: '/october-12/accessible-course-material-request.webp', alt: 'Illustrated accessible course material request with organized files, format labels, and review checks', width: 1200, height: 630 }
    },
    {
      slug: 'reporting-preparation', name: 'Reporting preparation',
      short: 'Compile traceable operational summaries so education leaders can review evidence and make decisions.',
      audience: 'Program leads, school operations teams, tutoring managers, and course businesses with recurring status and activity reviews.',
      problem: 'Leaders lose review time when each update uses different definitions, missing periods, or figures detached from their source. Preparation needs consistency without turning an assistant into the analyst or decision maker.',
      scope: ['Collect approved data from named sources', 'Reconcile required periods and definitions', 'Prepare tables, status views, and exception notes', 'Package source references for accountable review'],
      inputs: ['Report brief and intended audience', 'Metric definitions and reporting period', 'Approved source systems or exports', 'Reviewer and materiality rules'],
      workflow: [
        { title: 'Confirm the brief', detail: 'Verify the period, definitions, audience, format, and cut off time before collecting data.' },
        { title: 'Compile the source set', detail: 'Gather approved exports or records and note their retrieval time and scope.' },
        { title: 'Run preparation checks', detail: 'Reconcile totals, missing fields, duplicates, and period coverage using the supplied rules.' },
        { title: 'Package for review', detail: 'Present the summary with caveats, source references, and open exceptions for the accountable analyst or leader.' }
      ],
      deliverables: ['Review-ready operational summary', 'Source register and retrieval notes', 'Missing data and reconciliation log', 'Open question list for the report owner'],
      boundaries: ['The assistant does not certify accuracy, interpret causation, or make strategic decisions.', 'Metric definitions and materiality thresholds come from the report owner.', 'Sensitive exports follow the organization’s access, storage, and deletion requirements.'],
      qualityControls: ['Period and definition check before compilation', 'Source reference for each reported measure', 'Reconciliation totals where the data permits', 'Reviewer signoff before external distribution'],
      examples: [
        { title: 'Cohort operations summary', detail: 'Compile approved enrollment and session status counts, flag missing records, and provide the source list to the program lead.' },
        { title: 'Access review preparation', detail: 'Organize the current access export by approved role definitions and route unexpected permissions to the system owner.' }
      ],
      faqs: [
        { q: 'Does the assistant analyze performance?', a: 'The assistant can prepare consistent views and flag exceptions. Interpretation and decisions remain with the accountable leader or analyst.' },
        { q: 'Can reports be sent to families or funders?', a: 'Only after an authorized owner reviews the content, audience, disclosure basis, and distribution method.' },
        { q: 'What makes a report review-ready?', a: 'It uses agreed definitions and periods, identifies sources and gaps, and makes unresolved questions visible.' }
      ],
      relatedServices: ['learner-records', 'resource-library-support'],
      image: { src: '/october-12/student-data-export-access-review.webp', alt: 'Illustrated student data export access review with tables, source records, and approval checks', width: 1200, height: 630 }
    }
  ],
  categories: ['Learner operations', 'Course systems', 'Education communication', 'Role design'],
  principles: ['Deliberate role fit', 'Clear role boundaries', 'Reviewable workflows'],
  sources: [{ label: 'United States Department of Education', url: 'https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa' }]
};
