import type { ResearchPost } from './types';

export const november09ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-often-do-family-contact-preferences-go-stale-before-an-outreach-campaign",
    "title": "How often do family contact preferences go stale before an outreach campaign?",
    "summary": "A review protocol for counting family contact records that remain unconfirmed past the review interval and for tracing which campaigns reach an unapproved audience.",
    "cluster": "Family communication",
    "finding": "A contact preference is stale when the channel, audience, language, or restriction has not been confirmed within the organization's review interval, not merely when a phone number looks old.",
    "methodology": [
      "Scope: This protocol counts active student households whose contact preference record was not confirmed within the stated review interval before an outreach campaign.",
      "Population: Include every active student household with at least one contact record, and exclude archived or closed households that the campaign does not target.",
      "Opening event: Use the date the preferred channel, audience, language, or restriction was last confirmed by the family or corrected from a reliable source.",
      "Closing event: Treat a record as current only when all four fields have been confirmed within the review interval and the downstream campaign list matches the record.",
      "Measures: Report households reviewed, records overdue, the median days overdue, the share of campaigns that reached an unapproved audience, and the number corrected before send.",
      "Review: Repeat after any change to the contact form, the lookup screen, the review interval, or the audience rules used by routine campaigns."
    ],
    "findings": [
      "A contact preference is stale when the channel, audience, language, or restriction has not been confirmed within the review interval. It is not stale merely because the phone number looks unfamiliar or the email domain changed. The distinction matters because the first condition has a clear review action and the second may be entirely legitimate. The protocol should count the first case so the measure points to a fixable gap.",
      "Name the household population before collecting rows. Include every active student household that the campaign can target, and exclude closed households and duplicates created by sibling records. Decide whether two guardians in one household count as one unit or two. Apply that rule consistently so the denominator does not drift between reviews.",
      "Record the four fields separately: preferred channel, approved audience, language, and any restriction. A record that has a current phone number but an unconfirmed audience is still stale. A single last-contacted date cannot show which field was actually confirmed. Field-level dates make the review specific and prevent a partial update from looking complete.",
      "Use the date of confirmation, not the date the record was created or last edited. A clerk may open a record to fix a typo without ever contacting the family. If the confirmation came from a reliable source other than the family, record the source and the evidence. The reviewer should be able to tell whether the family actually chose the preference.",
      "Restrictions need their own evidence and review date. A court order, a guardian dispute, or a documented safety concern should never be inferred from an old note. Record the source document and the date it was checked. A restriction that is not rechecked can either block a legitimate contact or allow one that should not happen.",
      "Campaign audience lists are where stale records become visible. Compare the list used for the send with the approved audience in the student record. Record every mismatch and whether it was corrected before the message went out. A campaign that reached the wrong guardian is a stronger signal than a record that merely looks old.",
      "Language preference is often missed because it is stored in a different field. Include it in the review even when the family speaks the majority language, since a change in household composition can change the preference. Record whether the message was actually available in the selected language. A preference that the school cannot fulfill is not a complete record.",
      "Separate planned campaigns from emergency notifications. An emergency contact path may use every available channel, while a routine newsletter should follow the approved audience and channel. The protocol should label the campaign type so a justified emergency send is not counted as a routine failure. Mixing the two makes the measure unusable.",
      "Check the downstream tools that copy contact data, such as the learning platform, transportation system, and activity roster. A current student record can still feed an outdated list. Record which systems were checked and when the copy was refreshed. The review should follow the data to the point where the message is actually sent.",
      "Age the overdue list by the number of days since the last confirmation, not by the student's enrollment date. Show the median and the oldest case because a small number of very old records can hide behind a healthy average. Group the oldest cases by the field that is missing. The pattern usually points to one form or one office.",
      "Freeze the data at a stated time before analysis. Export the household list, the field-level confirmation dates, the restriction notes, and the campaign audience. Record the export time and the system used. Confirmations can arrive while the review is running, so a live view will not reproduce. A frozen file is the basis for a defensible count.",
      "Deduplicate before counting. Siblings, merged households, and duplicate guardian records can inflate both the population and the overdue count. Record which record is the source of truth and how the duplicate was resolved. A denominator built on duplicates makes the problem look larger and the correction rate look better than it is.",
      "Describe the limits in the report. The review interval may have changed, one campaign tool may be missing from the export, and the sample may be too small for a stable rate. Say which risks apply and how they could shift the result. A limitation section is more useful than a confident number that cannot be defended.",
      "Name the decision the review supports before the meeting. The team may need a shorter confirmation form, a term-start review, a corrected lookup screen, or an owner for campaign audience checks. Each option has a different cost and a different owner. A report with no decision becomes an archive rather than a control.",
      "Choose a consecutive sample of households from the campaign list rather than only the records that failed. The cleared records are needed for comparison and show whether the review interval is realistic. Record the sampling rule and the first eligible row. A sample selected only from overdue records cannot estimate how common the problem is.",
      "Check whether the family has responded to a recent confirmation request but the response was not entered. A reply sitting in an inbox is not a current record, but it is also not a family failure. Record the response date and the date it was entered. The gap between those two dates measures the data-entry delay.",
      "Seasonal moves and graduation create predictable spikes in stale records. Review the overdue count by month and compare it with the enrollment calendar. A spike after a holiday break may point to a missing reconfirmation step rather than a general data problem. Use the pattern to schedule the next review before the busy period.",
      "Test the lookup screen with a staff member who did not build it. Ask them to find the approved audience and the restriction note for a sample student. Record the time taken and any field they misread. A record that is technically complete but hard to use will still produce wrong sends.",
      "Record whether the campaign list came from the student system or a separate marketing tool. A copied list can drift from the source even when the source is current. Note the refresh date and the person who approved the copy. The review should follow the data into the tool that actually sends the message.",
      "Include bilingual and interpreter needs in the stale count. A family may have a current phone number but no current language preference, which leads to a message the household cannot read. Record the language field and whether the campaign had a version in that language. A missing version is a readiness gap, not just a translation task.",
      "Report the correction rate before the campaign sends, not only after it ends. A team that finds and fixes stale records during the pre-send check is doing useful work. Record the number corrected and the time required. That number shows whether the review is preventing errors or merely documenting them.",
      "Record the staff member who confirmed each field so a later reviewer can ask a specific person about an unclear entry. A record with no confirmer is difficult to defend when a family disputes a send. Use a role-based identifier where the individual may change. The point is traceability, not surveillance of the front office."
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
        "label": "National Center for Education Statistics",
        "publisher": "U.S. Department of Education",
        "url": "https://nces.ed.gov/"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/how-often-do-family-contact-preferences-go-stale-before-an-outreach-campaign.webp"
  },
  {
    "slug": "what-share-of-course-completion-certificates-fail-a-name-and-completion-check",
    "title": "What share of course completion certificates fail a name and completion check?",
    "summary": "A review protocol for counting certificate rows held for a completion mismatch, a legal-name discrepancy, or a missing approval before release.",
    "cluster": "Course administration",
    "finding": "A certificate fails the check when the completion status, the legal name, or the required approval cannot be verified from the system of record at the moment of release.",
    "methodology": [
      "Scope: This protocol counts certificate rows that were held, corrected, or reissued because completion, name, or approval did not match the source record.",
      "Population: Include every certificate row in each completed batch during the review window, and exclude draft batches that were never approved for production.",
      "Opening event: Use the date the batch was submitted for production approval, not the date the certificate file was designed.",
      "Closing event: Treat a row as passing when completion, legal name, date, and both approvals match the source record and the file was delivered or scheduled for delivery.",
      "Measures: Report rows reviewed, rows held, the reason for each hold, the median days to correction, and the share of delivered certificates that required a later reissue.",
      "Review: Repeat after any change to the completion rule, the name source, the template, the approval path, or the delivery method."
    ],
    "findings": [
      "A certificate fails the check when completion, legal name, or approval cannot be verified from the source record. It has not failed merely because a learner asks for a different display name or a copy of the file. The distinction matters because the first case is a release defect and the second is a service request. The protocol should count only the release defects.",
      "Define the batch population before collecting rows. Include every certificate row that entered production for the review window and exclude drafts that were never approved. State whether a corrected reissue counts as a new row or the same case. Apply the rule consistently so the failure rate is comparable across batches.",
      "Separate the three checks because they fail for different reasons. Completion comes from the learning platform, the legal name comes from the student record, and approval comes from the program and operations reviewers. A single pass or fail field hides which control failed. Record each check with its own evidence and date.",
      "Use the completion rule version that applied on the learner's completion date. A rule change during the term can make a previously complete learner look incomplete. Record the rule version and the date it was applied. A reviewer should be able to reproduce the decision without asking the original preparer.",
      "Compare the full legal name, including middle initials, suffixes, and diacritics. A first-and-last-name match is not enough when the student record contains a different middle name. Record the source field that was used and any written confirmation from the learner. Do not let a visual scan substitute for a field comparison.",
      "Track where the name on the certificate came from. If the batch pulls from a preferred-name field, note the approved policy that allows it. If the batch pulls from a hand-maintained list, the risk is higher and the review should be stronger. The source of the name matters as much as the spelling.",
      "Approval timing is part of the check. A batch approved before a late row was added does not cover that row. Record the approval timestamp and the rows included in the approved version. If the batch changes after approval, require a new approval for the changed rows. This rule prevents an unapproved addition from riding on an older signature.",
      "Delivery failures belong in a separate category from content failures. A certificate that is correct but sent to the wrong address is a delivery defect, while a certificate with the wrong name is a content defect. Record both, but do not merge them into one rate. The fixes and the owners are different.",
      "Track later reissues as a lagging measure. A row that passes the batch check and is corrected a month later shows that the original control missed something. Record the reason for the reissue and the source of the discovery. A rising reissue rate may point to a template or source-field problem rather than a reviewer error.",
      "Freeze the batch data at the production approval time. Export the completion status, the name fields, the approval records, and the delivery log. Record the export time and the system used. Later corrections should be analyzed separately rather than retroactively changing the original result. The frozen file is the evidence for the review.",
      "Deduplicate learners who appear in more than one batch because of a reissue or a dual program. Record which row is the current version and how the earlier row was closed. A denominator built on reissues makes the failure rate look worse and the correction work look larger. Deduplicate before analysis, not after the report is drafted.",
      "Describe the limits. The name source may have changed, the delivery log may be incomplete, and the review may include only one program. Say which risks apply and how they could move the result. A limitation section keeps the report honest about what the sample can support.",
      "Compare the failure reasons across batches. A cluster of completion mismatches may point to an ungraded assignment, while a cluster of name mismatches may point to a registration form. The pattern is more actionable than the overall rate. Assign one process change to the most frequent cause before adding another review step.",
      "Name the decision the review supports. The team may need to change the name source, add an automated comparison, revise the approval window, or move a delivery check earlier. Each option has an owner and a cost. A report that does not change the next batch is only a record of past effort.",
      "Choose a consecutive sample of rows from each batch rather than only the rows that were corrected. The passing rows are needed to understand the base rate and the cost of the check. Record the batch, the row range, and the sampling rule. A sample built only from failures cannot show how often the process works.",
      "Include the certificate template in the review. A template with a fixed name field can force a truncation that looks like a data error. Record the template version and the field length. If a long name consistently fails, the fix may belong in the design rather than the data.",
      "Check the verification code or signature block where the certificate includes one. A code that does not resolve creates a different kind of failure from a misspelled name. Record whether the code was tested and what it returned. The review should cover the document's authenticity features as well as its text.",
      "Compare the certificate date with the completion date and the program end date. A certificate dated before completion undermines the record even when the name is correct. Record the date source and the rule used to set it. A date mismatch is often a template default rather than a deliberate choice.",
      "Track certificates sent to third parties separately from those sent to learners. A third-party recipient may have its own naming or formatting requirement that the school has not checked. Record the recipient type and the requirement. A batch that passes the learner check can still fail an employer or licensing board.",
      "Include the correction request channel in the analysis. A learner who reports an error through the advisor may be handled differently from one who uses a portal form. Record the channel and the time to first response. The channel can explain a delay that looks like a processing failure.",
      "Report the cost of the check in staff time, not only the failure rate. A check that catches few errors but consumes a full day may need a better source field rather than more review. Record the hours and the number of defects caught. That comparison helps the program owner decide where to invest.",
      "Check whether the batch includes learners who completed under an approved transfer or waiver. Those rows may have a different completion source and need a different evidence trail. Record the approval and the source. A batch that applies one rule to every row can wrongly hold a legitimate completion.",
      "Compare the certificate roster with the transcript or completion record after delivery. A learner may appear on the certificate list but have an unresolved grade change. Record the date the two records were compared. The comparison catches the small number of cases that a pre-production check can miss."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "National Center for Education Statistics",
        "publisher": "U.S. Department of Education",
        "url": "https://nces.ed.gov/"
      },
      {
        "label": "U.S. Government Accountability Office, Standards for Internal Control",
        "publisher": "GAO",
        "url": "https://www.gao.gov/greenbook"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/what-share-of-course-completion-certificates-fail-a-name-and-completion-check.webp"
  },
  {
    "slug": "where-does-device-inventory-reconciliation-diverge-from-the-physical-count",
    "title": "Where does device inventory reconciliation diverge from the physical count?",
    "summary": "A review protocol for locating device and textbook inventory differences by location, custody, and reason code before term start.",
    "cluster": "Resource operations",
    "finding": "An inventory divergence is meaningful when the counted quantity at a specific location differs from the expected quantity and the difference cannot be supported by a transfer, repair, or checkout record.",
    "methodology": [
      "Scope: This protocol counts inventory differences at the location and category level for devices, chargers, kits, and required textbooks counted before term start.",
      "Population: Include every active storage location, classroom set, and assigned device group in the count plan, and exclude retired items that have already left the active inventory.",
      "Opening event: Use the count date recorded for each location, not the date the inventory file was last imported.",
      "Closing event: Treat a location as reconciled when the counted quantity matches the expected quantity or every difference carries a supported reason code and owner.",
      "Measures: Report locations counted, locations with a difference, the absolute variance by category, the share of differences without evidence, and the median days to resolve an open difference.",
      "Review: Repeat after any change to checkout, transfer, repair, storage, or device assignment rules."
    ],
    "findings": [
      "An inventory divergence is meaningful when the count at a specific location differs from the expected quantity and no supported record explains it. A difference that is fully documented as a transfer or repair is a reconciliation item, not an unexplained loss. The distinction matters because the first case points to a control gap and the second is normal inventory movement. The protocol should separate the two before calculating a loss rate.",
      "Define the location unit before counting. A building, a room, a cart, and a shelf are different levels of detail, and mixing them makes the comparison meaningless. Choose the level that matches how items are assigned and stored. Record the location identifier exactly as it appears in the inventory system. Inconsistent labels are a common source of false variance.",
      "Include the category and the condition in the count. A device that is present but broken should not be counted as available without a repair status. A textbook that is present but obsolete may belong in the retire category rather than the active count. The count should show what can be used, not just what physically exists.",
      "Use the count date recorded for each location, not the date the file was imported. A count completed on Monday and imported on Friday should be aged from Monday. If a location was counted in two passes, record both dates and the reason. The timing matters when a transfer happened between passes.",
      "Reason codes must be supported by evidence. A transfer needs a transfer record, a repair needs a ticket, and a checkout needs an assignment. An unaccounted item should stay unaccounted rather than being assigned to the most convenient code. The share of differences without evidence is a direct measure of record quality.",
      "Compare custody records with the physical location. A device assigned to a student but stored in a classroom cart is a custody mismatch. A classroom set recorded to one teacher but split across two rooms is a location mismatch. Record which record is wrong and who can correct it. The fix may be a transfer entry rather than a physical move.",
      "Separate the expected quantity from the purchased quantity. The expected quantity should account for items retired, transferred out, or assigned to students. If the expected field is simply the original purchase count, every legitimate movement will look like a loss. Rebuild the expected quantity from the inventory ledger before drawing conclusions.",
      "Look for differences that cluster by category. A cluster of missing chargers may point to a checkout process that does not include accessories. A cluster of missing kits may point to a storage location that was never added to the count plan. The pattern is more useful than the total variance because it points to the rule that needs to change.",
      "Do not treat a balanced building total as success. One room can be over while another is under, and the building total will hide the shortage that a teacher experiences. Report variance by location even when the net is zero. The instructional impact depends on where the item is, not on the district total.",
      "Age open differences from the count date and assign an owner for each. A difference that stays open past the first week of term will be absorbed into the next count without a decision. Record the owner, the next action, and the expected close date. A weekly review of the oldest items is more effective than a single end-of-count report.",
      "Check the systems that receive inventory data. The learning platform, the device management console, and the business office may each hold a different count. Record which system is the source of truth and when the others were refreshed. A reconciled spreadsheet that feeds an outdated system is not a reconciled inventory.",
      "Freeze the count data before analysis. Export the location list, the expected quantities, the counted quantities, and the reason codes at a stated time. Record the export time and the system used. Transfers and repairs can be entered while the review is running, so a live view will not reproduce. The frozen file is the evidence for the result.",
      "Describe the limits. The count may exclude a locked room, the label set may have changed, or one category may be missing from the export. Say which risks apply and how they could shift the variance. A limitation section keeps the report from overstating the precision of the count.",
      "Name the decision the review supports. The team may need to change the checkout form, add a location to the count plan, revise the repair workflow, or fund a replacement. Each option has an owner and a cost. A variance report that does not lead to one of those decisions is only a description of the problem.",
      "Choose a sample of locations across high-use and low-use areas instead of counting only the rooms that are easy to access. A locked lab or a storage closet can hide the largest difference. Record which locations were inaccessible and why. The limitation should be reported with the result rather than omitted.",
      "Include accessories in the count, such as chargers, cables, styluses, and cases. A device without its charger may be unusable even when the device itself is present. Record whether the accessory was counted and how it is assigned. Accessory shortages often explain a device that looks available on paper.",
      "Compare the inventory system with the device management console. A device may be present and powered on while the console shows it as retired or unassigned. Record the console status and the inventory status for the sample. A mismatch between the two is a different problem from a missing device.",
      "Check the transfer process for items that move between buildings. A transfer that is recorded only in an email will not update the expected quantity at either location. Record the transfer method and the date it was entered. If transfers are slow to record, the count will always show a false variance.",
      "Review the repair queue for devices that are out for service. A device at a repair vendor is not lost, but it is also not available for a classroom. Record the vendor, the expected return date, and the ticket number. The active inventory should exclude items that cannot be assigned.",
      "Compare the count with the assignment records for students who have left or changed programs. A device may still be assigned to a student who withdrew last term. Record the assignment status and the return date. Unclosed assignments inflate the expected count at the location that originally held the device.",
      "Report the time from count to resolution for each open difference. A difference that is resolved in two days is a different management problem from one that stays open for a month. Record the owner and the next action. The age of the open list is a better operational measure than the total variance alone.",
      "Ask the person who uses the room whether the count matches their experience. A teacher may know that a cart is short even when the system shows the expected number. Record the observation and the date. That local knowledge is a useful check on a spreadsheet that is otherwise confident."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Department of Education",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/"
      },
      {
        "label": "National Center for Education Statistics",
        "publisher": "U.S. Department of Education",
        "url": "https://nces.ed.gov/"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/where-does-device-inventory-reconciliation-diverge-from-the-physical-count.webp"
  },
  {
    "slug": "how-long-do-enrollment-withdrawals-wait-for-a-refund-decision",
    "title": "How long do enrollment withdrawals wait for a refund decision?",
    "summary": "A review protocol for measuring the time between a family's withdrawal notice and a documented refund decision, without mixing policy exceptions into the routine queue.",
    "cluster": "Enrollment operations",
    "finding": "A withdrawal is waiting on a refund decision when the notice is documented and the policy calculation is complete but the accountable approver has not recorded a decision.",
    "methodology": [
      "Scope: This protocol counts enrollment withdrawals that remained open between a documented family notice and a recorded refund decision during the review window.",
      "Population: Include every withdrawal notice for an active enrollment in the window, and exclude notices that were withdrawn by the family before any review began.",
      "Opening event: Use the date the first clear withdrawal notice was recorded, not the date a formal form was eventually completed.",
      "Closing event: Treat a case as decided when the refund amount or denial is calculated from the applicable policy and the accountable owner records approval or denial.",
      "Measures: Report notices received, cases decided, cases still open, median days to decision, the oldest open case, the share requiring an exception review, and the share paid within the stated window.",
      "Review: Repeat after any change to the refund policy, the notice channels, the approval threshold, or the finance processing calendar."
    ],
    "findings": [
      "A withdrawal is waiting on a refund decision when the notice is documented and the calculation is complete but no accountable owner has recorded a decision. It is not waiting when the family has not yet stated an intent to leave or when the policy requires more information. The distinction matters because the first case has a clear next action and the second does not. The protocol should count only the first case.",
      "Define the notice event before collecting rows. A portal form, a signed letter, and a documented phone call may all start the clock, but the organization must decide which channels count. Record the channel and the staff member who received the notice. A case should not be aged from a date nobody can verify.",
      "Use the policy version that applied on the notice date. A policy change during the review window can make an old case look incorrectly calculated. Record the version and the rule that was applied. A reviewer should be able to reproduce the amount without asking the original preparer.",
      "Separate the calculation from the approval. The preparer can gather the tuition paid, the non-refundable fees, the proration, and any aid adjustment. The approver decides whether the result is released. Record both dates because a slow calculation and a slow approval are different problems with different fixes.",
      "Track exception cases separately. A medical withdrawal, a policy conflict, or a documented hardship may require a different reviewer and different evidence. Mixing those cases into the routine median hides the fact that the routine queue may be healthy while the exception path is stuck. Report the two paths side by side.",
      "Record the family's confirmation of the withdrawal date. A dispute about when the notice occurred can delay the entire case. If the family corrects the date, record the correction and the evidence. The protocol should not assume the institution's first entry is always right.",
      "Measure the time from notice to written confirmation, from confirmation to calculation, and from calculation to decision. A single end-to-end number hides the step that is slow. The step-level view tells the team whether to fix the intake form, the calculation, or the approval calendar. Report all three intervals.",
      "Include cases that are still open in the denominator. A rate calculated only from closed cases excludes the withdrawals most likely to be stuck. Show received, decided, open, and oldest open together. The reader should see the unfinished work beside the completed work.",
      "Check whether the refund was actually paid, not only approved. An approval that sits in the finance queue creates a second delay the family experiences. Record the payment date and the method. The protocol can report decision time and payment time separately so each owner sees their part.",
      "Freeze the data at a stated time. Export the notice records, the policy version, the calculation, the approval, and the payment log. Record the export time and the system used. A case can be approved while the review is running, so a live view will not reproduce. The frozen file is the basis for a defensible count.",
      "Deduplicate cases created when a family contacts more than one office. One withdrawal may produce a portal entry, an email, and a phone note. Record which record is the source of truth and how the duplicate was closed. A denominator built on duplicates makes the queue look larger and the decision time look shorter.",
      "Describe the limits. The review may cover one program, one policy version, or one term. A small sample may not support a stable median. Say which risks apply and how they could shift the result. A limitation section is more useful than a precise-looking number that cannot be defended.",
      "Name the decision the review supports. The team may need a shorter notice form, a standing approval calendar, a clearer exception path, or a finance service level. Each option has an owner and a cost. A report that does not change the next withdrawal is only a record of the last one.",
      "Choose a consecutive sample of notices from the review window rather than only the cases that were escalated. The routine cases show whether the normal path is working. Record the first and last notice dates and the sampling rule. A sample of escalations alone cannot estimate the typical decision time.",
      "Include the method used to confirm the withdrawal date. A portal timestamp, a signed form, and a phone note carry different levels of evidence. Record the method and whether the family confirmed it. A case built on an unconfirmed date may be reopened even after the refund is paid.",
      "Check whether the family received a written statement of the refund calculation before approval. A calculation the family cannot see generates questions that look like disputes. Record the date the statement was sent and any response. Clear communication can reduce the approval workload even when the amount does not change.",
      "Track the finance calendar, including closed days and payment runs. A decision approved on Friday may not be paid until the next scheduled run. Record the approval date, the payment date, and the method. The family experiences the total time, not just the decision time.",
      "Separate withdrawals initiated by the family from those initiated by the institution. An administrative withdrawal may follow a different approval path and a different refund rule. Record the initiator and the applicable policy. Mixing the two types makes the median hard to interpret.",
      "Include the return of devices, materials, and access in the close-out time. A refund may be approved while the learning platform seat remains active. Record the date each item was closed. The case is not complete for the institution until the enrollment footprint is gone.",
      "Report the volume of cases that required a policy exception and the time they took. A small number of exceptions can consume a large share of the approval capacity. Record the exception reason and the reviewer. That split helps the team decide whether to clarify the policy or add a dedicated path.",
      "Check whether the family received an acknowledgment when the notice was first recorded. A case without an acknowledgment may generate repeated contacts that look like a dispute. Record the acknowledgment date and channel. The acknowledgment is part of the service, not an optional courtesy.",
      "Track the number of cases that required a second calculation because the first one used the wrong policy version or missed a fee. Rework is a hidden cost in the decision time. Record the reason and the owner. A repeated calculation error points to the form or the training, not to the individual preparer.",
      "Review the withdrawal reasons with the program and finance leads, not only with the registrar. A cluster of withdrawals after the first payment may indicate a communication gap about cost. Record the pattern and the action. The review should connect the refund queue to the enrollment decision that created it.",
      "Record whether the family was told about the effect on future aid or enrollment status. A refund decision can be correct and still leave the family uninformed about a later consequence. Note the office that supplied the information and the date. The withdrawal case is the right moment to make that consequence clear."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "Federal Student Aid",
        "publisher": "U.S. Department of Education",
        "url": "https://studentaid.gov/"
      },
      {
        "label": "U.S. Government Accountability Office, Standards for Internal Control",
        "publisher": "GAO",
        "url": "https://www.gao.gov/greenbook"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/how-long-do-enrollment-withdrawals-wait-for-a-refund-decision.webp"
  },
  {
    "slug": "where-do-school-partnership-agreements-lapse-before-the-renewal-review",
    "title": "Where do school partnership agreements lapse before the renewal review?",
    "summary": "A review protocol for finding agreements that pass their notice window or operate without current evidence before anyone reviews the renewal.",
    "cluster": "Vendor operations",
    "finding": "An agreement has lapsed when its notice window, required evidence, or named owner was not reviewed before the contractual decision date, even if the service is still running.",
    "methodology": [
      "Scope: This protocol counts active school partnership agreements whose notice window, required evidence, or ownership review was missed before the renewal decision date.",
      "Population: Include every active agreement with an external partner, and exclude agreements that were formally terminated before the review window opened.",
      "Opening event: Use the date the prior term or agreement year began, or the date the agreement was signed if it started later.",
      "Closing event: Treat an agreement as reviewed when the owner confirms the service, the evidence is current, and a renewal, renegotiation, or termination decision is recorded before the notice deadline.",
      "Measures: Report agreements in scope, agreements reviewed before notice, agreements past notice, missing evidence by type, unowned agreements, and the median days between review and decision.",
      "Review: Repeat after any change to the agreement register, the notice tracking method, the evidence checklist, or the department ownership map."
    ],
    "findings": [
      "An agreement has lapsed when the notice window, required evidence, or named owner was not reviewed before the contractual decision date. The service may still be running, and the partner may still be responsive, but the school has lost the chance to decide on its own terms. The protocol should count that condition separately from a service failure. A lapse is a governance gap, not necessarily a bad partnership.",
      "Define the agreement population before collecting rows. Include external partners that provide a service, share data, use school facilities, or support a program. Exclude agreements that were formally terminated and closed. State whether amendments count as separate agreements or as versions of the original. Apply the rule consistently.",
      "Record the notice deadline as a field calculated from the end date and the required notice period. Do not rely on the end date alone, because many agreements renew automatically unless notice is given weeks earlier. A register that shows only the end date will report a lapse after the decision has already passed. The notice field is the controlling date.",
      "Assign both a program owner and a contract owner. The program owner confirms whether the service is still needed and whether it is working. The contract owner tracks the terms, the evidence, and the decision. An agreement with only one owner tends to be reviewed from one perspective. The two roles should be recorded separately.",
      "List the evidence the agreement requires and the expiration date of each item. Insurance, background screening, data protection terms, and licenses may expire on different schedules. A current agreement can still be out of compliance because one certificate lapsed. The review should check both the agreement and its supporting documents.",
      "Compare the renewal decision date with the internal review date. The internal review should happen early enough to gather evidence and discuss performance. If the review date is the same as the notice deadline, the school is deciding without time to negotiate. Record both dates and the gap between them.",
      "Track agreements with no recent performance evidence. A partner may be meeting the letter of the agreement while the program owner has stopped using the service. The review should ask whether the service still supports a current program and whether the cost is justified. An agreement that is never used is a lapse in oversight even when the paperwork is current.",
      "Separate the decision types: renew, renegotiate, extend, or terminate. Record the decision and the person who made it. A decision to continue without review is not the same as a decision to renew. The register should show that someone chose the outcome rather than defaulting into it.",
      "Record the partner contact and the last communication date. A renewal review that cannot reach the partner is a risk in itself. Note whether the partner supplied current evidence and whether the school confirmed receipt. The communication trail should support the decision.",
      "Age agreements by the days past the internal review date, not only by the days until the end date. An agreement that is still months from expiry may already be late for its notice window. Show the oldest overdue review and the agreements with no owner. Those are the items most likely to become emergencies.",
      "Freeze the register and the evidence at a stated time. Export the agreement list, the notice dates, the evidence expiry dates, and the decision records. Record the export time and the system used. Documents can be uploaded while the review is running, so a live view will not reproduce. The frozen file is the evidence for the count.",
      "Describe the limits. The register may omit agreements held by a department that did not respond, and the evidence dates may be incomplete. Say which risks apply and how they could shift the result. A limitation section is more useful than a confident statement that every partnership is covered.",
      "Name the decision the review supports. The team may need a central register, an earlier review calendar, a standard evidence checklist, or a clear owner for each department. Each option has a cost and a responsible role. A report that does not change the next review is only a description of the last one.",
      "Choose a sample that includes agreements from more than one department. A register built only from the business office may miss program agreements that carry the greatest service risk. Record the source of each agreement and the department that owns it. Coverage is part of the result, not an afterthought.",
      "Check whether the agreement has an automatic renewal clause and the exact notice method it requires. A notice sent by email may not satisfy a clause that requires written delivery to a specific address. Record the method and the date. A procedural miss can lock the school into another term.",
      "Include agreements that do not expire on a fixed date, such as open-ended service terms. These still need a periodic review even when no end date appears. Record the review interval and the last review date. A register sorted only by end date will hide them.",
      "Compare the partner's insurance and screening evidence with the school's requirements, not only with the agreement's own list. A partner may meet the contract while falling short of a district policy adopted later. Record the policy version and the evidence date. The stricter requirement should govern.",
      "Track the performance issues that were raised during the term, even if they were resolved. A renewal review should see the history rather than only the latest status. Record the issue, the resolution, and whether it recurred. A pattern of small issues can matter more than a single incident.",
      "Include the cost and the funding source in the review. A service that is still useful may no longer fit the budget, and a grant-funded service may end when the grant does. Record the amount, the funding source, and the end date. The renewal decision is financial as well as operational.",
      "Report the number of agreements with no named owner and the number with no current evidence. Those two counts predict which agreements will lapse next. Assign an owner and a review date to each before closing the report. A coverage percentage without named gaps is hard to act on.",
      "Check whether the agreement names a dispute-resolution process and a governing law. Those clauses matter when a service problem escalates after renewal. Record whether the terms are still acceptable to the school. A renewal that ignores them can leave the school with fewer options later.",
      "Ask the partner for a current point of contact and an escalation contact. A renewal review that depends on an outdated email address can stall at the worst moment. Record both contacts and the date they were confirmed. The relationship is easier to maintain when the school knows who can answer.",
      "Compare the services actually delivered with the services described in the agreement. A partner may have changed its scope informally while the contract still lists older services. Record the difference and the program owner's view. The renewal is the time to align the document with the work."
    ],
    "sources": [
      {
        "label": "Manage your business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Department of Education",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/where-do-school-partnership-agreements-lapse-before-the-renewal-review.webp"
  },
  {
    "slug": "how-often-do-online-program-onboarding-steps-remain-open-after-the-start-date",
    "title": "How often do online program onboarding steps remain open after the start date?",
    "summary": "A review protocol for counting students who still lack access, materials, or a completed orientation after an online program begins.",
    "cluster": "Course systems",
    "finding": "An onboarding step is open after the start date when the required action is not confirmed in the system and no documented alternative or approved deferral exists.",
    "methodology": [
      "Scope: This protocol counts online program students whose access, materials, orientation, or support contact remained unconfirmed after the program start date.",
      "Population: Include every student enrolled in a reviewed online program cohort, and exclude applicants who never completed enrollment or withdrew before the start date.",
      "Opening event: Use the program start date published for the cohort, not the date the student first logged in.",
      "Closing event: Treat a step as complete when the required action is confirmed in the system or a documented alternative is approved and recorded.",
      "Measures: Report students in scope, open steps by type, students with more than one open step, median days to close, the share still open after seven days, and the share with no contact attempt recorded.",
      "Review: Repeat after any change to the enrollment form, the access provisioning process, the orientation, or the support contact model."
    ],
    "findings": [
      "An onboarding step is open after the start date when the required action is not confirmed in the system and no documented alternative or deferral exists. A student who received a welcome email has not necessarily completed the step. The protocol should count confirmed actions, not sent messages. That distinction keeps the measure tied to readiness rather than activity.",
      "Define the cohort and the outcomes before collecting rows. Include students who completed enrollment and exclude applicants who never started. List the required outcomes, such as account access, syllabus access, meeting access, materials received, and a support contact confirmed. The outcome list should match what the program actually requires in the first week.",
      "Separate access from readiness. Access means the account works and the course appears, while readiness means the student has the materials, schedule, and support needed to participate. A student can have access and still be unable to start. Record each state so the support team knows which barrier to address.",
      "Use the program start date as the opening event, not the date of the first login. A student who never logs in is exactly the case the review needs to find. If a student starts late with an approved plan, record the plan and the revised date. The protocol should distinguish an approved late start from an unaddressed gap.",
      "Record every contact attempt with the date, channel, and outcome. A student with no contact attempt is a different problem from a student who was contacted and did not respond. The first points to a queue gap and the second to an outreach barrier. Report the two separately so the fix is targeted.",
      "Check the learning platform roster against the enrollment record. A student may be enrolled but missing from the section, or present in two sections after a schedule change. Record the roster source and the date it was checked. Access errors are cheaper to fix before the first graded assignment than after a student falls behind.",
      "Include materials and equipment in the readiness check. A device, textbook, lab kit, or software license may be the step that blocks participation. Record the item, the expected delivery date, and the confirmation of receipt. A student who cannot access the required materials is not ready even if the platform login works.",
      "Group open steps by type and by owner. A cluster of account issues points to provisioning, while a cluster of missing materials points to the resource team. The pattern is more actionable than the total count. Assign one owner per step type and review the oldest items first.",
      "Age open steps from the start date and also from the last contact attempt. A step that is open for ten days with no contact is more serious than one opened yesterday. Show the median and the oldest case for each step type. The age distribution reveals whether the queue is moving or merely being counted.",
      "Freeze the data at a stated time. Export the enrollment list, the access records, the material confirmations, the orientation completions, and the contact log. Record the export time and the system used. A student can complete a step while the review is running, so a live view will not reproduce. The frozen file is the basis for a defensible count.",
      "Deduplicate students who appear in multiple reports or who switched sections. Record which record is the source of truth and how the duplicate was resolved. A denominator built on duplicates makes the open-step rate look better or worse depending on which record is counted. Deduplicate before analysis.",
      "Describe the limits. The review may cover one cohort, one program, or one term, and the contact log may be incomplete. Say which risks apply and how they could shift the result. A limitation section is more useful than a precise number that cannot be defended.",
      "Name the decision the review supports. The team may need an earlier access check, a shorter orientation, a targeted outreach script, or a clearer materials process. Each option has an owner and a cost. A report that does not change the next cohort is only a description of the last one.",
      "Choose a cohort that represents the programs the school actually runs, not only the largest one. A small cohort with a complex orientation may have a higher open-step rate than a large cohort with a simple one. Record the program and the cohort size. The comparison should not be dominated by one program.",
      "Check the enrollment record against the learning platform before the start date. A student who is enrolled but not provisioned will appear as an onboarding failure even when the student is ready and waiting. Record the roster source and the reconciliation date. Access provisioning is a school-side step and should be reported that way.",
      "Include the orientation completion date and the method used to confirm it. A video view count is not the same as a completed orientation check. Record whether the student confirmed attendance or completed a required task. A weak confirmation method makes the completion rate look better than it is.",
      "Track the support contact that the student was given. A student who cannot name a person to contact may be technically onboarded but unable to get help. Record whether the contact was confirmed and whether the student used it. A support gap often appears as a later engagement problem.",
      "Separate students who never started from students who started and stopped. The first group may have an access or motivation barrier, while the second may have a course design problem. Record the last activity date and the step where the student stopped. The two groups need different outreach.",
      "Check the late-start policy for students who enroll after the cohort begins. A compressed onboarding plan should still include identity, access, and orientation. Record the plan and the date it was approved. A late start that skips a control creates a compliance risk that outlasts the term.",
      "Report the open-step rate at day three, day seven, and day fourteen. A single end-of-term number hides whether the queue is moving. Record each snapshot and the number closed between them. The trend is more useful than a static percentage for deciding where to intervene.",
      "Check whether the student received a clear statement of what to do when a step fails. A support page that lists contacts but not the next action can leave a student stuck. Record whether the statement was sent and whether the student used it. A clear failure path is part of onboarding readiness.",
      "Compare the onboarding steps with the first graded activity. If a student can complete the first assignment without finishing a required step, the checklist may be testing something that does not matter. Record the dependency and the date it was checked. The sequence should reflect the real path through the course.",
      "Ask the advisor whether the open-step list matches the students who are actually asking for help. A mismatch may mean the list is missing a barrier or that outreach is going to the wrong people. Record both views and the difference. The comparison improves the next cohort's plan."
    ],
    "sources": [
      {
        "label": "National Center for Education Statistics",
        "publisher": "U.S. Department of Education",
        "url": "https://nces.ed.gov/"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/ferpa"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/how-often-do-online-program-onboarding-steps-remain-open-after-the-start-date.webp"
  },
  {
    "slug": "when-do-volunteer-screening-renewals-fall-behind-the-school-calendar",
    "title": "When do volunteer screening renewals fall behind the school calendar?",
    "summary": "A review protocol for measuring volunteer clearances that expire before a scheduled activity and for separating school-side delays from volunteer nonresponse.",
    "cluster": "Compliance operations",
    "finding": "A volunteer screening renewal is behind when the clearance expires before the next scheduled activity and no completed review or documented restriction is recorded.",
    "methodology": [
      "Scope: This protocol counts volunteer screening renewals that were not completed and reviewed before the volunteer's next scheduled student-contact activity.",
      "Population: Include every volunteer approved for a student-contact role during the review window, and exclude volunteers who formally stopped serving before the window opened.",
      "Opening event: Use the date the renewal became due under the role requirement, not the date the volunteer was first approved.",
      "Closing event: Treat a renewal as complete when the screening result, the review decision, and any restriction are recorded before the activity date.",
      "Measures: Report volunteers in scope, renewals due, renewals completed on time, renewals past the activity date, missing evidence by type, and the share delayed by the school rather than the volunteer.",
      "Review: Repeat after any change to the role requirements, the renewal interval, the reminder process, or the activity calendar."
    ],
    "findings": [
      "A volunteer screening renewal is behind when the clearance expires before the next scheduled student-contact activity and no completed review or documented restriction is recorded. It is not behind merely because the expiration date is near or the volunteer has not replied to a reminder. The distinction matters because the first condition affects placement and the second affects follow-up. The protocol should count the first condition.",
      "Define the volunteer population and the roles that require screening. Include classroom helpers, chaperones, coaches, tutors, and event volunteers who have unsupervised or sustained student contact. Exclude volunteers who formally stopped serving before the window. State whether partner-provided volunteers are included and what evidence the school accepts.",
      "Use the date the renewal became due under the role requirement, not the date the volunteer was first approved. Different roles may have different intervals, and a single anniversary date can hide a role-specific gap. Record the requirement, the interval, and the due date for each volunteer. The due date is the anchor for every later measure.",
      "Separate the school-side steps from the volunteer-side steps. The school may be waiting on a form, a review, a background result, or a coordinator decision. The volunteer may be waiting on a reminder, an appointment, or a document request. Record which side owns the delay. A report that treats every delay as volunteer nonresponse will miss the process problem.",
      "Record the last contact attempt and the channel before marking a renewal late. A volunteer who never received a reminder is a different case from one who received three and did not respond. The first points to a contact-data problem and the second to an outreach barrier. Report the two separately so the fix is targeted.",
      "Check the activity calendar before the expiration date. A clearance that expires during field trip season needs to be renewed earlier than one that expires after the last scheduled event. The review should connect the renewal date to the activity date, not just to the calendar year. That connection is what makes the measure operational.",
      "Track the review step separately from the screening result. A document may arrive and sit in an inbox for a week before anyone checks it. Record the date the result arrived and the date the reviewer recorded the decision. A renewal that is complete on paper but unreviewed is not complete for placement.",
      "Include the restriction status in the record. A volunteer with an expired clearance should be restricted from student contact until the renewal is complete. Record the date the restriction began and the date it was lifted. A lapse that is handled with a documented restriction is different from one that is ignored.",
      "Age renewals from the due date and from the activity date. A renewal that is due in three months but needed for an event next week is already urgent. Show both ages so the coordinator can prioritize. The oldest case by activity date is usually the one that matters most.",
      "Freeze the data at a stated time. Export the volunteer roster, the role requirements, the screening dates, the review records, and the activity calendar. Record the export time and the system used. A screening can be completed while the review is running, so a live view will not reproduce. The frozen file is the evidence for the count.",
      "Describe the limits. The register may omit partner volunteers, the activity calendar may be incomplete, and the review may cover one term. Say which risks apply and how they could shift the result. A limitation section is more useful than a confident statement that every volunteer is covered.",
      "Protect the screening data used in the review. Work from a restricted export and avoid copying results into a shared report. Report counts and statuses rather than personal details. The review should not create a second, less secure copy of sensitive records.",
      "Name the decision the review supports. The team may need an earlier renewal start, a clearer reminder sequence, a coordinator review calendar, or a rule for partner-provided volunteers. Each option has an owner and a cost. A report that does not change the next renewal cycle is only a record of the last one.",
      "Choose a sample that includes every student-contact role, not only the largest volunteer group. A small tutoring program may carry a higher risk than a large event roster. Record the role and the number of volunteers. Coverage by role is more useful than one overall rate.",
      "Check whether the volunteer's activity is scheduled or ad hoc. A recurring classroom helper needs a current clearance before every session, while a one-time event may allow a supervised exception. Record the activity type and the supervision level. The requirement should follow the actual student contact.",
      "Verify that the screening result matches the volunteer and the role. A document from another organization or an old name may not satisfy the requirement. Record the identity check and the source. A file that exists but cannot be matched to the person is not a completed renewal.",
      "Include the date the volunteer was notified of the requirement and the date the screening was completed. A long gap may point to a scheduling problem rather than a refusal. Record both dates and the number of reminders. The school can fix its own delay more easily than it can change a volunteer's response.",
      "Separate partner-provided volunteers from directly recruited volunteers. The partner may handle screening, but the school still needs evidence and a review decision. Record the partner, the evidence received, and the date accepted. A partner's assurance without documentation is not a completed school record.",
      "Check the access rule for volunteers whose renewal is pending. The rule should state whether they may serve in a supervised role or must wait. Record the interpretation used for each case. Inconsistent application creates both safety and fairness problems.",
      "Report the renewal completion rate before the first activity of the term, not only at the end. A rate measured after the busy season hides the volunteers who were restricted during it. Record the pre-season snapshot and the number restricted. That is the number the program owner needs to plan coverage.",
      "Check whether the volunteer has another approved role that might create confusion. A person cleared for an event may not be cleared for a recurring classroom assignment. Record the role and the clearance scope. The schedule should never rely on a clearance that covers a different activity.",
      "Review the reminder wording with a volunteer who has completed the process. A message that sounds like an accusation can reduce response rates. Record the feedback and the revised wording. Clear, neutral reminders are more effective than urgent ones sent after the deadline.",
      "Ask the program owner what coverage plan exists when a volunteer is restricted. A plan that depends on finding a replacement at the last minute is not a plan. Record the fallback and the person who activates it. The screening calendar should support the program, not just document its risks."
    ],
    "sources": [
      {
        "label": "Child Care",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.acf.hhs.gov/occ"
      },
      {
        "label": "Volunteers",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/flsa/volunteers"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/greenbook"
      }
    ],
    "publishedAt": "2026-11-09",
    "image": "/thumbnails/november-09/when-do-volunteer-screening-renewals-fall-behind-the-school-calendar.webp"
  }
];
