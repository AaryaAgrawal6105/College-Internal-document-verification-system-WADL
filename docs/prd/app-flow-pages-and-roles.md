
app-flow-pages-and-roles.md

⸻

Site Map (Top-Level Pages Only)
	•	Login
	•	Dashboard
	•	Upload Document
	•	Document Review
	•	Document Details (History View)
	•	Archive
	•	Profile & Signatures
	•	Admin Settings (Optional – Future Phase)

⸻

Purpose of Each Page

⸻

1. Login

Provides secure access to the internal platform.
Only authorized faculty members can log in.

⸻

2. Dashboard

Displays an overview of:
	•	Documents submitted by you
	•	Documents waiting for your approval
	•	Current status indicators

Primary Goal:
Immediately show what requires your attention.

⸻

3. Upload Document

Allows faculty to:
	•	Upload a PDF
	•	View AI-generated title and summary
	•	Define hierarchical approval chain
	•	Submit document into workflow

Primary Action:
“Start Approval Process”

⸻

4. Document Review (Core Screen)

Used by approvers.

Three-Panel Layout
	•	Left → AI Summary
	•	Center → PDF Viewer
	•	Right → Signature Panel (opens when approving)

Primary Actions
	•	Approve
	•	Reject

The interface is locked if it is not the user’s turn in the hierarchy.

⸻

5. Document Details (History View)

Displays:
	•	Version number
	•	Approval chain progress
	•	Who approved and when
	•	Rejection comments (if any)
	•	Reminder logs

Read-only when document is archived.

⸻

6. Archive

Contains:
	•	Fully approved documents
	•	Read-only access
	•	Downloadable merged signed PDF
	•	Search and filter functionality

⸻

7. Profile & Signatures

Users can:
	•	Upload signature images
	•	Upload official stamp
	•	Manage signature gallery

Only the account owner can use their uploaded signatures.

⸻

8. Admin Settings (Optional – Future)

For system administrators:
	•	Manage user roles
	•	Define hierarchy rules
	•	Configure reminder intervals
	•	View system analytics

⸻

User Roles & Access Levels

⸻

1. Faculty (Sender)

Can:
	•	Upload documents
	•	Define approval chain
	•	View status of their own documents
	•	Upload revised versions
	•	Download final approved PDF

Cannot:
	•	Approve their own document
	•	View unrelated documents

⸻

2. Approver (Assistant Professor / HOD / Principal)

Can:
	•	View documents assigned to them
	•	Approve with signature placement
	•	Reject with comment
	•	View archived documents they participated in

Cannot:
	•	Edit original PDF
	•	Skip hierarchy order
	•	Access unrelated documents

⸻

3. System Admin (Optional Role)

Can:
	•	Manage user roles
	•	View audit logs
	•	Configure system settings

Cannot:
	•	Modify document contents
	•	Override approval decisions (unless explicitly designed later)

⸻

Primary User Journeys (Maximum 3 Steps Each)

⸻

Journey 1 — Faculty Submits Document
	1.	Upload PDF → AI generates summary
	2.	Select approval chain in order
	3.	Click “Start Approval”

Outcome:
First approver receives notification.

⸻

Journey 2 — Approver Reviews & Approves
	1.	Open pending document from dashboard
	2.	Place signature → Confirm placement
	3.	Click Final Approve

Outcome:
Document moves to next approver.

⸻

Journey 3 — Approver Rejects
	1.	Open document
	2.	Click Reject → Add optional comment
	3.	Confirm rejection

Outcome:
Sender is notified. Workflow ends.

⸻

Journey 4 — Faculty Revises After Rejection
	1.	Open rejected document
	2.	Upload revised PDF (version incremented)
	3.	Restart approval chain

Outcome:
Workflow begins again from the first approver.

⸻

Journey 5 — Final Approval Completion
	1.	Last approver signs and approves
	2.	System marks document as Approved
	3.	Sender downloads merged signed PDF

Outcome:
Document is archived permanently.

⸻

Role-Based Visibility Rules

Users can see only:
	•	Documents they submitted
	•	Documents where they are part of the approval chain
	•	Archived documents only if they were part of the chain

Additional rules:
	•	No cross-department browsing
	•	All actions logged with timestamps

⸻

Status Lifecycle (Simple Mental Model)

Draft → Pending → Approved (Final) → Archived

OR

Draft → Pending → Rejected → Revised → Pending

There are no hidden states.

⸻

This completes the app flow and role structure.
