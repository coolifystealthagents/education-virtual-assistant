import type { ResearchPost } from './types';

export const november11ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-many-midterm-grade-change-requests-wait-on-missing-instructor-approval",
    "title": "How many midterm grade change requests wait on missing instructor approval?",
    "summary": "A review protocol for counting midterm grade change requests that stall because the instructor approval is missing, unclear, or undated.",
    "cluster": "Learner records",
    "finding": "A midterm grade change request is stalled on approval when the request is otherwise complete but lacks a dated instructor confirmation naming the student, course, and corrected grade.",
    "methodology": [
      "Scope: This protocol counts midterm grade change requests that remain unapplied because the instructor approval is missing, undated, or does not name the student and course.",
      "Population: Include every grade change request submitted after midterm grades posted during the review window, and exclude routine data corrections completed within the same day by the instructor.",
      "Opening event: Use the date and time the request reached the registrar with a student identifier, course, term, original grade, and requested grade recorded.",
      "Closing event: Treat a request as approved only when a dated instructor confirmation naming the same student, course, and corrected grade is attached to the case.",
      "Measures: Report requests in scope, share stalled on approval, median days waiting, share needing a second instructor contact, and share that were withdrawn during the wait.",
      "Review: Repeat after any change to the correction form, the approval channel, the academic calendar, or the registrar staffing model."
    ],
    "findings": [
      "A midterm grade change request is stalled on approval when the clerical details are complete but the instructor confirmation is not. The confirmation must name the student, the course, and the corrected grade, and it must carry a date. A message that says please fix this does not meet the test. The distinction keeps the measure focused on approval rather than on general queue delay.",
      "Define the review window around the period when midterm grades are visible to students. Requests that arrive before grades post may reflect a different workflow and should be counted separately. Record the posting date for each term in the sample. A blended window will mix late corrections with early data-entry fixes.",
      "Use the request arrival time as the opening event only when the request is otherwise complete. If the student identifier or course is missing, the case belongs in an intake measure, not an approval measure. Record both timestamps so the report can show where the time actually went. Mixing the two stages makes the approval wait look shorter than it is.",
      "Treat an email from the instructor as evidence only when it names the specific student and grade. A forwarded message without the original header is weaker evidence and should be flagged. Record the evidence type so a reviewer can see how many approvals were informal. Informal approvals are often the ones that later become disputes.",
      "Count undated approvals as stalled even when the content is clear. Without a date, the registrar cannot show that the approval preceded the change or that it belongs to this grading period. Ask the instructor to confirm the date in a short reply. The fix is small, but it protects the record.",
      "Separate a missing approval from a withdrawal. A student who abandons the request should be closed with a reason, not counted as waiting forever. Record the withdrawal date and whether the student was told the request was incomplete. The withdrawal rate is a useful signal about the clarity of the process.",
      "Measure the number of contacts needed to obtain approval. One contact is normal, two suggests the request was unclear, and three or more points to an instructor who is unavailable or unconvinced. Report the distribution rather than only the average. The tail of the distribution is where the real delay lives.",
      "Record the approval channel for each case, such as a signed form, an authenticated email, or a learning management system message. A channel that produces undated or ambiguous approvals should be reviewed. The channel is part of the control, not just a convenience.",
      "Check whether the request names the correct course section. A change requested for the wrong section will be routed back even with a valid approval. Count wrong-section requests separately and fix the form if the error repeats. A simple dropdown often removes this failure.",
      "Age the request from the arrival date, not from the date the registrar first noticed it. A request that sat in a shared inbox for three days already lost three days. Record the inbox receipt time and the first review time. The gap between them is a staffing and triage measure.",
      "Include requests that were approved but never applied in a separate category. These are not approval delays, but they are still open cases that affect the student. Record the approval date and the application date. A queue that looks healthy on approvals can still leave grades wrong.",
      "Compare the approval wait by instructor and department, but report counts alongside rates. A department with two requests and one delay is not the same as a department with forty requests and ten delays. Share the pattern with the academic office that can coach or clarify. The registrar should not turn a small sample into a performance judgment.",
      "Check whether the grading platform permits instructor self-service correction within a short window. If it does, requests inside that window should be excluded from the approval measure. Record the platform rule and the window. The measure should reflect the process the instructor was expected to use.",
      "Describe the limits of the review. The sample may omit verbal approvals, the academic calendar may have changed, and one department may use a separate form. State which risks apply and how they could shift the count. A limitations section makes the number easier to defend.",
      "Test the classification with a second reviewer using ten sample cases. Ask them to mark each as complete, stalled on approval, or incomplete intake. Compare the results and revise the definitions before collecting the full sample. A measure that two trained reviewers apply differently is not reliable.",
      "Name the decision the review supports. The registrar may need a standard approval form, a reminder at forty-eight hours, or a weekly list for department chairs. Each option has a cost and an owner. A report without a decision becomes an archive rather than a control.",
      "Protect student data in the export. Use only the fields needed to classify the request and keep the file in a restricted location. Do not include full grade histories or unrelated personal details. The review should not create a second copy of sensitive records.",
      "Repeat the measure after the chosen change and compare like with like. Use the same window, the same population rule, and the same evidence standard. Report what moved and what did not. A change that shifts the wait from the registrar to the instructor may not improve the student experience.",
      "Check whether the instructor approval arrives through the same channel as the original grade submission. A different channel may be legitimate, but it should be documented. Record the channel and the sender identity. An approval from an unrecognized address should be verified before it is accepted.",
      "Compare the request volume with the number of sections the instructor teaches. A high volume in one large section may be a grading error rather than a process failure. Report volume per section alongside the approval wait. The context prevents a misleading inference.",
      "Record whether the student was notified that the request was waiting on the instructor. A student who hears nothing may submit the same request again. Count duplicate submissions separately. The duplicate rate is a signal about communication, not about approval speed.",
      "Check whether the academic calendar has a grade correction deadline. A request that arrives after that deadline may require a different approval path. Record the deadline and the path used. Mixing deadline-bound and routine corrections distorts the measure.",
      "Ask the registrar whether a verbal approval is ever accepted. If it is, record the name, the date, and the follow-up written confirmation. A verbal approval without a written record is a risk that the measure should surface. Do not silently exclude it.",
      "Consider whether the forty-eight hour reminder is sent to the instructor or to the department office. The recipient changes the response time and the tone. Record the reminder route for each case. A reminder that reaches the wrong person adds a day without adding pressure.",
      "Review the approval evidence with the same standard used in an audit. If the file could not support the change during a review, it is not complete. Record the gap and ask for the missing confirmation. The measure should reward defensible records, not just fast ones.",
      "Check whether a request can be submitted by an advisor on the student behalf. An advisor submission may lack the student consent needed to change a record. Record the submitter and the authorization. The approval measure should include the consent check.",
      "Compare the approval wait for letter-grade changes with pass-fail changes. The two may follow different rules and different approvers. Record the grade type for each request. A blended average can hide a slow category."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "Electronic Code of Federal Regulations, 34 CFR Part 99",
        "publisher": "National Archives",
        "url": "https://www.ecfr.gov/current/title-34/subtitle-A/part-99"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/how-many-midterm-grade-change-requests-wait-on-missing-instructor-approval.webp"
  },
  {
    "slug": "what-share-of-dual-enrollment-packets-arrive-incomplete-before-the-college-deadline",
    "title": "What share of dual enrollment packets arrive incomplete before the college deadline?",
    "summary": "A review protocol for measuring dual enrollment packets that reach the college with missing signatures, transcripts, or placement evidence.",
    "cluster": "Course administration",
    "finding": "A dual enrollment packet is incomplete at the college deadline when any required item named in the college checklist is missing, unsigned, or unverified on the day the packet is submitted.",
    "methodology": [
      "Scope: This protocol counts dual enrollment packets submitted to the partner college that are missing at least one item on the college's current checklist at the time of submission.",
      "Population: Include every packet for the target term that the high school transmitted to the college, and exclude packets withdrawn by the family before submission.",
      "Opening event: Use the date the packet was first marked ready for college review by the high school owner.",
      "Closing event: Treat a packet as complete only when the college confirms receipt and every checklist item is verified, including signatures, transcript, and placement evidence.",
      "Measures: Report packets in scope, share incomplete at submission, missing item types, median days to completion, and share that missed the college deadline.",
      "Review: Repeat after any change to the college checklist, the high school form, the transcript process, or the counseling assignment model."
    ],
    "findings": [
      "A packet is incomplete at the college deadline when a required item is missing, unsigned, or unverified on the day it is submitted. The college checklist defines the items, not the high school form. The two documents often differ, and the difference is where packets fail. The protocol should use the college list as the standard.",
      "Record the checklist version and the date it was obtained. Colleges change requirements between terms, and an old list can make a complete packet look deficient. Ask the college contact to confirm the list in writing. Keep the confirmation with the review file.",
      "Separate missing signatures from missing evidence. A signature is a completion step the family controls, while a transcript or placement score depends on another office. The two need different follow-up and different owners. Reporting them together hides where the delay starts.",
      "Use the high school ready date as the opening event, not the family's first inquiry. A packet can sit in a counseling queue for days before anyone reviews it. Record both the inquiry date and the ready date so the report shows the intake delay. The college deadline is measured against the ready date.",
      "Treat a packet as submitted only when the college has actually received it. A file marked sent in the high school system may still be sitting in a transfer queue. Record the college receipt date and the method of transmission. Without receipt, the packet is still the high school's responsibility.",
      "Count partial submissions separately. A packet with four of five items may allow the college to start a review, but it is not complete. Record which item is missing and whether the college accepted a provisional submission. Provisional acceptance can hide a completion problem until the term starts.",
      "Check whether the missing item is required for admission or only for registration. The distinction changes the consequence and the urgency. Record the college's stated rule rather than assuming every item has the same weight. A missing orientation module is different from a missing transcript.",
      "Measure the time from the ready date to the college receipt date. A packet that is complete on paper but transmitted late still misses the deadline. Separate preparation time from transmission time so the fix points to the right step. Both are part of the handoff.",
      "Record the number of contacts between the high school and the family. A packet that needed three contacts may indicate an unclear instruction rather than an unresponsive family. Include the contact type and the date. The pattern often reveals which form field causes the confusion.",
      "Compare packets by high school and by counselor load. A counselor with a large caseload may need a different process, not a reminder. Report counts and rates together so a small group does not look worse than it is. Share the pattern with the person who can adjust assignments.",
      "Include packets that were completed after the deadline in a separate category. These are not complete on time, but they show recovery capacity. Record the completion date and whether the college accepted the late packet. The distinction matters for next term planning.",
      "Check whether the college counts a packet as received when the student submits it directly. Some colleges allow direct application, which bypasses the high school handoff. Record the submission route for each packet. A direct route may reduce delay but can hide missing school verification.",
      "Review the denial and deferral reasons with the college contact. A packet that was complete but rejected for a policy reason is a different problem from an incomplete packet. Record the reason and the date. The two need different improvements.",
      "Describe the limits of the review. The college may not share receipt data, the checklist may change mid-term, and some packets may be submitted outside the tracked channel. State which risks apply and how they could affect the count. A limitation section keeps the number honest.",
      "Test the classification with a second reviewer using ten packets. Ask them to mark each as complete, incomplete, or provisionally accepted. Compare the results and revise the definitions before the full sample. A shared definition is the foundation of a useful measure.",
      "Name the decision the review supports. The high school may need a pre-signature checklist, a weekly transcript batch, or a counselor handoff at a fixed time. Each option has an owner and a cost. A report without a decision does not change the next term.",
      "Protect student data in the packet review. Use only the fields needed to classify completeness and store the export in a restricted location. Do not copy full transcripts or identity documents into a working report. The review should not create new privacy risk.",
      "Repeat the measure after the change and compare the same term type. Use the same checklist version and the same population rule. Report what improved and what moved to another stage. A shorter high school queue that shifts work to the college may not reduce the student's wait.",
      "Check whether the college accepts an unofficial transcript for initial registration. If it does, a packet missing the official copy may still be provisionally complete. Record the college rule and the provisional status. The distinction changes the deadline pressure without changing the final requirement.",
      "Record the date the family signed each item. A packet assembled over several weeks can contain a signature that predates a changed course selection. Compare the signature date with the course and term. An outdated signature may need to be collected again.",
      "Ask the counselor whether the family received a copy of the checklist. A family that never saw the list cannot be expected to complete it. Record the delivery method and the date. The checklist is only useful if it reaches the person doing the work.",
      "Check whether the high school and the college use different student identifiers. A packet can be complete at the school and unmatched at the college. Record both identifiers and the crosswalk used. A missing crosswalk is a data problem, not a family problem.",
      "Measure the share of packets that required a counselor appointment. An appointment adds days and may be the real bottleneck. Record the appointment date and the reason. If most packets need one, the form is probably not self-explanatory.",
      "Include packets for students who later dropped the college course. A withdrawal does not erase the completeness problem, but it changes the consequence. Record the withdrawal date and the reason. The pattern may show that delay contributed to the drop.",
      "Review whether the college sends a receipt the family can see. A receipt that reaches only the counselor leaves the family uncertain. Record who receives the confirmation. Shared visibility reduces duplicate inquiries and builds trust in the handoff.",
      "Check whether the college requires a separate application in addition to the high school packet. A missing college application is a completeness failure even when the school file is perfect. Record both requirements and the submission date. The measure should name which system is incomplete.",
      "Record whether the family received a confirmation after the packet was transmitted. A confirmation closes the loop and reduces duplicate calls. Note the channel and the date. The absence of a confirmation is a service gap even when the packet is complete."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Department of Education, Higher Education Policy",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/higher-education-policy"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/what-share-of-dual-enrollment-packets-arrive-incomplete-before-the-college-deadline.webp"
  },
  {
    "slug": "how-often-do-school-fee-waiver-reviews-pass-the-published-family-response-window",
    "title": "How often do school fee waiver reviews pass the published family response window?",
    "summary": "A review protocol for counting fee waiver decisions that exceed the published review window and for separating family delay from school delay.",
    "cluster": "Learner operations",
    "finding": "A fee waiver review is past its published window when a complete request has waited longer than the stated review period without a decision, a documented exception, or a request for missing evidence.",
    "methodology": [
      "Scope: This protocol counts fee waiver requests whose decision was not recorded within the published review window after the request became complete.",
      "Population: Include every fee waiver request submitted through a tracked channel for the target term, and exclude duplicate requests from the same family for the same fee.",
      "Opening event: Use the date and time the request became complete, meaning the application and required evidence were both recorded.",
      "Closing event: Treat a request as decided when an approval, denial, or documented exception with a named reviewer is entered in the review system.",
      "Measures: Report requests in scope, median days to decision, share past the published window, share waiting on family evidence, and share with no status update.",
      "Review: Repeat after any change to the application form, the published window, the evidence rules, or the review staffing model."
    ],
    "findings": [
      "A fee waiver review is past its window when a complete request has waited longer than the published period without a decision. The clock starts when the application and required evidence are both present. It does not start when the family first asks a question. The distinction keeps the measure fair to both the family and the reviewer.",
      "Define the published window in days and state whether it counts business days or calendar days. A window that says two weeks without a definition invites disagreement. Record the definition on the application page and in the review system. Reviewers should apply the same clock to every request.",
      "Exclude requests waiting on family evidence from the decision measure, but report them separately. A family that has not sent a pay stub is not a school delay, although the school may still need better instructions. Record the date evidence was requested and the date it arrived. The two-stage view shows where the time went.",
      "Treat an automated acknowledgment as a receipt, not a decision. A system that sends a confirmation may make the family believe the review is moving. Record whether the acknowledgment sets a realistic expectation. A receipt that promises a date the office cannot meet creates avoidable follow-up.",
      "Count requests with no status update as a distinct group. A request that was decided but never marked decided is a documentation failure, while a request that was never opened is a queue failure. The two need different fixes. Reporting them together hides the more serious problem.",
      "Record the evidence type and the date it was checked. Some requests need a pay stub, others a benefits letter, and some a signed declaration. The evidence type affects the review time and should be part of the report. A single average across all types can obscure a slow category.",
      "Measure the share of requests that needed a second contact for the same document. A repeated request usually means the first instruction was unclear. Record the wording of the request and the family response. Fixing the instruction is cheaper than adding reviewers.",
      "Separate an appeal from an initial review. An appeal has its own reviewer and its own window, and mixing it with first decisions distorts both. Record the appeal date and the final outcome. The appeal rate is a useful signal about the clarity of the initial decision.",
      "Check whether the school uses a soft denial that asks for more information. A request labeled denied but actually waiting for evidence should be classified as incomplete, not decided. Record the label the system uses and the actual state. Misleading labels make the report unreliable.",
      "Report the decision mix, including approvals, denials, partial waivers, and withdrawals. A fast denial is not the same result as a fast approval. Read a sample of denial reasons to confirm they match the rubric. The mix explains more than the median alone.",
      "Compare results by school or program, but avoid ranking small groups. A program with three requests and one delay is not comparable to a program with thirty requests. Report counts alongside rates and share the pattern with the office that owns the policy. The goal is learning, not a league table.",
      "Age the request from the complete date, not from the submission date. A family that took a week to provide evidence should not make the reviewer look slow. Show both dates in the report so the reader can see the split. The complete date is the fair starting point for the service measure.",
      "Freeze the export at a stated time and record the system used. A live view will not reproduce because decisions can change during the review. Save the request list, the status history, and the window definition. A reviewer should be able to recompute the count from the saved files.",
      "Describe the limits of the review. The system may omit paper applications, the window may have changed mid-term, and some requests may be handled outside the tracked channel. State which risks apply and how they could shift the result. A limitation section is more useful than a single confident number.",
      "Test the status definitions with a reviewer who did not design them. Ask them to classify ten requests using the written rules. Record any disagreement and revise the definitions before the full sample. A measure that two trained people apply differently is not reliable.",
      "Name the decision the review supports. The office may need a clearer evidence list, a weekly decision batch, or a second reviewer during peak periods. Each option has a cost and an owner. A report without a decision becomes an archive.",
      "Protect family data in the export. Use only the fields needed to classify the request and keep the file in a restricted location. Do not include full income documents or unrelated personal details. The review should not create a second copy of sensitive records.",
      "Repeat the measure after the change and compare like with like. Use the same window, the same population rule, and the same evidence standard. Report what moved and what did not. A faster decision that produces more appeals may not be an improvement.",
      "Check whether the published window starts from the application date or the complete date. A window that starts too early will show delays the reviewer did not cause. Record the start rule on the application page. The family should be able to calculate the same date the office uses.",
      "Record whether the family was told about the evidence requirement before submitting. A request for a document after the fact adds a stage. Count pre-submission and post-submission evidence requests separately. The difference shows whether the form is doing its job.",
      "Ask whether the reviewer can approve the common case without a second signature. A required second signature may be the real source of delay. Record the approval path for each request. A rule that adds a day to every decision should be justified.",
      "Check whether the school publishes the decision to the family in the same channel used for the application. A decision sent only to a student portal may be missed. Record the notification channel and the date. The measure should include the family ability to see the result.",
      "Include requests for fee categories that are rarely waived. A category with no approvals may reflect a policy gap rather than a review problem. Record the category and the outcome. The pattern may lead to a clearer published scope.",
      "Compare the review time during peak periods with the rest of the term. A window that works in a quiet month may fail during registration. Record the volume and the median time together. The staffing plan should follow the peak, not the average.",
      "Check whether a denial can be converted to a payment plan without a new application. A family that is denied and then offered a plan may wait twice. Record the path and the date. A single intake that offers both options reduces the total wait.",
      "Check whether the fee waiver decision is recorded in the same system that bills the fee. A decision that never reaches billing can produce a late charge. Record the decision date and the billing update. The measure should include the handoff to the billing system.",
      "Ask whether the family can see the status without calling. A portal view or a short message reduces repeat contacts. Record the visibility method and the last update. The review should measure access to status, not only the decision time."
    ],
    "sources": [
      {
        "label": "U.S. Department of Education, Office for Civil Rights",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/about/offices/list/ocr/index.html"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/how-often-do-school-fee-waiver-reviews-pass-the-published-family-response-window.webp"
  },
  {
    "slug": "where-do-course-media-captioning-requests-stall-before-the-publish-date",
    "title": "Where do course media captioning requests stall before the publish date?",
    "summary": "A review protocol for tracing captioning requests that miss the publish date and for separating request, production, and review delays.",
    "cluster": "Course systems",
    "finding": "A captioning request stalls before publish when an asset is scheduled to open without approved captions because the request, production, or review step was not completed.",
    "methodology": [
      "Scope: This protocol counts course media assets that reached their scheduled publish date without approved captions attached to the correct file.",
      "Population: Include every video or audio asset scheduled to open to learners during the review window, and exclude assets that were removed from the course before publishing.",
      "Opening event: Use the date the captioning request was entered with the file name, module, duration, and required delivery date.",
      "Closing event: Treat an asset as complete only when captions are attached, checked against the audio, and approved by the named reviewer before publishing.",
      "Measures: Report assets in scope, share published without approved captions, stage where each stalled, median lead time, and share needing a second review.",
      "Review: Repeat after any change to the request form, the production vendor, the publishing checklist, or the media platform."
    ],
    "findings": [
      "A captioning request stalls when the asset opens without approved captions attached to the correct file. The stall can happen at the request, the production, or the review step. Each stage has a different owner and a different fix. The protocol should record the stage rather than only the final miss.",
      "Define the publish date as the date learners can first reach the asset, not the date the course was built. A module can be created weeks before it opens. The relevant deadline is the learner access date. Record both dates so the lead time is visible.",
      "Check whether the request names the exact file and version. A request that points to an old edit will produce captions for content that no longer exists. Record the file identifier and the version date. Version mismatch is one of the most common and least visible causes of rework.",
      "Separate automatic captions from approved captions. An asset with machine-generated captions is not complete unless someone has reviewed accuracy and timing. Record the caption source and the review date. A platform label that says captions available can mislead a course owner.",
      "Measure the lead time between the request and the publish date. A request submitted after the module opens is already late, even if production is fast. Report the lead time distribution rather than only the average. The tail shows which producers consistently start too late.",
      "Record the production vendor and the handoff date. A vendor that receives the file late will deliver late, and the course team may blame the wrong stage. Track the date the file was sent and the date captions were returned. The gap is the production time.",
      "Count assets that needed a second review because of timing, speaker labels, or technical terms. A high rework rate points to the request or the style guide, not necessarily to careless review. Record the reason for each second review. The pattern is more useful than the total.",
      "Check whether the reviewer has authority to hold the publish. A reviewer who can only comment cannot prevent an uncaptioned asset from opening. Record the approval rule and who can stop the release. Authority is part of the control.",
      "Include third-party media in a separate category. A clip that cannot be captioned may need a transcript or a different source. Record the platform and the available options. Treating it like an internally produced video will produce a false failure.",
      "Record live sessions separately from recorded assets. A live session needs captions or a transcript after the fact, and the review happens on a different timeline. Mixing the two hides the live gap. Report each type with its own denominator.",
      "Check the playback experience on a phone. Captions that are accurate but too long or poorly placed can be unreadable on a small screen. Record the device used for the review. A desktop-only check misses a common learner complaint.",
      "Report the share of assets that were published with captions but never reviewed. These pass the presence check and fail the quality check. Record the review status separately from the caption status. Presence without review is not accessibility.",
      "Describe the limits of the review. The media platform may not report caption status, some assets may be linked from outside the course, and the publish date may shift. State which risks apply and how they could affect the count. Honest limits make the report more useful.",
      "Test the stage classification with a second reviewer using ten assets. Ask them to mark the stage where each stalled. Compare the results and revise the definitions before the full sample. A shared definition is the foundation of a useful measure.",
      "Name the decision the review supports. The course team may need a request deadline, a caption style guide, or a publish gate that cannot be skipped. Each option has an owner and a cost. A report without a decision does not improve the next launch.",
      "Protect course materials in the review export. Use only the fields needed to classify the asset and store the file in a restricted location. Do not include unreleased course content in a working report. The review should not create a distribution risk.",
      "Repeat the measure after the change and compare the same type of launch. Use the same publish definition and the same review standard. Report what improved and what moved to another stage. A faster request that shifts work to reviewers may not reduce the miss rate.",
      "Consider whether the caption vendor's turnaround is realistic for the shortest lead time in the calendar. A vendor promise that assumes five business days cannot support a request submitted two days before publish. Record the promised and actual turnaround. The mismatch is a planning problem, not a vendor failure.",
      "Check whether the caption request is created when the video is scripted or only when it is edited. A request at script stage gives the captioner context and time. Record the stage for each asset. Earlier requests are usually cheaper and more accurate.",
      "Record whether the course has a standard for caption placement and line length. A missing standard forces the reviewer to invent one on each asset. Record the standard and where it is published. Consistency reduces review time and learner confusion.",
      "Ask the producer whether the video is likely to be re-edited after captions are delivered. A planned revision should be batched with the caption update. Record the revision plan. Delivering captions twice for the same asset is avoidable work.",
      "Check whether the media platform preserves captions when a video is copied into a new course. A copy can lose the caption track. Record the copy date and the caption status after the copy. The publish gate should test the copied asset, not the original.",
      "Include assets linked from the syllabus or a resource page, not only those embedded in a module. Learners reach media through many paths. Record the path for each asset. A caption review that only checks the module player will miss the rest.",
      "Measure the share of requests that arrive with a script or transcript attached. A request without either takes longer and produces more errors. Record the attachment status. The request form should make the script the default, not an optional extra.",
      "Review the reviewer queue as well as the producer calendar. A caption file that arrives on time can still wait for approval. Record the approval wait separately from the production wait. The bottleneck may sit at the final check.",
      "Check whether the caption vendor receives the final video or a draft. A draft can produce captions that do not match the released edit. Record the version and the delivery date. Version control is part of the caption control.",
      "Record whether the course owner receives a copy of the approved captions for future reuse. A reusable file reduces work when the video is copied. Note the storage location and the permission. The review should include the archive, not only the publish.",
      "Check whether the caption quality review is scheduled before or after the course copy is finalized. A review performed after the copy may be repeated when the file changes. Record the review point in the production calendar. The earlier review point is usually cheaper and less likely to be skipped."
    ],
    "sources": [
      {
        "label": "Web Content Accessibility Guidelines 2.2",
        "publisher": "W3C",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "Making Audio and Video Media Accessible",
        "publisher": "W3C Web Accessibility Initiative",
        "url": "https://www.w3.org/WAI/media/av/"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/where-do-course-media-captioning-requests-stall-before-the-publish-date.webp"
  },
  {
    "slug": "how-often-do-tutoring-no-shows-go-unrecorded-before-the-next-session",
    "title": "How often do tutoring no-shows go unrecorded before the next session?",
    "summary": "A review protocol for counting tutoring no-shows that are missing from the session record before the next scheduled meeting.",
    "cluster": "Education communication",
    "finding": "A tutoring no-show is unrecorded when a scheduled session passed without attendance and no absence note, contact attempt, or billing decision was entered before the next session.",
    "methodology": [
      "Scope: This protocol counts scheduled tutoring sessions that were missed by the learner and had no recorded no-show note before the next session for that learner.",
      "Population: Include every scheduled session in the review window for active tutoring pairs, and exclude sessions cancelled in advance under the written policy.",
      "Opening event: Use the scheduled session start time recorded in the tutoring system.",
      "Closing event: Treat a no-show as recorded when an absence note with the waiting period, contact attempts, and next step is entered before the next session begins.",
      "Measures: Report sessions in scope, share of no-shows unrecorded, median hours to record, share with no contact attempt, and share with an inconsistent billing decision.",
      "Review: Repeat after any change to the session system, the no-show policy, the reminder schedule, or the tutor onboarding process."
    ],
    "findings": [
      "A no-show is unrecorded when the session passed without attendance and no note exists before the next session. The definition depends on the next session because that is when the record becomes actionable. A note written a month later cannot protect the tutor or inform the family. The protocol should use the next session as the deadline.",
      "Define attendance before counting. A learner who joined late may have attended, and a learner who lost connection may have a technical issue rather than a no-show. Record the join time, the duration, and the contact attempts. The classification should follow the written policy, not the tutor's impression.",
      "Separate an advance cancellation from a no-show. A cancellation with notice may allow a make-up and should not be counted as a miss. Record the notice time and the channel. Mixing the two inflates the no-show rate and weakens the report.",
      "Use the scheduled start time as the opening event. The waiting period is part of the policy and should be recorded in minutes. A tutor who waits five minutes is applying a different rule than one who waits fifteen. Record the rule that applied to each session.",
      "Treat a contact attempt as evidence only when the time and channel are recorded. A note that says called the family is not enough to show when the attempt happened. Record the phone number, email, or platform message used. The record should let a manager reconstruct the attempt.",
      "Count sessions with no billing decision as incomplete even when the absence note exists. A note without a consequence leaves the family and the tutor uncertain. Record whether the session was charged, credited, or held for review. The decision is part of the no-show record.",
      "Measure the hours between the scheduled session and the note entry. A note entered after the next session is too late to guide the follow-up. Report the distribution rather than only the average. The tail shows which tutors or programs need a process change.",
      "Compare no-show rates by tutor, program, and time of day. A cluster at one time may point to a scheduling conflict rather than a family problem. Report counts and rates together. A small program with two misses should not be ranked against a large one.",
      "Check whether the reminder schedule matches the no-show pattern. A session that is repeatedly missed at the same hour may need a different reminder or a different slot. Record the reminder time and channel. The pattern is more useful than a general reminder increase.",
      "Include sessions that were rescheduled after a no-show in a separate category. A rescheduled session shows recovery, but it does not erase the original miss. Record the reschedule date and whether the family confirmed. The recovery rate is a useful operational measure.",
      "Review the policy language with a family-facing test. Ask a parent or student to explain what happens after a missed session. If the answer differs from the written rule, the communication is unclear. Record the test result and revise the message.",
      "Describe the limits of the review. The session system may not capture phone calls, some tutors may record notes in a separate document, and the policy may have changed during the window. State which risks apply and how they could shift the count. A limitation section keeps the number honest.",
      "Test the classification with a second reviewer using ten sessions. Ask them to mark each as attended, cancelled, no-show recorded, or no-show unrecorded. Compare the results and revise the definitions before the full sample. A measure that two trained people apply differently is not reliable.",
      "Name the decision the review supports. The program may need a same-day note requirement, a shorter follow-up template, or a scheduling change for a problem time slot. Each option has an owner and a cost. A report without a decision becomes an archive.",
      "Protect family data in the export. Use only the fields needed to classify the session and keep the file in a restricted location. Do not include unnecessary personal details or session content. The review should not create a second copy of sensitive records.",
      "Repeat the measure after the change and compare the same program and time window. Use the same attendance definition and the same next-session deadline. Report what improved and what did not. A faster note that produces more billing disputes may not be an improvement.",
      "Check whether the tutor is paid for a no-show and whether the pay rule is applied consistently. A tutor who is not paid may avoid recording the miss, which distorts the data. Record the pay treatment with the session. The record and the incentive should point in the same direction.",
      "Ask the tutors which part of the note takes the most time. A long form may be the reason notes are late. Simplify the required fields and test the shorter form. The best record is the one that gets completed before the next session.",
      "Check whether the tutor and the family share the same definition of on time. A family that believes the session starts ten minutes later may be marked absent unfairly. Record the start time shown to the family. The reminder should repeat the same time.",
      "Ask whether the session platform sends an automatic attendance report. If it does, reconcile it with the tutor note each week. Record any disagreement and resolve it before billing. Two sources that are never compared drift apart.",
      "Record whether the family was offered a make-up before the next session. An offer made after the next session is harder to accept. Note the offer date and the family response. The follow-up sequence should include the next step, not only the absence.",
      "Compare no-shows for first sessions with no-shows for established pairs. A first-session miss may point to onboarding or a wrong link. Record the session number. The fix for a first-session problem is different from the fix for a repeated pattern.",
      "Check whether the tutor has a way to report a no-show without opening a separate system. Friction is a common reason notes are late. Record the reporting path and the time it takes. A one-click note is more likely to be completed.",
      "Include sessions that were marked attended but had no learner interaction. A tutor who waits alone and then marks attended distorts the record. Record the actual interaction and duration. The attendance definition should require contact, not just a room.",
      "Review whether the no-show policy is explained at enrollment in the family preferred language. A rule that is only in English may not reach the person responsible. Record the languages offered. Clear enrollment communication reduces disputes later.",
      "Ask whether the tutor can reschedule a missed session without a manager approval. A simple reschedule path reduces the chance that the family disappears. Record the reschedule date and the new session. The follow-up should offer a concrete next slot.",
      "Check whether the no-show note is visible to the family. A note that only staff can see does not set expectations. Record what the family was told and when. The communication is part of the record."
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, Work Hours",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "O*NET OnLine, Education Administrators",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.onetonline.org/link/summary/11-9032.00"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/how-often-do-tutoring-no-shows-go-unrecorded-before-the-next-session.webp"
  },
  {
    "slug": "where-do-alumni-diploma-replacement-requests-fail-identity-verification",
    "title": "Where do alumni diploma replacement requests fail identity verification?",
    "summary": "A review protocol for tracing diploma replacement requests that stall or fail at identity verification and for separating document, record, and third-party issues.",
    "cluster": "Learner records",
    "finding": "A diploma replacement request fails identity verification when the evidence provided does not match the alumni record or does not meet the policy standard for releasing a document.",
    "methodology": [
      "Scope: This protocol counts diploma replacement requests that were paused, denied, or delayed because identity verification was incomplete or inconsistent with the alumni record.",
      "Population: Include every diploma replacement request submitted during the review window, and exclude duplicate requests from the same alumnus for the same document.",
      "Opening event: Use the date the request and the initial identity evidence were recorded in the intake system.",
      "Closing event: Treat verification as complete only when the required evidence matches the alumni record and a named reviewer records the approval.",
      "Measures: Report requests in scope, share failing verification, failure reasons, median days to resolution, share requiring a second document, and share denied.",
      "Review: Repeat after any change to the intake form, the identity standard, the alumni record system, or the third-party verification vendor."
    ],
    "findings": [
      "A diploma replacement request fails verification when the evidence does not match the alumni record or does not meet the policy standard. The failure can come from the document, the record, or the third party helping the alumnus. Each source needs a different response. The protocol should record the reason rather than only the denial.",
      "Define the identity standard before counting. The policy may require a government identifier, a notarized form, or a combination of documents. Record the standard that applied to each request. A moving standard makes the failure rate impossible to interpret.",
      "Separate a missing document from a mismatched document. A missing item is an intake problem, while a mismatch may indicate a record error or a name change. Record both the requested document and the reason it did not match. The two need different owners and timelines.",
      "Check the name on the alumni record against the name on the request. A legal name change, a maiden name, or a spelling variant can cause a failure that looks like fraud. Record the name variant and the supporting document. The reviewer should resolve the record before denying the request.",
      "Record the graduation year and program for every request. Alumni with similar names may be confused if the search relies on name alone. Use the student identifier or the graduation record to confirm the match. A wrong-record match is a serious error, not a routine delay.",
      "Count requests that needed a second document as a separate group. A second request adds days and frustration, and it may point to an unclear instruction. Record the first request wording and the document that resolved the case. The pattern often shows which instruction is weak.",
      "Check whether the third-party verification vendor reports a clear reason. A vendor response that says unable to verify without a reason leaves the office guessing. Record the vendor status and the date. If the reason is consistently missing, raise it with the vendor.",
      "Measure the time from the complete request to the verification decision. A request that waits for a reviewer is different from one waiting for the alumnus. Separate the internal and external time. The split shows where the delay actually sits.",
      "Include requests that were denied and later overturned on appeal. These show whether the first decision was sound. Record the appeal reason and the final outcome. A pattern of overturned denials points to a policy or training problem.",
      "Protect identity documents in the review. Store them in a restricted location and share only what the verification step requires. Do not copy full documents into email threads. The review should not create a new identity theft risk.",
      "Check whether the intake form explains why each document is needed. An alumnus who understands the reason is more likely to send the right document the first time. Record the explanation and test it with a colleague who has not seen the form. Clarity reduces repeat contacts.",
      "Describe the limits of the review. The alumni record may be incomplete, the verification vendor may not share reasons, and some requests may arrive by paper. State which risks apply and how they could shift the count. A limitation section keeps the number honest.",
      "Test the failure classification with a second reviewer using ten requests. Ask them to mark each as missing document, mismatched document, record issue, or third-party issue. Compare the results and revise the definitions before the full sample. A shared definition is essential.",
      "Name the decision the review supports. The office may need a clearer document list, a name-change step, or a different verification vendor. Each option has an owner and a cost. A report without a decision does not improve the next request.",
      "Repeat the measure after the change and compare the same request type. Use the same identity standard and the same population rule. Report what improved and what moved to another stage. A faster denial is not an improvement if the denial is wrong.",
      "Consider whether the alumni office should verify identity before discussing the record on the phone. A conversation that reveals graduation details before verification can expose information. Record the order of the steps. The control should start at first contact, not at document review.",
      "Ask the staff who handle requests where the process usually stops. Their answer may point to a specific document or a portal step. Record the step and the time it adds. A short conversation often explains a number that looks like general slowness.",
      "Keep the verification decision and the production decision separate. A request can pass identity and still fail production because the name or program is wrong. Record both decisions with their dates. A single status hides which step needs attention.",
      "Check whether the alumnus can submit the request without creating an account. A required account adds a step that some older alumni may not complete. Record the submission route and the abandonment rate. The intake should meet people where they are.",
      "Record whether the request asks for the graduation name and the current name in separate fields. A single name field forces the reviewer to guess. Record both values and the supporting document. The form design prevents a common mismatch.",
      "Ask whether the alumni office can search by graduation year and program when the name is uncertain. A name-only search is fragile. Record the search fields used. A broader search may resolve a case that would otherwise be denied.",
      "Check whether the verification vendor accepts a scanned document from a phone. A requirement for a flatbed scan can block an alumnus who has only a phone. Record the accepted formats. The standard should be secure without being needlessly difficult.",
      "Include requests that were resolved after a phone call in the measure. A phone call may substitute for a document in some policies. Record the call date and the evidence discussed. Excluding calls can overstate the failure rate.",
      "Review whether the denial letter explains how to appeal and what evidence would help. A denial without a next step invites a repeat request. Record the appeal instructions and the response window. The letter should close the loop even when the answer is no.",
      "Check whether the production team receives the verified name and program in a structured field. A free-text note can be misread. Record the handoff format and the error rate. A structured handoff reduces reprints and protects the alumnus.",
      "Check whether the request form explains how long verification takes. A stated window reduces repeated status calls. Record the published time and the actual median. The two should be compared each quarter.",
      "Ask whether the alumni office keeps a list of common name-change documents. A prepared list helps the reviewer ask for the right item once. Record the document type and the outcome. A short guide reduces second requests.",
      "Record whether the alumnus was given a specific reason and a next step after a failed check. A vague message produces repeated attempts and calls. Note the wording and the response. The quality of the explanation is part of the verification process."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Federal Trade Commission, Privacy and Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/where-do-alumni-diploma-replacement-requests-fail-identity-verification.webp"
  },
  {
    "slug": "how-often-do-classroom-app-data-sharing-reviews-lapse-after-the-renewal-date",
    "title": "How often do classroom app data-sharing reviews lapse after the renewal date?",
    "summary": "A review protocol for counting classroom apps that renew without a current data-sharing review and for separating lapsed, missing, and unowned agreements.",
    "cluster": "Course systems",
    "finding": "A classroom app review has lapsed when the app renewed or continued in use after its review date without a current agreement check, named owner, and recorded approval.",
    "methodology": [
      "Scope: This protocol counts classroom apps that remained available to students after the review date without a current data-sharing review recorded in the inventory.",
      "Population: Include every app in the district inventory that receives student data during the review window, and exclude apps removed before the renewal date.",
      "Opening event: Use the later of the app approval date or the most recent review date recorded in the inventory.",
      "Closing event: Treat a review as current only when the agreement, data fields, owner, and approval are checked and dated for the current renewal period.",
      "Measures: Report apps in scope, share lapsed, median days past review, share with no named owner, share with no agreement on file, and share found only in the single sign-on log.",
      "Review: Repeat after any change to the inventory, the procurement process, the single sign-on configuration, or the privacy review staffing model."
    ],
    "findings": [
      "A review has lapsed when an app continues in use after its review date without a current agreement check, named owner, and recorded approval. Renewal is one trigger, but a new term or a vendor change can also require a review. The protocol should use the review date, not only the contract date. The two often differ.",
      "Define the review date in the inventory. It may be the contract anniversary, the start of the school year, or the date the vendor last changed terms. Record which rule applies to each app. A mixed definition without a label makes the lapse count unreliable.",
      "Separate a missing agreement from a lapsed review. A missing agreement is a procurement failure, while a lapsed review may have a valid agreement that nobody checked. Record both the agreement status and the review status. The two need different fixes.",
      "Check whether the app has a named owner. An app without an owner tends to survive renewal because nobody is responsible for questioning it. Record the owner and the date they confirmed the app is still needed. An unused app should be removed rather than reviewed.",
      "Compare the inventory with the single sign-on log. Apps that appear in the log but not the inventory are shadow tools and should be added. Record the discovery source. A review that only covers the inventory will miss the tools teachers adopted on their own.",
      "Record the data fields the app receives. An app that receives only a roster is different from one that receives grades, disability information, or location. The data category should influence the review depth. A single review process for every app wastes effort and misses the high-risk cases.",
      "Check whether the vendor changed its terms during the renewal period. A renewal that accepts new terms without review can expand data use. Record the terms version and the date checked. If the version is unavailable, mark the app as unresolved.",
      "Measure the days past the review date for each lapsed app. A short lapse may reflect a scheduling delay, while a long lapse suggests the inventory is not maintained. Report the distribution and the longest lapse. The tail is where the risk sits.",
      "Include apps that were approved for a pilot and never reviewed for full use. A pilot that becomes permanent without a review is a common source of lapse. Record the pilot end date and the approval status. The pilot condition should be explicit.",
      "Check whether the renewal decision is made by procurement, curriculum, or technology. A decision made without the data owner may miss the privacy question. Record the decision maker and the evidence they used. The review should include the person who owns the data relationship.",
      "Describe the limits of the review. The inventory may be incomplete, the single sign-on log may miss apps that use manual uploads, and the review date may be inconsistent. State which risks apply and how they could shift the count. A limitation section keeps the number honest.",
      "Test the lapse classification with a second reviewer using ten apps. Ask them to mark each as current, lapsed, missing agreement, or unowned. Compare the results and revise the definitions before the full sample. A measure that two trained people apply differently is not reliable.",
      "Name the decision the review supports. The district may need a renewal gate, a quarterly reconciliation, or a removal list for unused apps. Each option has an owner and a cost. A report without a decision becomes an archive.",
      "Protect the inventory export. Use only the fields needed to classify the app and store the file in a restricted location. Do not include student-level data in the review. The review should not create a new privacy risk.",
      "Repeat the measure after the change and compare the same renewal cycle. Use the same review definition and the same population rule. Report what improved and what moved to another stage. A shorter inventory that hides apps is not an improvement.",
      "Ask teachers which apps they would miss if the tool disappeared. An app that nobody would miss is a candidate for removal and reduces the review burden. Record the answer with the owner confirmation. The review should shrink the portfolio where it can.",
      "Check whether the district publishes an approved app list that teachers can search. A clear list reduces shadow adoption and makes the review easier. Record the publication date and the last update. A list that is out of date is worse than no list.",
      "Consider whether the vendor's data deletion process is tested, not just documented. A deletion clause without a working process leaves data behind after the contract ends. Record the last deletion request and the confirmation. The review should cover the end of the relationship, not only the renewal.",
      "Check whether the inventory records the date the app was last used. An app with no use in a year is a removal candidate. Record the last activity date and the owner confirmation. Removing unused tools reduces the review burden without reducing instruction.",
      "Ask whether the district has a standard renewal window for all apps. A common window makes the review predictable and prevents a cluster of renewals in one month. Record the window and the exceptions. A predictable calendar is easier to staff.",
      "Record whether the vendor provides a data deletion confirmation at the end of the contract. A clause without a confirmation is only a promise. Record the last request and the response. The review should cover exit as well as renewal.",
      "Check whether teachers can see which apps are approved before they sign up. A searchable list reduces shadow adoption. Record the list location and the last update. A list that is hard to find will not change behavior.",
      "Include apps that receive data through a browser extension in the inventory. Extensions are easy to install and hard to see. Record the extension name and the data it reads. The single sign-on log may not capture them.",
      "Measure the time from a new app request to a decision. A slow review encourages teachers to proceed without approval. Record the request date and the decision date. A published service window sets expectations and reduces shadow use.",
      "Review whether the approval includes a condition for annual training. A tool that handles sensitive data may need users to complete privacy training. Record the training status and the date. The control includes the people who use the tool, not only the contract.",
      "Check whether the inventory includes the contract owner and the privacy contact separately. One person may not be able to answer both questions. Record both roles and the date confirmed. The review should know who can approve a change and who can assess the risk.",
      "Record whether the app has an export or deletion process the district has tested. An untested process may fail when a family requests deletion. Note the last test date and the result. The review should cover the district obligations, not only the vendor terms."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission, Privacy and Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      }
    ],
    "publishedAt": "2026-11-11",
    "image": "/thumbnails/november-11/how-often-do-classroom-app-data-sharing-reviews-lapse-after-the-renewal-date.webp"
  }
];
