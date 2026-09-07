from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from pathlib import Path
from typing import Union

def build_pdf(output_path: Union[str, Path]) -> Path:
    pdf_path = Path(output_path)
    doc = SimpleDocTemplate(str(pdf_path), pagesize=A4,
                            rightMargin=50, leftMargin=50,
                            topMargin=50, bottomMargin=50)
    styles = getSampleStyleSheet()

    brand_dark = HexColor("#1F2937")
    brand_gray = HexColor("#F3F4F6")
    brand_text = HexColor("#374151")

    styles.add(ParagraphStyle(name="CoverTitle", fontName="Helvetica-Bold", fontSize=28, textColor=brand_dark, alignment=1, spaceAfter=14, leading=34))
    styles.add(ParagraphStyle(name="CoverSub", fontName="Helvetica", fontSize=13, textColor=brand_text, alignment=1, spaceAfter=8, leading=17))
    styles.add(ParagraphStyle(name="SectionTitle", fontName="Helvetica-Bold", fontSize=16, textColor=brand_dark, spaceAfter=10, leading=20))
    styles.add(ParagraphStyle(name="SubTitle", fontName="Helvetica-Bold", fontSize=12, textColor=brand_dark, spaceAfter=6, leading=15))
    styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=10, textColor=brand_text, spaceAfter=8, leading=14))
    styles.add(ParagraphStyle(name="BrandBullet", fontName="Helvetica", fontSize=10, textColor=brand_text, leftIndent=12, spaceAfter=4, leading=14))
    styles.add(ParagraphStyle(name="Boxed", fontName="Helvetica", fontSize=10, textColor=brand_text, backColor=brand_gray, borderPadding=10, leading=14, spaceAfter=10))

    story = []

    # Cover
    story.append(Spacer(1, 2.5*inch))
    story.append(Paragraph("5 LinkedIn Templates<br/>That Get 100+ Likes", styles["CoverTitle"]))
    story.append(Spacer(1, 0.2*inch))
    story.append(Paragraph("Proven templates used by founders, coaches, and creators to post faster and grow faster.", styles["CoverSub"]))
    story.append(Spacer(1, 0.4*inch))
    story.append(Paragraph("A free guide from <b>BrandOps</b>", styles["CoverSub"]))
    story.append(Paragraph("brandops.site", styles["CoverSub"]))
    story.append(PageBreak())

    story.append(Paragraph("What's inside", styles["SectionTitle"]))
    story.append(Paragraph("These 5 templates are designed for founders, solopreneurs, coaches, and content creators who want to post consistently on LinkedIn without spending hours staring at a blank screen.", styles["Body"]))
    story.append(Paragraph("Each template gives you:", styles["Body"]))
    for item in ["A simple formula you can copy", "A real example that worked", "Tips to customize it for your niche", "A realistic engagement expectation"]:
        story.append(Paragraph(f"• {item}", styles["BrandBullet"]))
    story.append(Paragraph("Use them today. Post today. See the difference this week.", styles["Body"]))
    story.append(Spacer(1, 0.2*inch))

    def add_template(title, formula, example, why, best, tips):
        story.append(Paragraph(title, styles["SectionTitle"]))
        story.append(Paragraph("Formula", styles["SubTitle"]))
        story.append(Paragraph(formula.replace("\n", "<br/>"), styles["Boxed"]))
        story.append(Paragraph("Example", styles["SubTitle"]))
        story.append(Paragraph(example.replace("\n", "<br/>"), styles["Boxed"]))
        story.append(Paragraph("Why it works", styles["SubTitle"]))
        story.append(Paragraph(why, styles["Body"]))
        story.append(Paragraph("Best for", styles["SubTitle"]))
        story.append(Paragraph(best, styles["Body"]))
        story.append(Paragraph("Tips", styles["SubTitle"]))
        for tip in tips:
            story.append(Paragraph(f"• {tip}", styles["BrandBullet"]))
        story.append(Spacer(1, 0.15*inch))

    add_template(
        "Template #1: The Personal Story",
        "I used to [struggle / mistake].\n\nMost people [common approach]. I did too.\n\nThen I realized [key insight].\n\nNow I [new approach]. Results: [specific outcome].\n\nThe lesson: [one key takeaway].",
        "I used to spend 6 hours per LinkedIn post.\n\nMost people use generic templates. I did too.\n\nThen I realized: people don't care about perfect posts. They care about REAL stories.\n\nNow I write posts in 20 minutes. My engagement is 3x.\n\nThe lesson: authenticity beats polish.",
        "People connect with vulnerability. A clear before-and-after makes the story believable and relatable.",
        "Building personal brand, showing transformation, establishing thought leadership.",
        ["Use specific numbers, not vague words like 'many' or 'lots.'", "Make the struggle real.", "Show a clear before and after.", "End with one actionable insight."]
    )

    add_template(
        "Template #2: The Question Hook",
        "[Surprising question]?\n\nMost people say [common answer].\n\nBut the real answer is [counterintuitive truth].\n\nHere's why:\n- [Reason 1]\n- [Reason 2]\n- [Reason 3]\n\nWhat would you say?",
        "Does working 80-hour weeks make you successful?\n\nMost people say yes.\n\nBut the real answer is NO.\n\nHere's why:\n- Burnout kills productivity\n- Sleep deprivation ruins decisions\n- You miss what matters (family, health)\n\nThe most successful people I know? They work 20-30 focused hours a week.\n\nWhat would you say?",
        "Questions spark immediate engagement. A contrarian answer invites discussion.",
        "Thought leadership, community building, driving conversations.",
        ["Ask a question that challenges common wisdom.", "Give 2-3 clear reasons for your take.", "End with an open question so people comment."]
    )

    add_template(
        "Template #3: The Mini-Thread",
        "[Number] mistakes I made [doing X]:\n\n1) [Mistake 1]\n→ [How I fixed it]\n\n2) [Mistake 2]\n→ [How I fixed it]\n\n3) [Mistake 3]\n→ [How I fixed it]\n\n4) [Mistake 4]\n→ [How I fixed it]\n\n5) [Mistake 5]\n→ [How I fixed it]\n\nAvoid these. You'll save [time / effort / money].",
        "5 mistakes I made building my email list:\n\n1) I sent too many emails\n→ I switched to 1 email a week. Opens doubled.\n\n2) I wrote salesy subject lines\n→ I switched to curiosity-driven subjects. Opens tripled.\n\n3) I sent from a corporate email\n→ I switched to a personal email. Response rate 5x.\n\n4) I only sold my product\n→ I started sharing free tips. Sales quadrupled.\n\n5) I ignored analytics\n→ I tracked opens, clicks, and conversions. Revenue 10x.\n\nAvoid these. You'll save 2 years of learning.",
        "People love learning from mistakes. The format is scannable and highly shareable.",
        "Educational content, establishing expertise, giving practical tips.",
        ["Use real metrics.", "Make the mistakes relatable.", "Show cause and effect clearly.", "Promise a time or effort saving."]
    )

    add_template(
        "Template #4: The Case Study",
        "[Name] wanted [goal].\n\nProblem: [specific challenge]\n\nSolution: [what they did]\n\nResults: [specific outcome with numbers]\n\nThe key: [one insight that made the difference]\n\nInterested in similar results?",
        "Sarah wanted to grow her LinkedIn audience.\n\nProblem: Posts took 6 hours each. She had 2,000 followers.\n\nSolution: She used content templates + BrandOps automation.\n\nResults: 3 months later, 8,000 followers. Posts took 20 minutes.\n\nThe key: Consistency beats perfection. She posted 3x more frequently.\n\nInterested in similar results? DM me.",
        "Concrete proof with numbers makes the outcome believable.",
        "Sales pitches, product validation, building credibility.",
        ["Use real numbers and timeframes.", "Make the problem specific.", "Show transformation clearly.", "Include a CTA at the end."]
    )

    add_template(
        "Template #5: The Trend Take",
        "[News / Trend] is happening.\n\nWhat most people think: [common take]\n\nWhat I think: [contrarian take]\n\nWhy: [reasoning]\n\nThis matters because [impact]",
        "Everyone's talking about ChatGPT.\n\nWhat most people think: 'It will replace writers.'\n\nWhat I think: 'It will replace bad writers.'\n\nWhy: AI is great at generating content. It's terrible at creating truth.\n\nThis matters because: writers who can think critically will thrive. The rest will be automated.",
        "Timely topics get shared. Contrarian takes spark debate.",
        "Trending topics, unique perspective, viral potential.",
        ["Reference a current trend.", "Go against conventional wisdom, but back it up.", "Provide solid reasoning.", "Make it shareable."]
    )

    story.append(Paragraph("How to customize any template", styles["SectionTitle"]))
    for step in ["Pick ONE template.", "Replace the bracketed placeholders with your own facts.", "Add one personal detail or number.", "Remove any fluff.", "Read it out loud. If it sounds robotic, rewrite it."]:
        story.append(Paragraph(f"• {step}", styles["BrandBullet"]))
    story.append(Paragraph("The templates are starting points. Your voice is the differentiator.", styles["Body"]))

    story.append(Paragraph("Ready to automate this?", styles["SectionTitle"]))
    story.append(Paragraph("These templates help you write faster. BrandOps helps you do the rest:", styles["Body"]))
    for item in ["Research the topic", "Write the post", "Design the carousel", "Prepare the newsletter"]:
        story.append(Paragraph(f"• {item}", styles["BrandBullet"]))
    story.append(Paragraph("You review. You publish. From idea to live post in 30 minutes.", styles["Body"]))
    story.append(Paragraph("Try BrandOps free for 14 days — no credit card needed.", styles["SubTitle"]))
    story.append(Paragraph("https://brandops.site/trial", styles["Body"]))

    doc.build(story)
    return pdf_path

if __name__ == "__main__":
    out = Path(__file__).resolve().parent.parent / "assets" / "5-linkedin-templates.pdf"
    path = build_pdf(out)
    print(f"PDF created: {path}")
    print(f"File size: {path.stat().st_size} bytes")
