import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "enrollment-record-completeness-measurement",
    "title": "Measuring Enrollment Record Completeness",
    "summary": "A source-bounded method for defining required enrollment fields, evidence, exclusions, and reviewable exceptions.",
    "cluster": "Enrollment research",
    "publishedAt": "2026-10-22",
    "image": "/october-22/enrollment-record-completeness-measurement.webp",
    "finding": "Enrollment completeness is measurable only when the required fields, the authoritative source, the eligible population, and the treatment of missing evidence are declared before the review.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "academic-calendar-publication-consistency",
    "title": "Reviewing Academic Calendar Publication Consistency",
    "summary": "A method for comparing calendar versions, audience pages, and change records before dates reach students.",
    "cluster": "Calendar research",
    "publishedAt": "2026-10-22",
    "image": "/october-22/academic-calendar-publication-consistency.webp",
    "finding": "Calendar consistency is a version-control problem. A date is not reliable until the published page, the source calendar, and the change record agree.",
    "methodology": [
      "Define the calendar population by term, program, and publication channel. Record the source system, the export date, and the pages or documents in scope.",
      "Identify the authoritative calendar and its version. Compare the published page with the source for start dates, deadlines, holidays, exam periods, and withdrawal dates.",
      "Record every difference with the page, the date, the source value, the published value, and the time observed. Do not correct the page during the review without preserving the original evidence.",
      "Review the change record for approved updates. A recent change may explain a difference, but it does not prove that every channel was updated. Check the effective date and the audience.",
      "Sample the student-facing pages and the internal advising views. A calendar can be correct on the public page and wrong in the system that staff use.",
      "Report the differences by type and channel. Assign an owner for each correction and a retest date. The review does not replace the registrar's approval of the calendar."
    ],
    "findings": [
      "The authoritative calendar and its version must be named.",
      "A change record does not prove that every channel was updated.",
      "Student-facing and staff-facing views can disagree.",
      "The time of observation matters when a page is being edited.",
      "Corrections should preserve the original published value.",
      "Calendar consistency does not validate the academic policy itself."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "learning-platform-access-recovery-timing",
    "title": "Reviewing Learning Platform Access Recovery Timing",
    "summary": "A method for defining access incidents, response steps, recovery evidence, and the limits of timing measures.",
    "cluster": "Platform research",
    "publishedAt": "2026-10-22",
    "image": "/october-22/learning-platform-access-recovery-timing.webp",
    "finding": "Access recovery timing is interpretable only when the incident start, the response path, the recovery definition, and the excluded cases are documented.",
    "methodology": [
      "Define an access incident as a student or instructor who cannot reach an approved course or required tool. Record the channel, the report time, the affected system, and the user role.",
      "Specify the start event. It may be the first report, the first support ticket, or the first failed login recorded by the system. Different start events produce different timing measures.",
      "Record each response step: triage, identity check, assignment, fix, confirmation, and user verification. A ticket marked resolved is not necessarily a recovered user.",
      "Define recovery as the user confirming access or a system check proving the approved access. Record the evidence and the time. Do not infer recovery from a closed ticket.",
      "Exclude or separately report cases caused by an approved enrollment change, a policy hold, or a user device issue. State the rule and keep the excluded cases visible.",
      "Report counts by role, system, cause, and resolution path. Pair the timing measure with a sample review of the support experience and the root cause."
    ],
    "findings": [
      "The start event must be defined and applied consistently.",
      "A closed ticket is not proof of recovered access.",
      "User confirmation is stronger than an internal status change.",
      "Policy holds and device issues should not be hidden in the same measure.",
      "Root cause matters more than a single average.",
      "Timing does not prove that the access control is appropriate."
    ],
    "sources": [
      {
        "label": "CISA Identity and Access Management Guidance",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "accommodation-request-evidence-quality",
    "title": "Reviewing Accommodation Request Evidence Quality",
    "summary": "A privacy-conscious method for examining completeness, timeliness, and implementation evidence without judging disability.",
    "cluster": "Student support research",
    "publishedAt": "2026-10-22",
    "image": "/october-22/accommodation-request-evidence-quality.webp",
    "finding": "Accommodation request review should test process evidence and confidentiality, not the merits of a student's disability or the correctness of a clinical judgment.",
    "methodology": [
      "Define the population of accommodation requests for a declared period. Record the intake channel, request type, date, and status. Exclude duplicate requests only under a written rule.",
      "List the process evidence: acknowledgement, required documentation, reviewer assignment, decision date, approved adjustment, implementation owner, and student confirmation. Do not collect clinical detail beyond what the policy requires.",
      "Review timeliness from the request date to acknowledgement, review, decision, and implementation. A fast decision without implementation may not help the student.",
      "Check confidentiality: who accessed the record, what was shared with faculty, and whether the shared detail was limited to the approved adjustment. Record any excess disclosure.",
      "Sample approved, denied, and pending requests. For denials, check that the student received the reason and the appeal path. Do not evaluate whether the student deserved the accommodation.",
      "Report the process results, the exclusions, and the limits. Assign corrective actions to the accommodation office or the implementing unit. The review does not replace the office's decision authority."
    ],
    "findings": [
      "The review tests process evidence, not disability merit.",
      "Timeliness should include implementation, not only decision.",
      "Faculty should receive the approved adjustment, not the diagnosis.",
      "Denials need a reason and an appeal path.",
      "Confidentiality can fail even when the decision is correct.",
      "A sample cannot certify every request."
    ],
    "sources": [
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "student-data-retention-boundary-review",
    "title": "Reviewing Student Data Retention Boundaries",
    "summary": "A method for mapping student data stores, retention rules, access, and deletion evidence without making a legal conclusion.",
    "cluster": "Records research",
    "publishedAt": "2026-10-22",
    "image": "/october-22/student-data-retention-boundary-review.webp",
    "finding": "A retention review is useful when it maps the data store, the rule, the owner, the access, and the deletion evidence for each record class.",
    "methodology": [
      "Define the record classes in scope: admissions, enrollment, grades, accommodation, conduct, financial, and support communications. Record the system, the owner, and the stated retention rule.",
      "Map where each class is stored, including shared drives, inboxes, local exports, and vendor systems. A record can leave the official system through an export or a screenshot.",
      "Compare the stated rule with the actual retention. Record the retention period, the trigger event, the deletion method, and the evidence. Do not assume that a policy document proves deletion.",
      "Review access by role and purpose. A retention problem can become a privacy problem when records remain accessible to people who no longer need them.",
      "Sample records that should have been deleted and records that are still active. Record exceptions, legal holds, and approved extensions. Do not delete records during the review.",
      "Report the gaps by record class and system. Assign an owner and a remediation date. The review does not provide a legal conclusion or replace the records officer's judgment."
    ],
    "findings": [
      "A policy document is not evidence of deletion.",
      "Exports and inboxes can create shadow retention.",
      "Access should follow purpose, not only role.",
      "Legal holds and approved extensions must remain visible.",
      "Deletion evidence needs a date and a method.",
      "The review maps gaps; it does not make a legal determination."
    ],
    "sources": [
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-intake-completeness-study",
    "title": "Education Support Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/educationvirtualassistant-intake-completeness-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-handoff-latency-study",
    "title": "Education Support Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/educationvirtualassistant-handoff-latency-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-exception-pattern-audit",
    "title": "Education Support Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/educationvirtualassistant-exception-pattern-audit.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-evidence-reliability-study",
    "title": "Education Support Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/educationvirtualassistant-evidence-reliability-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-access-recertification-study",
    "title": "Education Support Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/educationvirtualassistant-access-recertification-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-intake-completeness-study-2",
    "title": "Education Support Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/educationvirtualassistant-intake-completeness-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which required fields and source artifacts are present at the point of assignment across intake records for the defined service in Education Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define intake records for the defined service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for field completeness, missing evidence, owner assignment, exception state, and correction time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for field completeness, missing evidence, owner assignment, exception state, and correction time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine service quality, legal compliance, or the correctness of a professional decision. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for intake records for the defined service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-handoff-latency-study-2",
    "title": "Education Support Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/educationvirtualassistant-handoff-latency-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines how long each handoff takes and where acknowledgement or context is lost across records that move between two named owners in Education Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records that move between two named owners from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for handoff time, acknowledgement, missing context, rework, and unresolved records. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for handoff time, acknowledgement, missing context, rework, and unresolved records. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot establish causation or whether a shorter handoff produced a better outcome. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records that move between two named owners, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-exception-pattern-audit-2",
    "title": "Education Support Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/educationvirtualassistant-exception-pattern-audit-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which exception reasons recur and whether they receive a consistent owner and disposition across exception records from the review window in Education Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define exception records from the review window from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Inspect case narratives behind important differences before assigning a cause.",
          "The audit describes documented exceptions and cannot infer undocumented causes. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for exception records from the review window, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-evidence-reliability-study-2",
    "title": "Education Support Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/educationvirtualassistant-evidence-reliability-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether the source is reconstructable and consistent with the recorded final state across records with a source artifact and a later outcome in Education Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records with a source artifact and a later outcome from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for source presence, match, missing state, correction, reviewer agreement, and time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for source presence, match, missing state, correction, reviewer agreement, and time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot prove that the source is truthful or that the final decision was correct. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records with a source artifact and a later outcome, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "educationvirtualassistant-access-recertification-study-2",
    "title": "Education Support Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Education Support operations.",
    "cluster": "Education Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/educationvirtualassistant-access-recertification-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "methodology": [
      "Define the eligible enrollment population from a fixed system export. Record the term, program, query date, filters, and count. Exclude test records and duplicates only under a written rule.",
      "List the required fields by enrollment type: student identity, program, section, start date, status, contact, consent, and any document required by policy. Separate fields that are mandatory at intake from fields that may be completed later.",
      "For each field, name the authoritative source and the acceptable evidence. A value copied from an email is not the same as a value from the student information system. Record the source and the date the value was verified.",
      "Review a stratified sample across programs, statuses, and intake channels. Include incomplete and withdrawn records so the result does not describe only the easy cases.",
      "Classify missing or conflicting evidence by cause: not collected, not received, received but unreadable, conflicting sources, system error, or policy exception. Assign an owner and a resolution path.",
      "Report the population, the sample, the field-level results, the exclusions, and the limits. Retain the review file and the source versions so another reviewer can reproduce the result."
    ],
    "findings": [
      "A required field without a named source cannot be verified.",
      "Intake requirements and later requirements should be separated.",
      "Incomplete records should remain in the population, not disappear from the denominator.",
      "A stratified sample is more useful than a convenience sample.",
      "Missing and conflicting evidence need different remedies.",
      "Completeness does not prove eligibility, funding, or compliance."
    ],
    "sources": [
      {
        "label": "Family Educational Rights and Privacy Act",
        "publisher": "U.S. Department of Education",
        "url": "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether current access matches the approved role and whether removals are evidenced across role-based access records for the service in Education Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define role-based access records for the service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine legal sufficiency or whether a specific access decision was appropriate. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for role-based access records for the service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  }
];
