---
name: Geoffrey Adam Tomagan
description: A one-page developer portfolio whose dark navy ground continues the studio backdrop of his portrait.
colors:
  night: "#090C18"
  deep: "#0E1324"
  fg: "#ECEEF4"
  mute: "#9AA3BA"
  rule: "rgba(236, 238, 244, .16)"
  blue: "#4D8DFF"
  blue-ink: "#07122B"
typography:
  name:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "8.5vw"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(44px, 7vw, 96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 84px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(26px, 3.3vw, 50px)"
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(24px, 2.6vw, 38px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  item:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(19px, 1.7vw, 25px)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(17px, 1.4vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(16px, 1.25vw, 18px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  media: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 2.8vw, 40px)"
  section: "clamp(96px, 13vw, 190px)"
  block: "clamp(40px, 6vw, 80px)"
  nav: "76px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-line-hover:
    backgroundColor: "transparent"
    textColor: "{colors.blue}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  text-link:
    textColor: "{colors.fg}"
  text-link-hover:
    textColor: "{colors.blue}"
  nav:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    typography: "{typography.label}"
    height: "{spacing.nav}"
    padding: "0 {spacing.gutter}"
  index-row:
    textColor: "{colors.fg}"
    padding: "12px 0"
  index-row-hover:
    textColor: "{colors.blue}"
    padding: "12px 0"
  shot:
    backgroundColor: "{colors.deep}"
    rounded: "{rounded.media}"
  fact-row:
    textColor: "{colors.fg}"
    typography: "{typography.label}"
    padding: "11px 0"
---

# Design System: Geoffrey Adam Tomagan

## Overview

**Creative North Star: "The Studio Backdrop"**

The page is the photograph, continued. The ground is the dark navy of the studio backdrop behind the portrait, so the picture has no edge: it is feathered on its sides and top and fades out below the chest, and the page simply carries on in the same colour. Everything else is set directly on that ground. There are no panels, no tinted sections and no second surface colour behind text.

The voice is one typeface at two extremes. Geist is set very large and tight for the name, the section headings and the project titles, and small and quiet for everything that explains them. Structure comes from hairline rules and from space, never from boxes. One azure is the only colour that is not navy or cool white, and it marks things you can act on.

The site is a single dark theme by design, because a light ground would cut the portrait out of its own backdrop. Motion follows the same restraint: lines rise from behind a mask, things ease out and settle, and all of it switches off under reduced motion.

**Key Characteristics:**
- One ground colour for the whole page, taken from the portrait's backdrop.
- One typeface, Geist, at very large display sizes and small text sizes with little in between.
- Hairline rules (1px, 16% cool white) separate rows; nothing is boxed.
- One azure accent, reserved for actions and their hover states.
- Two radii only: pills for controls, 6px for media.
- Real screenshots are the only large light areas on the page.

## Colors

A near-black navy ground, cool white type, one grey-blue for secondary text and a single saturated azure.

### Primary
- **Azure** (`blue`): the one accent. It fills the primary button, is the hover colour for every link, outlined button and index row, draws the focus ring, tints the text selection, and sets the one-line project kind beside each project title. It sits at 6.1:1 on the ground.
- **Azure Ink** (`blue-ink`): the text colour on azure fills only (5.8:1). It is never used as a surface.

### Neutral
- **Backdrop Night** (`night`): the page ground, the scrollbar track, and the opaque background of each pinned project so it can cover the one beneath it.
- **Deep Navy** (`deep`): the placeholder behind a screenshot while it loads. It is not a panel colour.
- **Cool White** (`fg`): all primary text, at 16.8:1 on the ground.
- **Slate Mute** (`mute`): secondary text, captions, dates, fact labels and the second half of the hero intro line, at 7.7:1.
- **Hairline** (`rule`): every divider and the 1px ring around a screenshot.

The outlined button uses the same cool white at 45% for its border and text links use it at 40% for their underline; both are alpha steps of `fg`, not new colours.

### Named Rules
**The One Ground Rule.** Every section sits on Backdrop Night. A section never gets its own background, tint or gradient wash; separation is a hairline or space.

**The Azure Means Action Rule.** Azure appears on things you can press or have just hovered, plus the project kind line. It is never used for decoration, large fills or body text.

## Typography

**Display Font:** Geist (variable, 300 to 700, self-hosted; falls back to ui-sans-serif, system-ui)
**Body Font:** Geist

**Character:** One grotesque doing two jobs. Large lines are weight 600, tracked tight (-0.04em) and leaded under 1, so they read as solid shapes. Small text is weight 400 or 500 at natural tracking and stays out of the way.

### Hierarchy
- **Name** (600, 8.5vw, line-height 0.9, -0.04em): the full name on one line across the viewport, in the hero and again as the footer mark. Below 960px it becomes 14.5vw, left-aligned, and wraps to three lines.
- **Display** (600, clamp(44px, 7vw, 96px), 0.98, -0.04em, balanced wrapping): one per section, as the section heading.
- **Headline** (600, clamp(40px, 5.4vw, 84px), 0.95, -0.04em): project titles.
- **Statement** (500, clamp(26px, 3.3vw, 50px), 1.22, -0.03em): the single About statement. The contact email uses the same weight at clamp(21px, 4.6vw, 68px).
- **Title** (500, clamp(24px, 2.6vw, 38px), 1.1, -0.025em): entry headings in a ruled list, such as each education entry.
- **Item** (500, clamp(19px, 1.7vw, 25px), 1.25, -0.015em): the entries of a plain list, such as skills.
- **Lead** (400, clamp(17px, 1.4vw, 20px), 1.5, Slate Mute, max 46ch): the one sentence under a section heading. The hero intro and index names share this size.
- **Body** (400, clamp(16px, 1.25vw, 18px), 1.55, max 46ch): project descriptions. Supporting paragraphs are 17px at 1.6 in Slate Mute, max 56ch.
- **Label** (500 in navigation and column headings, 400 in fact rows; 15px): navigation, fact rows, list column headings, footer.
- **Caption** (400, 14px, Slate Mute): figure captions and the kind beside each hero index name.

Dates use tabular numerals.

### Named Rules
**The Two Extremes Rule.** A line of type is either a tight display line (weight 600 or 500, negative tracking, line-height at or under 1.25) or quiet text between 14px and 20px. Weight 700 and weight 300 are loaded but unused; no text is set in uppercase and nothing is letter-spaced wider than normal.

**The Sentence Case Rule.** Every heading, label and button is written in sentence case.

## Layout

Full-bleed with a fluid side gutter (clamp(16px, 2.8vw, 40px)); there is no maximum content width. Sections are separated by a large fluid top padding (clamp(96px, 13vw, 190px)), and the gap between a section heading and its content is clamp(40px, 6vw, 80px). A heading and its lead sit 20px apart.

Grids are asymmetric two-part splits on twelfths: 8/4 for a project (media, then text), 4/8 for About (photo, then statement), 3/9 for a dated list (date, then entry). Skills is four equal columns. Fact rows use a fixed 96px label column.

The hero is one viewport (100svh, between 680px and 1100px). The portrait is centred at 4:5 and nearly full height; the intro sits at the left gutter and the project index at the right gutter, both 22% from the top; the name crosses the full width over the portrait's lower fade; a status line and the contact button close the bottom edge. The navigation is fixed, 76px tall, and steps out of the way while scrolling down.

Each project fills one viewport and pins (sticky) while the next slides over it; the covered one scales to 0.94 and dims to 25%. Pinning only happens at 960px wide and above 700px tall. In shorter windows and below 960px nothing pins, so every link stays reachable.

Below 960px everything becomes one column: the portrait goes full width with the name pulled up over its fade, project grids stack with 24px gaps, skills go to two columns, and dated rows stack. Below 520px skills go to one column and the fact label column narrows to 84px.

## Elevation & Depth

Flat. There are no drop shadows anywhere. The only `box-shadow` in the system is a 1px ring in the hairline colour around screenshots, which is a border, not a shadow.

Depth comes from three things instead: the portrait dissolving into the ground through a two-axis mask; overlap, where each pinned project physically covers the last on an opaque ground; and dimming, where the covered project and the scrolled-away portrait lose opacity. The navigation is white text with `mix-blend-mode: difference` and no bar behind it, so it stays readable over the portrait and over light screenshots without a surface of its own.

### Named Rules
**The No Surface Rule.** Nothing floats. If something needs to be in front, it covers what is behind it edge to edge on Backdrop Night; it does not get a shadow, a blur or a raised panel.

## Shapes

Two radii. Everything you can press is a full pill (999px): both buttons and the skip link. Every piece of media has gently eased corners (6px): screenshots and the About photo. The hero portrait has no corners at all because its edges are masked away.

Dividers are 1px hairlines drawn above a row (`border-top`), so a list opens with a rule and has none after its last row. Screenshots carry the same hairline as a ring. The focus indicator is a 2px azure outline offset by 4px.

## Components

### Buttons
Calm and exact: a pill that lifts slightly, with no fill animation.
- **Shape:** full pill (999px), 13px by 26px padding, 16px weight 600, 1px border.
- **Primary:** azure fill and border with Azure Ink text. Used for the one contact action in a view (Contact in the hero, Copy email in the contact section).
- **Line:** transparent, Cool White text, border in Cool White at 45%. Used for a project's main outbound action and for secondary contact links.
- **Hover / Active:** both rise 2px over 0.25s on the house ease; the line button's border and text turn azure. Pressed scales to 0.98.

### Text links
Cool White with a 1px underline at 40% opacity, offset 5px. On hover the text and underline turn azure over 0.3s. Used for the secondary action beside a button and for links inside prose.

### Navigation
Fixed, 76px tall, name at the left and three section links at the right, 15px weight 500 (14px below 960px). White text blended with `difference`, no background. Links draw a 1px underline from the left on hover. The bar slides up out of view when scrolling down past 300px and returns on any upward scroll or when it has keyboard focus.

### Index rows
A ruled list of links: name at the left (weight 500, Lead size), kind at the right (Caption), 12px vertical padding, hairline above each row. On hover the row turns azure and the name slides 8px to the right.

### Screenshot frame
A 6px-cornered frame with a hairline ring and a Deep Navy placeholder, holding a real, uncropped-at-the-top screenshot at 16:10 or 16:9. A one-sentence caption in Caption style sits 12px below and says what the picture is. A project with several screens uses a three-frame arrangement: one wide frame above a narrow and a wide one.

### Project heading
The project title in Headline style with its kind on the same baseline at the far right, 17px in azure. Below 960px the kind drops under the title.

### Fact rows
A definition list: Slate Mute label in a fixed 96px column, value beside it, 15px, 11px vertical padding, hairline above each row.

### Dated list
Rows split 3/9: a Slate Mute date with tabular numerals, then a Title heading and one supporting line. 28px vertical padding, hairline above each row.

### Column list
A hairline, then a small Slate Mute heading (15px, weight 500), then entries in Item style 10px apart.

### Email line
The address set large (weight 500, clamp(21px, 4.6vw, 68px)) and allowed to break anywhere. On hover a 2px underline draws from the left over 0.6s and the text turns azure. The copy button beside it reports its result in a polite live region in Slate Mute.

### Motion
One easing for everything: `cubic-bezier(.16, 1, .3, 1)`. Section headings rise from behind a mask once, the first time they enter view (1.1s). The hero loads with the portrait settling from 1.06 scale, the name rising, and the intro, index and footer fading up 16px in a 90ms stagger. Scroll-linked motion is scrubbed and linear: the portrait drifts and dims, the name rises through it, the About statement brightens word by word. Hidden start states exist only after the script confirms it is running, and all motion is off under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep every section on Backdrop Night and separate content with a hairline or with space.
- **Do** use azure only for actions, hover states, focus, selection and the project kind line.
- **Do** make every control a full pill and every piece of media 6px-cornered.
- **Do** set headings tight and large in weight 600 or 500, and explanatory text between 14px and 20px.
- **Do** keep text columns to 46ch for leads and descriptions and 56ch for supporting lines.
- **Do** show real screenshots with a caption that says what they are.
- **Do** use the one house ease, and give every animated element a visible resting state without script and under reduced motion.
- **Do** keep pinned layouts behind the width and height conditions so no link becomes unreachable.

### Don't:
- **Don't** add a light theme or a section with its own background colour; the ground is the portrait's backdrop.
- **Don't** put content in cards, panels or raised surfaces.
- **Don't** add drop shadows, glows or blurs. The 1px ring on screenshots is the only box-shadow.
- **Don't** introduce a second accent colour or a second typeface.
- **Don't** use icons; every control is labelled in words.
- **Don't** set text in uppercase or with widened letter-spacing.
- **Don't** put a bar or fill behind the navigation.
- **Don't** give the hero portrait a frame, a border or a rounded crop; it dissolves into the ground.
