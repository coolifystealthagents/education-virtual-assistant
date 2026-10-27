import type { ResearchPost } from './types';

export const october27ResearchPosts: ResearchPost[] = [
  {
    "slug": "educationvirtualassistant-substitute-coverage-evidence-audit",
    "title": "Substitute Coverage Evidence Audit",
    "summary": "A reproducible protocol for testing whether every uncovered classroom, late arrival, and time adjustment has a named source and an accountable resolution in a school-day coverage file.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-27",
    "image": "/october-27/educationvirtualassistant-substitute-coverage-evidence-audit.svg",
    "finding": "The reviewable signal is not the fill rate alone; it is whether each absence, assignment, arrival, release, and correction can be reconstructed from a dated source and matched to the classroom that received coverage.",
    "methodology": [
      "Define the eligible population as every scheduled classroom period in a fixed school-week extract, including classes that were ultimately covered by an internal teacher or combined with another room. Record the extract date, the schools, the bell schedule version, and the count of periods.",
      "List the fields required for each absence: board number, employee, site, subject or grade, start and end time, request channel, approval status, substitute identifier, assignment time, arrival time, release time, and the person who confirmed coverage. Separate fields that must exist at intake from fields that may be completed after the assignment.",
      "Name the authoritative source for each field. An absence approval comes from the absence system, not a voicemail; an arrival time comes from the check-in record, not a recollection; a time adjustment comes from payroll with a reason. Mark every field that has no source.",
      "Stratify the sample by school, absence type, credential requirement, and whether the class was covered internally. Include same-day absences and unfilled periods so the review does not describe only the easy assignments.",
      "Classify each exception by cause: no approved candidate, candidate declined, late arrival, cancelled absence, wrong credential, room change, time adjustment, or record not updated. Assign a resolution owner and a dated next action for each unresolved case.",
      "Report the population, the sample, the field-level evidence, the exceptions, and the limits. Retain the extract, the board, the payroll comparison, and the checklist version so a second reviewer can reproduce the result. The review does not evaluate whether a leave was legitimate."
    ],
    "findings": [
      "A high fill rate can coexist with weak evidence if internal coverage is never recorded.",
      "Arrival time and release time answer different questions and should be stored separately.",
      "Credential gaps are a pool design issue, not only a scheduling issue.",
      "Cancelled absences must remain in the population so the denominator is honest.",
      "Internal coverage needs the same owner and confirmation as an external substitute.",
      "The protocol measures record quality; it does not establish whether a particular absence was approved."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Every Student Succeeds Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/every-student-succeeds-act-essa",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-transfer-credit-evidence-review",
    "title": "Transfer Credit Evidence Review",
    "summary": "A protocol for inspecting whether a transfer credit decision is supported by the right transcript, catalog year, course evidence, and authorized evaluator signature.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-27",
    "image": "/october-27/educationvirtualassistant-transfer-credit-evidence-review.svg",
    "finding": "A transfer decision is reviewable only when the case connects the sending institution, the course identity, the governing catalog, the evaluator's authority, and the student communication without substituting a title match for evidence.",
    "methodology": [
      "Define the population as all transfer credit cases decided in a fixed term, including denials and partial awards. Record the case source, the receiving program, the count, and the date the extract was taken.",
      "List the evidence required for each case: official transcript or secure record, sending institution accreditation, course reference, credit system, catalog description, syllabus when needed, receiving program, catalog year, rule reference, evaluator, decision date, and student notice.",
      "Name the source of each item and the date it was verified. A course description copied from a public webpage is not the same as the catalog in effect when the course was taken. A degree audit entry is not proof that the evaluator reviewed the syllabus.",
      "Sample across sending institution types, course levels, and decision outcomes. Include appeals and cases where credit was denied, because those are where the evidence chain is most likely to be thin.",
      "Classify defects as missing transcript, unverified institution, ambiguous course identity, wrong catalog year, missing rule reference, unauthorized decision, or missing student notice. Assign an owner and a correction path.",
      "Report the population, sample, defect counts, and limits. Retain the case index, the rule versions, and the decision samples. The protocol does not judge whether a course should have been equivalent; it tests whether the decision can be reconstructed."
    ],
    "findings": [
      "A title match is not a course match.",
      "The governing catalog year must be recorded, not inferred from the student's start date.",
      "Denials need the same evidence trail as approvals.",
      "Quarter and semester credit conversions require a written rule.",
      "An appeal should preserve the original decision and the revised one.",
      "The review can show a documentation gap without resolving the academic judgment."
    ],
    "sources": [
      {
        "label": "Accreditation and higher education policy",
        "publisher": "U.S. Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/higher-education-laws-and-policy/accreditation",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Integrated Postsecondary Education Data System",
        "publisher": "National Center for Education Statistics",
        "url": "https://nces.ed.gov/ipeds/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-financial-aid-document-followup-protocol",
    "title": "Financial Aid Document Follow-Up Review",
    "summary": "A protocol for checking whether a missing-document queue identifies the correct requirement, protects the student's data, and records each follow-up attempt.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-27",
    "image": "/october-27/educationvirtualassistant-financial-aid-document-followup-protocol.svg",
    "finding": "The useful control is a requirement-level record that links the student, aid year, document, review status, follow-up attempt, and secure channel; a cleared checklist without that trail cannot show why an award changed.",
    "methodology": [
      "Define the population as all open verification or document requirements at a fixed point in the aid cycle. Record the aid year, the extract date, the systems included, and the count of students and requirements.",
      "List the required fields for each requirement: student identifier, aid year, requirement code, document type, received date, review status, reviewer, missing element, follow-up channel, follow-up date, and deadline.",
      "Name the authoritative source. A portal upload is not the same as a reviewed document; a call note is not a substitute for the requirement status. Mark any field that exists only in an inbox or a personal spreadsheet.",
      "Sample by requirement type, dependency status, submission channel, and whether the student responded. Include students with repeated incomplete submissions and students whose documents arrived close to the deadline.",
      "Classify each defect as wrong student, wrong aid year, incomplete document, unsigned form, unreadable file, unsecured channel, missing review, or missing follow-up. Assign an owner and a correction date; do not record the sensitive content itself.",
      "Report the population, the sample, the defect categories, and the limits. Retain the queue extract, the follow-up log, and the review checklist. The protocol does not determine whether a student is eligible for aid."
    ],
    "findings": [
      "A received document is not a cleared requirement.",
      "The aid year and tax year are separate fields and both need verification.",
      "Follow-up attempts need a channel, date, and outcome.",
      "Repeated incomplete submissions usually indicate an instruction problem.",
      "Sensitive identifiers should never appear in a queue note or chat message.",
      "The review measures documentation and handling, not aid eligibility."
    ],
    "sources": [
      {
        "label": "Federal Student Aid partner guidance",
        "publisher": "U.S. Department of Education",
        "url": "https://fsapartners.ed.gov/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-course-reserve-access-recertification",
    "title": "Course Reserve Access Recertification Review",
    "summary": "A protocol for checking whether each course reserve item still has a valid access basis, a working link, and a documented takedown date at the end of a term.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-27",
    "image": "/october-27/educationvirtualassistant-course-reserve-access-recertification.svg",
    "finding": "A reserve list is trustworthy when each item shows its access basis, its current link or location, its audience, and its expiry; a list that only shows a title cannot distinguish a licensed copy from an unlicensed scan.",
    "methodology": [
      "Define the population as every active reserve item for a fixed term, including physical items, licensed electronic copies, open access links, and instructor-provided files. Record the term, the extract date, the courses, and the count.",
      "List the fields required for each item: course, instructor, title, edition, identifier, access basis, license or permission reference, audience, location or link, loan period, accessibility status, publication date, and takedown date.",
      "Name the source for the access basis. A library catalog record supports ownership; a license record supports concurrent access; a permission letter supports a specific use. A file in a shared drive does not establish permission by itself.",
      "Sample across formats, course sizes, and request channels. Include items added late, items with a personal copy, and items that were renewed from a prior term.",
      "Classify exceptions as missing access basis, expired permission, broken link, wrong edition, over-broad audience, inaccessible file, missing loan rule, or overdue takedown. Assign an owner and a correction date.",
      "Report the population, sample, exceptions, and limits. Retain the list version, the access evidence, and the takedown log. The protocol does not decide whether a particular use is fair use."
    ],
    "findings": [
      "Ownership, licensing, and permission are different access bases.",
      "A working link does not prove that the use is permitted.",
      "Expiry dates belong beside the item, not only in a calendar reminder.",
      "Accessibility is part of readiness, not a separate project.",
      "Takedown should be recorded with a date and a disposition.",
      "The review tests the record, not the legal conclusion."
    ],
    "sources": [
      {
        "label": "Fair use index",
        "publisher": "U.S. Copyright Office",
        "url": "https://www.copyright.gov/fair-use/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Section 508 accessibility guidance",
        "publisher": "U.S. General Services Administration",
        "url": "https://www.section508.gov/",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-iep-notice-timeline-audit",
    "title": "IEP Meeting Notice Timeline Audit",
    "summary": "A protocol for checking whether meeting notices, participant confirmations, interpretation arrangements, and follow-up documents can be reconstructed against the district's timeline.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-27",
    "image": "/october-27/educationvirtualassistant-iep-notice-timeline-audit.svg",
    "finding": "The reviewable control is a dated notice chain: the purpose, the required participants, the send method, the confirmations, the meeting record, and the follow-up document, each tied to the rule that set the deadline.",
    "methodology": [
      "Define the population as all IEP meetings held or due in a fixed reporting period, including amendments and meetings that were rescheduled. Record the period, the schools, the extract source, and the count.",
      "List the required record for each meeting: student identifier, meeting purpose, notice version, send date, required participants, confirmations, interpretation arrangement, meeting date, attendance page, follow-up document, and send date.",
      "Name the authoritative source for each field. The notice comes from the special-education record system, not a calendar invite; the attendance page comes from the signed meeting record, not a memory of who joined.",
      "Sample across meeting types, schools, and language needs. Include meetings that were rescheduled or held without a participant so the review captures the exception path rather than only the routine cases.",
      "Classify defects as late notice, missing participant, unconfirmed interpretation, wrong notice version, missing attendance page, missing follow-up, or undated distribution. Assign an owner and a correction date.",
      "Report the population, sample, defects, and limits. Retain the notice versions and the timeline rule. The protocol does not evaluate the substantive quality of an individualized education program."
    ],
    "findings": [
      "A sent notice is not a confirmed meeting.",
      "Required participants and invited participants are different lists.",
      "Interpretation should be confirmed before the meeting, not arranged at the door.",
      "Rescheduled meetings need a new notice or a dated addendum.",
      "The follow-up document needs its own send date.",
      "The review measures the notice chain, not the appropriateness of the program."
    ],
    "sources": [
      {
        "label": "Individuals with Disabilities Education Act",
        "publisher": "U.S. Department of Education",
        "url": "https://sites.ed.gov/idea/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://studentprivacy.ed.gov/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-27"
      }
    ]
  }
];
