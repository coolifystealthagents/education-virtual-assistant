import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "admissions-inquiry-response-queue",
    "title": "Build an Admissions Inquiry Response Queue",
    "description": "A practical workflow for prospective student questions, ownership, approved answers, follow-up, and enrollment handoff.",
    "category": "Admissions operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/admissions-inquiry-response-queue.webp",
    "sections": [
      {
        "heading": "Separate inquiry types",
        "paragraphs": [
          "Admissions inquiries include program questions, application status, document requirements, tuition, scheduling, and accessibility requests. Each needs a different answer and often a different owner. A single queue without categories will mix a simple brochure request with a time-sensitive document question.",
          "Define a short category list and the approved response for each. Record the source article or policy version used. If the answer depends on the applicant's file, route the question to the admissions owner rather than guessing from a general page."
        ]
      },
      {
        "heading": "Set response expectations",
        "paragraphs": [
          "Publish an internal response target by category and season. A peak application window may require different coverage from a quiet period. Record the target, the service hours, and the person responsible for the queue.",
          "The prospect should receive a clear acknowledgment and a next step. Avoid promising an admission decision or a fee waiver that the team cannot authorize. If the answer requires review, say who will follow up and when."
        ]
      },
      {
        "heading": "Keep approved answers current",
        "paragraphs": [
          "Program details, deadlines, and tuition change. Use a versioned answer library and a review date. When a policy changes, update the answer and retire the old version. An outdated answer can create a commitment the institution cannot honor.",
          "Link each answer to its owner. If the owner is unsure, the question should be routed rather than improvised. A clear escalation is better than a confident answer that later has to be corrected."
        ]
      },
      {
        "heading": "Track follow-up",
        "paragraphs": [
          "A prospect may need a reminder, a missing document, or a conversation with an advisor. Record the commitment, the owner, the due date, and the channel. A queue that only measures first response will miss the follow-up that actually helps the prospect.",
          "If the prospect does not respond, record the attempt and the next step. Close the inquiry only when the question is answered or the prospect has declined. Do not close it because the queue is busy."
        ]
      },
      {
        "heading": "Protect applicant data",
        "paragraphs": [
          "Admissions conversations may include identity, financial, disability, or academic information. Limit access to the people who need it and follow the retention rule. Do not ask for sensitive documents through an unapproved channel.",
          "If a prospect sends sensitive information by mistake, follow the incident process. Record what was received, where it is stored, and who has access. The response queue is not a secure document vault."
        ]
      },
      {
        "heading": "Pilot one season",
        "paragraphs": [
          "Run the queue for one admissions cycle or a defined peak period. Review the categories, response times, follow-ups, and handoffs. Adjust the answer library and staffing before the next peak.",
          "Expand after the first season is stable. The goal is a prospect experience that is clear, timely, and consistent with the institution's actual policies."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant answer admission chances?", "a": "No. The assistant can share approved program information and route the file-specific question to an admissions owner." },
      { "q": "Who owns a fee waiver question?", "a": "The admissions or financial aid owner named in the policy. The assistant should not promise a waiver." },
      { "q": "How should sensitive documents be handled?", "a": "Use the approved secure channel and retention rule. Do not request them in chat or email unless the policy allows it." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/course-waitlist-promotion-records",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  },
  {
    "slug": "tuition-payment-plan-documentation",
    "title": "Document Tuition Payment Plan Arrangements",
    "description": "A workflow for plan terms, approvals, installments, missed payments, and student communication without giving financial advice.",
    "category": "Student accounts",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/tuition-payment-plan-documentation.webp",
    "sections": [
      {
        "heading": "Record the approved plan terms",
        "paragraphs": [
          "A tuition payment plan should have a written term: the total, the installments, the due dates, the fees, and the consequences of a missed payment. The student accounts team can organize the record, but the plan terms must come from the approved policy or agreement.",
          "Store the plan with the student account and the source document. If the student requests a change, record the request, the reason, and the approval. Do not modify a due date or fee without the authorized owner."
        ]
      },
      {
        "heading": "Separate setup from financial judgment",
        "paragraphs": [
          "The assistant can verify that the plan fields are complete, calculate the installment schedule using the approved formula, and send reminders. The assistant should not decide whether a student qualifies for aid, a hardship exception, or a waiver.",
          "Use a clear escalation path for hardship, delinquency, and disputed charges. The student should receive a neutral next step, not a promise that the balance will be waived."
        ]
      },
      {
        "heading": "Track installments and exceptions",
        "paragraphs": [
          "Record each installment, the payment date, the amount, and the remaining balance. If a payment is missed, document the notice, the grace period, and the next action under policy. Do not apply a payment to the wrong term or plan.",
          "If the student disputes a charge, keep the disputed amount visible and route the question. Do not remove the charge or stop the plan without approval. A temporary pause should have an owner and an end date."
        ]
      },
      {
        "heading": "Communicate clearly",
        "paragraphs": [
          "Use plain language for the remaining balance, the next due date, and the consequence of a missed payment. Avoid threatening language and avoid implying that the assistant can make an exception. Provide the contact path for the student accounts owner.",
          "Keep the communication with the plan record. If the student calls or chats later, the next agent should see what was already explained and what remains open."
        ]
      },
      {
        "heading": "Review plan health",
        "paragraphs": [
          "Review plans by status, missed installments, exceptions, and age. Look for a cluster of missed payments after a due-date change or a communication gap. The pattern may indicate a process problem rather than an individual student issue.",
          "Sample plans and confirm that the terms, approvals, and payments match. A plan that cannot be reconstructed from the record is difficult to defend and difficult to support."
        ]
      },
      {
        "heading": "Pilot one plan type",
        "paragraphs": [
          "Choose one plan type and one term. Run the documentation and reminder process for a full cycle. Review the exceptions and the student questions before expanding.",
          "The goal is a clear, consistent plan record that supports the student and the institution without transferring financial authority to an administrative role."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant approve a hardship exception?", "a": "Only if the delegation policy grants that authority. Otherwise route the request to the student accounts owner." },
      { "q": "What if a payment is applied to the wrong term?", "a": "Record the error, preserve the original transaction, and route the correction to the owner." },
      { "q": "Should the assistant give financial advice?", "a": "No. The assistant can explain the approved plan terms and route financial questions to a qualified owner." }
    ],
    "internalService": "/services/learner-records",
    "internalSibling": "/blog/student-withdrawal-refund-routing",
    "source": { "label": "Consumer Financial Protection Bureau", "url": "https://www.consumerfinance.gov/" }
  },
  {
    "slug": "course-waitlist-promotion-records",
    "title": "Track Course Waitlist Promotions",
    "description": "A controlled record for waitlist order, eligibility, offers, deadlines, and enrollment confirmation.",
    "category": "Enrollment operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/course-waitlist-promotion-records.webp",
    "sections": [
      {
        "heading": "Define the waitlist rule",
        "paragraphs": [
          "A waitlist can be first come, first served, priority based, or cohort based. The rule should be written and visible to the people administering it. Without a rule, a promotion can look arbitrary and create complaints.",
          "Record the student, course, section, waitlist date, priority category if any, and contact method. If the student is eligible for a different section or term, record that option. The record should let another person reconstruct the order."
        ]
      },
      {
        "heading": "Make an offer with a deadline",
        "paragraphs": [
          "When a seat opens, send an offer with the course, section, deadline, and next step. Record the offer time and the response deadline. If the student does not respond, the seat may move to the next person under the approved rule.",
          "Do not promise a seat before the enrollment system confirms it. A verbal or chat statement that a seat is available can become a dispute if another student enrolls first. Use the approved confirmation path."
        ]
      },
      {
        "heading": "Handle declines and expirations",
        "paragraphs": [
          "If the student declines or the offer expires, record the reason and move to the next eligible student. Update the waitlist order and the seat status. Do not leave the seat in a pending state that blocks the next promotion.",
          "If the student asks for special consideration, route the request to the enrollment owner. The assistant can explain the rule but should not create an exception without authority."
        ]
      },
      {
        "heading": "Confirm enrollment",
        "paragraphs": [
          "After the student accepts, confirm the enrollment, the tuition or fee impact, and the start date. Record the confirmation and any remaining condition, such as a document or payment. A promotion is not complete until the enrollment record reflects it.",
          "If the student cannot be enrolled because of a hold or missing requirement, record the blocker and the owner. Do not keep the seat reserved indefinitely without an approved exception."
        ]
      },
      {
        "heading": "Review waitlist fairness",
        "paragraphs": [
          "Sample promotions and check the rule, the offer, the deadline, and the confirmation. Look for repeated manual overrides or sections with unusually long waits. The pattern may indicate a capacity or communication problem.",
          "Report the counts by course and outcome. A waitlist that is never reviewed can undermine trust in the enrollment process."
        ]
      },
      {
        "heading": "Pilot one course",
        "paragraphs": [
          "Start with one high-demand course and one term. Run the waitlist process and review the exceptions. Use the results to clarify the rule and the offer template.",
          "Expand after the first course is stable. The goal is a transparent process that fills seats without creating avoidable disputes."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant hold a seat for a student?", "a": "Only under the approved rule and for the defined deadline. Record the hold and the owner." },
      { "q": "What if the student misses the offer deadline?", "a": "Follow the approved expiration rule and move to the next eligible student." },
      { "q": "Who approves an exception?", "a": "The enrollment or registrar owner named in the policy." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/admissions-inquiry-response-queue",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  },
  {
    "slug": "student-accommodation-request-intake",
    "title": "Design a Student Accommodation Request Intake",
    "description": "A respectful intake workflow for accommodation requests, documentation, confidentiality, and timely routing.",
    "category": "Student support",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/student-accommodation-request-intake.webp",
    "sections": [
      {
        "heading": "Make the path easy to find",
        "paragraphs": [
          "Students should not have to guess how to request an accommodation. Publish the path, the contact, and the information needed. A clear intake reduces the risk that a student discloses sensitive information to the wrong person or gives up.",
          "The intake should explain what happens next, who reviews the request, and the expected timeline. Avoid promising a specific accommodation before the review. The student needs a realistic process, not a premature answer."
        ]
      },
      {
        "heading": "Collect only what is needed",
        "paragraphs": [
          "Ask for the information required by the accommodation policy and no more. A request may include the course, the barrier, the requested adjustment, and the supporting documentation the policy requires. Do not ask for a diagnosis or medical history unless the policy specifically requires it.",
          "Store the request in the approved confidential system. Limit access to the accommodation office and the people who need to implement the adjustment. Do not discuss the details in a general staff channel."
        ]
      },
      {
        "heading": "Route to the decision owner",
        "paragraphs": [
          "The accommodation office or designated reviewer decides whether an adjustment is approved. An assistant can acknowledge the request, check completeness, and schedule the review. The assistant should not evaluate the documentation or promise an outcome.",
          "If the request is urgent, follow the approved escalation path. Record the urgency reason and the owner who was contacted. Urgency does not remove the need for confidentiality or review."
        ]
      },
      {
        "heading": "Coordinate implementation",
        "paragraphs": [
          "Once approved, the implementation may involve faculty, exams, housing, or platform access. Record the approved adjustment, the courses or services affected, the owner, and the effective date. Confirm that the people who need to act have received the approved information.",
          "Do not share more detail than the implementation requires. Faculty may need to know the adjustment, not the underlying diagnosis. Use the approved communication template."
        ]
      },
      {
        "heading": "Review timeliness and access",
        "paragraphs": [
          "Track requests by date, type, reviewer, and outcome. Look for delays in acknowledgement, review, or implementation. A slow implementation can be as harmful as a slow decision.",
          "Sample closed requests and confirm that the student received a clear outcome and that the implementation was recorded. Protect confidentiality in the review file."
        ]
      },
      {
        "heading": "Pilot one request type",
        "paragraphs": [
          "Start with one common request type, such as exam accommodations. Run the intake and implementation for one term. Review the student experience and the staff workload before expanding.",
          "The goal is a process that is accessible, confidential, and accountable, not a general inbox that loses sensitive requests."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant decide whether to approve an accommodation?", "a": "No. The designated accommodation reviewer decides. The assistant can acknowledge, check completeness, and route." },
      { "q": "What information should be shared with faculty?", "a": "Only the approved adjustment needed for implementation, under the accommodation office's guidance." },
      { "q": "How should urgent requests be handled?", "a": "Follow the approved escalation path and record the urgency reason and the owner contacted." }
    ],
    "internalService": "/services/family-learner-communication",
    "internalSibling": "/blog/accessible-course-material-request",
    "source": { "label": "U.S. Department of Justice ADA Guidance", "url": "https://www.ada.gov/resources/effective-communication/" }
  },
  {
    "slug": "exam-proctoring-exception-log",
    "title": "Keep an Exam Proctoring Exception Log",
    "description": "A record for technical, identity, timing, and accommodation exceptions during online proctoring without exposing sensitive data.",
    "category": "Assessment operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/exam-proctoring-exception-log.webp",
    "sections": [
      {
        "heading": "Define an exception",
        "paragraphs": [
          "An exam proctoring exception is an event that prevents the session from following the standard process. Examples include a failed identity check, a platform outage, a lost connection, an accommodation that was not applied, or a suspected policy violation. The definition should be written before the exam window.",
          "Not every technical hiccup is an exception. A brief page reload may be recoverable without review. Define the threshold, the required evidence, and the owner so the log does not become a transcript of every click."
        ]
      },
      {
        "heading": "Record the facts",
        "paragraphs": [
          "Record the student, exam, session, time, exception type, observed evidence, action taken, and owner. Use objective language. Do not include guesses about intent or sensitive personal details that are not needed for the review.",
          "Preserve the relevant logs or screenshots according to policy. If the evidence includes identity documents or personal information, limit access and follow the retention rule. A proctoring exception log is not a general student record."
        ]
      },
      {
        "heading": "Route by exception type",
        "paragraphs": [
          "A technical exception may go to the platform owner, an accommodation exception to the accommodation office, and a suspected violation to the academic integrity owner. Each route needs a response expectation and a decision owner.",
          "The proctor or assistant can document and route. The decision to invalidate an exam, grant a retake, or impose a sanction belongs to the authorized academic owner. The log should not imply a decision that has not been made."
        ]
      },
      {
        "heading": "Communicate with the student",
        "paragraphs": [
          "Use neutral language. Tell the student what will happen next, who will review the issue, and when to expect an update. Avoid accusing the student or promising that the exam will be reset.",
          "If the student needs to take an action, such as uploading evidence or contacting the instructor, state it clearly. Keep the communication with the exception record."
        ]
      },
      {
        "heading": "Review patterns",
        "paragraphs": [
          "Review exceptions by type, platform, time, and accommodation status. A cluster of connection failures may indicate a platform problem, while a cluster of identity failures may indicate a confusing check or a device issue.",
          "Use the pattern to improve the exam instructions or the platform. Do not use it to rank proctors or students without context. The goal is a fair and reliable assessment process."
        ]
      },
      {
        "heading": "Pilot one exam window",
        "paragraphs": [
          "Run the log for one exam window and a defined group. Review the exception types and the routing. Adjust the definitions before the next high-stakes window.",
          "The goal is a record that supports a fair review without turning the proctoring team into judges."
        ]
      }
    ],
    "faq": [
      { "q": "Can a proctor decide to invalidate an exam?", "a": "Only if the academic policy grants that authority. Otherwise document and route to the academic integrity owner." },
      { "q": "What should be recorded about a suspected violation?", "a": "Observable facts, time, evidence, action taken, and the owner. Avoid conclusions about intent." },
      { "q": "How should student communication be handled?", "a": "Use neutral, approved language and state the next step and expected update." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/course-evaluation-release-checklist",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  },
  {
    "slug": "transcript-request-verification",
    "title": "Verify Transcript Requests Before Release",
    "description": "A controlled workflow for identity, authorization, destination, fees, and release evidence on transcript requests.",
    "category": "Student records",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/transcript-request-verification.webp",
    "sections": [
      {
        "heading": "Confirm the requester",
        "paragraphs": [
          "A transcript contains personal academic information. The team should verify that the requester is the student or an authorized party before releasing it. Use the approved identity and authorization method, and record the result.",
          "If the request comes from a third party, confirm the student's consent and the scope. A parent, employer, or agent should not receive a transcript without the required authorization, even if the request looks routine."
        ]
      },
      {
        "heading": "Check holds and obligations",
        "paragraphs": [
          "Before release, check for a financial, academic, or conduct hold that affects the transcript under policy. Record the hold, the owner, and the resolution path. Do not release a transcript when the policy requires a hold.",
          "If the student disputes the hold, route the question to the owner. The transcript team can explain the status but should not override the hold without authority."
        ]
      },
      {
        "heading": "Confirm the destination",
        "paragraphs": [
          "Record the recipient, the delivery method, and the destination. For an electronic transcript, confirm the email or portal. For a paper transcript, confirm the mailing address. A wrong destination can expose academic information.",
          "If the destination is unusual or the request asks for a change, verify through an approved channel. Do not redirect a transcript based only on an email that appears to come from the student."
        ]
      },
      {
        "heading": "Record fees and release",
        "paragraphs": [
          "If a fee applies, record the amount, the payment status, and the receipt. Release the transcript only when the payment and the authorization are complete under policy.",
          "Record the release date, method, and confirmation. If the delivery fails, document the failure and the next step. A transcript that was sent but not received is still an open request."
        ]
      },
      {
        "heading": "Protect records and retention",
        "paragraphs": [
          "Store the request, authorization, and release evidence according to the records policy. Limit access to the people who need it. Do not keep copies of transcripts in an unapproved inbox or shared drive.",
          "If a request is denied, record the reason and the communication. The student should know how to appeal or resolve the issue."
        ]
      },
      {
        "heading": "Review request quality",
        "paragraphs": [
          "Sample requests and check identity, authorization, destination, fee, and release evidence. Look for repeated wrong destinations or missing authorizations. A pattern may indicate a form or verification problem.",
          "The goal is a reliable release process that protects student data and responds to legitimate requests promptly."
        ]
      }
    ],
    "faq": [
      { "q": "Can a parent request a transcript?", "a": "Only with the student's authorization or as permitted by policy. Verify the consent and scope before release." },
      { "q": "What if there is a hold?", "a": "Follow the transcript policy and route the question to the hold owner. Do not override it without authority." },
      { "q": "How should a delivery failure be handled?", "a": "Record the failure, notify the requester, and follow the approved resend or refund process." }
    ],
    "internalService": "/services/learner-records",
    "internalSibling": "/blog/learning-platform-roster-reconciliation",
    "source": { "label": "Family Educational Rights and Privacy Act", "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html" }
  },
  {
    "slug": "alumni-communication-list-hygiene",
    "title": "Keep Alumni Communication Lists Clean",
    "description": "A practical process for consent, contact updates, suppression lists, and segmentation without losing alumni trust.",
    "category": "Advancement operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/alumni-communication-list-hygiene.webp",
    "sections": [
      {
        "heading": "Define the list purpose",
        "paragraphs": [
          "An alumni list may support events, fundraising, career services, or newsletters. Each purpose may require a different consent and frequency. Record the purpose and the lawful basis for the communication before adding a contact.",
          "Do not use one broad list for every message. A person who wants event invitations may not want fundraising calls. Segmentation helps respect the preference and improves the relevance of the communication."
        ]
      },
      {
        "heading": "Capture consent and preferences",
        "paragraphs": [
          "Record how the alumni opted in, the date, the channel, and the topics they selected. If consent is withdrawn, update the record and suppress the contact from the relevant messages.",
          "A suppression list should be checked before every send. Do not rely on a memory or a local spreadsheet that may be out of date. The source of truth should be the approved system."
        ]
      },
      {
        "heading": "Verify contact changes",
        "paragraphs": [
          "Alumni change emails, phone numbers, employers, and addresses. Record the source of the update and the date. A change from an unverified source may be a typo or a request from someone else.",
          "For sensitive changes, such as a communication preference or a do-not-contact request, verify through the approved channel. Do not override a suppression because another record looks more recent."
        ]
      },
      {
        "heading": "Clean duplicates and bounces",
        "paragraphs": [
          "Duplicate alumni records can cause multiple messages and a poor experience. Use stable identifiers and a documented merge process. Do not merge records without reviewing the communication history and the consent status.",
          "Process bounces and complaints promptly. A hard bounce may indicate an invalid address, while a complaint may indicate that the content or frequency is wrong. Record the action and the owner."
        ]
      },
      {
        "heading": "Protect privacy",
        "paragraphs": [
          "Alumni lists contain personal data. Limit access, use approved tools, and follow the retention policy. Do not share the list with a vendor or volunteer without the required agreement and controls.",
          "If a data incident occurs, follow the incident process. Record what was exposed, who was notified, and what remediation was taken."
        ]
      },
      {
        "heading": "Review list health",
        "paragraphs": [
          "Report list size, consent status, bounces, complaints, and duplicates. A clean list is not the largest list. It is a list of people who have agreed to receive the communication and can actually receive it.",
          "Use the review to improve the signup and preference center. Do not buy or scrape contact data to grow the list."
        ]
      }
    ],
    "faq": [
      { "q": "Can we email alumni who have not opted in?", "a": "Follow the applicable consent and privacy rules. Record the basis for the communication." },
      { "q": "What should happen after a complaint?", "a": "Suppress the contact from the relevant messages, record the complaint, and review the content or frequency." },
      { "q": "Can volunteers access the alumni list?", "a": "Only under the approved agreement and access controls. Limit the data to what the task requires." }
    ],
    "internalService": "/services/family-learner-communication",
    "internalSibling": "/blog/admissions-inquiry-response-queue",
    "source": { "label": "Federal Trade Commission Data Security", "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security" }
  },
  {
    "slug": "learning-platform-roster-reconciliation",
    "title": "Reconcile Learning Platform Rosters",
    "description": "A term-start workflow for enrollment, sections, roles, access, and drops across the student information system and the learning platform.",
    "category": "Platform operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/learning-platform-roster-reconciliation.webp",
    "sections": [
      {
        "heading": "Name the systems of record",
        "paragraphs": [
          "A learning platform roster should reflect the approved enrollment record. The student information system may be the source, while the platform may have its own roles and sections. Record which system is authoritative for each field.",
          "Do not assume that a platform export is complete. It may miss late enrollments, drops, cross-listed sections, or manual accounts. The reconciliation should compare the approved population with the platform population."
        ]
      },
      {
        "heading": "Reconcile before the term starts",
        "paragraphs": [
          "Run a roster check before the first class and again after the add or drop deadline. Compare student identifiers, sections, instructor roles, and access status. Record the source, the extraction date, and the differences.",
          "Investigate missing students, extra students, wrong sections, and duplicate accounts. A student who cannot access the course on day one may fall behind immediately. A former student who retains access may create a privacy or integrity issue."
        ]
      },
      {
        "heading": "Separate enrollment from platform roles",
        "paragraphs": [
          "A student may be enrolled but not yet active, or active in the platform but not enrolled. Record the status in each system and the owner who can resolve the difference. Do not grant access just to clear a support ticket.",
          "Instructor and teaching assistant roles should be verified against the approved assignment. A role change can affect grading, private data, and course settings. Record the approval and the effective date."
        ]
      },
      {
        "heading": "Handle drops and withdrawals",
        "paragraphs": [
          "After a drop or withdrawal, confirm that the platform access is removed or limited according to policy. Record the date and the evidence. A student who remains active after a drop may see course content they should not access.",
          "If the student needs temporary access to retrieve work or resolve a grade, record the exception and the end date. Do not leave an open-ended exception."
        ]
      },
      {
        "heading": "Document exceptions",
        "paragraphs": [
          "Common exceptions include late enrollment, cross-listed sections, manual guest accounts, and system sync failures. Each needs an owner and a resolution. A manual account without an expiration date is a risk.",
          "Keep the reconciliation and exceptions with the term record. If the same difference appears every term, fix the integration or the enrollment process rather than repeating the manual fix."
        ]
      },
      {
        "heading": "Pilot one term",
        "paragraphs": [
          "Start with one department or program. Run the reconciliation before the term and after the drop deadline. Review the differences and the time spent. Expand after the process is stable.",
          "The goal is a roster that matches the approved enrollment and a clear path for exceptions."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant add a student to the platform?", "a": "Only under the approved provisioning process. The enrollment record should support the action." },
      { "q": "What if a student is enrolled but cannot access the course?", "a": "Record the difference, check the platform role and section, and route to the provisioning owner." },
      { "q": "How should drops be handled?", "a": "Follow the access removal policy and record the date and evidence." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/faculty-onboarding-access-checklist",
    "source": { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" }
  },
  {
    "slug": "course-evaluation-release-checklist",
    "title": "Build a Course Evaluation Release Checklist",
    "description": "A workflow for response thresholds, anonymity, instructor access, and release timing without compromising trust.",
    "category": "Assessment operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/course-evaluation-release-checklist.webp",
    "sections": [
      {
        "heading": "Set the release rule before the term",
        "paragraphs": [
          "A course evaluation release rule should state when results become available, who may see them, and what minimum response condition applies. The rule should be approved before the evaluation opens so the team is not deciding access under pressure.",
          "Record the threshold, the grouping rule, and the exception process. If a small class cannot meet the threshold without risking anonymity, the policy should say how the results are handled. Do not release identifiable comments just because the term is ending."
        ]
      },
      {
        "heading": "Protect anonymity",
        "paragraphs": [
          "Anonymity depends on more than hiding names. Free-text comments, small class sizes, and combined demographic fields can make a respondent identifiable. Review the release for those risks before publishing.",
          "Do not release a comment that includes a name, a unique incident, or a detail that identifies the student. If the comment needs to be shared for improvement, summarize it without the identifying detail or route it through the approved process."
        ]
      },
      {
        "heading": "Separate instructor and administrator access",
        "paragraphs": [
          "Instructors may see their own course results after grades are submitted, while administrators may see aggregate results for program review. Record the role, the scope, and the effective date. Do not give an instructor access to another instructor's results.",
          "If a leader needs a cross-course view, use the approved aggregate and suppression rules. A convenient export can bypass the anonymity control if it includes small groups."
        ]
      },
      {
        "heading": "Check the release window",
        "paragraphs": [
          "Release results only after the defined window and the required approvals. Confirm that grades are submitted and that the evaluation period is closed. A premature release can affect grading or the response rate.",
          "Record the release date, the audience, and the evidence. If the release is delayed, communicate the reason and the new date. Do not let the delay become an unexplained silence."
        ]
      },
      {
        "heading": "Review the release process",
        "paragraphs": [
          "Sample released evaluations and check the threshold, the anonymity review, and the audience. Look for small groups that were released without a documented exception or comments that could identify a student.",
          "Use the findings to improve the evaluation form and the release guidance. The goal is useful feedback that respondents trust."
        ]
      },
      {
        "heading": "Pilot one term",
        "paragraphs": [
          "Run the checklist for one term and one program. Review the release with the teaching and learning owner. Adjust the threshold or the template before expanding.",
          "The goal is a release process that protects students and gives instructors usable feedback."
        ]
      }
    ],
    "faq": [
      { "q": "Can an instructor see evaluations before grades are submitted?", "a": "Follow the policy. Many institutions delay release until grades are final to protect the process." },
      { "q": "What if a class is too small for anonymity?", "a": "Follow the approved suppression or aggregation rule. Do not release identifiable comments." },
      { "q": "Who approves an exception?", "a": "The teaching and learning or evaluation owner named in the policy." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/exam-proctoring-exception-log",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  },
  {
    "slug": "field-trip-consent-safety-records",
    "title": "Track Field Trip Consent and Safety Records",
    "description": "A practical record for permissions, emergency contacts, accessibility needs, and trip-day readiness.",
    "category": "Student support",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/field-trip-consent-safety-records.webp",
    "sections": [
      {
        "heading": "Define the required record",
        "paragraphs": [
          "A field trip record may include the permission form, emergency contact, medical or accessibility information needed for safety, transportation plan, supervision ratio, and itinerary. The school or program policy should define what is required for the trip type.",
          "Do not collect more than the policy requires. Sensitive health information should be limited to the people who need it for safety and stored in the approved system. A general trip folder is not the right place for medical details."
        ]
      },
      {
        "heading": "Confirm consent before the deadline",
        "paragraphs": [
          "Record the consent status, the date, the signer, and the scope. If the form is incomplete, route it to the guardian or the approved contact. Do not assume that a verbal yes is a complete consent when the policy requires a signed form.",
          "For students who cannot obtain consent, follow the approved exception or alternative process. Do not let a student attend without the required authorization just because the bus is leaving."
        ]
      },
      {
        "heading": "Prepare the safety packet",
        "paragraphs": [
          "The trip leader should have the approved emergency contacts, the itinerary, the supervision plan, and the relevant safety information. Limit the packet to what is needed. Do not share medical details with people who do not have a safety role.",
          "Record who has the packet and how it will be kept secure during the trip. A paper list left on a bus or a shared spreadsheet open to the whole staff is a privacy risk."
        ]
      },
      {
        "heading": "Handle changes and incidents",
        "paragraphs": [
          "If a student cancels, a guardian changes a contact, or a trip detail changes, update the record and notify the trip leader. Record the time and the source of the change. A last-minute change that is not communicated can create a safety gap.",
          "If an incident occurs, follow the school's incident process. Record the facts, the response, and the notification. Do not investigate or make a determination beyond your role."
        ]
      },
      {
        "heading": "Review trip readiness",
        "paragraphs": [
          "Before departure, check the consent, contacts, supervision, transportation, and accessibility arrangements. Record the check and the owner. A trip that is missing a required record should not depart without an approved resolution.",
          "After the trip, review the records for completeness and retention. Identify any forms or processes that caused last-minute work."
        ]
      },
      {
        "heading": "Pilot one trip type",
        "paragraphs": [
          "Start with one trip type, such as a local day trip. Run the record and readiness check. Review the gaps with the trip leader and the privacy owner before expanding to overnight or international trips.",
          "The goal is a safe, documented trip without unnecessary collection of student data."
        ]
      }
    ],
    "faq": [
      { "q": "Can a student attend without a signed consent?", "a": "Follow the policy and the approved exception process. Do not override a required consent at departure." },
      { "q": "Who should see medical information?", "a": "Only the people with a safety role who need it. Limit access and store it securely." },
      { "q": "What should happen after an incident?", "a": "Follow the school's incident process and record the facts and notifications." }
    ],
    "internalService": "/services/family-learner-communication",
    "internalSibling": "/blog/student-accommodation-request-intake",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  },
  {
    "slug": "faculty-onboarding-access-checklist",
    "title": "Build a Faculty Onboarding Access Checklist",
    "description": "A term-start workflow for accounts, roles, course access, and offboarding triggers for new faculty and instructors.",
    "category": "Platform operations",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/faculty-onboarding-access-checklist.webp",
    "sections": [
      {
        "heading": "Start from the approved appointment",
        "paragraphs": [
          "Access should follow an approved appointment, not a verbal request. Record the faculty member, role, department, start date, end date if applicable, and the courses or systems they need. The appointment record is the source for the access request.",
          "If the appointment is pending, do not grant production access early unless the policy allows a documented pre-start exception. A temporary account with broad permissions is difficult to monitor."
        ]
      },
      {
        "heading": "Map roles to permissions",
        "paragraphs": [
          "A faculty role may include course access, grading, student records, email, and collaboration tools. Map each role to the minimum permissions required. Do not copy another instructor's access because it is convenient.",
          "Record the approver for each system or role. A single approval may not cover sensitive systems such as student records or financial data. Use the approved access matrix."
        ]
      },
      {
        "heading": "Prepare the course and roster",
        "paragraphs": [
          "Confirm that the instructor is assigned to the correct course sections and that the roster matches the enrollment record. Check the role in the learning platform and the start date. A wrong section can expose another instructor's students.",
          "If the instructor needs a guest or co-instructor role, record the scope and the end date. A guest account without an expiration is an unnecessary risk."
        ]
      },
      {
        "heading": "Verify before the first class",
        "paragraphs": [
          "Test the login, the course access, and the required tools before the term starts. Record the verification and the owner. A new instructor who cannot access the course on day one may need emergency support.",
          "Provide the approved onboarding guidance and the contact for access issues. Do not share passwords or bypass multi-factor authentication to save time."
        ]
      },
      {
        "heading": "Plan the offboarding trigger",
        "paragraphs": [
          "Record the end date or the event that triggers access removal. A departing instructor should lose access according to policy, and course ownership should transfer to the approved person. Do not wait for someone to remember.",
          "Review access after the term or appointment ends. A former instructor with active access can view student data or change grades."
        ]
      },
      {
        "heading": "Pilot one department",
        "paragraphs": [
          "Run the checklist for one department and one term. Review the access requests, verification, and offboarding. Expand after the process is stable.",
          "The goal is a repeatable onboarding path that gives instructors what they need without excessive access."
        ]
      }
    ],
    "faq": [
      { "q": "Can an instructor share their login with an assistant?", "a": "No. Use the approved delegated role or support process. Sharing credentials undermines accountability." },
      { "q": "Who approves student records access?", "a": "The owner named in the access matrix, which may be the registrar or a designated data owner." },
      { "q": "When should access be removed?", "a": "At the end date or triggering event defined by policy, with course ownership transferred as required." }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/learning-platform-roster-reconciliation",
    "source": { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" }
  },
  {
    "slug": "student-withdrawal-refund-routing",
    "title": "Route Student Withdrawals and Refund Requests",
    "description": "A workflow for withdrawal dates, refund policy, approvals, communication, and record retention.",
    "category": "Student accounts",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "image": "/october-22/student-withdrawal-refund-routing.webp",
    "sections": [
      {
        "heading": "Record the withdrawal date",
        "paragraphs": [
          "The withdrawal date can determine the refund, the grade, and the enrollment status. Record the date the student initiated the request, the date the institution received it, and the effective date under policy. Do not use the date the paperwork was completed if the policy uses an earlier event.",
          "If the student withdraws through a portal, keep the confirmation. If the request arrives by email or chat, record the source and route it to the registrar or student accounts owner."
        ]
      },
      {
        "heading": "Apply the refund policy",
        "paragraphs": [
          "The refund policy should state the schedule, the eligible fees, and the exceptions. The assistant can calculate the refund using the approved policy and prepare the record, but the student accounts owner decides an exception or a disputed amount.",
          "Show the calculation: the tuition, the fees, the date, the percentage or amount, and the resulting refund. A total without the basis is difficult for the student to understand and difficult to audit."
        ]
      },
      {
        "heading": "Separate withdrawal from refund",
        "paragraphs": [
          "A withdrawal changes the enrollment status; a refund changes the financial account. One may happen without the other. Record both statuses and the owner for each. Do not tell the student the withdrawal is complete if the refund is still pending.",
          "If the student is withdrawing from one course but remaining in others, update the enrollment and the financial record for that course only. Check the impact on full-time status or aid eligibility and route the question."
        ]
      },
      {
        "heading": "Communicate the outcome",
        "paragraphs": [
          "Tell the student the effective date, the refund amount or the reason for no refund, and the next step. Use plain language and the approved channel. Avoid promising a refund before the calculation and approval are complete.",
          "If the student disputes the date or the amount, record the dispute and route it to the owner. Keep the original record and the communication."
        ]
      },
      {
        "heading": "Review the process",
        "paragraphs": [
          "Sample withdrawals and check the date, the policy application, the approval, and the refund. Look for repeated delays in posting or communication. A pattern may indicate a handoff problem between the registrar and student accounts.",
          "Review the refund exceptions by reason. A cluster of exceptions may mean the policy is unclear or the communication is late."
        ]
      },
      {
        "heading": "Pilot one term",
        "paragraphs": [
          "Run the workflow for one term and one program. Review the timing, the exceptions, and the student questions. Expand after the process is stable.",
          "The goal is a clear, fair record that connects the enrollment change to the financial outcome."
        ]
      }
    ],
    "faq": [
      { "q": "Can the assistant approve a refund exception?", "a": "Only within the delegated authority. Otherwise prepare the record and route it to student accounts." },
      { "q": "Which date determines the refund?", "a": "The date defined by the institution's policy. Record the source and the evidence." },
      { "q": "What if the student disputes the date?", "a": "Record the dispute, preserve the evidence, and route it to the policy owner." }
    ],
    "internalService": "/services/learner-records",
    "internalSibling": "/blog/tuition-payment-plan-documentation",
    "source": { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" }
  }
];
