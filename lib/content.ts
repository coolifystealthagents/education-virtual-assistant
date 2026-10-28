import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october-12/blogPosts';
import { october12ResearchPosts } from './october-12/researchPosts';
import { october22BlogPosts } from './october22-blog';
import { october22ResearchPosts } from './october22-research';
import { october27BlogPosts } from './october27-blog';
import { october27ResearchPosts } from './october27-research';
import { october28EducationBlogPosts, october28EducationResearchPosts } from './october28EducationBatch';

export const blogPosts: BlogPost[] = [
  ...october28EducationBlogPosts,
  ...october27BlogPosts,
  ...october22BlogPosts,
  ...october12BlogPosts,
  {
    "slug": "education-operations-manager-vs-education-va",
    "title": "Education operations manager vs education VA",
    "description": "A practical guide to education operations manager vs education va for school leaders, course creators, tutors, and education teams.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Education operations manager vs education VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For school leaders, course creators, tutors, and education teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What learner records support can handle",
        "paragraphs": [
          "Maintain approved enrollment, progress, and contact records. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/learner-records",
    "internalSibling": "/blog/learner-record-review",
    "source": {
      "label": "United States Department of Education",
      "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
    }
  },
  {
    "slug": "learner-record-review",
    "title": "Build a learner record review routine",
    "description": "A practical guide to build a learner record review routine for school leaders, course creators, tutors, and education teams.",
    "category": "Learner operations",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a learner record review routine starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For school leaders, course creators, tutors, and education teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What course administration can handle",
        "paragraphs": [
          "Organize modules, schedules, resources, and routine delivery tasks. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/course-administration",
    "internalSibling": "/blog/course-administration-calendar",
    "source": {
      "label": "United States Department of Education",
      "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
    }
  },
  {
    "slug": "course-administration-calendar",
    "title": "Create a course administration calendar",
    "description": "A practical guide to create a course administration calendar for school leaders, course creators, tutors, and education teams.",
    "category": "Course systems",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Create a course administration calendar starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For school leaders, course creators, tutors, and education teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What education scheduling support can handle",
        "paragraphs": [
          "Coordinate sessions, calendars, and approved reminders. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/scheduling-support",
    "internalSibling": "/blog/education-communication-escalation",
    "source": {
      "label": "United States Department of Education",
      "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
    }
  },
  {
    "slug": "education-communication-escalation",
    "title": "Design an education communication escalation path",
    "description": "A practical guide to design an education communication escalation path for school leaders, course creators, tutors, and education teams.",
    "category": "Education communication",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Design an education communication escalation path starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For school leaders, course creators, tutors, and education teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What family and learner communication can handle",
        "paragraphs": [
          "Handle routine approved messages with clear escalation. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/family-learner-communication",
    "internalSibling": "/blog/learning-resource-index",
    "source": {
      "label": "United States Department of Education",
      "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
    }
  },
  {
    "slug": "learning-resource-index",
    "title": "Build a useful learning resource index",
    "description": "A practical guide to build a useful learning resource index for school leaders, course creators, tutors, and education teams.",
    "category": "Course systems",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a useful learning resource index starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For school leaders, course creators, tutors, and education teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What resource library support can handle",
        "paragraphs": [
          "Keep learning materials organized and versioned. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/resource-library-support",
    "internalSibling": "/blog/education-operations-manager-vs-education-va",
    "source": {
      "label": "United States Department of Education",
      "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
    }
  }
];
blogPosts.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = [
  ...october28EducationResearchPosts,
  ...october27ResearchPosts,
  ...october22ResearchPosts,
  ...october12ResearchPosts,
  {
    "slug": "learner-records-workflow-boundary-review-1",
    "title": "Learner records support: workflow boundary review",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve learner records support workflows.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "course-administration-source-quality-audit-2",
    "title": "Course administration: source quality audit",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve course administration workflows.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "scheduling-support-exception-pattern-study-3",
    "title": "Education scheduling support: exception pattern study",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve education scheduling support workflows.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "family-learner-communication-handoff-reliability-brief-4",
    "title": "Family and learner communication: handoff reliability brief",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve family and learner communication workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "resource-library-support-review-consistency-report-5",
    "title": "Resource library support: review consistency report",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve resource library support workflows.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "reporting-preparation-workflow-boundary-review-6",
    "title": "Reporting preparation: workflow boundary review",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve reporting preparation workflows.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "learner-records-source-quality-audit-7",
    "title": "Learner records support: source quality audit",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve learner records support workflows.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "course-administration-exception-pattern-study-8",
    "title": "Course administration: exception pattern study",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve course administration workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "scheduling-support-handoff-reliability-brief-9",
    "title": "Education scheduling support: handoff reliability brief",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve education scheduling support workflows.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "family-learner-communication-review-consistency-report-10",
    "title": "Family and learner communication: review consistency report",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve family and learner communication workflows.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "resource-library-support-workflow-boundary-review-11",
    "title": "Resource library support: workflow boundary review",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve resource library support workflows.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "reporting-preparation-source-quality-audit-12",
    "title": "Reporting preparation: source quality audit",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve reporting preparation workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "learner-records-exception-pattern-study-13",
    "title": "Learner records support: exception pattern study",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve learner records support workflows.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "course-administration-handoff-reliability-brief-14",
    "title": "Course administration: handoff reliability brief",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve course administration workflows.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "scheduling-support-review-consistency-report-15",
    "title": "Education scheduling support: review consistency report",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve education scheduling support workflows.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "family-learner-communication-workflow-boundary-review-16",
    "title": "Family and learner communication: workflow boundary review",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve family and learner communication workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "resource-library-support-source-quality-audit-17",
    "title": "Resource library support: source quality audit",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve resource library support workflows.",
    "cluster": "Learner operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "reporting-preparation-exception-pattern-study-18",
    "title": "Reporting preparation: exception pattern study",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve reporting preparation workflows.",
    "cluster": "Course systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "learner-records-handoff-reliability-brief-19",
    "title": "Learner records support: handoff reliability brief",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve learner records support workflows.",
    "cluster": "Education communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "course-administration-review-consistency-report-20",
    "title": "Course administration: review consistency report",
    "summary": "A source-led brief on how school leaders, course creators, tutors, and education teams can define, inspect, and improve course administration workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "United States Department of Education",
        "url": "https://www.ed.gov/laws-and-policy/laws-preschool-grade-12-education/preschool-grade-12-policy-documents/family-educational-rights-and-privacy-act-ferpa"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];
researchPosts.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
