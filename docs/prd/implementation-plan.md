
implementation-plan.md

⸻

Build Philosophy
	•	Ship small.
	•	Test early.
	•	Automate friction.
	•	Protect document integrity at all costs.

⸻

Step-by-Step Build Sequence (Mindless Micro-Tasks)

⸻

Phase 1 — Foundation Setup
	•	Create project repositories (frontend + backend).
	•	Set up PostgreSQL database.
	•	Configure object storage (immutable bucket).
	•	Implement user authentication (email + password).
	•	Add role field to user model (Faculty, HOD, Principal, etc.).

Checkpoint

✔ Users can log in securely.

⸻

Phase 2 — Document Upload Flow
	•	Build PDF upload UI.
	•	Validate file type (PDF only).
	•	Store original PDF in secure storage.
	•	Extract text from PDF.
	•	Send extracted text to LLM API.
	•	Save AI-generated:
	•	Title
	•	Summary
	•	Create initial Document record (status: Pending Draft).

Checkpoint

✔ Upload → AI title + summary saved successfully.

⸻

Phase 3 — Approval Chain Builder
	•	Build approver dropdown (role-filtered).
	•	Enforce ordered selection.
	•	Prevent duplicate approvers.
	•	Save ApprovalStep records with order_index.
	•	Change document status to Pending.
	•	Trigger email to first approver.

Checkpoint

✔ First approver receives notification.

⸻

Phase 4 — Review Interface (Core Screen)

Build 3-panel layout:
	•	Left: AI Summary
	•	Center: PDF Viewer
	•	Right: Hidden initially (signature panel appears when needed)
	•	Add “Approve” and “Reject” buttons.
	•	Detect if user is current approver.
	•	Lock UI if it is not their turn.

Checkpoint

✔ Approver sees correct document with clear action options.

⸻

Phase 5 — Signature System
	•	Create signature upload system (profile section).
	•	Store signature/stamp images securely.
	•	Build scrollable signature gallery.
	•	Enable drag-and-drop over PDF canvas.
	•	Track:
	•	Page number
	•	X/Y coordinates
	•	Add “Confirm Placement” button.
	•	Lock placement after confirmation.
	•	Add final “Approve” button.

On final approval:
	•	Save signature placements.
	•	Update ApprovalStep → Approved.
	•	Move to next approver.
	•	Send next notification email.

Checkpoint

✔ Document moves sequentially with saved coordinates.

⸻

Phase 6 — Rejection Flow
	•	Implement Reject modal.
	•	Add optional comment field.
	•	Save rejection reason.
	•	Update document status → Rejected.
	•	Send AI-generated rejection email to sender.
	•	Stop workflow progression.

Checkpoint

✔ Rejected document exits approval chain properly.

⸻

Phase 7 — Revision System
	•	Allow sender to upload new version.
	•	Store new PDF (new file path).
	•	Increment version number.
	•	Log entry in DocumentHistory.
	•	Reset all ApprovalStep statuses.
	•	Restart chain from first approver.
	•	Send new notification email.

Checkpoint

✔ Full workflow restart works cleanly.

⸻

Phase 8 — Reminder Automation
	•	Create cron job (runs hourly).
	•	Query documents:
	•	Status: Pending
	•	Same approver
	•	Inactive for 48+ hours
	•	Send reminder email.
	•	Log reminder timestamp.
	•	Prevent duplicate reminders within 2-day window.

Checkpoint

✔ Reminder system works without spam.

⸻

Phase 9 — Final PDF Merge
	•	Build on-demand PDF merge endpoint.
	•	Retrieve:
	•	Original PDF
	•	All signature placements
	•	Overlay signature images at stored coordinates.
	•	Stream merged PDF to user.
	•	Keep original file unchanged.

Checkpoint

✔ Download produces correctly signed document.

⸻

Phase 10 — Archive & Permissions
	•	Lock document when fully approved.
	•	Make archive read-only.
	•	Enforce access control:
	•	Sender
	•	All chain participants
	•	Add audit logging:
	•	Approval timestamps
	•	Rejection timestamps
	•	Version uploads

Checkpoint

✔ Secure archive functioning correctly.

⸻

 Checkpoints

⸻


	•	Authentication
	•	Upload system
	•	AI summary generation
	•	Database schema setup

⸻

	•	Approval chain logic
	•	Email notifications
	•	Review interface

⸻


	•	Signature placement system
	•	Coordinate storage
	•	Sequential routing

⸻


	•	Rejection + revision logic

⸻


	•	Final PDF merge
	•	Archive system
	•	Security audit
	•	Internal testing

⸻

Team Roles

⸻

Product Lead
	•	Defines workflow rules
	•	Reviews usability weekly

⸻

Backend Developer
	•	Workflow logic
	•	Database management
	•	PDF merging
	•	Cron jobs

⸻

Frontend Developer
	•	Review interface
	•	Drag-and-drop signature placement
	•	Dashboard UI

⸻

DevOps Engineer
	•	Secure storage configuration
	•	Deployment
	•	Backup strategy

⸻

Recommended Rituals

⸻

Bi-Weekly 30-Minute Usability Test

Test with:
	•	1 Faculty
	•	1 HOD
	•	1 Principal

Ask:
	•	Where did you hesitate?
	•	What confused you?
	•	What felt slow?

Fix the top 3 usability issues immediately.

⸻

Monthly Security Review
	•	Role access audit
	•	Signature ownership verification
	•	Storage integrity check

⸻

Optional Integrations (Future)
	•	College ERP integration
	•	LDAP / SSO login
	•	Digital certificate-based signing
	•	WhatsApp notifications (internal)
	•	Analytics dashboard for approval time

⸻

Stretch Goals
	•	AI suggests approval chain automatically.
	•	SLA tracking (average approval time by role).
	•	Bulk approvals for administrative batches.
	•	Compliance export report (for audits).

⸻
