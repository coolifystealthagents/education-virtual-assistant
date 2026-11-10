import type { ResearchPost } from './types';

export const november10ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-often-do-transcript-requests-pass-the-stated-turnaround-without-an-update",
    "title": "How often do transcript requests pass the stated turnaround without an update?",
    "summary": "A review protocol for counting transcript requests that pass the published service window without a status update and for separating school-side from destination-side delay.",
    "cluster": "Learner records",
    "finding": "A transcript request is past its stated turnaround when a complete order has waited longer than the published service window and no status change, sent copy, or documented exception is recorded.",
    "methodology": [
      "Scope: This protocol counts transcript requests whose recorded status did not change within the published turnaround after all required order details were received.",
      "Population: Include every transcript order submitted through a tracked channel during the review window, and exclude duplicate submissions from the same learner for the same destination.",
      "Opening event: Use the date and time the order became complete, meaning the identifier, authorization, destination, and delivery method were all recorded.",
      "Closing event: Treat a request as updated when a status change, a sent copy, a destination response, or a documented exception is entered in the tracking system.",
      "Measures: Report orders in scope, median days from complete to sent, the share past the published window, the share with no status update, and the share delayed by the destination rather than the school.",
      "Review: Repeat after any change to the intake form, the service standard, the delivery vendor, or the status definitions used by the registrar."
    ],
    "findings": [
      "A transcript request is past turnaround when the published service window has elapsed after a complete order and no status change or sent copy is recorded. It is not past turnaround merely because the learner called to ask about it, since a call is not a status update. The distinction matters because the first condition points to an operational gap and the second to a communication gap. The protocol should count the first condition and report the second separately.",
      "Define the service window before collecting data. The window may differ for official and unofficial copies, for electronic and paper delivery, and for orders that need a sealed envelope. Record the window that applied to each order on the day it was received. Using one blended standard will make the fastest channel look acceptable and the slowest look broken.",
      "Establish the opening event precisely. A request is complete only when the learner's identifier, authorization, destination, and delivery method are all recorded. An email that says please send my transcript is not a complete order. Orders that wait for missing details belong in a separate intake measure, not in the turnaround count.",
      "Record the destination type for every order. A university admissions office, a licensing board, and an employer may each have different receiving processes and response times. A destination that rejects a copy because of a format rule is not a school processing delay. Grouping all destinations together hides the source of the wait.",
      "Separate the internal review step from the delivery step. A copy may be prepared and then sit in an outbox until a batch is mailed. Record the date the copy was prepared and the date it left the office. The gap between those two dates is often the largest controllable part of the turnaround.",
      "Use the tracking system's timestamps rather than reconstructing dates from email. A status entered a week late makes the request look faster or slower than it was. If staff update statuses in batches, record the batch date and note the practice. The measure should reflect when the work happened, not when it was documented.",
      "Count requests with no status update at all as a distinct group. A request that was sent but never marked sent is a documentation failure, and a request that was never touched is a queue failure. The two need different fixes. Report them separately so the team does not solve the wrong problem.",
      "Include orders that were cancelled or withdrawn in a separate category. A learner who cancels after two days should not inflate the overdue count, and a learner who cancels because the wait was too long is a meaningful loss. Record the reason and the date of cancellation. The reason is often more useful than the completion rate.",
      "Age the backlog from the complete date, not the submission date. A learner who submitted an incomplete order and then took a week to send authorization should not make the registrar look slow. Show both dates in the report so the reader can see where the time went. The complete date is the fair starting point for a service measure.",
      "Freeze the export at a stated time and record the system used. Transcript statuses can change while the review is running, so a live view will not reproduce. Save the order list, the status history, and the service window that applied. A reviewer should be able to recompute the count from the saved files.",
      "Deduplicate orders from the same learner to the same destination. Learners often resubmit when they do not receive an acknowledgment, which inflates both the volume and the overdue count. Record which submission is the source of truth and close the duplicates with a note. A clean denominator makes the measure defensible.",
      "Check whether the acknowledgment itself is the missing update. Some systems send an automatic receipt that looks like a status change but does not mean the order was processed. Distinguish an automated acknowledgment from a human or system status that shows progress. Otherwise a queue of untouched orders can look healthy.",
      "Report the share of orders delayed by the destination. A destination that requires a specific form or a verified identity can add days the school does not control. Record the date the school sent the copy and the date the destination confirmed receipt. The difference is the destination-side wait.",
      "Describe the limits of the review. The tracking system may omit walk-in orders, the service window may have changed during the period, and one delivery vendor may not report status. State which risks apply and how they could shift the result. A limitation section is more useful than a single confident number.",
      "Choose a sample that includes every delivery channel, not only the largest one. Electronic orders may dominate the volume while paper orders carry most of the delay. Record the channel and the number of orders in each. Coverage by channel shows whether the standard is realistic for all of them.",
      "Ask the staff who process orders where the queue actually stalls. Their answer may point to a verification step, a printer, or a signature that is collected on paper. Record the step and the time it adds. A short conversation often explains a number that looks like general slowness.",
      "Test the status definitions with a staff member who did not design them. Ask them to classify five sample orders using the written rules. Record any disagreement and revise the definitions before collecting the full sample. A measure that two trained people apply differently is not reliable.",
      "Name the decision the review supports. The registrar may need a shorter acknowledgment, a daily outbox cutoff, a destination-specific checklist, or a second reviewer for sealed orders. Each option has a cost and an owner. A report without a decision becomes an archive rather than a control.",
      "Protect learner data in the review export. Use only the fields needed for the count and keep the file in a restricted location. Do not include full transcripts or unnecessary personal details in a working report. The review should not create a second copy of sensitive records.",
      "Repeat the measure after the chosen change and compare like with like. Use the same service window, the same population rule, and the same channels. A change that improves one channel while another gets worse may still be a net loss. Publish the before and after numbers with the limitation noted.",
      "Look at the acknowledgment message separately from the completion status. A learner who receives a receipt may assume the order is moving, while the office may still be waiting for a verification step. Record what the acknowledgment says and whether it sets a realistic expectation. A receipt that promises a date the office cannot meet creates a follow-up call even when the processing is on time.",
      "Check whether one program or destination dominates the backlog. A nursing program that sends transcripts to a licensing board may face a different review than a general education program. Record the program and the destination for every overdue order. A concentration in one group usually points to a specific form or requirement rather than a general staffing problem.",
      "Review the service window with the destinations that receive the most copies. A window that fits electronic delivery may be unrealistic for a board that requires a sealed paper copy. Record the agreed window for each high-volume destination and publish it. A standard that reflects the real constraint is easier to defend than one that sounds fast."
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
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/how-often-do-transcript-requests-pass-the-stated-turnaround-without-an-update.webp"
  },
  {
    "slug": "where-do-course-section-rollovers-carry-a-wrong-start-date-into-the-learning-platform",
    "title": "Where do course section rollovers carry a wrong start date into the learning platform?",
    "summary": "A review protocol for tracing section start-date mismatches between the registration system, the learning platform, and published course pages.",
    "cluster": "Course administration",
    "finding": "A rollover carries a wrong start date when the learning platform section date differs from the registration record or the published course page for the same term.",
    "methodology": [
      "Scope: This protocol counts course sections whose learning-platform start or end date differs from the registration record or the public course page after a term rollover.",
      "Population: Include every active section created by the rollover for the target term, and exclude archived sections that no learner can enter.",
      "Opening event: Use the date the section was created or copied into the learning platform for the new term.",
      "Closing event: Treat a section as correct only when the platform dates, the registration dates, and the published page all agree and the learner view shows the intended open date.",
      "Measures: Report sections in scope, sections with any date mismatch, the direction and size of each difference, the share visible to learners, and the median time to correction.",
      "Review: Repeat after any change to the rollover template, the term calendar, the integration between systems, or the person performing the copy."
    ],
    "findings": [
      "A rollover carries a wrong start date when the learning platform shows a different date than the registration record or the published course page. The mismatch can be one day or several weeks, and both can affect access. It is not enough for the section to look correct in one system. The protocol compares every system a learner might see.",
      "Define the three records being compared before collecting sections. The registration system holds the official term dates, the platform controls access, and the public page sets expectations. Record the source of truth for each field and the person allowed to change it. Without that ownership, corrections can overwrite each other.",
      "Use the section identifier rather than the course title as the join key. Many courses have multiple sections with similar names and different start dates. A title-based comparison will match the wrong rows and produce false findings. Record the identifier and the term for every section in the sample.",
      "Check both the start date and the end date. A section that opens on time but closes early can lock learners out of final assessments. Record the time zone used by each system as well, because a date can shift by a day at the boundary. The comparison should show the exact timestamp or the local date used.",
      "Separate copied dates from calculated dates. A template may carry last term's date until someone edits it, while an integration may calculate the date from a term record. Record which mechanism produced the value. The fix is different for a template that needs a default than for an integration that maps the wrong field.",
      "Look at the learner view, not only the administrative view. An instructor may see the correct date while learners see an old one because of a release setting or a cached page. Record the date displayed to a test learner. A section is not correct until the learner-facing date agrees.",
      "Count the sections that were visible to learners while the mismatch existed. A date error found before enrollment is a near miss, while one found after the first class is an incident. Record the first date learners could access the section and the date the error was corrected. The exposure window is the number the program lead needs.",
      "Check whether the wrong date came from the rollover template or from a manual edit. A template problem affects every section created from it, while a manual edit affects one. Record the template version and the editor. That distinction prevents a one-section fix from leaving the rest of the term exposed.",
      "Include the published course page in the comparison. Marketing pages are often updated by a different team and can lag behind the registration system. A learner who reads the public page and then enters the platform may see two different start dates. Record the page URL and the date it was last updated.",
      "Test the enrollment window against the start date. A section may open for access before enrollment is allowed, or allow enrollment after the first class. Record the registration window and the platform access window together. A correct date with the wrong access rule still produces a bad first day.",
      "Use a consistent sample across terms so the measure can be compared. If the review always starts with the same program, the result will reflect that program's template rather than the rollover process. Record the sampling rule and the first section selected. A random or consecutive sample is more defensible than a convenience list.",
      "Freeze the comparison data at a stated time and record the export source. Dates can be corrected while the review runs, so a live view will not reproduce. Save the registration export, the platform section list, and the public page snapshot. The reviewer should be able to recompute every mismatch.",
      "Record the correction time for each mismatch, not only the final status. A section fixed in ten minutes and one fixed after a week have very different operational costs. Show the median and the oldest case. The oldest case often reveals an approval bottleneck rather than a technical problem.",
      "Check integrations that create sections automatically. An integration may fail silently and leave the previous term's dates in place. Record whether the section was created by the integration or by hand. A manual workaround can hide a broken connection for an entire term.",
      "Describe the limits. The public page may not exist for every section, the platform export may omit drafts, and the review may cover one term. State which risks apply and how they could shift the result. A limitation section protects the review from overclaiming.",
      "Ask the person who performs the rollover which step is most often rushed. Their answer may identify a deadline that forces the copy before the term calendar is final. Record the step and the pressure behind it. A process fix at that point can prevent most of the mismatches.",
      "Test the learner view on a phone as well as a desktop. A date may wrap or be hidden on a narrow screen, which changes what the learner actually sees. Record the device and the viewport. Accessibility and clarity are part of whether the date is correct in practice.",
      "Name the decision the review supports. The team may need a term-calendar lock, an integration check, a template default, or a pre-open learner test. Each option has an owner and a cost. A report that does not change the next rollover is only a record of the last one.",
      "Repeat the review after the fix and use the same sample rule. Compare the mismatch rate and the exposure window, not just the number of corrections. A lower count with a longer exposure can be worse than a higher count caught early. Publish both numbers with the limitation noted.",
      "Keep the review evidence with the rollover checklist so the next owner can see what was checked. A short log of sections, mismatches, corrections, and dates is enough. The log should survive staff turnover. The next rollover should start from the known risks rather than from scratch.",
      "Check the term calendar lock before the rollover begins. If the calendar can change after sections are copied, every section created earlier becomes a candidate for a mismatch. Record the date the calendar was locked and who approved later changes. A lock is a cheap control that prevents most of the rework.",
      "Look at the sections that were copied by hand rather than by template. Manual copies are more likely to keep an old date because the editor has to remember every field. Record the creation method and the editor for each section. A short checklist for manual copies can reduce the error rate without changing the platform.",
      "Review the error with the instructor who first noticed it. Their report often includes the exact click path and the date the learner saw the problem. Record the report and the correction. That account is more useful for training than a general reminder to check dates."
    ],
    "sources": [
      {
        "label": "Learning Tools Interoperability",
        "publisher": "1EdTech",
        "url": "https://www.1edtech.org/standards/lti"
      },
      {
        "label": "Web Content Accessibility Guidelines (WCAG) 2.2",
        "publisher": "W3C",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "Guidance on Web Accessibility and the ADA",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/web-guidance/"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/where-do-course-section-rollovers-carry-a-wrong-start-date-into-the-learning-platform.webp"
  },
  {
    "slug": "what-share-of-waitlisted-learners-never-receive-a-seat-release-notice",
    "title": "What share of waitlisted learners never receive a seat release notice?",
    "summary": "A review protocol for counting waitlisted learners whose seat became available but who received no recorded release notice before the deadline.",
    "cluster": "Enrollment operations",
    "finding": "A waitlisted learner missed a release notice when a seat became available, the learner was next under the published ranking rule, and no recorded offer reached the family before the response deadline.",
    "methodology": [
      "Scope: This protocol counts waitlisted learners who were eligible for an available seat but had no recorded offer sent through an approved channel before the response deadline.",
      "Population: Include every learner on an active waitlist for a section that had at least one seat release during the review window, and exclude learners who withdrew from the waitlist before the release.",
      "Opening event: Use the date and time the registration system recorded the seat as available and the waitlist position became eligible.",
      "Closing event: Treat a notice as received only when the channel record shows delivery or a human contact logs a successful conversation before the deadline.",
      "Measures: Report learners in scope, seats released, offers sent, offers delivered, offers sent after the deadline, and the share of eligible learners with no recorded notice.",
      "Review: Repeat after any change to the waitlist ranking, the notification template, the delivery vendor, or the response window."
    ],
    "findings": [
      "A waitlisted learner missed a release notice when a seat became available, the learner was next under the published rule, and no recorded offer reached the family before the deadline. The learner may have received a message that bounced or arrived after the window closed. The protocol counts the outcome, not the intention to send. This distinction keeps the measure tied to what the family experienced.",
      "Define eligibility before collecting data. The published ranking rule determines who should receive the next offer, and the rule may include program priority or a lottery. Record the rule version that applied at the time of the release. A later change to the rule cannot be used to judge an earlier offer.",
      "Use the registration system's release timestamp as the opening event. A seat that appears available in a spreadsheet but not in the system is not yet released. Record the person who confirmed the release and the source they used. The timestamp is the anchor for every later calculation.",
      "Record the channel for every notice attempt. An email, a text, a phone call, and a portal message have different delivery evidence and different failure modes. A message queued is not a message delivered. Record the delivery confirmation or the call outcome separately from the send action.",
      "Treat a bounced message as no notice unless a second channel reached the family. A bounced email is a failed attempt, not a completed offer. Record the bounce and the follow-up attempt. The protocol should show whether the team recovered the contact or let the window expire.",
      "Check the timing of each notice against the response window. An offer sent two hours before the deadline is technically sent but may be impossible to answer. Record the time remaining when the message was delivered. A short window is a design problem, not a family failure.",
      "Separate learners who declined from learners who never responded. Both free the seat, but only one is a communication failure. Record the response and the date it was received. A declined offer is a successful process outcome even when the seat goes to the next person.",
      "Include learners who were added from the waitlist without an offer record. Some offices move a learner directly into the section after a phone call. That is a valid outcome only if the call is logged with a date. An unrecorded call looks like a missing notice in the data.",
      "Check the contact details against the learner record before judging the notice. A message sent to an old address is still a failed notice, but the fix is a data update rather than a template change. Record whether the channel detail was current. Group failures by cause so the remedy is specific.",
      "Deduplicate learners who appear on more than one waitlist. A learner may wait for two sections and receive an offer from one. Count the learner once for the release that applied, and record the other waitlist status. Duplicates can make the notice rate look better or worse than it is.",
      "Freeze the export at a stated time and record the systems used. Waitlist positions and seat counts change during the day, so a live view will not reproduce. Save the waitlist export, the release log, the message records, and the deadline that applied. A reviewer should be able to recompute each case.",
      "Describe the limits. The message vendor may not report delivery, a phone call may be logged in a different system, and the review may cover one program. State which risks apply and how they could shift the result. A limitation section is more useful than a confident rate that cannot be defended.",
      "Choose a sample that covers every program using the waitlist. A large program may have a mature notification process while a small one relies on manual calls. Record the program and the number of releases. Program-level coverage shows where the process actually breaks.",
      "Name the decision the review supports. The team may need a shorter message, a longer window, a second channel, or a daily reconciliation between the waitlist and the registration system. Each option has an owner and a cost. A report that does not change the next release cycle is only an archive.",
      "Check whether the family was told about the waitlist position and the expected window when they joined. A family that expected a call may not monitor email. Record what the original confirmation said. The notice channel should match the expectation the program created.",
      "Review the language and accessibility of the notice. A message in a language the family does not read is not a usable notice. Record the language field and the version sent. If no version exists, the gap is a readiness problem rather than a delivery problem.",
      "Test the notice with a staff member who did not write it. Ask them to identify the deadline, the next step, and the consequence of no response. Record anything they miss. A notice that is technically complete but confusing will produce avoidable expirations.",
      "Repeat the measure after a change and use the same population rule. Compare delivery, response, and expiration together. A higher delivery rate with a lower acceptance rate may mean the message reached the wrong people or arrived too late. Publish the before and after numbers with the limitation noted.",
      "Protect learner contact data in the review. Use only the fields needed for the count and keep the export in a restricted location. Do not include unnecessary personal details in a shared report. The review should not create a second copy of the waitlist.",
      "Keep the release log with the waitlist procedure so the next person can see how offers were handled. A short record of releases, notices, responses, and outcomes is enough. The log should survive staff changes. The next term should start with a process that already knows its failure points.",
      "Check whether the waitlist confirmation tells the family how offers will arrive. A family that expects a phone call may not check email during the response window. Record the channel promised at signup and the channel used for the offer. A mismatch is a process problem that the program can fix in the confirmation message.",
      "Look at the offers sent near the end of the day or before a weekend. A message delivered on Friday evening may expire before the family returns to work. Record the delivery time and the business hours in the response window. A window that counts only business hours is fairer than one that counts the clock.",
      "Review the rejection or expiration message. A family that learns nothing from the message may contact the office or give up on the program. Record whether the message explains the outcome and any remaining option. A clear close is part of a respectful waitlist process."
    ],
    "sources": [
      {
        "label": "Integrated Postsecondary Education Data System",
        "publisher": "National Center for Education Statistics",
        "url": "https://nces.ed.gov/ipeds/"
      },
      {
        "label": "College Scorecard",
        "publisher": "U.S. Department of Education",
        "url": "https://collegescorecard.ed.gov/"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/what-share-of-waitlisted-learners-never-receive-a-seat-release-notice.webp"
  },
  {
    "slug": "how-often-do-field-trip-permission-forms-stay-unresolved-before-the-trip-date",
    "title": "How often do field trip permission forms stay unresolved before the trip date?",
    "summary": "A review protocol for counting learners whose trip paperwork is still incomplete as the departure date approaches and for separating family, school, and vendor delays.",
    "cluster": "Scheduling",
    "finding": "A field trip form is unresolved when a required permission, medical, or payment item has no recorded completion before the roster cutoff for the trip.",
    "methodology": [
      "Scope: This protocol counts learners with at least one required trip item unresolved at the roster cutoff, not merely missing at the time of the first reminder.",
      "Population: Include every learner expected to attend a scheduled trip during the review window, and exclude learners whose families formally declined participation before the cutoff.",
      "Opening event: Use the date the trip was announced and the required items were published to families.",
      "Closing event: Treat an item as resolved only when the signed form, medical authorization, or payment is recorded in the official tracking location before the cutoff.",
      "Measures: Report learners in scope, items required, learners with any unresolved item, the item type and age, the share resolved after the cutoff, and the number excluded from the trip.",
      "Review: Repeat after any change to the form, the reminder schedule, the payment process, or the roster cutoff rule."
    ],
    "findings": [
      "A field trip form is unresolved when a required item has no recorded completion before the roster cutoff. A form sitting in a teacher's folder is not resolved, because the office cannot confirm it or give the trip leader a complete list. The protocol counts recorded completion, not good intentions. This definition makes the measure useful for the decision the school actually has to make.",
      "List the required items for each trip type before collecting data. A local walking trip, a museum visit, and an overnight trip may need different permissions and medical details. Record the requirement set that applied to each trip. A single generic form count will miss the item that actually blocks participation.",
      "Use the roster cutoff as the closing event rather than the departure date. The cutoff is when the school decides who boards the bus and how many chaperones are needed. A form that arrives after the cutoff may still be accepted as an exception, but it is late. Record both the cutoff and the departure date.",
      "Record the date each item was received and the date it was entered into the tracking system. A form received on time but entered late looks missing and may trigger unnecessary reminders. The gap between receipt and entry is a school-side delay that the office can fix.",
      "Separate family-side delays from school-side and vendor-side delays. A family that never received the form is different from one that returned it to a teacher who did not pass it on. A payment processor outage is different again. Record the cause for each unresolved item so the fix is targeted.",
      "Count each learner once for the headline rate but report the item types separately. A learner missing both a permission slip and a payment is one learner with two gaps. Reporting only the learner rate can hide which item is the main blocker. The item breakdown is what the office needs to act on.",
      "Check the language and format of the notice. A form available only online may exclude a family without reliable access, and a form in one language may not reach a household that needs another. Record the channel and language used. A notice the family cannot use is a readiness gap, not a family failure.",
      "Look at the reminder schedule. A single reminder sent the day before the cutoff gives families little time to act. Record the dates and channels of each reminder. Two reminders spaced a week apart usually produce a better response than a burst of messages at the end.",
      "Include the medical and accessibility items in the same review but protect the detail. The report needs to know whether the item is resolved, not the medical content. Record a status and a secure storage reference. Do not copy sensitive details into a shared tracking sheet.",
      "Check whether the payment requirement blocks participation and whether families were told. A family that cannot pay may avoid responding because it expects to be excluded. Record any hardship arrangement and the person who approved it. The policy should be clear before the first reminder.",
      "Freeze the tracking data at the cutoff and record the source. Forms can arrive during the review, so a live view will not reproduce. Save the learner list, the item status, the reminder log, and the cutoff rule. A reviewer should be able to recompute each unresolved case.",
      "Describe the limits. The tracking system may omit forms collected on paper, a teacher may hold a signed copy, and the review may cover one trip. State which risks apply and how they could shift the result. A limitation section keeps the report honest about what it can prove.",
      "Choose a sample that includes different trip types and grade levels. A small club trip may rely on a single teacher, while a whole-grade trip uses a central process. Record the trip type and the number of learners. Coverage by trip type shows whether the process works beyond the largest event.",
      "Name the decision the review supports. The school may need a digital form, a longer reminder window, a payment plan, or a roster cutoff that matches the transport booking. Each option has an owner and a cost. A report that does not change the next trip is only a record of the last one.",
      "Ask the staff who make the reminder calls what families say. Their answers often reveal a misunderstanding about what is required or a fear about the cost. Record the recurring questions and revise the notice. A clearer first message reduces the need for repeated calls.",
      "Test the form with a family or a staff member who has not used it. Ask them to complete it on a phone and note where they hesitate. Record the time taken and any confusing field. A form that is hard to complete will produce late returns regardless of the reminder schedule.",
      "Repeat the measure after a change and use the same cutoff rule. Compare unresolved items and exclusions, not just the number of reminders sent. A lower unresolved count with more exclusions may mean the process is pushing families out rather than helping them. Publish both numbers with the limitation noted.",
      "Keep the final roster and the item status together for the trip file. The trip leader needs a list that shows who is cleared and who is not. The office needs a record that can answer a question after the trip. A short combined record is more useful than two separate lists.",
      "Protect learner privacy in the review. Use only the fields needed for the count and keep the export in a restricted location. Do not include medical details or payment information in a shared report. The review should not create a second copy of sensitive records.",
      "Share the result with the trip leaders and the front office, not only the administration. The people who make the calls need to see what changed and why. Record one improvement and the date it takes effect. The next trip should start with a clearer notice and a shorter unresolved list.",
      "Check the trip announcement for the return method. A form that can only be returned to a teacher may sit in a classroom while the office waits. Record the return options offered and the one the family used. Adding a front-office drop-off or a digital upload can remove a common delay.",
      "Look at the families who needed a second reminder. A pattern by grade, program, or language may point to a notice that does not reach a group. Record the group and the reminder channel. A targeted fix is more effective than another general announcement.",
      "Review the exception process for a form that arrives after the cutoff. A written exception with an approver protects the school and the family. Record the reason, the approver, and the date. An informal acceptance at the bus door is not a process."
    ],
    "sources": [
      {
        "label": "School Health",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/healthyschools/"
      },
      {
        "label": "School Bus Safety",
        "publisher": "National Highway Traffic Safety Administration",
        "url": "https://www.nhtsa.gov/school-bus-safety"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/how-often-do-field-trip-permission-forms-stay-unresolved-before-the-trip-date.webp"
  },
  {
    "slug": "where-do-substitute-coverage-requests-fail-when-the-absence-reason-is-missing",
    "title": "Where do substitute coverage requests fail when the absence reason is missing?",
    "summary": "A review protocol for tracing substitute coverage requests that stall or go unfilled when the absence record lacks a usable reason category.",
    "cluster": "Scheduling",
    "finding": "A coverage request fails when a class is unfilled at the bell after the absence was reported without a reason category that the scheduling team can act on.",
    "methodology": [
      "Scope: This protocol counts absence reports whose coverage request was still unfilled at the scheduled class start and whose absence record lacked a usable reason category.",
      "Population: Include every employee absence that required coverage during the review window, and exclude absences that did not affect a scheduled class.",
      "Opening event: Use the time the absence was reported to the office, not the time it was approved or entered into the scheduling system.",
      "Closing event: Treat coverage as complete only when a named substitute or an approved alternative is recorded before the class start time.",
      "Measures: Report absences in scope, reports without a reason category, coverage requests unfilled at the bell, median time from report to first offer, and the share resolved by an alternative arrangement.",
      "Review: Repeat after any change to the absence form, the approval step, the substitute call list, or the coverage escalation rule."
    ],
    "findings": [
      "A coverage request fails when a class is unfilled at the bell after an absence was reported without a reason category the scheduling team can act on. The missing reason is not the only cause, but it often delays the approval that would start the search. The protocol follows the request from report to bell. This shows where the time actually goes.",
      "Define a small set of reason categories that support planning without exposing sensitive detail. Planned leave, illness, professional development, and emergency are usually enough for scheduling. Keep the detailed reason in a restricted field. The category is what the coverage team needs.",
      "Use the report time as the opening event. The clock starts when the office learns about the absence, not when a form is completed. Record who received the report and through which channel. A request that sits in an inbox overnight has already lost its most valuable hours.",
      "Track the approval step separately from the substitute search. An absence may need supervisor approval before coverage is arranged, and that step can consume the morning. Record the time approval was requested and the time it was granted. A long approval gap points to a process problem rather than a shortage of substitutes.",
      "Record the first time a substitute was contacted and the time a substitute accepted. The difference shows how long the search took. If no one was contacted until after approval, the approval is the bottleneck. If many were contacted and none accepted, the issue is availability or pay.",
      "Count the coverage requests that were filled by an alternative, such as combining classes or using a floating staff member. These are valid outcomes but they have different costs and risks. Record the alternative and the person who approved it. A high alternative rate may hide a chronic substitute shortage.",
      "Separate absences reported before the day from same-morning absences. A planned absence gives the office time to prepare, while a same-morning absence compresses every step. Record the lead time for each report. The same process can look adequate for one group and fail for the other.",
      "Check whether the absence record reached the scheduling system at all. A report taken by phone and written on paper may never create a coverage request. Record the system of record and the time the entry appeared. A missing entry is a handoff failure, not a substitute failure.",
      "Include the classes affected and their start times, not just the employee. A single absence may create three separate coverage gaps with different urgency. Record each class and whether it was covered. An employee-level success can hide a class-level failure.",
      "Look at the substitute call list and its order. A list that starts with people who rarely accept wastes the first hour. Record the number of contacts before an acceptance and whether the list was current. A short review of the last twenty requests often shows a fixable pattern.",
      "Freeze the data at a stated time and record the source systems. Coverage changes quickly, so a live view will not reproduce. Save the absence reports, the approval log, the contact log, and the class schedule. A reviewer should be able to recompute each unfilled case.",
      "Describe the limits. The phone log may be incomplete, a substitute may have been contacted informally, and the review may cover one building. State which risks apply and how they could shift the result. A limitation section is more useful than a single unfilled rate.",
      "Choose a sample that includes different days of the week and different subjects. Coverage is often harder on certain days or in certain specialties. Record the day, the subject, and the building. Grouping the results shows whether the problem is general or specific.",
      "Name the decision the review supports. The team may need a shorter approval path, a larger call list, a higher daily rate, or a rule that starts the search before approval when the class is imminent. Each option has an owner and a cost. A report without a decision is only a record of a hard morning.",
      "Ask the person who makes the calls what happens when the reason field is blank. Their answer may show that they wait for a supervisor or guess at the urgency. Record the workaround and the time it adds. The fix may be as simple as a required category on the report form.",
      "Review the wording of the absence form with the staff who use it. A form that asks for a detailed medical reason may discourage honest reporting or delay completion. Record the feedback and the revised wording. A short category list is usually enough for scheduling.",
      "Repeat the measure after a change and use the same population rule. Compare unfilled classes, time to first contact, and alternative arrangements together. A lower unfilled rate with more combined classes may not be an improvement. Publish the before and after numbers with the limitation noted.",
      "Protect the absence details in the review. Use only the category and the scheduling fields in the working report. Keep the detailed reason in the restricted system. The review should not become a way to circulate personal information.",
      "Keep a short coverage log with the daily schedule so the next person can see what happened. A record of reports, approvals, contacts, and outcomes is enough. The log should survive staff changes. The next hard morning should start from known failure points.",
      "Share the result with the front office and the scheduling owner, not only the administration. The people who make the calls need to see what changed. Record one improvement and the date it takes effect. The next term should start with a faster path from report to coverage.",
      "Check whether the absence form can be submitted without a reason category. If the field is optional, the scheduling team will keep receiving incomplete reports. Record the form version and the number of blank fields. A required category with a short list is a simple control.",
      "Look at the first thirty minutes after a report. The coverage search either starts or waits, and the difference often decides whether the class is covered. Record the time of the first contact and the time of the first acceptance. A daily review of that gap is more useful than a monthly total.",
      "Review the message sent to substitutes. A vague request that does not name the school, time, or subject is easy to ignore. Record the message and the response rate. A specific request with the pay and the schedule is more likely to be accepted.",
      "Check the substitute roster for the subjects that fail most often. A general list may have plenty of names while a specialty subject has none. Record the subject and the number of available substitutes. A targeted recruitment plan is more useful than a longer general call list."
    ],
    "sources": [
      {
        "label": "Family and Medical Leave Act",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fmla"
      },
      {
        "label": "Every Student Succeeds Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/essa"
      },
      {
        "label": "Educational Instruction and Library Occupations",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/education-training-and-library/home.htm"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/where-do-substitute-coverage-requests-fail-when-the-absence-reason-is-missing.webp"
  },
  {
    "slug": "how-long-do-tuition-payment-plan-changes-wait-for-a-financial-aid-decision",
    "title": "How long do tuition payment plan changes wait for a financial aid decision?",
    "summary": "A review protocol for measuring the time between a family's payment plan change request and a recorded financial aid or billing decision.",
    "cluster": "Family communication",
    "finding": "A payment plan change waits too long when the request is complete, the family has supplied the required documents, and no decision is recorded within the published review window.",
    "methodology": [
      "Scope: This protocol counts complete payment plan change requests that had no recorded decision within the published financial aid or billing review window.",
      "Population: Include every request to change an installment amount, due date, or plan length during the review window, and exclude requests withdrawn by the family before review.",
      "Opening event: Use the date the request and all required documents were recorded as received by the reviewing office.",
      "Closing event: Treat a request as decided only when the outcome, the effective date, and the revised plan are recorded and visible to the family.",
      "Measures: Report requests in scope, median days to decision, the share past the published window, the share waiting on missing documents, and the share routed to hardship review.",
      "Review: Repeat after any change to the request form, the document requirements, the review staffing, or the plan system."
    ],
    "findings": [
      "A payment plan change waits too long when the request is complete, the family has supplied the required documents, and no decision is recorded within the published window. Waiting for a document is a different condition, because the clock should not start until the file is complete. The protocol separates the two so the measure points to the right fix. A family that did everything asked should not be counted as a late request.",
      "Define the published review window before collecting data. The window may differ for a routine due-date change and for a hardship adjustment that needs documentation. Record the window that applied to each request on the day it was received. A blended standard will hide the slower category.",
      "Use the complete date as the opening event. A request is complete only when the form and every required document are recorded. Record the dates each item arrived. The gap between the first contact and the complete date is the family-side wait, which is useful but separate.",
      "Record the decision type as well as the date. An approval, a denial, a partial approval, and a referral to another office are different outcomes with different next steps. A request that is denied with a clear reason is a completed decision. A request that is still waiting for a reviewer is not.",
      "Separate the financial aid review from the billing system update. A decision may be made and then sit in a queue before the new plan appears to the family. Record the decision date and the date the plan changed in the system. The second date is what the family experiences.",
      "Check whether the family was told what documents were required in the first response. A request that goes back and forth for missing paperwork may look like a family delay when the notice was unclear. Record the number of document requests and the wording used.",
      "Include requests that were routed to hardship review. These may legitimately take longer, but they should still have a recorded status and an expected date. Record the route and the reviewer. A hardship request with no status is indistinguishable from a lost request.",
      "Look at the staffing pattern across the review window. A spike in decision time may coincide with a holiday, a term start, or a staff absence. Record the dates and the available reviewers. The pattern can explain a delay without excusing a missing response.",
      "Count requests that were decided but never communicated. A decision recorded internally but not sent to the family is still a communication failure. Record the decision date and the notification date. The gap between them is often the easiest part to fix.",
      "Freeze the export at a stated time and record the systems used. Decisions and payments change during the day, so a live view will not reproduce. Save the request list, the document log, the decision record, and the plan history. A reviewer should be able to recompute each case.",
      "Describe the limits. The document log may omit items sent by fax or in person, a reviewer may have decided by phone, and the review may cover one term. State which risks apply and how they could shift the result. A limitation section keeps the report defensible.",
      "Choose a sample that includes routine changes and hardship requests. A program with many small due-date changes may look fast while the hardship cases wait much longer. Record the request type and the number in each group. Coverage by type shows where the process strains.",
      "Name the decision the review supports. The office may need a clearer document checklist, a daily review slot, a status message, or a second reviewer during peak periods. Each option has an owner and a cost. A report without a decision is only a record of the last term.",
      "Ask the staff who review requests where the file most often stalls. Their answer may point to a missing verification, a system permission, or an approval that waits for a supervisor. Record the step and the time it adds. A small permission fix can remove days from the median.",
      "Test the family-facing status message with someone who has not used the portal. Ask them to find the decision and the next payment date. Record anything they cannot find. A decision that exists but is hard to see will still generate calls.",
      "Repeat the measure after a change and use the same population rule. Compare decision time, communication time, and the share still waiting on documents. A faster decision with a slower notification may not improve the family experience. Publish the before and after numbers with the limitation noted.",
      "Protect financial and personal details in the review. Use only the fields needed for the count and keep the export in a restricted location. Do not include bank details or full hardship narratives in a shared report. The review should not create a second copy of sensitive records.",
      "Keep a short decision log with the plan procedure so the next reviewer can see how cases were handled. A record of request dates, documents, decisions, and notifications is enough. The log should survive staff changes. The next term should start with a clearer checklist.",
      "Share the result with the billing office and the family communication team, not only the administration. The people who answer the phone need to see what changed. Record one improvement and the date it takes effect. The next peak period should be easier to staff.",
      "Check that the family's preferred channel and language are used for the decision notice. A decision sent to an unmonitored email is not a completed communication. Record the channel and whether it matched the family record. The plan change is not finished until the family can see it.",
      "Check whether the family can see that the request was received. A confirmation that names the documents and the expected review window reduces repeat calls. Record the confirmation text and the date it was sent. A clear receipt is a low-cost way to prevent a backlog of status questions.",
      "Look at the requests that were complete but routed to the wrong reviewer. A misroute can add days while the file waits for someone who cannot decide. Record the route and the reason for any reassignment. A routing rule based on request type is easier to follow than one based on who is available.",
      "Review the denial notices for a clear reason and next step. A family that does not understand a denial may resubmit the same request, which adds work and delay. Record the reason and the appeal path. A clear denial is a completed decision, not a failure."
    ],
    "sources": [
      {
        "label": "Student loans",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/consumer-tools/student-loans/"
      },
      {
        "label": "Federal Student Aid",
        "publisher": "U.S. Department of Education",
        "url": "https://studentaid.gov/"
      },
      {
        "label": "Fair Debt Collection Practices Act",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/fair-debt-collection-practices-act"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/how-long-do-tuition-payment-plan-changes-wait-for-a-financial-aid-decision.webp"
  },
  {
    "slug": "what-share-of-stopped-out-learners-receive-no-outreach-within-two-weeks",
    "title": "What share of stopped-out learners receive no outreach within two weeks?",
    "summary": "A review protocol for counting learners who become inactive and receive no recorded outreach within a stated two-week window.",
    "cluster": "Learner operations",
    "finding": "A stopped-out learner missed outreach when the inactivity window closed, the learner met the program's stopped-out definition, and no recorded contact attempt occurred within the stated follow-up window.",
    "methodology": [
      "Scope: This protocol counts learners who met the stopped-out definition and had no recorded outreach attempt within two weeks of the status date.",
      "Population: Include every learner who became inactive during the review window, and exclude learners on an approved leave, completed learners, and those with a documented do-not-contact request.",
      "Opening event: Use the date the learner first met the stopped-out definition after the inactivity window closed.",
      "Closing event: Treat outreach as received only when a contact attempt is recorded in the learner system with a date, channel, and owner within the two-week window.",
      "Measures: Report learners in scope, the share with no outreach within two weeks, median days to first attempt, attempts by channel, replies, and the share with a do-not-contact request.",
      "Review: Repeat after any change to the inactivity rule, the outreach cadence, the assigned advisors, or the learner system."
    ],
    "findings": [
      "A stopped-out learner missed outreach when the inactivity window closed, the learner met the program's definition, and no recorded contact attempt occurred within two weeks. The definition matters because a learner on approved leave is not stopped out. The record matters because an advisor may have called without logging it. The protocol counts recorded attempts so the measure can be reproduced.",
      "Define stopped-out status with a specific inactivity window and a rule for approved leaves. Include prior enrollment, no completion, and no current registration or recent activity. Record the rule version that applied. A definition that changes mid-review will produce a number nobody can compare.",
      "Use the status date as the opening event. The status date is when the inactivity window closed and the learner became eligible for outreach. Record the evidence used, such as the last login or submission. A learner who is still submitting work does not belong in the count.",
      "Record every contact attempt with a date, channel, and owner. A call, a text, an email, and a portal message are separate attempts. A task assigned but not performed is not an attempt. The record should show what the learner actually received or what the advisor tried.",
      "Separate a failed attempt from no attempt. A bounced email is an attempt if it is logged and followed by another channel. A queue item that nobody opened is no attempt. Report the two separately because the fixes are different.",
      "Check the do-not-contact list before counting. A learner who asked not to be contacted should be excluded from the outreach measure, not counted as a failure. Record the request date and the system that suppresses future messages. Respecting the request is part of a healthy process.",
      "Include learners who re-enrolled during the window. A learner who returned before the first outreach may not need a call, but the status should still show how the case closed. Record the re-enrollment date and the outreach status. A quick return is a good outcome, not a missing attempt.",
      "Look at the assignment of advisors. A list without a named owner becomes a list everyone sees and no one works. Record the owner for each learner and the date of assignment. A long gap between status and assignment is a routing problem, not an advisor failure.",
      "Count attempts by channel to see whether the process relies on one method. A program that only sends email may miss learners who changed addresses. Record the channel mix. A second channel can improve reach without adding much cost.",
      "Freeze the export at a stated time and record the systems used. Activity and contact data change daily, so a live view will not reproduce. Save the learner status list, the activity evidence, the contact log, and the suppression list. A reviewer should be able to recompute each case.",
      "Describe the limits. An advisor may have called from a personal phone without logging it, the learning platform may miss offline activity, and the review may cover one program. State which risks apply and how they could shift the result. A limitation section keeps the report honest.",
      "Choose a sample that includes every advisor and program. A single advisor with a small caseload may look good while a larger program struggles. Record the program, the advisor, and the number of learners. Grouping the results shows where the process needs support.",
      "Name the decision the review supports. The program may need a shorter inactivity window, a required contact log, a second channel, or a clearer assignment rule. Each option has an owner and a cost. A report without a decision is only a record of the last term.",
      "Ask the advisors what stops them from making the first call. Their answers may point to missing contact details, unclear ownership, or a fear of saying the wrong thing. Record the barrier and the fix. A short script and a clean list can remove most of the delay.",
      "Review the outreach message with a learner who returned. Ask what made them respond and what they needed to hear. Record the feedback and revise the message. A specific, respectful question is more effective than a general check-in.",
      "Repeat the measure after a change and use the same definition. Compare the no-outreach share, the median days to first attempt, and the reply rate together. A faster first attempt with no replies may mean the message is wrong. Publish the before and after numbers with the limitation noted.",
      "Protect learner data in the review. Use only the fields needed for the count and keep the export in a restricted location. Do not include personal contact details in a shared report. The review should not create a second copy of the learner record.",
      "Keep a short outreach log with the program procedure so the next advisor can see what was tried. A record of status dates, attempts, channels, and replies is enough. The log should survive staff changes. The next term should start with a clearer cadence.",
      "Share the result with the advisors and the program lead, not only the administration. The people making the calls need to see what changed. Record one improvement and the date it takes effect. The next cohort should receive a faster, more respectful first contact.",
      "Check whether the learner's preferred channel and language are used. A message in the wrong language or to an unmonitored address is not real outreach. Record the preference and the version sent. The measure should reflect whether the learner could actually receive and understand the attempt.",
      "Check whether the learner system can produce the status list automatically. A manual list is easy to postpone during a busy week, which is exactly when learners become inactive. Record the source and the refresh date. An automatic list with a named owner is more reliable than a monthly export.",
      "Look at the first attempt for learners with no phone number on file. The absence of a working channel is a data problem, not a reason to skip the case. Record the missing field and the alternative used. A short data-cleanup step can make the next outreach possible.",
      "Review the script with the advisors after a campaign. A question that feels like a sales pitch can push a learner away. Record the wording that produced replies and the wording that did not. A respectful, specific question is the core of the process.",
      "Look at the learners who returned without any outreach. Their path may reveal a support that already works, such as an instructor or a peer. Record how they returned and who helped. The program can strengthen that path instead of adding another campaign.",
      "Review the outreach cadence with the advisors who carry the largest caseloads. A cadence that works for fifty learners may fail at three hundred because the first attempt never happens. Record the caseload and the completion rate. Adjusting the assignment is often more effective than adding another reminder."
    ],
    "sources": [
      {
        "label": "Integrated Postsecondary Education Data System",
        "publisher": "National Center for Education Statistics",
        "url": "https://nces.ed.gov/ipeds/"
      },
      {
        "label": "Institute of Education Sciences",
        "publisher": "U.S. Department of Education",
        "url": "https://ies.ed.gov/"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      }
    ],
    "publishedAt": "2026-11-10",
    "image": "/thumbnails/november-10/what-share-of-stopped-out-learners-receive-no-outreach-within-two-weeks.webp"
  }
];
