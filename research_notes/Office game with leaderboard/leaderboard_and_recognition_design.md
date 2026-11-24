# Leaderboard Design and Leadership-Recognition Systems for a Small Indian Tech-Office Game

Research date: 2026-11-24. Method: web search (about 25 queries). Full-text fetches were blocked by the session's network allowlist for blog.duolingo.com, scholarworks.iupui.edu (Jia et al. PDF), giesbusiness.illinois.edu and extranet.sioe.org. Many findings below therefore come from abstracts, search-result summaries and secondary write-ups. Confidence is flagged where that matters. "Evidence" means a peer-reviewed or controlled study. "Vendor" or "opinion" means a company's own claim or commentary.

## 1. Empirical research on leaderboard effects: who is motivated and who is demotivated

### Takeaway
Leaderboards act like an implicit "difficult goal": people aim for the top even when nobody tells them to. That works when people accept the goal and can see that it is reachable. Evidence of harm (lower intrinsic motivation, worse results for low-ranked or stereotyped groups) comes mostly from mandatory, high-stakes classroom setups. The best-supported mitigations are relative ("neighbourhood") views, hiding the bottom of the board, and consent.

### Cited Findings
**Leaderboards as goal-setting (evidence)**
- Landers, Bauer & Callan (2015/2017, *Computers in Human Behavior*), lab experiment with about 240 university participants doing a brainstorming task. Participants were randomly assigned to do-your-best, easy, difficult or impossible goals, plus a leaderboard showing initials and scores. A leaderboard alone motivated performance about as well as difficult or impossible goals, which suggests people implicitly aim for the top. Goal commitment moderated the effect, just as it does in goal-setting theory. — [UMN Experts record](https://experts.umn.edu/en/publications/gamification-of-task-performance-with-leaderboards-a-goal-setting/); [Landers blog summary](https://neoacademic.com/2015/09/30/gamification-works-a-lot-like-goal-setting)
- Landers (quoted): "by giving someone a leaderboard, they actually strive for the top of it even if you don't tell them to." — [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/people-love-games-but-does-gamification-work/)
- Design implication from goal-setting theory, which is the authors' framing: if the top looks impossible, people lose commitment to the goal. Bottom-ranked users facing an unreachable leader is exactly that failure case. — [UMN Experts](https://experts.umn.edu/en/publications/gamification-of-task-performance-with-leaderboards-a-goal-setting/)

**Negative effects (evidence, classroom)**
- Hanus & Fox (2015, *Computers & Education* 80:152–161), 16-week longitudinal classroom study, about 71 students. Badges were mandatory and combined with a leaderboard and coins. Compared with an otherwise identical non-gamified course, the gamified course showed lower intrinsic motivation, satisfaction and empowerment, and lower final exam scores. The authors suggest rewards undermining interest in already-interesting tasks (an overjustification-type effect) as one mechanism. — [PMC review summarising Hanus & Fox](https://pmc.ncbi.nlm.nih.gov/articles/PMC8916940); [dblp](https://dblp.org/rec/journals/ce/HanusF15)
- A 2023 systematic mapping of 87 papers found that badges, leaderboards, competition and points are the elements most often reported as causing negative effects. It also found gamification can be positive "when properly applied." — [arXiv 2305.08346](https://arxiv.org/abs/2305.08346?context=cs)
- Christy & Fox. Note the year: the paper is **2014**, not 2016 (*Computers & Education* 78:66–77, DOI 10.1016/j.compedu.2014.05.005). 80 female undergraduates took a math test in a virtual classroom after seeing one of three leaderboards: men dominating the top, women dominating the top, or a control. The study tested stereotype-threat versus social-comparison explanations. — [dblp](https://dblp1.uni-trier.de/rec/journals/ce/ChristyF14.html); [researchr](https://researchr.org/publication/ChristyF14/bibtex). I could not retrieve which condition produced which result (see Gaps).
- Sheffler & Cheung (2024): adolescents shown a virtual leaderboard that induced social comparison had dampened learning outcomes, while growth-mindset peer messaging improved outcomes. — [Springer, Social Psychology of Education](https://link.springer.com/content/pdf/10.1007/s11218-023-09850-7.pdf)

**Mixed or positive effects (evidence)**
- Ortiz-Rojas, Chiluiza & Valcke (2019), pretest–posttest quasi-experiment in an intro programming course (n = 89). The leaderboard condition significantly improved learning performance. Mediation through intrinsic motivation and self-efficacy was **not** confirmed. — [ESPOL PDF](https://www.cti.espol.edu.ec/sites/default/files/docs_pdf/Gamification%20through%20leaderboards_An%20empirical%20study%20in%20engineering%20education.pdf); [REDI record](https://redi.cedia.edu.ec/document/253969)
- Ortiz-Rojas et al. (2025, *Int. J. STEM Education*), leaderboards in a calculus course (n = 175). In qualitative data, students did **not** report more autonomy. Controlled-motivation themes were prevalent instead, meaning they felt pressured. — [DOAJ](https://doaj.org/article/c9c7fa2bd91e41e29d3a7f14e676c7fa)
- Jia et al. (CHI 2017), "Designing Leaderboards for Gamification: Perceived Differences Based on User Ranking, Application Domain, and Personality Traits" (pp. 1949–1960, DOI 10.1145/3025453.3025826). This was a survey of **perceptions**, not behaviour. Respondents preferred high ranks over middle or low ranks. A user's rank shaped how they perceived both the leaderboard and the app. Leaderboards were rated most favourably for fitness apps. According to a secondary summary, extroverted and agreeable people's motivation did not drop significantly when they were at the bottom. — [IUPUI ScholarWorks record](https://scholarworks.indianapolis.iu.edu/items/e2899582-c736-4f38-b1dc-a7a3c8324094); [Na & Han 2023, Internet Research](https://www.emerald.com/insight/content/doi/10.1108/intr-12-2021-0897/full/html). The personality claim is second-hand and should be verified.

**Absolute vs relative leaderboards and position effects (evidence, conflicting)**
- Bai et al. (2021), as summarised by Na & Han (2023). On an absolute board, the top third were more intrinsically motivated, but that did not translate into more engagement or performance. On a **relative** board, all positions were equally motivated and engaged, though learning outcomes still tracked position. — [Na & Han 2023](https://emerald.com/insight/content/doi/10.1108/INTR-12-2021-0897)
- Na (2023), crowdsourced image-tagging study: low-ranked participants reported **more** competitive effort and better retention than high-ranked ones. The author notes prior findings on position conflict. — [Emerald](https://www.emerald.com/intr/article/33/7/1/178330)
- HKU online-class study: in a relative-leaderboard group, peer pressure rose as middle and bottom students progressed. The authors recommend relative boards and limiting public display of bottom rankings. The snippet was partly garbled, so this needs a full-text check. — [HKU Hub PDF](https://hub.hku.hk/bitstream/10722/368255/1/content.pdf)
- Topcoder crowdsourcing quasi-experiment (LSE): relative scoring widened the gap, with top performers raising effort and bottom performers cutting it. — [LSE Research Online](https://researchonline.lse.ac.uk/id/eprint/115983)

**Consent and mandatory fun (evidence, workplace)**
- Mollick & Rothbard, "Mandatory Fun: Consent, Gamification and the Impact of Games at Work." Field experiment with 200+ salespeople at a tech company. Games increased positive affect when employees consented and **decreased** it when they did not. Performance did not clearly improve either way, and non-consenters performed slightly worse. A follow-up lab study found that legitimacy (the game is seen as fair and appropriate) and a sense of individual agency drive consent. — [SSRN 2277103](https://papers.ssrn.com/abstract=2277103); [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/gamification-powering-game/)
- Mollick (opinion): gamification puts a game on top of a task rather than redesigning it, and making fun mandatory undermines the fun. — [Wharton Knowledge](https://knowledge.wharton.upenn.edu/article/people-love-games-but-does-gamification-work/)

**Team vs individual (evidence)**
- Presslee, Richins, Saiy & Webb (2022), 12-week field study at six Canadian fast-food franchises. **Team-based** recognition increased engagement and effort and was linked to better customer-satisfaction scores and sales growth. — [IRF research summary PDF](https://theirf.org/wp-content/uploads/2024/09/2024_09_IRF-Academic_Research_In_Action.pdf)

### Inferences
- A "leadership board" for about 20–60 people is close to the classroom settings that produced negative results: small group, everyone visible, people know each other. Risk is highest when participation is mandatory and the board ranks a single global score.
- The most defensible design: opt-in or at least legitimised by staff input; a relative or neighbourhood view (show your rank plus or minus 2, and show the top 3 publicly); no public bottom-of-board; multiple categories so more people can "win" something; short resetting seasons so the top stays reachable (goal commitment).
- Team boards are a good complement to individual boards for hybrid staff, because they reduce direct face-to-face ranking.

### Gaps
- Christy & Fox (2014) results by condition could not be retrieved (journal full text blocked). Do not cite a direction of effect without checking.
- Jia et al. (2017) full text could not be fetched (host blocked), so no numeric results.
- Little peer-reviewed evidence specifically on opt-in versus anonymous leaderboards in workplaces. Mollick & Rothbard on consent is the closest.
- No study found on resetting or seasonal boards in workplaces specifically. Product evidence from Duolingo and Strava is below.

## 2. Design patterns from games and products (with published impact data)

### Takeaway
Successful products avoid one permanent global ranking. They use small cohorts with promotion and relegation (Duolingo), frequency-based "most consistent" titles in a rolling window (Strava Local Legends), capped and fraud-corrected reputation (Stack Overflow), multi-category tiers (Kaggle), and uncertainty-aware skill ratings (Glicko, TrueSkill). Published impact numbers are scarce and mostly vendor claims.

### Cited Findings
**Duolingo Leagues**
- Mechanics: weekly cohorts of about 30 learners ranked by XP earned that week, with 10 tiers from Bronze to Diamond. The top finishers are promoted and the bottom are demoted, one tier at a time. The week ends Monday at midnight UTC. Exact promotion and demotion cut-offs vary by tier, and fan sources conflict (for example, "top 20 promoted in Bronze" versus "top 15 in Silver"). — [Deconstructor of Fun teardown](https://duolingo.deconstructoroffun.com/mechanics/leagues); [We Got This Covered guide](https://wegotthiscovered.com/fyi/all-duolingo-leagues-explained/). Both are unofficial.
- Impact (conflicting, partly vendor): co-founder Luis von Ahn told TechCrunch "Leaderboards single-handedly increased the time that people spent on Duolingo by 20%." — [TechCrunch](https://techcrunch.com/?p=2145036). A LinkedIn growth teardown cites +17% learning time and 3x highly engaged learners. — [LinkedIn post](https://nl.linkedin.com/in/ervin-dobri). The two figures conflict, and I found no primary Duolingo source for 17%.
- Duolingo's own caveat: competitive features like Leagues can inflate raw time-on-app. This partly motivated its "Time Spent Learning Well" metric. Rebalancing XP so rewards track real learning effort added about +1.1M minutes/day (partial adjustment) and about +1.8M minutes/day (full adjustment). — [Duolingo blog: Time spent learning well](https://blog.duolingo.com/time-spent-learning-well) (via search snippet; fetch blocked)
- Known gaming problem: Duolingo leagues attract XP-farming and "cheating," for example grinding easy lessons. — [Yahoo News](https://malaysia.news.yahoo.com/duolingo-app-language-learning-why-165500197.html); qualitative case study of gamification misuse in Duolingo — [arXiv 2203.16175](https://arxiv.org/pdf/2203.16175)

**Strava Local Legends (launched June 2020)**
- The title goes to whoever completes a segment the **most times** in a rolling 90-day window, which rewards consistency rather than speed. Instead of a ranked list, others see a **histogram** of where their effort count falls relative to the Legend. Private activities don't count. It launched for subscribers in California and Colorado in June 2020, with full rollout planned for 15 July 2020. — [DC Rainmaker](https://dcrainmaker.com/2020/06/strava-legends-feature.html); [Cycling Weekly](https://cyclingweekly.com/news/latest-news/strava-unveil-new-segment-feature-that-lets-you-a-top-leaderboards-without-being-fastest-457564); [BikeRadar](https://www.bikeradar.com/news/strava-local-legend/)

**Stack Overflow reputation**
- At most **200 reputation per day** from votes. Accepted answers and bounties are exempt. The cap was introduced in 2008. — [Stack Internal help](https://support.stackenterprise.co/support/solutions/articles/22000294430-reputation-and-voting); [SO blog 2008](https://stackoverflow.blog/2008/12/31/daily-dose-of-daily-reputation-ca/)
- Anti-collusion: an automated daily script plus staff investigations reverse **serial voting** (repeated votes between the same users), shown as "voting corrected." — [Serial voting help](https://stackoverflowteams.com/help/serial-voting-reversed); [SO blog: Vote fraud and you](https://stackoverflow.blog/2008/12/23/vote-fraud-and-you/)

**GitHub contribution streaks**
- GitHub removed the current and longest streak counters in May 2016, saying the redesign "focuses on the work you're doing rather than the duration of your activity." — [The Next Web](https://thenextweb.com/news/github-streaks-dead-thank-the-sun-god)
- A natural-experiment study (Moldon et al., 2020) found long streaks were abandoned and became less common after removal. This shows how strongly a counter shapes behaviour. Critics had argued the graph "punishes healthy behaviour," for example by discouraging days off. — [arXiv 2006.02371](https://arxiv.org/abs/2006.02371); [freeCodeCamp](https://www.freecodecamp.org/news/dont-break-the-chain-why-github-s-streaks-will-be-sorely-missed-by-many-4fff90bc2a38/)

**Kaggle progression**
- Five tiers (Novice, Contributor, Expert, Master, Grandmaster), tracked separately for Competitions, Notebooks, Datasets and Discussions. The profile shows your highest tier in any category. Discussions: Expert takes 50 bronze medals; Master takes 50 silver and 200 total; Grandmaster takes 50 gold and 500 total (from a Packt book excerpt, possibly dated). — [Wikipedia](https://en.wikipedia.org/wiki/Kaggle); [Packt](https://www.packtpub.com/en-ar/product/developing-kaggle-notebooks-1-9781805128519/chapter/introducing-kaggle-and-its-basic-functions/kaggle-discussions)
- Scarcity: one source says 2,973 Masters and 612 Grandmasters out of about 23.29M accounts as of 2 April 2025. — [DataCamp](https://www.datacamp.com/blog/kaggle-competitions-the-complete-guide)

**Skill ratings (Elo, Glicko, TrueSkill)**
- Glicko gives each player a rating deviation (RD) that expresses uncertainty. New players start at 1500 with RD 350, so their rating moves fast at first. A known flaw: very active players' RD gets so small that real improvement barely shows. — [arXiv 2008.06787](https://arxiv.org/pdf/2008.06787)
- TrueSkill (Microsoft Research, used for Xbox Live matchmaking) models each player as a mean μ and uncertainty σ. This allows big early updates and small later ones, and identifies skill from few games. Ratings work for team and multiplayer matches. — [Microsoft Research TrueSkill](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- Adding new players to rating models is tricky and can degrade accuracy (PUBG study). — [arXiv 2008.06787](https://arxiv.org/pdf/2008.06787)

### Inferences
- For a small office: copy Duolingo's **cohort plus season** idea at small scale, for example monthly seasons with two or three divisions, or randomised squads of 5–8. Copy Strava's **"most consistent" title plus a histogram instead of a full ranking**. Copy Stack Overflow's **daily cap plus reciprocal-vote detection**. Copy Kaggle's **separate category tiers, best one shown**.
- A conservative rating such as μ − 2σ (TrueSkill-style) or a "provisional" tag keeps new joiners and interns from appearing at the top or bottom before their first few games settle. This is an inference from how the rating systems work.
- Duolingo's own Time-Spent-Learning-Well correction warns that points should reward the *intended* behaviour. Otherwise people farm the cheapest actions.

### Gaps
- No primary Duolingo source verified for the 17% or 20% figures, and the official leagues blog could not be fetched. No Strava impact numbers found.
- Xbox/Microsoft achievements and Fitbit friends boards were not researched in depth, for lack of tool budget.

## 3. Peer-to-peer recognition systems and research; making "leadership" measurable without a popularity contest

### Takeaway
Peer recognition is linked to retention and performance. The key design finding is from Evans, Presslee & Vandenberg (*The Accounting Review*, 2025): a public leaderboard of recognition **received** *reduces* helping, while a leaderboard of recognition **given** *increases* it. Commercial tools control abuse with scarce, expiring allowances, a public feed, and manager approval.

### Cited Findings
**Research**
- Evans, Presslee & Vandenberg, "Peer-to-Peer Recognition Leaderboards and Employee Proactive Helping Behavior," *The Accounting Review* 100(5):157–181 (2025), mainly lab experiments. Ranking employees by recognition **received** lowered proactive helping compared with no leaderboard. Ranking by recognition **given** raised it. Proposed mechanism: a "received" board makes coworkers question each other's motives for helping. A field experiment with a recognition-software vendor is under way. — [SUFE academic newsletter listing](https://academicnewsletter.sufe.edu.cn/info/414652); [CiteDrive abstract](https://www.citedrive.com/en/discovery/peer-to-peer-recognition-leaderboards-and-employee-proactive-helping-behavior); [Illinois Experts](https://experts.illinois.edu/en/publications/peer-to-peer-recognition-leaderboards-and-employee-helping-behavi/); [Gies news, Mar 2026](https://giesbusiness.illinois.edu/news/2026/03/26/peer-to-peer-recognition-leaderboards-givers-vs-receivers)
- Wang, "When Peer Recognition Backfires" (working paper, online experiment with 202 MTurk workers): publicly disclosed peer-recognition information can reduce later helping. — [U Waterloo PDF](https://uwaterloo.ca/ctr-sustainability-performance-management/sites/default/files/uploads/files/for_sendout_-_p2p_backfire_-_pei.pdf)
- Related: "To Ask or Not to Ask: The Effects of Broadly and Narrowly Adopted Peer-Recognition Systems on Help Seeking" (*Management Science*, DOI 10.1287/mnsc.2023.00318). Only the title and listing were found, not results. — [INFORMS](https://pubsonline.informs.org/doi/references/10.1287/mnsc.2023.00318)
- Bradler, Dur, Neckermann & Non, "Employee Recognition and Performance: A Field Experiment" (*Management Science*, DOI 10.1287/mnsc.2015.2291; IZA DP 8311, 2014). More than 300 workers hired for a 3-hour data-entry job. Unannounced thank-you cards after 2 hours raised later performance substantially, especially when given **exclusively to the top 3 of 8**. The gain was driven mainly by **non-recipients** (conformity to the apparent norm). Recipients did not slack off. — [ZEW](https://zew.de/PU69488-1); [EUR repository PDF](https://repub.eur.nl/pub/39189/2013-038.pdf)
- Castro, Ho & Mickeler, "Making Help Visible" (Jan 2026 working paper), an experiment on a workplace recognition program. The results could not be retrieved. — [SIOE 2026 PDF](https://extranet.sioe.org/uploads/sioe2026/castro-2026-01-07_977.pdf)
- Gallup × Workhuman (2024), tracking about 3,400 workers from 2022 to 2024: employees receiving "high-quality" recognition were **45% less likely to have left** and **65% less likely to be actively looking**. Only **22%** say they get the right amount of recognition. "High quality" means meeting Gallup and Workhuman's five pillars of strategic recognition. The data are correlational and partly self-reported. — [Gallup](https://www.gallup.com/workplace/650174/employee-recognition-low-gallup-workhuman.aspx); [NPR, Sept 2024](https://npr.org/2024/09/18/nx-s1-5113918/employee-praise-recognition-retention-gallup)

**Products (vendor or secondary)**
- **Bonusly**: an admin-set monthly giving allowance (minimum above 10 points), with custom rules by group; the highest matching rule applies. The main stated safeguard is social: all bonuses appear on a company-wide feed, so people "tend to be thoughtful." No published collusion detection was found. Users complain the allowance is small and points expire. — [Bonusly help: allowance](https://help.bonus.ly/en/articles/357159-setting-the-monthly-allowance); [Bonusly help: trust](https://help.bonus.ly/en/articles/439010-can-i-trust-my-employees-with-recognition); [G2 reviews](https://www.g2.com/products/bonusly-bonusly)
- **HeyTaco** (Slack/Teams): by default each user can give **5 tacos per day**. Tacos expire daily with no rollover, and admins can adjust the limit. Vendor rationale: "If someone has 10 tacos to give every day, the value of each of their taco is now diminished." — [HeyTaco docs](https://heytaco.com/docs/article/78-can-i-adjust-daily-taco-limits); [HeyTaco blog](https://blog.heytaco.com/why-peer-recognition-works)
- **Google peer bonus**: a small cash bonus, typically described as about $100 (a $175 example circulates), given by one Googler to another. Givers have a limited number per period (monthly or quarterly; sources differ), and the recipient's **manager must approve**. A Google manager is quoted as saying it was "very well done, but not widely used inside engineering." The sources are secondary or anecdotal. No primary source was found for "gThanks." — [Bonusly blog on Google](https://blog.bonus.ly/a-look-at-googles-peer-to-peer-bonus-system); [DEV Community](https://dev.to/rockandnull/glimpse-of-google-peer-bonuses-288c)
- **Zappos**: each employee can give one coworker bonus of $50 (or "up to $50") per month. Managers can't give one to, or receive one from, their direct reports. Recipients become eligible for a monthly "HERO" award (cape, parking spot, $150 gift card), chosen by executives. The sources date from 2012–2013. — [UN HR compilation PDF](https://hr.un.org/sites/hr.un.org/files/Private%20Sector%20Recognition%20and%20Rewards%20A%20Collection%20of%20Examples.pdf); [CustomerThink](https://customerthink.com/heroes_wanted_and_rewarded_zappos/)

### Inferences
- For the "leadership board," rank people publicly on **recognition given and help offered**, such as mentoring sessions logged or kudos given with a specific reason, rather than on kudos *received*. Show kudos received privately, or only as a milestone badge. This follows directly from Evans et al.
- Anti-popularity-contest mechanics drawn from the above: a scarce, expiring allowance (HeyTaco or Bonusly style); each kudos must name a behaviour category and include text; a public feed; manager or committee confirmation for high-value awards (Google style); hierarchy rules, such as no manager-to-direct-report cash (Zappos style); reciprocity caps and serial-voting detection, so A↔B pairs get diminishing returns (Stack Overflow style).
- Bradler et al. suggest that *exclusively* recognising a few top helpers each season, with reasons, motivates everyone else. This works best when the recognition is about behaviour rather than a raw score.

### Gaps
- No published data from Bonusly, HeyTaco or Workhuman on collusion rates or detection methods.
- "Microsoft Champions" programmes and Google "gThanks" specifics were not found in primary sources.

## 4. Leadership behaviour frameworks that can map to game points

### Takeaway
Two well-documented frameworks translate into observable, peer-nominatable behaviours: Google Project Oxygen (8, later 10, manager behaviours from 10,000+ observations) and Kouzes & Posner's Five Practices (backed by the LPI 360 tool). Both stress coaching, empowering others, communication, and recognising others. These suit mentoring, helping and initiative categories.

### Cited Findings
- **Google Project Oxygen** analysed 10,000+ manager observations (reviews, surveys, top-manager award nominations). The original 8 behaviours: is a good coach; empowers the team and does not micromanage; shows interest in team members' success and well-being; is productive and results-oriented; is a good communicator who listens and shares information; helps with career development; has a clear vision and strategy; has key technical skills to advise the team. Google later added 2 behaviours and revised #3 and #6, making 10. Teams with highly effective managers had better results, more happiness and lower turnover. — [BetterUp summary](https://betterup.com/blog/project-oxygen); [Google re:Work](https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers); [Inc. on the 10 behaviours](https://www.inc.com/justin-bariso/google-spent-a-decade-researching-what-makes-a-great-boss-they-came-up-with-these-10-things.html?cid=sf01002)
- **Kouzes & Posner, Five Practices of Exemplary Leadership** (research since 1983): Model the Way; Inspire a Shared Vision; Challenge the Process (innovation, learning from setbacks); Enable Others to Act (trust, sharing power); Encourage the Heart (recognising contributions, celebrating wins). It is operationalised in the Leadership Practices Inventory (LPI, a 360 tool). The authors claim data from 1.65M+ respondents; that is their own claim, not independently verified. — [Boise State](https://www.boisestate.edu/academics-deptchairs/home/resources-for-academic-leaders/new-academic-leaders-program/the-5-practices-of-exemplary-leadership/); [AFB summary](https://afb.org/node/18231); [Wikipedia: The Leadership Challenge](https://www.wikipedia.com/wiki/The_Leadership_Challenge)

### Inferences
- A possible mapping to recognisable categories, each with peer-nominatable evidence:
  - **Mentor/Coach** (Oxygen #1 and #6; Enable Others): pairing with an intern, a code-review walkthrough, a knowledge session.
  - **Helper/Unblocker** (Oxygen #3; Enable Others): answering questions, unblocking a teammate.
  - **Initiative/Challenger** (Challenge the Process): proposing or shipping an improvement, fixing a process.
  - **Communicator/Connector** (Oxygen #5): docs, demos, bridging remote and office staff.
  - **Encourager** (Encourage the Heart): giving specific, thoughtful kudos. This doubles as the "recognition given" metric that Evans et al. show increases helping.
- Because these are not manager-only behaviours, interns can earn them too. Mentoring and initiative are acts anyone can perform.

### Gaps
- No found study validating either framework *as game-point categories*. The mapping above is design inference.
- Servant-leadership measurement scales (for example, Liden's SL-28) were not researched for lack of tool budget.

## 5. Fairness and anti-gaming: point farming, collusion, favouritism, transparency, new joiners vs veterans

### Takeaway
Every successful system caps the easiest-to-farm signal, detects reciprocal patterns, and separates "volume" from "quality." Newcomer fairness comes from separate cohorts or seasons and from uncertainty-aware ratings, not from handicapping veterans' scores. Transparent rules (legitimacy) are also what makes employees consent to the game.

### Cited Findings
- Daily caps on vote-earned points (Stack Overflow, 200/day), with non-capped "quality" signals (accepted answers, bounties). — [Stack Internal help](https://support.stackenterprise.co/support/solutions/articles/22000294430-reputation-and-voting)
- Automated detection and reversal of serial or reciprocal voting. — [Stack Overflow help](https://stackoverflowteams.com/help/serial-voting-reversed); [SO blog: More voting anomalies](https://stackoverflow.blog/2009/03/21/more-voting-anomalies/)
- Scarce, expiring giving allowances (HeyTaco 5/day, no rollover; Bonusly monthly allowance). — [HeyTaco docs](https://heytaco.com/docs/article/78-can-i-adjust-daily-taco-limits); [Bonusly help](https://help.bonus.ly/en/articles/357159-setting-the-monthly-allowance)
- Manager approval for monetary peer bonuses (Google); excluding manager↔direct-report giving (Zappos). — [Bonusly blog on Google](https://blog.bonus.ly/a-look-at-googles-peer-to-peer-bonus-system); [UN HR compilation](https://hr.un.org/sites/hr.un.org/files/Private%20Sector%20Recognition%20and%20Rewards%20A%20Collection%20of%20Examples.pdf)
- Points that misalign with real value get farmed. Duolingo rebalanced XP toward real learning effort and created a "Time Spent Learning Well" metric because Leagues could inflate low-value time. — [Duolingo blog](https://blog.duolingo.com/time-spent-learning-well); misuse case study [arXiv 2203.16175](https://arxiv.org/pdf/2203.16175)
- Counters drive behaviour even when unhealthy. GitHub's streak removal changed developer activity patterns. — [arXiv 2006.02371](https://arxiv.org/abs/2006.02371)
- Consent depends on perceived **legitimacy** and **agency**, so transparent and co-designed rules matter. — [SSRN Mollick & Rothbard](https://papers.ssrn.com/abstract=2277103)
- Newcomers: Glicko and TrueSkill start new players with high uncertainty (Glicko RD 350) for fast, fair convergence. Integrating newcomers into rating models is a known accuracy problem. — [arXiv 2008.06787](https://arxiv.org/pdf/2008.06787); [Microsoft Research](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- Cohorts: Duolingo matches learners in 30-person weekly groups and moves them one tier at a time. A newcomer competes against similar-tier peers, not the global elite. — [Deconstructor of Fun](https://duolingo.deconstructoroffun.com/mechanics/leagues)
- Recency windows: Strava's rolling 90-day count lets newcomers become "Legend" without beating years of history. — [DC Rainmaker](https://dcrainmaker.com/2020/06/strava-legends-feature.html)

### Inferences
- Concrete rule set for the office game:
  - (a) A per-person daily or weekly cap on kudos given (3–5 per week for a group of about 30).
  - (b) Diminishing returns for the same giver→receiver pair within a season, for example the 1st kudos counts 1.0, the 2nd 0.5, then 0.
  - (c) Kudos must cite a behaviour category and a concrete example.
  - (d) A monthly calibration review by a rotating small panel, including at least one non-manager, before "Leader of the Season" titles are awarded. This counters favouritism while avoiding pure top-down bias.
  - (e) Publish the scoring rules openly.
  - (f) Monthly or quarterly seasonal resets plus an all-time "hall of fame" for veterans.
  - (g) A "Rookie" division or rookie-of-the-season award for interns and joiners in their first 90 days; or show joiners as "provisional" until they reach N events.
- Avoid scoring raw activity counts such as messages or commits. They are the cheapest to farm, as the Duolingo and GitHub cases show.

### Gaps
- No empirical study found comparing handicaps with separate rookie leagues in workplace games.
- No data found on collusion prevalence in small-company recognition tools.

## 6. Privacy and ethics of public ranking at work, including Indian legal and cultural considerations

### Takeaway
Public ranking only helps when people consent and see it as legitimate. Public "received" rankings and visible bottom ranks carry the clearest risk. In India, the DPDP Act 2023 (Rules notified November 2025) lets employers process employee data for employment purposes without consent. An *optional* office game sits arguably outside that "legitimate use," so explicit opt-in consent is prudent. High power distance (Hofstede: India scores 77) and face-saving norms argue against exposing low performers and against manager-dominated awards.

### Cited Findings
- Employees who didn't consent to a workplace game showed decreased positive affect and slightly worse performance. — [SSRN Mollick & Rothbard](https://papers.ssrn.com/abstract=2277103)
- Public disclosure of peer-recognition information can reduce helping. — [Wang working paper](https://uwaterloo.ca/ctr-sustainability-performance-management/sites/default/files/uploads/files/for_sendout_-_p2p_backfire_-_pei.pdf); [Evans et al. 2025](https://www.citedrive.com/en/discovery/peer-to-peer-recognition-leaderboards-and-employee-proactive-helping-behavior)
- Researchers recommend limiting public display of bottom-ranked people. — [HKU Hub](https://hub.hku.hk/bitstream/10722/368255/1/content.pdf)
- **India, DPDP Act 2023**: employment processing is a "legitimate use" under Section 7(i), so it doesn't need consent. Commentators stress the exemption is narrow and doesn't cover unrelated uses, which require consent. Work-efficiency monitoring may need consent. Whether contractors and interns count as "employees" for the exemption is debated. One commentator argues it covers only employees, not contractual hires. — [Chambers](https://chambers.com/articles/navigating-the-legitimate-use-exemption-for-employee-data-under-the-digital-personal-data-protection); [CPO Magazine](https://www.cpomagazine.com/data-protection/a-practical-guide-to-employee-data-protection-under-the-indias-dpdpa-2023/); [DLA Piper](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/india-key-employer-obligations-under-indias-new-data-protection-regime)
- The DPDP Rules 2025 were notified and brought into force on 13 November 2025, with staged compliance deadlines. — [Hogan Lovells](https://ca.hoganlovells.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-); [KPMG India](https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/12/dpdp-act-2023-and-dpdp-rules-2025-simplified.pdf); [EY India](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/pdf/2025/11/ey-india-dpdp-act-2023-and-rules-2025-pov.pdf). This is law-firm commentary; the official MeitY text was not checked.
- **Culture**: India scores 77 on Hofstede's Power Distance index against a world average of about 56.5, which is read as acceptance of hierarchy and top-down structure. One source cautions that Hofstede's PDI measured reported workplace practices, so it should be applied cautiously. — [UNC course material](https://ils.unc.edu/courses/2013_spring/inls285_001/materials/hofstede-s-cultural-attitudes-research-cultural-dimensions.pdf); [Medium summary of Hofstede Insights](https://medium.com/@kumarsaurav.031/dimensions-of-indian-culture-from-hofstede-insights-a46d23b5acc1)
- Indian workplace norms (consultancy guide, opinion): juniors often shield seniors from blunt bad news, conflict is handled indirectly, and promotions are often relationship-influenced. — [Rework business-culture guide](https://resources.rework.com/libraries/business-culture/business-culture-in-south-asia). This is low-authority, opinion-level material.

### Inferences
- In a high-power-distance office, an intern ranking above their manager can be awkward for both. Separate divisions (staff vs interns, or tenure bands), or team-based boards, reduce face-loss. Showing only the top N and the viewer's own rank avoids public shaming at the bottom.
- Favouritism fears are amplified where promotions are seen as relationship-driven. Transparent rules, peer and panel calibration, and a ban on manager→direct-report point awards protect legitimacy.
- Prudent compliance steps: run the game as **opt-in** with a clear notice of what data is shown and to whom; allow display pseudonyms or opt-out from public boards; never feed game scores into appraisals unless that is disclosed. Collecting explicit consent from interns is especially sensible given the ambiguity over contractors and interns. These are inferences, not legal advice.
- Hybrid fairness: in-office visibility can bias peer kudos toward people physically present. Async ways to give and earn recognition (Slack/Teams kudos, documented help) and checking the remote-vs-office recognition split each season would mitigate this. This is an inference; no source was found.

### Gaps
- No peer-reviewed study found specifically on workplace leaderboards or recognition in Indian companies, or on face-saving and public ranking in India.
- No SHRM India or Indian-company case study on gamified recognition was retrieved.
- Legal applicability of DPDP to interns and to a voluntary game is unresolved in the sources; it needs counsel review.
