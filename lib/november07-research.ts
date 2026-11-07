import type { ResearchPost } from './types';

export const november07ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": 'how-many-parent-conference-requests-wait-on-interpreter-availability',
    "title": 'How many parent conference requests wait on interpreter availability?',
    "summary": 'A measurement protocol for counting conference requests that stayed unscheduled because a qualified interpreter was not confirmed, with clear timestamps and reporting rules.',
    "cluster": 'Scheduling operations',
    "publishedAt": '2026-11-07',
    "finding": 'The useful count is requests that remained unscheduled because a qualified interpreter was not confirmed, not the total number of requests that mentioned a language need.',
    "methodology": [
      'Scope: This protocol counts parent conference requests that stayed unscheduled because a qualified interpreter could not be confirmed for the requested language and meeting type.',
      'Population: Include every conference request received in the window that recorded a language or accessibility need, and exclude requests that needed no interpreter.',
      'Opening event: Use the date the complete request reached the scheduling team, not the date a teacher mentioned the need in a hallway conversation.',
      'Closing event: Treat a request as cleared when a qualified interpreter is confirmed and the family receives a time, or when the family withdraws in writing.',
      'Measures: Report the count, the share still open at the close of the window, the age of the oldest request, and the median days from request to interpreter confirmation.',
      'Review: Repeat with the same definitions after any change to the vendor, the intake form, or the booking sequence.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A request that mentions a language need is not the same as a request that is waiting for an interpreter. The first is a data point about demand, while the second is work held by a specific constraint. The protocol should count only requests where a needed interpreter was not confirmed by the close of the window. That definition keeps the measure tied to a decision the team can act on.',
          'Start by naming the population. Include requests for scheduled parent conferences that recorded a spoken language, a sign language, or another communication need. Exclude routine messages and requests that needed no interpreter. State whether a family that asked for two languages counts once or twice, and apply the rule consistently. Write the rule down before looking at the data.',
          'Separate the interpreter types because they draw on different pools. A spoken language interpreter from a vendor, a staff bilingual teacher, a sign language interpreter, and a captioning service all have different confirmation paths. Pooling them into one rate hides the constraint that actually caused the wait. Report each type with its own count and its own owner.',
          'The opening timestamp needs a clear source. Use the date the complete request reached the scheduling team, not the date the teacher first mentioned it. If the intake form was incomplete, record the date the missing information arrived as the opening event. A request that sat in an inbox before it was complete is a different problem from one that arrived complete and still waited.',
          'Define confirmation before counting a request as cleared. A verbal yes from an interpreter is not confirmation if the assignment is not recorded in the schedule. Require a named interpreter, the meeting date, the mode, and a confirmation time. If a vendor supplies the interpreter, record the confirmation number. Without that evidence the case remains open.',
          'Channel failures deserve a separate field. A family may be available only by phone, while the scheduler sends everything by email. A request can look stalled when the team is waiting on a reply that never reached the family. Record the channel used and the channel that worked. That comparison often explains a delay without blaming the family.',
          'Sibling requests complicate the count because one family may need two consecutive conferences with the same interpreter. Count the family block as one request when the policy holds the block together. Record the number of conferences inside the block. Otherwise a single interpreter gap can look like two independent failures and distort the rate.',
          'Vendor cancellations should be visible in the record. If an interpreter cancels after confirmation, the request returns to the waiting population and the original confirmation stays in the history. Do not erase the first assignment. The cancellation pattern may point to a vendor, a time slot, or a travel problem that the team can fix.',
          'Staff interpreters and contracted interpreters need separate escalation paths. A staff member may be pulled into another duty, while a vendor may need more notice to fill a slot. Record the source of the assignment and the person who owns the escalation. The same report can then show which pool produced the wait.',
          'Duplicate requests are common when a family contacts the teacher and the front office. Check for duplicate student or family identifiers before counting. Record how duplicates were resolved and whether the resolution changed the status. A denominator built on duplicated rows can make the queue look larger and the wait look shorter.',
          'Freeze the data at a stated time before analysis. Export the request list, the status history, the interpreter assignments, and the family messages into a working file. Record the export time and the system used. A moving dataset makes even a careful count impossible to reproduce, especially when confirmations arrive during the review.',
          'Report the denominator with the result. Show the number of requests in scope, the number cleared with a confirmed interpreter, the number still open, and the number that ended without a conference. A rate calculated only from closed cases excludes the requests most likely to be stuck. That omission makes the queue look healthier than it is.',
          'Use the age distribution rather than a single average. A median can hide a small group of very old requests that consume most of the coordinator attention. Show the oldest request and the count beyond each threshold the team uses. The reader should see whether the queue is broadly healthy or split into two very different populations.',
          'Describe limits in the report itself. The intake form may have changed, the vendor may have lost capacity, and the sample may be too small for a stable rate. Say which risks apply and how they could shift the result. A careful limitation section is more useful than a confident number that cannot be defended.',
          'Name the decision the report supports before the review meeting. The team may need to change the intake form, add a vendor, move a staff assignment, or adjust the conference window. Each decision implies a different next step and a different owner. Without a named decision the report becomes an archive.',
          'A consecutive sample is easier to defend than a hand picked set of difficult cases. Start from the first eligible request in the window and move forward until the sample is filled. If a request cannot be reviewed, record the reason and take the next one. That rule limits the temptation to choose cases that make the queue look good.'
        ]
      }
    ],
    "findings": [
      'A request that mentions a language need is not the same as a request that is waiting for an interpreter. The first is a data point about demand, while the second is work held by a specific constraint. The protocol should count only requests where a needed interpreter was not confirmed by the close of the window. That definition keeps the measure tied to a decision the team can act on.',
      'Start by naming the population. Include requests for scheduled parent conferences that recorded a spoken language, a sign language, or another communication need. Exclude routine messages and requests that needed no interpreter. State whether a family that asked for two languages counts once or twice, and apply the rule consistently. Write the rule down before looking at the data.',
      'Separate the interpreter types because they draw on different pools. A spoken language interpreter from a vendor, a staff bilingual teacher, a sign language interpreter, and a captioning service all have different confirmation paths. Pooling them into one rate hides the constraint that actually caused the wait. Report each type with its own count and its own owner.',
      'The opening timestamp needs a clear source. Use the date the complete request reached the scheduling team, not the date the teacher first mentioned it. If the intake form was incomplete, record the date the missing information arrived as the opening event. A request that sat in an inbox before it was complete is a different problem from one that arrived complete and still waited.',
      'Define confirmation before counting a request as cleared. A verbal yes from an interpreter is not confirmation if the assignment is not recorded in the schedule. Require a named interpreter, the meeting date, the mode, and a confirmation time. If a vendor supplies the interpreter, record the confirmation number. Without that evidence the case remains open.',
      'Channel failures deserve a separate field. A family may be available only by phone, while the scheduler sends everything by email. A request can look stalled when the team is waiting on a reply that never reached the family. Record the channel used and the channel that worked. That comparison often explains a delay without blaming the family.',
      'Sibling requests complicate the count because one family may need two consecutive conferences with the same interpreter. Count the family block as one request when the policy holds the block together. Record the number of conferences inside the block. Otherwise a single interpreter gap can look like two independent failures and distort the rate.',
      'Vendor cancellations should be visible in the record. If an interpreter cancels after confirmation, the request returns to the waiting population and the original confirmation stays in the history. Do not erase the first assignment. The cancellation pattern may point to a vendor, a time slot, or a travel problem that the team can fix.',
      'Staff interpreters and contracted interpreters need separate escalation paths. A staff member may be pulled into another duty, while a vendor may need more notice to fill a slot. Record the source of the assignment and the person who owns the escalation. The same report can then show which pool produced the wait.',
      'Duplicate requests are common when a family contacts the teacher and the front office. Check for duplicate student or family identifiers before counting. Record how duplicates were resolved and whether the resolution changed the status. A denominator built on duplicated rows can make the queue look larger and the wait look shorter.',
      'Freeze the data at a stated time before analysis. Export the request list, the status history, the interpreter assignments, and the family messages into a working file. Record the export time and the system used. A moving dataset makes even a careful count impossible to reproduce, especially when confirmations arrive during the review.',
      'Report the denominator with the result. Show the number of requests in scope, the number cleared with a confirmed interpreter, the number still open, and the number that ended without a conference. A rate calculated only from closed cases excludes the requests most likely to be stuck. That omission makes the queue look healthier than it is.',
      'Use the age distribution rather than a single average. A median can hide a small group of very old requests that consume most of the coordinator attention. Show the oldest request and the count beyond each threshold the team uses. The reader should see whether the queue is broadly healthy or split into two very different populations.',
      'Describe limits in the report itself. The intake form may have changed, the vendor may have lost capacity, and the sample may be too small for a stable rate. Say which risks apply and how they could shift the result. A careful limitation section is more useful than a confident number that cannot be defended.',
      'Name the decision the report supports before the review meeting. The team may need to change the intake form, add a vendor, move a staff assignment, or adjust the conference window. Each decision implies a different next step and a different owner. Without a named decision the report becomes an archive.',
      'A consecutive sample is easier to defend than a hand picked set of difficult cases. Start from the first eligible request in the window and move forward until the sample is filled. If a request cannot be reviewed, record the reason and take the next one. That rule limits the temptation to choose cases that make the queue look good.'
    ],
    "sources": [
      { label: 'U.S. Department of Education, Office for Civil Rights', publisher: 'U.S. Department of Education', url: 'https://www2.ed.gov/about/offices/list/ocr/index.html' },
      { label: 'ADA.gov, Americans with Disabilities Act', publisher: 'U.S. Department of Justice', url: 'https://www.ada.gov/' },
      { label: 'Electronic Code of Federal Regulations, 34 CFR Part 104', publisher: 'National Archives', url: 'https://www.ecfr.gov/current/title-34/subtitle-A/part-104' },
      { label: 'National Center for Education Statistics', publisher: 'U.S. Department of Education', url: 'https://nces.ed.gov/' },
      { label: 'U.S. Census Bureau, Education', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/topics/education.html' }
    ],
    "image": '/thumbnails/november-07/how-many-parent-conference-requests-wait-on-interpreter-availability.webp'
  },
  {
    "slug": 'where-do-waitlist-seat-offers-expire-before-a-family-responds',
    "title": 'Where do waitlist seat offers expire before a family responds?',
    "summary": 'A review protocol for counting waitlist seat offers that expire before a family replies, with a defined offer clock, response evidence, and open-seat reporting.',
    "cluster": 'Enrollment operations',
    "publishedAt": '2026-11-07',
    "finding": 'An expired offer is a timing and communication result, so the report should separate offers that expired with no reply from offers the family actively declined.',
    "methodology": [
      'Scope: This protocol counts waitlist seat offers that reach their stated expiry before the family accepts or declines, using one offer clock and one response definition.',
      'Population: Include every seat offer sent from the active waitlist in the window, and exclude internal transfers that never became a family facing offer.',
      'Opening event: Use the recorded send time of the offer through the approved enrollment channel.',
      'Closing event: Treat an offer as answered when the family accepts or declines through an approved channel, and as expired when the clock passes without either.',
      'Measures: Report offers sent, offers accepted, offers declined, offers expired, the median response time, and the number of seats still open at the close of the window.',
      'Review: Repeat after any change to the offer window, the message template, or the enrollment system.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A seat offer that expires without a reply is not proof that the family lost interest. The message may have gone to an old address, arrived during a holiday, or asked for a step the family could not complete. The protocol should record the expiry as an outcome and then look for the condition that produced it. That distinction turns a frustrating number into a fixable process question.',
          'Name the population before collecting data. Include offers sent from the active waitlist for a specific program and term. Exclude internal transfers and offers made outside the waitlist process. State whether a second offer to the same family counts as a new unit. Apply the rule consistently so the denominator does not drift toward the easy cases.',
          'Define the offer clock in the policy and in the record. The clock should start when the offer is sent through the approved channel, not when someone drafts it. Record the date, the time, and the time zone. If the policy counts business days, the report should show the business day calculation rather than a calendar guess.',
          'Response evidence needs the same discipline. An acceptance may be a signed form, a portal action, or a documented phone call. A decline may be written or verbal. Record the channel and the time for each. A message that says the family seemed interested is not a response. The reviewer should be able to confirm the classification from the record.',
          'Separate silence from a bounced message. A hard bounce means the offer never reached the family, so the case belongs in a contact failure bucket. A soft bounce may resolve on retry. Do not count a failed delivery as a family nonresponse. That error punishes the family for a system problem and hides the real cause.',
          'Check the offer window against the family situation. A seven day window that spans a school break is shorter in practice than the policy intends. Record the dates and any holiday or closure. If the policy allows an extension, note who approved it. A window that cannot be met is a policy problem, not a family problem.',
          'Sibling offers need a linked record. One family may receive two offers that must be accepted together, and one deadline may govern both. Record the link and the family decision. Do not let one offer expire while the other remains open without a note. That split creates a seat accounting error and a confusing family experience.',
          'Double offers are usually a timing failure. Check whether the seat was released to a second family before the first offer expired or was formally withdrawn. Record the overlap and the person who released the seat. A double offer can force the school to withdraw one, which damages trust and complicates the waitlist order.',
          'Priority exceptions should be visible and rare. If a late applicant receives an offer ahead of the published order, record the rule, the evidence, and the approver. Review the exceptions together to see whether they cluster around one program or one staff member. An exception that cannot be explained is a fairness problem.',
          'Report the time from offer to response, not only the count of expiries. A median response time that is close to the deadline suggests the window is too short or the reminder is missing. A long tail may point to a contact problem. Pair the timing with the expiry count so the reader can see the pattern.',
          'Show open seats and expired offers together. A program can report many offers and still have empty seats because the offers expired. The combination is the honest picture. Include the number of families still waiting and the age of the oldest application. That view connects the offer process to the queue it serves.',
          'Freeze the data at a stated time and record the export. Offers can be accepted while the review is running, so a live system view will not reproduce. Save the offer list, the response log, and the seat status. Note the system and the time. A frozen file is the basis for a defensible count.',
          'Limits belong in the report. The contact record may be incomplete, the offer template may have changed, and the sample may be small. Say how those risks could change the result. Avoid turning a short window into a claim about family behavior. The protocol measures the process, not the family.',
          'Name the decision the report supports. The team may need to extend the window, add a reminder, fix a contact field, or change the release rule for seats. Each option has a different owner. A report with no decision becomes a record of frustration rather than a tool for change.',
          'Use a consecutive sample of offers from the first eligible send in the window. If an offer cannot be reviewed, record why and take the next one. Do not select only the offers that expired, because the report also needs the accepted and declined cases for comparison. The mix is what shows whether expiry is unusual.',
          'Repeat the protocol after the change and keep the definitions stable. If the offer window changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from repetition with discipline, not from a perfect first sample.'
        ]
      }
    ],
    "findings": [
      'A seat offer that expires without a reply is not proof that the family lost interest. The message may have gone to an old address, arrived during a holiday, or asked for a step the family could not complete. The protocol should record the expiry as an outcome and then look for the condition that produced it. That distinction turns a frustrating number into a fixable process question.',
      'Name the population before collecting data. Include offers sent from the active waitlist for a specific program and term. Exclude internal transfers and offers made outside the waitlist process. State whether a second offer to the same family counts as a new unit. Apply the rule consistently so the denominator does not drift toward the easy cases.',
      'Define the offer clock in the policy and in the record. The clock should start when the offer is sent through the approved channel, not when someone drafts it. Record the date, the time, and the time zone. If the policy counts business days, the report should show the business day calculation rather than a calendar guess.',
      'Response evidence needs the same discipline. An acceptance may be a signed form, a portal action, or a documented phone call. A decline may be written or verbal. Record the channel and the time for each. A message that says the family seemed interested is not a response. The reviewer should be able to confirm the classification from the record.',
      'Separate silence from a bounced message. A hard bounce means the offer never reached the family, so the case belongs in a contact failure bucket. A soft bounce may resolve on retry. Do not count a failed delivery as a family nonresponse. That error punishes the family for a system problem and hides the real cause.',
      'Check the offer window against the family situation. A seven day window that spans a school break is shorter in practice than the policy intends. Record the dates and any holiday or closure. If the policy allows an extension, note who approved it. A window that cannot be met is a policy problem, not a family problem.',
      'Sibling offers need a linked record. One family may receive two offers that must be accepted together, and one deadline may govern both. Record the link and the family decision. Do not let one offer expire while the other remains open without a note. That split creates a seat accounting error and a confusing family experience.',
      'Double offers are usually a timing failure. Check whether the seat was released to a second family before the first offer expired or was formally withdrawn. Record the overlap and the person who released the seat. A double offer can force the school to withdraw one, which damages trust and complicates the waitlist order.',
      'Priority exceptions should be visible and rare. If a late applicant receives an offer ahead of the published order, record the rule, the evidence, and the approver. Review the exceptions together to see whether they cluster around one program or one staff member. An exception that cannot be explained is a fairness problem.',
      'Report the time from offer to response, not only the count of expiries. A median response time that is close to the deadline suggests the window is too short or the reminder is missing. A long tail may point to a contact problem. Pair the timing with the expiry count so the reader can see the pattern.',
      'Show open seats and expired offers together. A program can report many offers and still have empty seats because the offers expired. The combination is the honest picture. Include the number of families still waiting and the age of the oldest application. That view connects the offer process to the queue it serves.',
      'Freeze the data at a stated time and record the export. Offers can be accepted while the review is running, so a live system view will not reproduce. Save the offer list, the response log, and the seat status. Note the system and the time. A frozen file is the basis for a defensible count.',
      'Limits belong in the report. The contact record may be incomplete, the offer template may have changed, and the sample may be small. Say how those risks could change the result. Avoid turning a short window into a claim about family behavior. The protocol measures the process, not the family.',
      'Name the decision the report supports. The team may need to extend the window, add a reminder, fix a contact field, or change the release rule for seats. Each option has a different owner. A report with no decision becomes a record of frustration rather than a tool for change.',
      'Use a consecutive sample of offers from the first eligible send in the window. If an offer cannot be reviewed, record why and take the next one. Do not select only the offers that expired, because the report also needs the accepted and declined cases for comparison. The mix is what shows whether expiry is unusual.',
      'Repeat the protocol after the change and keep the definitions stable. If the offer window changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from repetition with discipline, not from a perfect first sample.'
    ],
    "sources": [
      { label: 'National Center for Education Statistics', publisher: 'U.S. Department of Education', url: 'https://nces.ed.gov/' },
      { label: 'U.S. Census Bureau, Education', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/topics/education.html' },
      { label: 'U.S. Department of Education', publisher: 'U.S. Department of Education', url: 'https://www.ed.gov/' },
      { label: 'Electronic Code of Federal Regulations, 34 CFR Part 99', publisher: 'National Archives', url: 'https://www.ecfr.gov/current/title-34/subtitle-A/part-99' },
      { label: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework' }
    ],
    "image": '/thumbnails/november-07/where-do-waitlist-seat-offers-expire-before-a-family-responds.webp'
  },
  {
    "slug": 'how-often-do-iep-meeting-notes-return-for-correction-after-review',
    "title": 'How often do IEP meeting notes return for correction after review?',
    "summary": 'A correction tracking protocol for special education meeting minutes, with a defined correction event, version evidence, and confidentiality aware reporting.',
    "cluster": 'Learner operations',
    "publishedAt": '2026-11-07',
    "finding": 'A useful correction measure counts minutes that required a revised version after review, separates factual corrections from clarification requests, and reports the time to the revised record.',
    "methodology": [
      'Scope: This protocol counts official IEP meeting minutes that return for correction after the review step, using a fixed definition and a version log.',
      'Population: Include meetings that produced official minutes in the window, and exclude working notes that never became the record.',
      'Opening event: Use the date the official minutes were issued to the review group.',
      'Closing event: Treat a correction as closed when a revised version is approved and filed with the original.',
      'Measures: Report minutes issued, minutes with a correction request, the median days from issue to revised version, and the count still open at the close of the window.',
      'Review: Repeat after any change to the template, the note taker, or the approval step.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A correction request is not automatically a failure. The team may have missed a detail, or a participant may be asking for clearer language. The protocol should separate a factual correction from a clarification so the report does not treat every request as an error. That distinction tells the team whether to fix the template or the review conversation.',
          'Name the population and the record of interest. Include meetings that produced official minutes in the window, and exclude drafts and working notes. State whether an amended record from a prior meeting counts in the current window. Apply the rule consistently. A denominator that mixes drafts with final records will overstate the correction rate.',
          'Use the issue date as the opening event and record the version number. A correction request needs a date, the person who raised it, and the part of the record in question. Without those fields the team cannot tell whether the process is improving or whether the log is simply incomplete. A request that arrives without a version number should be matched to the current record before it is logged.',
          'Define the closing event. A correction is closed when a revised version is approved and filed, not when someone says it will be fixed. Record the approval and the date. If the request is declined, record the reason and the final decision. Both outcomes belong in the same log so the rate reflects the real volume of review work.',
          'Separate factual corrections from clarification requests and formatting changes. A wrong service minute is different from a request to reword a sentence. Use short labels and examples so reviewers apply them the same way. Report the categories separately instead of a single blended rate. The labels should survive a staff change.',
          'Check the required elements before counting a template problem. Missing attendance, an unclear placement decision, or an action without an owner are substantive gaps. A record with all the required elements but awkward wording is a different issue. The correction category should reflect the gap, not the reviewer mood.',
          'Version control is the evidence behind the measure. Each revision should keep the original and show what changed and who approved it. Do not overwrite the first file. If the record is held in a system that versions automatically, confirm that the version history is available to the reviewer and included in the retention rule.',
          'Confidentiality limits what can be reported. Aggregate counts and role based examples are appropriate, while student names and diagnostic details are not. Keep the case key in the restricted record and report only the pattern. A correction review should not create a second store of sensitive information.',
          'Action item errors deserve their own count. A missing due date, an unassigned owner, or a duplicated task is easy to correct and often points to the meeting close. Track the action item fields separately from the narrative sections. That split helps the team fix the template at the right step.',
          'Duplicated or conflicting minutes are a serious variant. Two versions with different decisions can circulate if one is shared as a draft and never withdrawn. Count each conflict as a correction event and note the distribution. The fix is usually an access and naming rule, not more training.',
          'Report the count and the rate with the denominator and the open cases. A correction rate of ten percent means little without the number of minutes issued in the window. Show the median time to a revised version and the oldest open request. The reader should see both the volume and the delay.',
          'Small samples are sensitive to one case. If the team issues a handful of minutes each month, a single correction can move the rate by several points. Report the count and the instability instead of a precise looking percentage. A short narrative about the categories is often more useful than a chart.',
          'Freeze the data at a stated time and record the source. Minutes can be revised during the review, so a live view will not reproduce. Save the issue log, the correction log, and the version dates. Note the system and the export time. The frozen file is the basis for a later comparison.',
          'Name the decision the report supports. The team may need to change the template, add a meeting close step, adjust the note taker role, or revise the access rule. Each option has an owner and a test. A report that does not name a decision becomes a compliance artifact with no effect on the work.',
          'Use a consecutive sample of meetings from the start of the window. If a meeting cannot be reviewed, record why and take the next one. Do not select only the meetings with known corrections. The comparison group of clean records is what shows whether the correction rate is unusual.',
          'Repeat the protocol after the change with the same definitions. If the template changes, keep the old and new versions with the report. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and an honest record of what changed.'
        ]
      }
    ],
    "findings": [
      'A correction request is not automatically a failure. The team may have missed a detail, or a participant may be asking for clearer language. The protocol should separate a factual correction from a clarification so the report does not treat every request as an error. That distinction tells the team whether to fix the template or the review conversation.',
      'Name the population and the record of interest. Include meetings that produced official minutes in the window, and exclude drafts and working notes. State whether an amended record from a prior meeting counts in the current window. Apply the rule consistently. A denominator that mixes drafts with final records will overstate the correction rate.',
      'Use the issue date as the opening event and record the version number. A correction request needs a date, the person who raised it, and the part of the record in question. Without those fields the team cannot tell whether the process is improving or whether the log is simply incomplete. A request that arrives without a version number should be matched to the current record before it is logged.',
      'Define the closing event. A correction is closed when a revised version is approved and filed, not when someone says it will be fixed. Record the approval and the date. If the request is declined, record the reason and the final decision. Both outcomes belong in the same log so the rate reflects the real volume of review work.',
      'Separate factual corrections from clarification requests and formatting changes. A wrong service minute is different from a request to reword a sentence. Use short labels and examples so reviewers apply them the same way. Report the categories separately instead of a single blended rate. The labels should survive a staff change.',
      'Check the required elements before counting a template problem. Missing attendance, an unclear placement decision, or an action without an owner are substantive gaps. A record with all the required elements but awkward wording is a different issue. The correction category should reflect the gap, not the reviewer mood.',
      'Version control is the evidence behind the measure. Each revision should keep the original and show what changed and who approved it. Do not overwrite the first file. If the record is held in a system that versions automatically, confirm that the version history is available to the reviewer and included in the retention rule.',
      'Confidentiality limits what can be reported. Aggregate counts and role based examples are appropriate, while student names and diagnostic details are not. Keep the case key in the restricted record and report only the pattern. A correction review should not create a second store of sensitive information.',
      'Action item errors deserve their own count. A missing due date, an unassigned owner, or a duplicated task is easy to correct and often points to the meeting close. Track the action item fields separately from the narrative sections. That split helps the team fix the template at the right step.',
      'Duplicated or conflicting minutes are a serious variant. Two versions with different decisions can circulate if one is shared as a draft and never withdrawn. Count each conflict as a correction event and note the distribution. The fix is usually an access and naming rule, not more training.',
      'Report the count and the rate with the denominator and the open cases. A correction rate of ten percent means little without the number of minutes issued in the window. Show the median time to a revised version and the oldest open request. The reader should see both the volume and the delay.',
      'Small samples are sensitive to one case. If the team issues a handful of minutes each month, a single correction can move the rate by several points. Report the count and the instability instead of a precise looking percentage. A short narrative about the categories is often more useful than a chart.',
      'Freeze the data at a stated time and record the source. Minutes can be revised during the review, so a live view will not reproduce. Save the issue log, the correction log, and the version dates. Note the system and the export time. The frozen file is the basis for a later comparison.',
      'Name the decision the report supports. The team may need to change the template, add a meeting close step, adjust the note taker role, or revise the access rule. Each option has an owner and a test. A report that does not name a decision becomes a compliance artifact with no effect on the work.',
      'Use a consecutive sample of meetings from the start of the window. If a meeting cannot be reviewed, record why and take the next one. Do not select only the meetings with known corrections. The comparison group of clean records is what shows whether the correction rate is unusual.',
      'Repeat the protocol after the change with the same definitions. If the template changes, keep the old and new versions with the report. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and an honest record of what changed.'
    ],
    "sources": [
      { label: 'Individuals with Disabilities Education Act', publisher: 'U.S. Department of Education', url: 'https://sites.ed.gov/idea/' },
      { label: 'Electronic Code of Federal Regulations, 34 CFR Part 300', publisher: 'National Archives', url: 'https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300' },
      { label: 'Student Privacy Policy Office', publisher: 'U.S. Department of Education', url: 'https://studentprivacy.ed.gov/' },
      { label: 'U.S. Department of Education, Office for Civil Rights', publisher: 'U.S. Department of Education', url: 'https://www2.ed.gov/about/offices/list/ocr/index.html' },
      { label: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework' }
    ],
    "image": '/thumbnails/november-07/how-often-do-iep-meeting-notes-return-for-correction-after-review.webp'
  },
  {
    "slug": 'what-share-of-course-refund-requests-exceed-the-policy-response-window',
    "title": 'What share of course refund requests exceed the policy response window?',
    "summary": 'A response time protocol for course refund requests, with a complete request definition, a decision timestamp, and separate reporting for exceptions.',
    "cluster": 'Billing operations',
    "publishedAt": '2026-11-07',
    "finding": 'The honest measure starts the clock when a complete request arrives and stops it when the family receives the decision, not when the internal review begins.',
    "methodology": [
      'Scope: This protocol counts refund requests whose decision reached the family after the published response window, using one clock and one complete request definition.',
      'Population: Include refund requests for courses in the window, and exclude inquiries that never asked for a refund or never supplied the required information.',
      'Opening event: Use the date the complete request and required documents reached the refund queue.',
      'Closing event: Treat the clock as stopped when the decision is sent through the approved family channel, not when it is approved internally.',
      'Measures: Report requests received, requests decided within the window, requests beyond the window, the median response time, and the count still open at the close.',
      'Review: Repeat after any change to the policy tiers, the intake form, or the approval path.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A refund request can look late for several different reasons. The family may have waited to ask, the intake may have been incomplete, the reviewer may have been away, or the decision may have been approved but never sent. The protocol should isolate the interval the team controls. Otherwise the report measures the calendar rather than the service.',
          'Define the complete request before starting the clock. A request needs the course, the enrollment identifier, the amount, the date, and the reason category. If a document is required by the policy, the request is incomplete until it arrives. Record the date the missing item was received. That rule prevents an early request from being counted as a late team response.',
          'Stop the clock when the decision reaches the family. An internal approval is not the end of the process if the message sits in a draft folder. Record the send time, the channel, and the template version. A case that is approved but not communicated is still open for the family. The measure should reflect the family experience.',
          'Separate requests that fall inside the routine tiers from exceptions. A hardship review or a billing error may need a different path and a different response target. Report the exception count separately and name the owner. Blending the two hides whether the routine queue or the exception path is slow. The reader needs both numbers.',
          'Apply the policy tier that matches the request date and the course status. Record the tier and the amount before the decision is sent. If the policy changed during the enrollment period, the version in effect at purchase may govern. A wrong citation turns a routine denial into a dispute and adds another cycle to the response time.',
          'A partial refund or a transfer offer is still a decision. Record the outcome and the amount, and send it through the approved channel. Do not leave the case open because the family might prefer a different option. If the policy allows a choice, state the options and the deadline. An open ended offer is not a complete response.',
          'Check the acknowledgment step. A short message that confirms receipt and names the expected decision date reduces follow up calls. Record the acknowledgment time separately from the decision time. A request can receive a quick acknowledgment and still miss the window. The two timestamps tell different parts of the story.',
          'Payment timing belongs in the report but not in the decision clock. A refund may be approved within the window and still take days to appear on the family statement. Record the approval date, the payment date, and the method. A clear separation prevents a payment delay from being counted as a decision delay, or the reverse.',
          'Duplicate requests are common when a family writes to the teacher and the billing office. Check the enrollment identifier before starting a second clock. Merge the duplicates and record which request is the primary one. A duplicated denominator can make the on time rate look better or worse depending on how the duplicates were handled.',
          'Report the median and the share beyond the window together. The median shows the typical experience, while the share shows how often the promise is missed. Include the oldest open request and the number of cases with no acknowledgment. A single average can hide a group of very late cases that consume most of the attention.',
          'Freeze the data at a stated time. Refund requests can be decided during the review, so a live view will not reproduce. Save the request list, the decision log, and the message timestamps. Note the system and the export time. The frozen file is the evidence behind the rate.',
          'State the limits plainly. The sample may be small, the intake form may have changed, and the family channel may have failed for reasons outside the team. Say which risks apply and how they could shift the result. Avoid claiming that the rate proves the team is fast or slow without the context.',
          'Name the decision the report supports. The team may need to add a reviewer, shorten the intake, change the template, or move the approval step. Each option has a different owner and a different test. A report that does not point to a decision becomes a monthly number with no consequence.',
          'Use a consecutive sample from the first eligible request in the window. If a request cannot be reviewed, record why and take the next one. Do not select only the late cases, because the on time cases are needed for comparison. The mix is what shows whether the delay is routine or exceptional.',
          'Separate the response target from any statutory or contractual deadline. A policy target is an internal promise, while a legal deadline may be different. Record both when they apply and do not let the internal target hide a missed obligation. The report should say which clock it measured.',
          'Repeat the protocol after the change with the same definitions. If the window changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and an honest account of what moved.'
        ]
      }
    ],
    "findings": [
      'A refund request can look late for several different reasons. The family may have waited to ask, the intake may have been incomplete, the reviewer may have been away, or the decision may have been approved but never sent. The protocol should isolate the interval the team controls. Otherwise the report measures the calendar rather than the service.',
      'Define the complete request before starting the clock. A request needs the course, the enrollment identifier, the amount, the date, and the reason category. If a document is required by the policy, the request is incomplete until it arrives. Record the date the missing item was received. That rule prevents an early request from being counted as a late team response.',
      'Stop the clock when the decision reaches the family. An internal approval is not the end of the process if the message sits in a draft folder. Record the send time, the channel, and the template version. A case that is approved but not communicated is still open for the family. The measure should reflect the family experience.',
      'Separate requests that fall inside the routine tiers from exceptions. A hardship review or a billing error may need a different path and a different response target. Report the exception count separately and name the owner. Blending the two hides whether the routine queue or the exception path is slow. The reader needs both numbers.',
      'Apply the policy tier that matches the request date and the course status. Record the tier and the amount before the decision is sent. If the policy changed during the enrollment period, the version in effect at purchase may govern. A wrong citation turns a routine denial into a dispute and adds another cycle to the response time.',
      'A partial refund or a transfer offer is still a decision. Record the outcome and the amount, and send it through the approved channel. Do not leave the case open because the family might prefer a different option. If the policy allows a choice, state the options and the deadline. An open ended offer is not a complete response.',
      'Check the acknowledgment step. A short message that confirms receipt and names the expected decision date reduces follow up calls. Record the acknowledgment time separately from the decision time. A request can receive a quick acknowledgment and still miss the window. The two timestamps tell different parts of the story.',
      'Payment timing belongs in the report but not in the decision clock. A refund may be approved within the window and still take days to appear on the family statement. Record the approval date, the payment date, and the method. A clear separation prevents a payment delay from being counted as a decision delay, or the reverse.',
      'Duplicate requests are common when a family writes to the teacher and the billing office. Check the enrollment identifier before starting a second clock. Merge the duplicates and record which request is the primary one. A duplicated denominator can make the on time rate look better or worse depending on how the duplicates were handled.',
      'Report the median and the share beyond the window together. The median shows the typical experience, while the share shows how often the promise is missed. Include the oldest open request and the number of cases with no acknowledgment. A single average can hide a group of very late cases that consume most of the attention.',
      'Freeze the data at a stated time. Refund requests can be decided during the review, so a live view will not reproduce. Save the request list, the decision log, and the message timestamps. Note the system and the export time. The frozen file is the evidence behind the rate.',
      'State the limits plainly. The sample may be small, the intake form may have changed, and the family channel may have failed for reasons outside the team. Say which risks apply and how they could shift the result. Avoid claiming that the rate proves the team is fast or slow without the context.',
      'Name the decision the report supports. The team may need to add a reviewer, shorten the intake, change the template, or move the approval step. Each option has a different owner and a different test. A report that does not point to a decision becomes a monthly number with no consequence.',
      'Use a consecutive sample from the first eligible request in the window. If a request cannot be reviewed, record why and take the next one. Do not select only the late cases, because the on time cases are needed for comparison. The mix is what shows whether the delay is routine or exceptional.',
      'Separate the response target from any statutory or contractual deadline. A policy target is an internal promise, while a legal deadline may be different. Record both when they apply and do not let the internal target hide a missed obligation. The report should say which clock it measured.',
      'Repeat the protocol after the change with the same definitions. If the window changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and an honest account of what moved.'
    ],
    "sources": [
      { label: 'Federal Trade Commission, Consumer advice', publisher: 'Federal Trade Commission', url: 'https://consumer.ftc.gov/' },
      { label: 'Consumer Financial Protection Bureau', publisher: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/' },
      { label: 'U.S. Small Business Administration', publisher: 'U.S. Small Business Administration', url: 'https://www.sba.gov/' },
      { label: 'U.S. Government Accountability Office', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/' },
      { label: 'U.S. Department of Education', publisher: 'U.S. Department of Education', url: 'https://www.ed.gov/' }
    ],
    "image": '/thumbnails/november-07/what-share-of-course-refund-requests-exceed-the-policy-response-window.webp'
  },
  {
    "slug": 'how-often-does-professional-development-evidence-go-missing-at-renewal',
    "title": 'How often does professional development evidence go missing at renewal?',
    "summary": 'A measurement protocol for professional development evidence gaps at renewal, with a defined requirement set, accepted evidence rules, and an honest denominator.',
    "cluster": 'Records control',
    "publishedAt": '2026-11-07',
    "finding": 'The useful measure counts staff who are due for renewal and lack accepted evidence for a required item, not the total number of certificates held by the organization.',
    "methodology": [
      'Scope: This protocol counts staff who reach a renewal checkpoint without accepted evidence for a required professional development item.',
      'Population: Include staff whose renewal date falls in the window and who are subject to at least one tracked requirement.',
      'Opening event: Use the renewal checkpoint date published in the requirement map.',
      'Closing event: Treat the gap as resolved when accepted evidence is recorded and verified, not when a certificate is merely uploaded.',
      'Measures: Report staff due, staff with complete evidence, staff with a partial gap, staff with no evidence, and the median days from checkpoint to resolution.',
      'Review: Repeat after any change to the requirement map, the provider list, or the evidence system.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A certificate on file is not the same as accepted evidence for a requirement. The certificate may be expired, from an unapproved provider, or for a topic that does not match the requirement. The protocol should count only evidence that a reviewer has accepted against a named requirement. That definition keeps the measure tied to compliance rather than to document volume.',
          'Name the requirement set before the window opens. Include the items that apply to each role, the hours, and the renewal cycle. Record the policy source and the date it was reviewed. If the set changes during the window, keep the old and new versions with the report. A moving requirement set makes the denominator impossible to interpret.',
          'Define the evidence rule for each requirement. Some items accept a completion certificate with hours, while others require a provider approval or a signed attendance record. Record the accepted date and the reviewer. A file that has not been checked is pending, not complete. The distinction prevents a false sense of readiness.',
          'Separate a partial gap from a missing record. A staff member may have completed part of the hours or hold a certificate that expires before the renewal date. Record the accepted portion and the remaining gap. Reporting both as missing hides the work already done and may send the person to a course they do not need.',
          'Use the published renewal checkpoint as the opening event. Do not start the clock when a reminder is sent or when a supervisor notices the gap. Those events may happen late. The checkpoint is the date the requirement applies, and it should be recorded in the map and the staff record. A consistent opening event makes the rate comparable across cycles.',
          'Close a gap only when accepted evidence is recorded and verified. An upload without review is still open. Record the reviewer, the verification date, and the requirement satisfied. If the evidence is rejected, record the reason and the next step. The case should not disappear because someone uploaded a file.',
          'Check the provider list before counting a rejection. A course from an unapproved provider may be acceptable under an appeal, or it may not count at all. Record the appeal path and the decision. Do not tell the staff member to retake a course until the rule is confirmed. A wrong instruction wastes time and erodes trust.',
          'Role changes complicate the measure. A staff member who moves to a new role may inherit additional requirements while keeping valid prior evidence. Record the change date and the new requirement set. Do not create a second record that splits the history. The reviewer should see one timeline with a clear transition.',
          'Timestamp the evidence when it is received, not when it is entered into the system. A certificate that arrived before the deadline but was typed in later should count as on time with a note. A certificate that arrived after the deadline should show the late date. That distinction matters when the team reviews the cause of a gap.',
          'Report the denominator with each result. Show the number of staff due, the number with complete evidence, the number with a partial gap, and the number with no evidence. Include the count of staff whose renewal date falls after the window. A percentage without the eligible population is only a mood.',
          'Duplicate records are a common source of confusion. One staff member may appear under a maiden name and a married name, or under two employee identifiers. Check for duplicates before counting. Record how the duplicates were merged and whether the merge changed the status. A split record can produce a false gap.',
          'Limits belong in the report. The requirement map may be incomplete, the provider list may have changed, and the sample may be small. Say which risks apply and how they could affect the result. Avoid presenting a single cycle as a stable trend. The protocol measures a process at a point in time.',
          'Name the decision the report supports. The team may need to update the map, add a reminder, change the evidence system, or adjust the provider list. Each option has a different owner and a different test. A report without a decision becomes a compliance archive rather than a management tool.',
          'Use a consecutive sample of staff due in the window. If a record cannot be reviewed, note why and take the next one. Do not select only the staff with known gaps, because the complete records are needed for comparison. The mix shows whether the gap is routine or concentrated.',
          'Separate the compliance measure from any performance judgment. A gap may reflect a late course offering, a system problem, or a misread requirement. The report should describe the pattern and the cause without turning one cycle into a conclusion about the staff member. Fairness is part of a credible record.',
          'Repeat the protocol after the change with the same definitions. If the requirement set changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and a clear account of what changed.'
        ]
      }
    ],
    "findings": [
      'A certificate on file is not the same as accepted evidence for a requirement. The certificate may be expired, from an unapproved provider, or for a topic that does not match the requirement. The protocol should count only evidence that a reviewer has accepted against a named requirement. That definition keeps the measure tied to compliance rather than to document volume.',
      'Name the requirement set before the window opens. Include the items that apply to each role, the hours, and the renewal cycle. Record the policy source and the date it was reviewed. If the set changes during the window, keep the old and new versions with the report. A moving requirement set makes the denominator impossible to interpret.',
      'Define the evidence rule for each requirement. Some items accept a completion certificate with hours, while others require a provider approval or a signed attendance record. Record the accepted date and the reviewer. A file that has not been checked is pending, not complete. The distinction prevents a false sense of readiness.',
      'Separate a partial gap from a missing record. A staff member may have completed part of the hours or hold a certificate that expires before the renewal date. Record the accepted portion and the remaining gap. Reporting both as missing hides the work already done and may send the person to a course they do not need.',
      'Use the published renewal checkpoint as the opening event. Do not start the clock when a reminder is sent or when a supervisor notices the gap. Those events may happen late. The checkpoint is the date the requirement applies, and it should be recorded in the map and the staff record. A consistent opening event makes the rate comparable across cycles.',
      'Close a gap only when accepted evidence is recorded and verified. An upload without review is still open. Record the reviewer, the verification date, and the requirement satisfied. If the evidence is rejected, record the reason and the next step. The case should not disappear because someone uploaded a file.',
      'Check the provider list before counting a rejection. A course from an unapproved provider may be acceptable under an appeal, or it may not count at all. Record the appeal path and the decision. Do not tell the staff member to retake a course until the rule is confirmed. A wrong instruction wastes time and erodes trust.',
      'Role changes complicate the measure. A staff member who moves to a new role may inherit additional requirements while keeping valid prior evidence. Record the change date and the new requirement set. Do not create a second record that splits the history. The reviewer should see one timeline with a clear transition.',
      'Timestamp the evidence when it is received, not when it is entered into the system. A certificate that arrived before the deadline but was typed in later should count as on time with a note. A certificate that arrived after the deadline should show the late date. That distinction matters when the team reviews the cause of a gap.',
      'Report the denominator with each result. Show the number of staff due, the number with complete evidence, the number with a partial gap, and the number with no evidence. Include the count of staff whose renewal date falls after the window. A percentage without the eligible population is only a mood.',
      'Duplicate records are a common source of confusion. One staff member may appear under a maiden name and a married name, or under two employee identifiers. Check for duplicates before counting. Record how the duplicates were merged and whether the merge changed the status. A split record can produce a false gap.',
      'Limits belong in the report. The requirement map may be incomplete, the provider list may have changed, and the sample may be small. Say which risks apply and how they could affect the result. Avoid presenting a single cycle as a stable trend. The protocol measures a process at a point in time.',
      'Name the decision the report supports. The team may need to update the map, add a reminder, change the evidence system, or adjust the provider list. Each option has a different owner and a different test. A report without a decision becomes a compliance archive rather than a management tool.',
      'Use a consecutive sample of staff due in the window. If a record cannot be reviewed, note why and take the next one. Do not select only the staff with known gaps, because the complete records are needed for comparison. The mix shows whether the gap is routine or concentrated.',
      'Separate the compliance measure from any performance judgment. A gap may reflect a late course offering, a system problem, or a misread requirement. The report should describe the pattern and the cause without turning one cycle into a conclusion about the staff member. Fairness is part of a credible record.',
      'Repeat the protocol after the change with the same definitions. If the requirement set changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition and a clear account of what changed.'
    ],
    "sources": [
      { label: 'U.S. Department of Labor, Training and development', publisher: 'U.S. Department of Labor', url: 'https://www.dol.gov/general/topic/training' },
      { label: 'U.S. Department of Education', publisher: 'U.S. Department of Education', url: 'https://www.ed.gov/' },
      { label: 'Electronic Code of Federal Regulations', publisher: 'National Archives', url: 'https://www.ecfr.gov/' },
      { label: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework' },
      { label: 'U.S. Government Accountability Office', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/' }
    ],
    "image": '/thumbnails/november-07/how-often-does-professional-development-evidence-go-missing-at-renewal.webp'
  },
  {
    "slug": 'where-do-state-reporting-extracts-fail-the-field-crosswalk',
    "title": 'Where do state reporting extracts fail the field crosswalk?',
    "summary": 'A crosswalk failure protocol for state reporting, with a field level population, transformation evidence, and separate counts for rejected and silent errors.',
    "cluster": 'Reporting operations',
    "publishedAt": '2026-11-07',
    "finding": 'A crosswalk failure should name the reported field, the source field, the transformation, and the owner, because a single error code can hide several different causes.',
    "methodology": [
      'Scope: This protocol counts reported fields that fail the source to field crosswalk for a state submission, using a fixed field inventory and a recorded validation result.',
      'Population: Include every field required by the current data dictionary for the reporting period, and exclude optional fields that the state does not use.',
      'Opening event: Use the date the crosswalk version is frozen for the submission.',
      'Closing event: Treat a field as resolved when the source, transformation, and validation are corrected and the field passes the same test.',
      'Measures: Report fields tested, fields with a source gap, fields with a transformation error, fields with an allowed value mismatch, and fields still failing at submission.',
      'Review: Repeat with the same field inventory after the state publishes a new dictionary or the source system changes.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A rejected record and a wrong value can come from the same crosswalk row. The state may flag a code that is outside the allowed list, while a silently wrong date passes validation and corrupts a later report. The protocol should test both the validation result and the meaning of the value. Otherwise the team fixes only what the system notices.',
          'Start with the field inventory from the current data dictionary. List every required field, its allowed values, and the validation rule. Mark the fields that are new or changed. Keep the dictionary version with the test file. A field tested against last year description is not evidence about this submission.',
          'For each field, name the source system, the source field, the transformation, and the owner. A calculated field needs the formula and the inputs. A manually entered field needs the person and the review step. If any of those is missing, the field belongs in a source gap bucket. The crosswalk is only as strong as its weakest row.',
          'Separate a source gap from a transformation error. A source gap means the data does not exist or cannot be reached, while a transformation error means a rule turned good data into the wrong output. The fixes are different, and so are the owners. Mixing them into one failure count hides where the work should start.',
          'Check the allowed value list against the source codes before the run. A source may use a local label that maps to a state code, and the mapping may have changed. Record the mapping version and the test case that proves it. A code that passes validation can still mean the wrong thing if the mapping is stale.',
          'Test the period boundary carefully. A date that falls one day outside the reporting window can drop a record or move it into the next period. Record the start and end dates used in the test. Check records at both edges. The boundary is where many silent failures live because the file still validates.',
          'Duplicate records need their own check. A student may appear twice after a transfer, or a staff record may be split across two identifiers. Record the duplicate rule and the resolution. A crosswalk can be correct row by row and still produce a wrong total when duplicates remain. The reconciliation should catch the difference.',
          'Manual entry deserves the same evidence as an automated field. Record who enters the value, the source document, and the review. If the value is entered in a rush at submission time, the risk is higher. The crosswalk should show the manual fields so the reviewer can sample them first.',
          'Distinguish a validation rejection from a silent error. A rejection is visible and usually fixable before submission, while a silent error passes the system and appears later in a report or a comparison. Count both and report them separately. A clean validation run does not prove the crosswalk is correct.',
          'Assign a severity to each failure based on the effect on the reported count, the funding formula, or the public report. A wrong contact field may be low severity, while a wrong enrollment status can change a rate. Severity helps the team choose what to fix first when time is short. It also makes the report more useful to the owner.',
          'Report the count by field and by owner. A single total hides whether one source system produces most of the failures. Group the fields by the system that supplies them and show the failing count for each. The pattern points to the conversation that needs to happen before the next cycle.',
          'Freeze the crosswalk and the extract at a stated time. Save the dictionary version, the test file, the validation report, and the exception log. Record the export time and the system. A moving dataset makes the failure count impossible to reproduce, especially when manual corrections are applied after the test.',
          'State the limits. The dictionary may be ambiguous, the source may be incomplete, and the test sample may be too small to cover every rule. Say which risks apply and how they could change the result. Do not claim that a passing test proves the submission is correct. It proves the tested fields passed.',
          'Name the decision the report supports. The team may need to fix a source query, update a mapping, add a manual review, or ask the state for guidance. Each decision has an owner and a date. Without a named decision the failure report becomes a list that no one uses.',
          'Use the full required field inventory rather than a convenient sample. If the inventory is too large to test in one pass, split it by source system and report the coverage. Record which fields were not tested. An untested field should be visible in the report, not assumed to be correct.',
          'Repeat the protocol after the state publishes a new dictionary or the source system changes. Keep the old and new crosswalk versions side by side. A comparison across different field definitions is not an improvement measure. The value comes from testing the same inventory in the same way.'
        ]
      }
    ],
    "findings": [
      'A rejected record and a wrong value can come from the same crosswalk row. The state may flag a code that is outside the allowed list, while a silently wrong date passes validation and corrupts a later report. The protocol should test both the validation result and the meaning of the value. Otherwise the team fixes only what the system notices.',
      'Start with the field inventory from the current data dictionary. List every required field, its allowed values, and the validation rule. Mark the fields that are new or changed. Keep the dictionary version with the test file. A field tested against last year description is not evidence about this submission.',
      'For each field, name the source system, the source field, the transformation, and the owner. A calculated field needs the formula and the inputs. A manually entered field needs the person and the review step. If any of those is missing, the field belongs in a source gap bucket. The crosswalk is only as strong as its weakest row.',
      'Separate a source gap from a transformation error. A source gap means the data does not exist or cannot be reached, while a transformation error means a rule turned good data into the wrong output. The fixes are different, and so are the owners. Mixing them into one failure count hides where the work should start.',
      'Check the allowed value list against the source codes before the run. A source may use a local label that maps to a state code, and the mapping may have changed. Record the mapping version and the test case that proves it. A code that passes validation can still mean the wrong thing if the mapping is stale.',
      'Test the period boundary carefully. A date that falls one day outside the reporting window can drop a record or move it into the next period. Record the start and end dates used in the test. Check records at both edges. The boundary is where many silent failures live because the file still validates.',
      'Duplicate records need their own check. A student may appear twice after a transfer, or a staff record may be split across two identifiers. Record the duplicate rule and the resolution. A crosswalk can be correct row by row and still produce a wrong total when duplicates remain. The reconciliation should catch the difference.',
      'Manual entry deserves the same evidence as an automated field. Record who enters the value, the source document, and the review. If the value is entered in a rush at submission time, the risk is higher. The crosswalk should show the manual fields so the reviewer can sample them first.',
      'Distinguish a validation rejection from a silent error. A rejection is visible and usually fixable before submission, while a silent error passes the system and appears later in a report or a comparison. Count both and report them separately. A clean validation run does not prove the crosswalk is correct.',
      'Assign a severity to each failure based on the effect on the reported count, the funding formula, or the public report. A wrong contact field may be low severity, while a wrong enrollment status can change a rate. Severity helps the team choose what to fix first when time is short. It also makes the report more useful to the owner.',
      'Report the count by field and by owner. A single total hides whether one source system produces most of the failures. Group the fields by the system that supplies them and show the failing count for each. The pattern points to the conversation that needs to happen before the next cycle.',
      'Freeze the crosswalk and the extract at a stated time. Save the dictionary version, the test file, the validation report, and the exception log. Record the export time and the system. A moving dataset makes the failure count impossible to reproduce, especially when manual corrections are applied after the test.',
      'State the limits. The dictionary may be ambiguous, the source may be incomplete, and the test sample may be too small to cover every rule. Say which risks apply and how they could change the result. Do not claim that a passing test proves the submission is correct. It proves the tested fields passed.',
      'Name the decision the report supports. The team may need to fix a source query, update a mapping, add a manual review, or ask the state for guidance. Each decision has an owner and a date. Without a named decision the failure report becomes a list that no one uses.',
      'Use the full required field inventory rather than a convenient sample. If the inventory is too large to test in one pass, split it by source system and report the coverage. Record which fields were not tested. An untested field should be visible in the report, not assumed to be correct.',
      'Repeat the protocol after the state publishes a new dictionary or the source system changes. Keep the old and new crosswalk versions side by side. A comparison across different field definitions is not an improvement measure. The value comes from testing the same inventory in the same way.'
    ],
    "sources": [
      { label: 'National Center for Education Statistics, Common Core of Data', publisher: 'U.S. Department of Education', url: 'https://nces.ed.gov/ccd/' },
      { label: 'U.S. Census Bureau, Education', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/topics/education.html' },
      { label: 'U.S. Department of Education', publisher: 'U.S. Department of Education', url: 'https://www.ed.gov/' },
      { label: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework' },
      { label: 'U.S. Government Accountability Office', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/' }
    ],
    "image": '/thumbnails/november-07/where-do-state-reporting-extracts-fail-the-field-crosswalk.webp'
  },
  {
    "slug": 'how-long-do-retired-courses-stay-live-after-their-replacement-launches',
    "title": 'How long do retired courses stay live after their replacement launches?',
    "summary": 'A retirement lag protocol for course catalogs, with a defined live state, a replacement date, and separate counts for archived, hidden, and deleted material.',
    "cluster": 'Course systems',
    "publishedAt": '2026-11-07',
    "finding": 'The lag should be measured from the replacement launch date to the date the old course stops accepting learners and disappears from the live catalog.',
    "methodology": [
      'Scope: This protocol measures how long a retired course remains live after its replacement launches, using one definition of live and one retirement record.',
      'Population: Include courses that have a named replacement and a recorded retirement decision in the window.',
      'Opening event: Use the date the replacement course became available to the intended learners.',
      'Closing event: Treat a course as retired when enrollment is closed, the catalog entry is hidden or archived, and the learner facing page redirects or explains the status.',
      'Measures: Report courses retired, courses with a replacement, the median lag in days, the share still live after the policy window, and the number of archived pages still linked.',
      'Review: Repeat after any catalog migration, platform change, or academic program review.'
    ],
    "sections": [
      {
        "heading": "Operational implications",
        "paragraphs": [
          'A course can be retired in a planning document while every learner page remains live. The protocol needs a definition of live that covers enrollment, the catalog listing, and the learner facing page. If any of those still invites a learner to enroll, the course is live for practical purposes. The definition should be written before the count begins.',
          'Name the population and the replacement. Include courses with a recorded retirement decision and a named replacement. Exclude courses that were paused temporarily or merged without a public replacement. State whether a course that never launched counts. A clear population prevents the report from mixing a planned retirement with an unplanned shutdown.',
          'Use the replacement launch date as the opening event, not the date the retirement was discussed. Record the date the replacement became available to the intended learners. A replacement that exists in a staging area is not available. The lag should measure the learner overlap, not the internal planning period.',
          'Define the closing event with evidence. A course is retired when enrollment is closed, the catalog entry is hidden or archived, and the learner facing page redirects or explains the status. Record each date separately. A course that closes enrollment but keeps a live page has not finished the retirement.',
          'Separate an archived course from a deleted one. An archive keeps the record and removes the live invitation, while a deletion removes the material under the retention rule. Report the two outcomes separately. A deletion that happens before the retention date is a records problem, not a fast retirement.',
          'Check the links that point to the retired course. A syllabus, a program page, or an email template may still send learners to the old page. Record the source of each link and the date it was updated. A course can be hidden from the catalog and still be live through a link. That route is easy to miss.',
          'Search visibility matters. A retired course may disappear from the internal catalog while a public page remains indexed. Check the public search result and the sitemap. Record the date the page was removed or redirected. The learner experience should be the same whichever route they use.',
          'Marketing pages need their own review. A campaign may continue to promote a retired course after the replacement launches. Record the campaign owner and the date the page was updated. A marketing page that outlives the course creates a promise the school cannot keep.',
          'Learner access requests are a common reason a course stays live. A former learner may need the material for a certificate or a transcript. The retirement record should say how that request is handled without leaving the course open to new enrollment. A read only archive is usually the cleaner option.',
          'Report the age distribution, not only the average. A median can hide one course that has stayed live for a year. Show the oldest course and the count beyond each threshold in the policy. The reader should see whether the lag is a routine delay or a small set of forgotten pages.',
          'Freeze the data at a stated time. Catalog pages and links can change during the review. Save the course list, the retirement log, the catalog status, and the link check. Note the system and the export time. A frozen file is the basis for a repeatable measure.',
          'State the limits. A replacement may launch in phases, a program review may pause the decision, and a platform migration may change what counts as hidden. Say which risks apply and how they could shift the result. Do not treat a single cycle as a stable trend.',
          'Name the decision the report supports. The team may need to close enrollment, redirect a page, update a link, or revise the retirement checklist. Each option has an owner and a test. A report that does not point to a decision becomes a catalog history with no operational effect.',
          'Use a consecutive sample of courses with a recorded retirement decision. If a course cannot be reviewed, record why and take the next one. Do not select only the courses with the longest lag, because the short lags are needed for comparison. The mix shows whether the process is working.',
          'Separate the retirement lag from the retention period. A course should stop accepting learners promptly while its records remain available under the schedule. The two timelines serve different purposes. Reporting them together can make a correct archive look like a failure to retire.',
          'Repeat the protocol after a migration or a checklist change with the same definitions. If the definition of live changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition.'
        ]
      }
    ],
    "findings": [
      'A course can be retired in a planning document while every learner page remains live. The protocol needs a definition of live that covers enrollment, the catalog listing, and the learner facing page. If any of those still invites a learner to enroll, the course is live for practical purposes. The definition should be written before the count begins.',
      'Name the population and the replacement. Include courses with a recorded retirement decision and a named replacement. Exclude courses that were paused temporarily or merged without a public replacement. State whether a course that never launched counts. A clear population prevents the report from mixing a planned retirement with an unplanned shutdown.',
      'Use the replacement launch date as the opening event, not the date the retirement was discussed. Record the date the replacement became available to the intended learners. A replacement that exists in a staging area is not available. The lag should measure the learner overlap, not the internal planning period.',
      'Define the closing event with evidence. A course is retired when enrollment is closed, the catalog entry is hidden or archived, and the learner facing page redirects or explains the status. Record each date separately. A course that closes enrollment but keeps a live page has not finished the retirement.',
      'Separate an archived course from a deleted one. An archive keeps the record and removes the live invitation, while a deletion removes the material under the retention rule. Report the two outcomes separately. A deletion that happens before the retention date is a records problem, not a fast retirement.',
      'Check the links that point to the retired course. A syllabus, a program page, or an email template may still send learners to the old page. Record the source of each link and the date it was updated. A course can be hidden from the catalog and still be live through a link. That route is easy to miss.',
      'Search visibility matters. A retired course may disappear from the internal catalog while a public page remains indexed. Check the public search result and the sitemap. Record the date the page was removed or redirected. The learner experience should be the same whichever route they use.',
      'Marketing pages need their own review. A campaign may continue to promote a retired course after the replacement launches. Record the campaign owner and the date the page was updated. A marketing page that outlives the course creates a promise the school cannot keep.',
      'Learner access requests are a common reason a course stays live. A former learner may need the material for a certificate or a transcript. The retirement record should say how that request is handled without leaving the course open to new enrollment. A read only archive is usually the cleaner option.',
      'Report the age distribution, not only the average. A median can hide one course that has stayed live for a year. Show the oldest course and the count beyond each threshold in the policy. The reader should see whether the lag is a routine delay or a small set of forgotten pages.',
      'Freeze the data at a stated time. Catalog pages and links can change during the review. Save the course list, the retirement log, the catalog status, and the link check. Note the system and the export time. A frozen file is the basis for a repeatable measure.',
      'State the limits. A replacement may launch in phases, a program review may pause the decision, and a platform migration may change what counts as hidden. Say which risks apply and how they could shift the result. Do not treat a single cycle as a stable trend.',
      'Name the decision the report supports. The team may need to close enrollment, redirect a page, update a link, or revise the retirement checklist. Each option has an owner and a test. A report that does not point to a decision becomes a catalog history with no operational effect.',
      'Use a consecutive sample of courses with a recorded retirement decision. If a course cannot be reviewed, record why and take the next one. Do not select only the courses with the longest lag, because the short lags are needed for comparison. The mix shows whether the process is working.',
      'Separate the retirement lag from the retention period. A course should stop accepting learners promptly while its records remain available under the schedule. The two timelines serve different purposes. Reporting them together can make a correct archive look like a failure to retire.',
      'Repeat the protocol after a migration or a checklist change with the same definitions. If the definition of live changes, report the old and new rules side by side. A comparison across different definitions is not an improvement measure. The value comes from steady repetition.'
    ],
    "sources": [
      { label: 'National Archives, Records management', publisher: 'National Archives', url: 'https://www.archives.gov/records-mgmt' },
      { label: 'U.S. Department of Education', publisher: 'U.S. Department of Education', url: 'https://www.ed.gov/' },
      { label: 'National Center for Education Statistics', publisher: 'U.S. Department of Education', url: 'https://nces.ed.gov/' },
      { label: 'Electronic Code of Federal Regulations, 34 CFR Part 99', publisher: 'National Archives', url: 'https://www.ecfr.gov/current/title-34/subtitle-A/part-99' },
      { label: 'W3C Web Accessibility Initiative, WCAG overview', publisher: 'W3C', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }
    ],
    "image": '/thumbnails/november-07/how-long-do-retired-courses-stay-live-after-their-replacement-launches.webp'
  }
];
