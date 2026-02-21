

masterplan.md

⸻

30-Second Elevator Pitch

An internal, AI-powered document approval platform for colleges that:
	•	Allows faculty to upload PDFs
	•	Routes documents through strict hierarchical approvals
	•	Enables drag-and-drop digital signatures
	•	Preserves document integrity with immutable storage

Simple. Sequential. Secure.

⸻

Problem & Mission

The Problem

Colleges struggle with:
	•	Manual paper-based approvals
	•	Email attachments getting lost
	•	Unclear approval status
	•	Delayed signatures
	•	No structured audit trail

Result: Delays, confusion, and compliance risk.

⸻

The Mission

To create a secure, structured, and emotionally calm approval system that:
	•	Makes document status obvious
	•	Eliminates inbox clutter
	•	Preserves PDF integrity
	•	Respects hierarchy automatically
	•	Feels professional, not bureaucratic

⸻

Target Audience

Primary Users
	•	Faculty Members (Senders)
	•	Assistant Professors
	•	HODs
	•	Principals
	•	Administrative Authorities

Secondary (Future)
	•	Compliance auditors
	•	Accreditation bodies
	•	External academic reviewers

⸻

Core Features

⸻

1. Smart PDF Upload
	•	Upload PDF files only
	•	Automatic text extraction
	•	AI-generated:
	•	Title
	•	Summary
	•	Immutable file storage

⸻

2. Hierarchical Approval Chain
	•	Select approvers in required order
	•	Strict enforced sequence (no skipping levels)
	•	Document statuses:
	•	Pending
	•	Rejected
	•	Approved
	•	Archived

⸻

3. Signature Placement System
	•	Personal signature & stamp gallery
	•	Drag-and-drop signature placement
	•	Multi-page positioning support
	•	Free repositioning until confirmation

Two-step approval flow:
	1.	Confirm Placement
	2.	Final Approve

Signature coordinates are saved.
The original PDF file remains untouched.

⸻

4. Rejection Flow
	•	Reject with optional comment
	•	Immediate status update
	•	AI-generated rejection email
	•	Full workflow reset upon revision
	•	Version history tracking

⸻

5. Sequential Notifications
	•	Only the active approver receives an email
	•	Sender tracks live status in dashboard
	•	No spam notifications at every step

⸻

6. Reminder Automation
	•	Cron job runs hourly
	•	Reminder sent after 2 days of inactivity
	•	Only one reminder per 2-day window

⸻

7. Dynamic Final Document Generation

On download:
	•	Signatures are overlaid onto the original PDF
	•	The original file remains unchanged
	•	Merged PDF is generated on demand

⸻

8. Secure Archive

After final approval:
	•	Document becomes read-only
	•	Visible only to:
	•	Sender
	•	All chain participants
	•	Strict access control enforcement

⸻

High-Level Tech Stack

⸻

Frontend

React (Next.js)

Why:
	•	Fast UI
	•	Easy PDF rendering
	•	Strong ecosystem

⸻

Backend

Node.js (Express / NestJS)

Why:
	•	Structured workflow logic
	•	Asynchronous email handling

⸻

Database

PostgreSQL

Why:
	•	Strong relational modeling
	•	Ideal for approval chains & version tracking

⸻

Storage

Secure Object Storage (S3-compatible)

Why:
	•	Immutable storage
	•	Scalable
	•	Version-safe

⸻

PDF Rendering
	•	PDF.js for viewing
	•	Server-side PDF merge library for final output

⸻

AI Integration

LLM API used for:
	•	Title generation
	•	Summary generation
	•	Email drafting

AI is used only for content assistance — never for core workflow logic.

⸻

Conceptual Data Model (ERD in Words)

⸻

User
	•	id
	•	name
	•	role
	•	email
	•	signature_images[]

⸻

Document
	•	id
	•	sender_id
	•	original_file_path
	•	version_number
	•	status
	•	created_at
	•	completed_at

⸻

ApprovalStep
	•	id
	•	document_id
	•	approver_id
	•	order_index
	•	status
	•	acted_at

⸻

SignaturePlacement
	•	id
	•	document_id
	•	approver_id
	•	page_number
	•	x_coordinate
	•	y_coordinate
	•	image_reference

⸻

DocumentHistory
	•	id
	•	document_id
	•	version_number
	•	uploaded_at
	•	uploaded_by

⸻

UI Design Principles

(Based on emotional design philosophy)

⸻

1. Calm Authority

Feels like:
A quiet administrative office — organized, respectful, clear.

Not:
	•	Flashy
	•	Corporate cold
	•	Over-animated

⸻

2. Don’t Make Me Think
	•	One primary action per screen
	•	No dual-confirmation confusion
	•	Obvious hierarchy

Example:
If it’s your turn → a single bold “Review & Sign” button.

⸻

3. Emotional Kindness
	•	Rejection messages are neutral, not accusatory
	•	Error states guide the user
	•	Empty states reassure

Example:
“No documents waiting. You’re all caught up.”

⸻

4. Structured Layout

Three-panel review screen:
	•	Left: AI Summary
	•	Center: PDF Viewer
	•	Right: Signature Controls

Consistent layout every time.

⸻

Security & Compliance Notes
	•	Immutable original PDF
	•	Only signature coordinates are stored
	•	Role-based access control
	•	No cross-department visibility
	•	Audit logs for:
	•	Approval
	•	Rejection
	•	Version upload

Optional future enhancements:
	•	IP logging
	•	Digital certificate validation
	•	Hash verification of original file

⸻

Phased Roadmap

⸻

MVP
	•	PDF upload
	•	AI summary
	•	Approval chain
	•	Signature placement
	•	Email notifications
	•	Archive system

⸻

V1
	•	Advanced dashboard filters
	•	Analytics (average approval time)
	•	Strict role-based hierarchy enforcement
	•	Department-level grouping

⸻

V2
	•	Mobile-optimized interface
	•	Bulk document approval
	•	External reviewer access
	•	Integration with college ERP

⸻

Risks & Mitigations

⸻

Risk: Approvers delay action
Mitigation: Automated reminders + dashboard indicators

Risk: Signature misuse
Mitigation: Signatures usable only by owner account

Risk: Legal enforceability concerns
Mitigation: Add digital certificate-based signing in future phase

Risk: Version confusion
Mitigation: Clear version label at top of every document

⸻

Future Expansion Ideas
	•	AI compliance checker before submission
	•	Smart routing (auto-suggest approvers)
	•	SLA tracking dashboard
	•	Inter-college approval sharing
	•	Blockchain-based document hash storage

⸻
