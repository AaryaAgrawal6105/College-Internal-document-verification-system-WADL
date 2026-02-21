

design-guidelines.md

⸻

Emotional Tone

The system should feel like a calm administrative chamber — structured, respectful, and quietly authoritative.

Guiding philosophy:
	•	Technology should feel kind.
	•	Authority should not feel intimidating.
	•	Efficiency should not remove humanity.

This system must feel:
	•	Clear
	•	Stable
	•	Professional
	•	Supportive under pressure

Never flashy. Never chaotic.

⸻

Visual System

⸻

Typography

Emotional Goal

Clarity + Institutional Trust

Font Strategy
	•	Primary: Geometric Sans (Inter-style)
→ Clean, modern, neutral
	•	Secondary (Optional for headings): Light serif for subtle authority accents

⸻

Type Scale (8pt-Based Modular Rhythm)

Level	Size	Weight	Usage
H1	32px	600	Page titles
H2	24px	600	Section titles
H3	18px	500	Card headers
H4	16px	500	Subsections
Body	14px	400	Primary content
Caption	12px	400	Metadata

Rules
	•	Line-height ≥ 1.6
	•	Maximum 70 characters per line
	•	WCAG AA+ contrast required

Tone Effects
	•	Slightly tighter headings → confidence
	•	Comfortable body spacing → calm reading

⸻

Color System

Emotional Direction

Muted institutional tones. Avoid corporate blue overload.

⸻

Primary Palette

Role	Hex	RGB	Purpose
Primary Blue	#1E3A5F	30, 58, 95	Primary actions
Deep Slate	#2F3E46	47, 62, 70	Headers
Light Gray	#F4F6F8	244, 246, 248	Background
Surface White	#FFFFFF	255, 255, 255	Cards


⸻

Accent Colors

Role	Hex	RGB	Usage
Success	#2E7D32	46, 125, 50	Approved
Warning	#ED6C02	237, 108, 2	Pending
Rejected	#C62828	198, 40, 40	Rejection
Info	#0288D1	2, 136, 209	Notifications

Contrast ratio must remain ≥ 4.5:1 in all states.

⸻

Dark Mode (Optional Future)
	•	Deep Background: #121417
	•	Muted Surface: #1E2226
	•	Text: #E6E8EA

Maintain emotional consistency — avoid “cyberpunk dark.”

⸻

Spacing & Layout

Grid System
	•	8pt spacing grid
	•	Consistent vertical rhythm across screens

Spacing Scale
	•	8px → micro spacing
	•	16px → default gap
	•	24px → section separation
	•	32px+ → major layout break

⸻

Review Screen Layout (Core Page)

Three-column structure:
	•	Left Sidebar → 25% (AI Summary)
	•	Center → 50% (PDF Viewer)
	•	Right Sidebar → 25% (Signature Panel)

Responsive behavior:
	•	Collapses into stacked layout on tablet/mobile
	•	Summary becomes collapsible
	•	Signature panel slides up from bottom

⸻

Motion & Interaction

Inspired by kindness-focused interaction design.

Motion Rules
	•	Duration: 150–250ms
	•	Easing: Ease-out cubic
	•	No bounce unless celebratory

⸻

Microinteractions

Approve Button
	•	Subtle darken on hover
	•	Slight elevation increase

Signature Drag
	•	Smooth snap-to-canvas feel
	•	No jitter

Reject Modal
	•	Soft fade + slight upward motion

Completion State
	•	Gentle fade-in confirmation banner
	•	No confetti (institutional tone)

⸻

Voice & Tone

Personality
	•	Professional
	•	Respectful
	•	Clear
	•	Calm

Never sarcastic. Never playful.

⸻

Microcopy Examples

Onboarding
“Upload your document and define the approval order.”

Success
“Document approved successfully.”

Rejection
“This document was not approved. Please review the comments and resubmit.”

No blame language.

⸻

System Consistency

Repeating Patterns
	•	Single primary action per screen
	•	Status chip always top-right
	•	Version number always near document title
	•	Audit log always collapsible at bottom

Style Anchors
	•	Linear-style dashboard clarity
	•	Apple-level spacing discipline
	•	shadcn/ui structural consistency

⸻

Accessibility Standards
	•	Semantic headings (H1–H4)
	•	Landmark regions (nav, main, aside)
	•	Keyboard-navigable signature selection
	•	Visible focus states (2px outline)
	•	ARIA roles for modals and drag components

Screen reader support required for:
	•	Status updates
	•	Approval state changes

Color must never be the sole indicator of status — always include text labels.

⸻

Emotional Audit Checklist

After each design iteration, validate:
	•	Does this screen feel calm under pressure?
	•	Does rejection feel informative, not punishing?
	•	Does approval feel satisfying but restrained?
	•	Would a Principal feel confident using this?

If not — simplify.

⸻

Technical QA Checklist
	•	Typography aligns to 8pt rhythm
	•	All color contrasts meet WCAG AA+
	•	Hover, active, and disabled states clearly distinct
	•	Motion remains within 150–300ms
	•	Drag placement remains precise across zoom levels

⸻

Adaptive System Memory

If future college applications are built:
	•	Reuse muted palette for institutional continuity
	•	Maintain approval flow layout consistency
	•	Keep status chip placement identical

Consistency builds trust.

⸻

Design Snapshot

⸻

🎨 Color Palette
	•	Primary Blue: #1E3A5F
	•	Deep Slate: #2F3E46
	•	Light Gray: #F4F6F8
	•	Surface White: #FFFFFF
	•	Success: #2E7D32
	•	Warning: #ED6C02
	•	Rejected: #C62828
	•	Info: #0288D1

⸻

🅰️ Typography Scale

Element	Size / Weight
H1	32px / 600
H2	24px / 600
H3	18px / 500
H4	16px / 500
Body	14px / 400
Caption	12px / 400

Line-height: 1.6
Grid system: 8pt

⸻

📐 Layout System
	•	3-column review layout
	•	8pt spacing grid
	•	Single primary CTA per screen
	•	Collapsible side panels on mobile

⸻

🧠 Emotional Thesis

This platform feels structured, respectful, and calm — like a well-run institution that values clarity over noise.

⸻

Design Integrity Review

The emotional intent (calm authority + kindness) aligns strongly with the technical structure (clear hierarchy, single-action screens, restrained motion). The system avoids over-celebration and maintains institutional professionalism.

Improvement Suggestion

Introduce subtle contextual guidance tooltips for first-time users to reduce onboarding hesitation without cluttering the interface.

