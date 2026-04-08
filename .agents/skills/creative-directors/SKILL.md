---
name: creative-directors
description: Launch specialist creative director agents that independently pitch ideas, then collaborate to synthesize the best concept. For video, design, branding, and product creative work.
metadata:
  tags: creative, agents, collaboration, video, design, branding, remotion
---

## When to use

Use this skill when the user wants to brainstorm creative concepts through multiple specialist perspectives. Ideal for:
- Planning a new video (Remotion, promo, demo, hero reel)
- Designing a new landing page or marketing asset
- Exploring brand directions or campaign concepts
- Any creative task that benefits from diverse expert opinions

## How it works

### Phase 1: Brief (User + Coordinator)
Gather the creative brief from the user. What are we making? Who is it for? What's the vibe? Any constraints (duration, platform, tech stack)?

### Phase 2: Independent Pitches (4 Parallel Agents)
Launch 4 specialist directors as background agents. Each writes their pitch to `.agents/pitches/`. Directors do NOT see each other's work during this phase.

**The Directors:**

1. **3D Visual Director** — Cinematic visuals, lighting, materials, camera work, Three.js/R3F techniques. Thinks in terms of Apple keynotes and luxury product films.

2. **Motion Design Director** — Animation timing, spring physics, transitions, pacing. Thinks in rhythm — build, drop, breathe, crescendo. Specifies exact spring configs and interpolate values.

3. **Brand Storytelling Director** — Narrative arc, copy, emotional hooks, on-screen text. Focuses on the scroll-stopping moment and the emotional journey that converts viewers.

4. **UX/Product Demo Director** — Feature showcase strategy, UI presentation, money shots. Knows which features to highlight and how to make the product itself the star.

**Each pitch must include:**
- A creative concept name
- Scene-by-scene breakdown with timing
- Their specialty's specific technical recommendations
- The single "wow moment" they'd fight hardest to keep
- What they'd cut if we only had 15 seconds

### Phase 3: Roundtable (Coordinator Agent)
Launch a coordinator agent that:
1. Reads all 4 pitches from `.agents/pitches/`
2. Identifies overlapping ideas (consensus = strong signal)
3. Identifies unique gems from each director
4. Flags any conflicts between pitches
5. Writes a **unified production plan** to `.agents/pitches/FINAL-PLAN.md`

The unified plan must include:
- Combined scene-by-scene breakdown
- Which director's idea won for each scene (with reasoning)
- Technical implementation notes (specific to the tech stack)
- Asset requirements (3D models, textures, fonts, audio)
- Open questions for the user

### Phase 4: User Review
Present the final plan to the user. Get approval or iterate.

## Context to always include

When launching directors, always provide them with:
- Current brand guidelines (colors, fonts, logo, taglines)
- Existing asset inventory (what's already built)
- Tech stack capabilities and constraints
- Target platform and duration
- The user's stated goal and vibe

Read from project memory (MEMORY.md) and the current codebase to populate this context automatically.

## Pitch file format

Each director writes to `.agents/pitches/{role}.md` using this structure:

```markdown
# {Role} Pitch: {Concept Name}

## Concept
One paragraph elevator pitch.

## Scene Breakdown
| Time | Scene | Details |
|------|-------|---------|
| 0-3s | ... | ... |

## Technical Recommendations
- Specific to this director's domain

## The "Wow Moment"
The single thing I'd fight hardest to keep.

## 15-Second Cut
If we only had 15 seconds, here's what survives.

## Wild Card
One ambitious idea that might be too much but would be incredible if pulled off.
```

## Adapting the roster

The 4 default directors work well for video/animation projects. For other creative tasks, swap directors as needed:

- **Website redesign**: Replace 3D Visual with Information Architect, replace Motion with Interaction Designer
- **Brand campaign**: Replace UX/Product with Social Media Strategist, replace 3D Visual with Art Director
- **App onboarding**: Replace Brand Storytelling with Behavioral Psychologist, replace 3D Visual with Illustration Director

## Tips
- Let directors be bold — the coordinator's job is to ground things
- Consensus across 3+ directors = definitely include it
- If one director has a unique idea no one else thought of, that's often the most valuable contribution
- The user has final say — the plan is a recommendation, not a mandate
