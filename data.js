// ============================================================
// Free Knowledge Map — Finance · Quant · ML · AI
// Source: curated list (originally from the Knowledge Map post)
// Last original link check: 2026-08-17
// ============================================================

const KM = {

  meta: {
    title: "Free Knowledge Map",
    subtitle: "Finance · Investment · Quant · Trading · Financial Math · Econometrics · Portfolio · Microstructure · ML · AI",
    tagline: "รวม material คุณภาพที่เปิดให้เรียนฟรี — ส่วนใหญ่เป็นของ MIT, Stanford, Yale, NYU, Columbia, Berkeley, Caltech และงานที่อาจารย์ นักวิจัย หรือ practitioner เปิดให้เรียนเอง",
    lastCheck: "2026-08-17",
    recheck: "2026-08-23 (auto: 95 OK · 5 bot-blocked ใช้ได้บน browser จริง)",
    level: "Undergraduate → Master's → PhD coursework & research",
    note: "นี่คือ knowledge map ไม่ใช่ syllabus — ไม่ได้เรียงตามความยาก และไม่จำเป็นต้องเรียนทั้งหมด กระโดดไป track ที่เกี่ยวกับสิ่งที่ตัวเองทำได้เลย",
    selectionNote: "เลือก official university pages, author-hosted material, direct working-paper PDFs และ legal open resources ก่อน SSRN หรือ landing page ที่ต้อง login",
    source: {
      page: "JRT Desk พาXวย",
      platform: "เพจ Facebook",
      url: "https://www.facebook.com/share/1cjWfdGm39/?mibextid=wwXIfr",
      note: "ลิสต์หนังสือและคอร์สต้นฉบับรวบรวมและคัดสกรีนโดยเจ้าของเพจ — เว็บนี้นำมาจัดระเบียบเป็น knowledge map ให้ค้นหา/กรองได้ง่ายขึ้น"
    }
  },

  access: [
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", note: "ไม่ต้องสมัคร account ไม่ต้อง enroll เรียนตามเวลาตัวเองได้ หลาย course download ทั้ง course package ไว้อ่าน offline ได้ (บาง course แยก video/audio ออกจาก package ต้อง download แยก)" },
    { name: "edX", url: "https://www.edx.org/", note: "หลาย course มี free audit track แต่ audited course โดยทั่วไปไม่ได้ verified certificate และบาง feature ถูกจำกัดตาม course" },
    { name: "Coursera", url: "https://www.coursera.org/", note: "หลาย course มี free access บางรูปแบบ และมี Financial Aid สำหรับผู้เรียนที่จ่ายค่าเรียนไม่ไหว — aid ไม่ได้หมายถึง 100% waiver ทุก course อัตโนมัติ เช็คหน้า enrollment ของแต่ละ course โดยตรง" }
  ],

  tagMeta: {
    core:        { label: "Core",        hint: "ควรเรียนถ้าจะเอาสายนี้จริงจัง" },
    optional:    { label: "Optional",    hint: "มี value แต่ไม่จำเป็นสำหรับทุกคน" },
    reference:   { label: "Reference",   hint: "เก็บไว้เปิดเมื่อจำเป็น" },
    specialized: { label: "Specialized", hint: "สำหรับคนทำเรื่องนั้นสายตรง" },
    recommended: { label: "Recommended", hint: "แนะนำเป็นพิเศษ" },
    advanced:    { label: "Advanced",    hint: "ระดับลึก / เฉพาะทางมาก" }
  },

  sections: [

  // ============================ FOUNDATION ============================
  {
    id: "F", icon: "layers", accent: "#94a3b8",
    name: "พื้นฐานคณิตศาสตร์และสถิติ",
    th: "Foundation — Linear Algebra · Probability · Statistics",
    intro: "ข้ามได้ถ้ามีพื้นฐานอยู่แล้ว",
    groups: [
      {
        g: "Linear Algebra",
        items: [
          { title: "MIT 18.06SC: Linear Algebra", author: "Gilbert Strang", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "หนึ่งใน linear algebra courses ที่เหมาะกับ self-study มากที่สุดคลาสหนึ่ง",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/" }] },
          { title: "MIT 18.065: Matrix Methods in Data Analysis, Signal Processing, and Machine Learning", author: "Gilbert Strang", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "Bridge จาก linear algebra ไปสู่ PCA, data analysis, signal processing และ machine learning",
            note: "Core ถ้าจะไปทาง Quant / ML",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/" }] }
        ]
      },
      {
        g: "Probability",
        items: [
          { title: "MIT RES.6-012: Introduction to Probability", author: "John Tsitsiklis", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "Probability course ที่เข้าใจง่ายและเหมาะกับ self-study มาก",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/" }] },
          { title: "MIT 18.600: Probability and Random Variables", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "ถ้าอยากได้ probability course เต็มอีกแบบหนึ่ง",
            note: "ทางเลือก alternative ของ RES.6-012 (จัดเป็น Core ได้ถ้าใช้เป็น probability course หลัก)",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-600-probability-and-random-variables-fall-2019/" }] }
        ]
      },
      {
        g: "Statistics",
        items: [
          { title: "MIT 18.650: Statistics for Applications", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "MLE, hypothesis testing, regression, Bayesian statistics, PCA, GLM และ statistical inference",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/" }] }
        ]
      }
    ]
  },

  // ============================ TRACK A ============================
  {
    id: "A", icon: "briefcase", accent: "#60a5fa",
    name: "การลงทุน การประเมินมูลค่า และ Asset Pricing",
    th: "Investment, Valuation, Portfolio & Asset Pricing — เหมาะกับ investor, analyst, PM, allocator หรือคนที่อยากเข้าใจ valuation, expected return, risk, portfolio construction ให้ลึกขึ้น",
    groups: [
      {
        g: "Accounting & Core Finance",
        items: [
          { title: "MIT 15.511: Financial Accounting", provider: "MIT OCW", type: "course", tags: ["core", "optional"],
            desc: "Course เก่าแล้ว แต่ accounting mechanics พื้นฐานไม่ได้หมดอายุเร็วเหมือน empirical finance",
            note: "Core ถ้ายังอ่านงบไม่คล่อง / Optional ถ้ามี accounting background อยู่แล้ว",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-511-financial-accounting-summer-2004/" }] },
          { title: "MIT 15.401: Finance Theory I", author: "Andrew Lo", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "PV, fixed income, equities, forwards/futures, options, portfolio theory, CAPM/APT และ efficient markets",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/" }] },
          { title: "Yale ECON 251: Financial Theory", author: "John Geanakoplos", provider: "Yale OYC", type: "course", tags: ["core", "optional"],
            desc: "General equilibrium, collateral, leverage และ leverage cycle — มี value พอสมควรถ้าสนใจกลไกวิกฤตและผลของ leverage ต่อ asset prices",
            note: "Core / Optional ตามสาย",
            urls: [{ l: "Open Yale Courses", u: "https://oyc.yale.edu/economics/econ-251" }] },
          { title: "Yale ECON 252: Financial Markets", author: "Robert Shiller", provider: "Yale OYC", type: "course", tags: ["optional"],
            desc: "Financial institutions, banking, insurance, behavioral finance และ market structure ในภาพใหญ่",
            urls: [{ l: "Open Yale Courses", u: "https://oyc.yale.edu/economics/econ-252" }] }
        ]
      },
      {
        g: "Valuation",
        items: [
          { title: "Aswath Damodaran — Valuation & Corporate Finance (คอมพลีต)", author: "Aswath Damodaran", provider: "NYU Stern", type: "videos", tags: ["core"],
            desc: "Lectures ครบทั้ง valuation และ corporate finance พร้อม spreadsheets, valuation tools และ datasets ราย industry",
            note: "Core สำหรับ Fundamental / Valuation — ใช้เป็น framework และ reference มากกว่ายึด valuation philosophy ของใครคนหนึ่งเป็นกฎตายตัว เพราะสุดท้าย investor ต้องสร้าง judgment ของตัวเอง",
            urls: [
              { l: "Main page", u: "https://pages.stern.nyu.edu/~adamodar/" },
              { l: "Online classes", u: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/onlineclass.htm" },
              { l: "Valuation webcast", u: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastvalonline.htm" },
              { l: "Corporate Finance webcast", u: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastcfonline.htm" }
            ] },
          { title: "MIT 15.433: Investments", provider: "MIT OCW", type: "course", tags: ["reference"],
            desc: "Portfolio theory, CAPM/APT, market efficiency และ performance evaluation — ทฤษฎียังมีประโยชน์ แต่ empirical evidence ใน course อายุเยอะแล้ว",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-433-investments-spring-2003/" }] }
        ]
      },
      {
        g: "Asset Pricing",
        items: [
          { title: "John Cochrane: Asset Pricing", author: "John H. Cochrane", provider: "Author-hosted", type: "notes", tags: ["core"],
            desc: "Graduate/PhD material, lecture notes, problem sets และ reading lists",
            note: "Core สำหรับคนที่ต้องการเข้าถึงเรื่อง Asset Pricing จริงจัง",
            urls: [
              { l: "Asset Pricing page", u: "https://www.johnhcochrane.com/asset-pricing" },
              { l: "Teaching page", u: "https://www.johnhcochrane.com/teaching" }
            ] }
        ]
      },
      {
        g: "Empirical Asset Pricing & Data",
        items: [
          { title: "Ken French Data Library", author: "Ken French", provider: "Dartmouth Tuck", type: "data", tags: ["core"],
            desc: "Fama-French factors, industry portfolios และ portfolio datasets ระยะยาว",
            note: "Core research resource",
            urls: [{ l: "Data Library", u: "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html" }] },
          { title: "Open Source Asset Pricing", provider: "openassetpricing.com", type: "data", tags: ["core"],
            desc: "Replicated cross-sectional predictors และ control-like signals สำหรับตรวจสอบ research pipeline — อย่าใช้เป็นแค่แหล่ง factor ควรใช้เป็น laboratory สำหรับ replication, robustness และ falsification ด้วย",
            note: "Core สำหรับ Quant Equity / Factor Research",
            urls: [
              { l: "Main", u: "https://www.openassetpricing.com/" },
              { l: "Data", u: "https://www.openassetpricing.com/data/" },
              { l: "Code", u: "https://www.openassetpricing.com/code/" }
            ] },
          { title: "Jensen, Kelly & Pedersen: Is There a Replication Crisis in Finance?", provider: "NBER", type: "paper", tags: ["core"],
            desc: "Counterweight ต่อ literature ฝั่ง multiple testing และ false discoveries — ข้อสรุปเรื่อง factor replication ขึ้นกับ statistical framework และ assumptions เกี่ยวกับ distribution ของ true effects ด้วย ไม่ใช่แค่จำนวน tests",
            note: "Core สำหรับ Empirical Asset Pricing — ควรอ่านคู่กับ literature ฝั่ง multiple testing เพื่อเห็น evidence จากทั้งสองฝั่ง",
            urls: [
              { l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w28432/w28432.pdf" },
              { l: "Global factor dataset", u: "https://jkpfactors.com/" }
            ] },
          { title: "Open Source Bond Asset Pricing", provider: "openbondassetpricing.com", type: "data", tags: ["core", "optional"],
            desc: "เติมฝั่ง corporate bonds และ credit เข้าไป ไม่ให้ empirical research ทั้งหมดกลายเป็น equity-centric",
            note: "Core สำหรับ Credit / Fixed Income Quant · Optional สำหรับ Equity-only research",
            urls: [{ l: "Main", u: "https://openbondassetpricing.com/" }] },
          { title: "AQR Data Library", provider: "AQR", type: "data", tags: ["core"],
            desc: "Public datasets ที่เชื่อมกับงานวิจัยของ AQR เช่น value, momentum, quality, betting against beta, time-series momentum และ factor premia ข้าม asset classes",
            note: "Core research resource",
            urls: [{ l: "Datasets", u: "https://www.aqr.com/Insights/Datasets" }] }
        ]
      },
      {
        g: "Specialized: Credit Risk & Credit Derivatives",
        items: [
          { title: "Darrell Duffie: Credit Risk (research hub)", author: "Darrell Duffie", provider: "Stanford", type: "notes", tags: ["core", "reference"],
            desc: "รวมงานสำคัญเกี่ยวกับ defaultable bonds, credit spreads, credit swaps, correlated defaults, CDOs, counterparty risk และ credit-risk modeling",
            note: "Core / Reference สำหรับ Credit Specialist",
            urls: [{ l: "Credit Risk page", u: "https://web.stanford.edu/~duffie/credit" }] }
        ]
      }
    ]
  },

  // ============================ TRACK B ============================
  {
    id: "B", icon: "trend", accent: "#2dd4bf",
    name: "Quant Research, Derivatives และ Execution",
    th: "Quant Research, Trading, Derivatives & Execution — Financial mathematics, econometrics, research validation, optimization, risk, microstructure, execution, options & volatility",
    groups: [
      {
        g: "Financial Mathematics",
        items: [
          { title: "MIT 18.642: Topics in Mathematics with Applications in Finance (Fall 2024)", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "Bond mathematics, quantitative equity, PCA, portfolio construction, risk, volatility, Black-Scholes, stochastic processes และ ML",
            note: "ถ้าเลือก quant-finance course เพียงตัวเดียวจากทั้งหมด ตัวนี้เป็นตัวแรกๆ ที่ควรเริ่ม",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/" }] },
          { title: "MIT 18.S096: Topics in Mathematics with Applications in Finance (Fall 2013)", provider: "MIT OCW", type: "course", tags: ["reference"],
            desc: "เวอร์ชันเก่าของตระกูลเดียวกัน — lecture notes บางบทเขียนดีมาก เก็บไว้อ่านคู่กับรุ่นใหม่ได้",
            note: "ระวัง: 18.S096 เป็น special-subject number ที่ MIT นำกลับไปใช้กับวิชาอื่นได้ — เช็คหน้า course ให้แน่ใจว่าเป็นตัวที่ต้องการ",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/" }] },
          { title: "MIT 15.450: Analytics of Finance", provider: "MIT OCW", type: "course", tags: ["core"],
            desc: "Arbitrage pricing, stochastic calculus, derivatives, Monte Carlo, dynamic optimization และ financial econometrics",
            note: "Core สำหรับ Quant Finance",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/" }] },
          { title: "Foundations of Financial Engineering", author: "Martin Haugh", provider: "martin-haugh.github.io", type: "notes", tags: ["core"],
            desc: "Forwards, swaps, futures, options, martingale pricing, term structure, mean-variance/CAPM, stochastic calculus, Black-Scholes, credit modeling และ real options",
            note: "Core สำหรับ Derivatives / Financial Engineering",
            urls: [{ l: "Course notes", u: "https://martin-haugh.github.io/teaching/foundations-fe/" }] },
          { title: "Financial Engineering: Continuous-Time Models", author: "Martin Haugh", provider: "martin-haugh.github.io", type: "notes", tags: ["core", "optional"],
            desc: "Stochastic calculus, Black-Scholes, volatility surface, FX/quanto, local volatility, stochastic volatility และ jump-diffusion models",
            note: "Core สำหรับ Derivatives · Optional ถ้าไม่ได้ทำ derivatives",
            urls: [{ l: "Course notes", u: "https://martin-haugh.github.io/teaching/cts-time-models/" }] }
        ]
      },
      {
        g: "Financial Econometrics & Time Series",
        items: [
          { title: "Kevin Sheppard: Financial Econometrics (MFE notes)", author: "Kevin Sheppard", provider: "kevinsheppard.com", type: "notes", tags: ["core"],
            desc: "หนึ่งใน free resources ที่แนะนำมากที่สุดใน list นี้ — Sheppard เป็นผู้พัฒนา Python packages อย่าง arch และ linearmodels จึงเชื่อม theory กับ implementation ได้ดี",
            urls: [{ l: "Notes", u: "https://www.kevinsheppard.com/teaching/mfe/notes/" }] },
          { title: "MIT 14.384: Time Series Analysis", provider: "MIT OCW", type: "course", tags: ["core", "optional"],
            desc: "VAR, unit roots, persistent processes, structural breaks และ econometric theory",
            note: "Core สำหรับ time-series researcher · Optional ถ้างานไม่ได้ใช้ time series หนัก",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/14-384-time-series-analysis-fall-2013/" }] },
          { title: "Forecasting: Principles and Practice (3rd ed.)", author: "Hyndman & Athanasopoulos", provider: "otexts.com", type: "book", tags: ["reference"],
            desc: "Practical reference สำหรับ forecasting, time-series validation, ARIMA, dynamic regression และ forecast evaluation",
            urls: [{ l: "Read online", u: "https://otexts.com/fpp3/" }] },
          { title: "QuantEcon Lectures (Python)", author: "Thomas Sargent & John Stachurski", provider: "quantecon.org", type: "notes", tags: ["optional"],
            desc: "Computational economics, Markov processes, dynamic programming, numerical methods และ Python — Optional แต่ดีมาก",
            urls: [{ l: "Lectures", u: "https://python.quantecon.org/" }] }
        ]
      },
      {
        g: "Causal Inference",
        items: [
          { title: "Causal Inference: The Mixtape", author: "Scott Cunningham", provider: "mixtape.scunning.com", type: "book", tags: ["optional"],
            desc: "Regression discontinuity, instrumental variables, difference-in-differences, synthetic control, panel methods และ causal reasoning — มีประโยชน์เมื่อคำถามเปลี่ยนจาก 「X predict Y หรือไม่」 ไปเป็น 「X ทำให้ Y เปลี่ยนจริงหรือเปล่า」 prediction กับ causal identification เป็นคนละ objective และต้องใช้ research design คนละแบบ",
            note: "Optional แต่ high value สำหรับ empirical research",
            urls: [{ l: "Read online", u: "https://mixtape.scunning.com/" }] }
        ]
      },
      {
        g: "Research Validation, Multiple Testing & Backtest Selection",
        intro: "หมวดนี้สำคัญมาก — ไม่ใช่เพราะต้องเชื่อว่า financial research ส่วนใหญ่ผิด แต่เพราะยิ่งเรา search hypothesis, parameters, features, model space ได้กว้างขึ้น โอกาสเจอสิ่งที่ดูดีเพราะ noise ก็สูงขึ้นตามไปด้วย",
        outro: "หลักการสำคัญของหมวดนี้: Keep the full research path, not only the surviving strategy — รายละเอียดอยู่ใน checklist ด้านล่างของเว็บ",
        items: [
          { title: "Harvey & Liu: Backtesting", author: "Campbell Harvey, Yan Liu", provider: "Duke (author-hosted)", type: "paper", tags: ["core"],
            desc: "เข้าเรื่อง performance haircut หลังจากมี multiple tests โดยตรง — เหมาะกับ practitioner มาก",
            urls: [{ l: "PDF", u: "https://people.duke.edu/~charvey/Research/Published_Papers/P120_Backtesting.PDF" }] },
          { title: "Harvey, Liu & Zhu: …and the Cross-Section of Expected Returns", provider: "NBER", type: "paper", tags: ["core"],
            desc: "หนึ่งในงานหลักเรื่อง multiple hypothesis testing ใน asset pricing",
            urls: [{ l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w20592/w20592.pdf" }] },
          { title: "Bailey et al.: The Probability of Backtest Overfitting", provider: "Author-hosted (Bailey)", type: "paper", tags: ["core"],
            desc: "เสนอเรื่อง Probability of Backtest Overfitting (PBO) และ Combinatorially Symmetric Cross-Validation (CSCV)",
            urls: [{ l: "PDF", u: "https://www.davidhbailey.com/dhbpapers/backtest-prob.pdf" }] },
          { title: "Bailey & López de Prado: The Deflated Sharpe Ratio", provider: "Author-hosted (Bailey)", type: "paper", tags: ["core"],
            desc: "ปรับ Sharpe สำหรับ selection bias, multiple testing และ non-normal returns",
            urls: [{ l: "PDF", u: "https://www.davidhbailey.com/dhbpapers/deflated-sharpe.pdf" }] },
          { title: "Bailey, Borwein, López de Prado & Zhu: Pseudo-Mathematics and Financial Charlatanism", provider: "American Mathematical Society", type: "paper", tags: ["recommended"],
            desc: "อธิบายว่าการทดลอง strategy configurations จำนวนมากสามารถสร้าง simulated performance ที่ดูดีมากได้อย่างไร แม้สิ่งที่เลือกมาอาจเกิดจาก backtest overfitting",
            urls: [{ l: "AMS Notices PDF", u: "https://www.ams.org/notices/201405/rnoti-p458.pdf" }] },
          { title: "Harvey & Liu: False (and Missed) Discoveries in Financial Economics", provider: "Duke (author-hosted)", type: "paper", tags: ["recommended"],
            desc: "การ tighten statistical hurdle ไม่ได้มีแต่ประโยชน์ — ลด false positives ได้ แต่เพิ่ม false negatives ด้วย ในทางเศรษฐศาสตร์จริง เราต้องสนใจต้นทุนของทั้งสองฝั่ง",
            urls: [{ l: "PDF", u: "https://people.duke.edu/~charvey/Research/Published_Papers/P143_False_and_missed.pdf" }] },
          { title: "Jensen, Kelly & Pedersen: Is There a Replication Crisis in Finance?", provider: "NBER", type: "paper", tags: ["core"],
            desc: "ใช้ statistical framework ต่างจากฝั่ง multiple testing และให้ภาพ factor replication ที่ optimistic กว่า — ควรอ่านคู่กันเพื่อเห็น evidence จากทั้งสองฝั่ง",
            urls: [
              { l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w28432/w28432.pdf" },
              { l: "Dataset", u: "https://jkpfactors.com/" }
            ] },
          { title: "Arnott, Harvey & Markowitz: A Backtesting Protocol in the Era of Machine Learning", provider: "Duke (author-hosted)", type: "paper", tags: ["core"],
            desc: "Practical มาก — ไม่ได้หยุดแค่บอกว่า overfitting มีอยู่ แต่วาง research protocol สำหรับโลกที่ machine learning ทำให้ hypothesis search และ specification search ถูกและเร็วขึ้นมาก",
            note: "Core / Highly Recommended",
            urls: [{ l: "PDF", u: "https://people.duke.edu/~charvey/Research/Published_Papers/P138_A_backtesting_protocol.pdf" }] }
        ]
      },
      {
        g: "Monte Carlo & Computational Finance",
        items: [
          { title: "Monte Carlo Simulation", author: "Martin Haugh", provider: "martin-haugh.github.io", type: "notes", tags: ["core", "optional"],
            desc: "Random-variable generation, stochastic processes, variance reduction, SDE simulation, Greeks, MCMC และ Bayesian modeling โดยเน้น applications ใน finance",
            note: "Core สำหรับ Computational Finance / Derivatives · Optional สำหรับ discretionary investor",
            urls: [{ l: "Course notes", u: "https://martin-haugh.github.io/teaching/monte-carlo/" }] }
        ]
      },
      {
        g: "Optimization & Portfolio Construction",
        items: [
          { title: "Stanford EE364A: Convex Optimization I", author: "Stephen Boyd", provider: "Stanford SEE", type: "course", tags: ["core"],
            desc: "Convex optimization ที่มี portfolio risk-return optimization โดยตรง",
            urls: [{ l: "Stanford SEE", u: "https://see.stanford.edu/Course/EE364A" }] },
          { title: "Convex Optimization (หนังสือเต็ม)", author: "Boyd & Vandenberghe", provider: "Stanford (author-hosted)", type: "book", tags: ["core", "reference"],
            desc: "ตำราเต็มเปิดให้อ่านฟรีโดยผู้เขียน — เหมาะใช้คู่กับ EE364A",
            urls: [{ l: "Read / download PDF", u: "https://stanford.edu/~boyd/cvxbook/" }] },
          { title: "MIT 6.079: Introduction to Convex Optimization", author: "Stephen Boyd, Pablo Parrilo", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "Course materials มี root จากงานของ Boyd และ Vandenberghe",
            note: "Alternative ของ EE364A",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/6-079-introduction-to-convex-optimization-fall-2009/" }] },
          { title: "MIT 15.093J: Optimization Methods", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "Linear, network, discrete, nonlinear และ dynamic optimization",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/" }] },
          { title: "Stanford EE364B: Convex Optimization II", author: "Stephen Boyd", provider: "Stanford SEE", type: "course", tags: ["advanced"],
            desc: "Subgradient methods, decomposition, robust optimization และ advanced convex methods",
            urls: [{ l: "Stanford SEE", u: "https://see.stanford.edu/Course/EE364B" }] },
          { title: "MIT 6.253: Convex Analysis and Optimization", author: "Dimitri Bertsekas", provider: "MIT OCW", type: "course", tags: ["advanced"],
            desc: "Duality, saddle-point theory และ convex analysis ระดับลึก",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/" }] }
        ]
      },
      {
        g: "Quantitative Risk Management",
        items: [
          { title: "Quantitative Risk Management", author: "Martin Haugh", provider: "martin-haugh.github.io", type: "notes", tags: ["core"],
            desc: "Multivariate distributions, dimension reduction, copulas, risk measures, risk aggregation, capital allocation, model risk, asset allocation, Monte Carlo และ EVT",
            note: "Core สำหรับ Portfolio / Risk",
            urls: [{ l: "Course notes", u: "https://martin-haugh.github.io/teaching/qrm/" }] }
        ]
      },
      {
        g: "Market Microstructure",
        items: [
          { title: "Securities Trading: Principles and Procedures (STPP)", author: "Joel Hasbrouck", provider: "NYU Stern", type: "book", tags: ["core"],
            desc: "Limit-order books, auctions, dealer markets, market design, trading mechanisms และ regulation — resource ดีมากสำหรับเข้าใจว่า electronic markets ถูกจัดโครงสร้างและทำงานอย่างไร",
            note: "Core สำหรับ Market Microstructure — © Hasbrouck เปิดให้อ่าน online แต่สงวน reproduction rights: แชร์ลิงก์ได้ แต่อย่านำ material ไป upload แจกต่อเอง",
            urls: [{ l: "Read online", u: "https://pages.stern.nyu.edu/~jhasbrou/STPP/STPPindex.html" }] }
        ]
      },
      {
        g: "Execution & Market Impact",
        intro: "Microstructure กับ execution เป็นคนละอย่าง — microstructure อธิบายว่ากลไกตลาดทำงานยังไง execution คือ ถ้ามี order จริง ควรแลกระหว่าง speed, market impact, transaction cost และ execution risk อย่างไร",
        items: [
          { title: "Almgren & Chriss: Optimal Execution of Portfolio Transactions", provider: "Journal of Risk (1999 preprint)", type: "paper", tags: ["core"],
            desc: "Classic 1999 — กรอบหลักคือ trade-off ระหว่าง volatility risk กับ transaction costs จาก temporary และ permanent market impact",
            urls: [{ l: "PDF", u: "https://quantitativebrokers.com/s/Optimal-Execution-of-Portfolio-Transaction-_-AlmgrenChriss-1999.pdf" }] },
          { title: "Optimal Execution Materials (Foundations FE — Other Topics)", author: "Martin Haugh", provider: "Columbia", type: "notes", tags: ["recommended"],
            desc: "รวม Almgren-Chriss และ related execution topics",
            urls: [{ l: "PDF", u: "https://www.columbia.edu/~mh2078/FoundationsFE/Other_Topics.pdf" }] },
          { title: "Gatheral: No-Dynamic-Arbitrage and Market Impact", author: "Jim Gatheral", provider: "SSRN", type: "paper", tags: ["recommended"],
            desc: "เชื่อม shape ของ market impact และ impact decay เข้ากับเงื่อนไขที่ execution model ต้องไม่สร้าง dynamic arbitrage",
            urls: [{ l: "SSRN", u: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1292353" }] },
          { title: "Curato, Gatheral & Lillo: Optimal Execution with Nonlinear Transient Market Impact", provider: "arXiv", type: "paper", tags: ["advanced"],
            desc: "Optimal execution ภายใต้ nonlinear transient market impact",
            urls: [{ l: "arXiv", u: "https://arxiv.org/abs/1412.4839" }] },
          { title: "Schneider & Lillo: Cross-Impact and No-Dynamic-Arbitrage", provider: "arXiv", type: "paper", tags: ["advanced"],
            desc: "ขยายจาก single-asset impact ไป cross-impact ระหว่าง assets — สำคัญมากขึ้นเมื่อ execution เป็นปัญหาระดับ portfolio",
            urls: [{ l: "arXiv", u: "https://arxiv.org/abs/1612.07742" }] }
        ]
      },
      {
        g: "Market Plumbing for HFT / Execution",
        intro: "ถ้าศึกษา microstructure จาก textbook อย่างเดียว เรายังเห็นตลาดแค่ในระดับ model — ถ้าจะเข้าใจ electronic market ในระดับ protocol ต้องลงไปอ่าน exchange specifications ด้วย (คนลงทุนทั่วไปไม่จำเป็นต้องอ่าน)",
        items: [
          { title: "Nasdaq TotalView-ITCH", provider: "Nasdaq Trader", type: "docs", tags: ["specialized"],
            desc: "Order-level market-data protocol ของ Nasdaq — ระดับถัดไปจาก textbook microstructure ถ้าจะ reconstruct order book หรือศึกษาลำดับ market events จริง",
            urls: [{ l: "Specification", u: "https://www.nasdaqtrader.com/Trader.aspx?id=ITCH" }] },
          { title: "CME MDP 3.0 Market Data", provider: "CME Group", type: "docs", tags: ["specialized"],
            desc: "Market-data architecture ของ CME Globex สำหรับ futures, options และ related markets — สำหรับคนทำ order-book reconstruction, low-latency research หรือ execution infrastructure",
            urls: [{ l: "Documentation", u: "https://www.cmegroup.com/confluence/display/EPICSANDBOX/CME+MDP+3.0+Market+Data" }] }
        ]
      },
      {
        g: "Case Study: Order Flow Toxicity / VPIN",
        intro: "ตัวอย่างที่ดีว่าเวลาเจอ empirical metric หนึ่งตัว ไม่ควรอ่าน original paper แล้วจบ — ควรอ่าน claim, critique, evidence เพิ่ม และ response ของฝั่ง original ด้วย",
        items: [
          { title: "Easley, López de Prado & O'Hara: Flow Toxicity and Liquidity in a High-Frequency World", provider: "SSRN", type: "paper", tags: ["optional"], role: "Original claim",
            desc: "เสนอ VPIN เพื่อวัด order-flow toxicity จาก volume imbalance และ trading intensity",
            urls: [{ l: "SSRN", u: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1695596" }] },
          { title: "Andersen & Bondarenko: Reflecting on the VPIN Dispute", provider: "Aarhus University", type: "paper", tags: ["optional"], role: "Critique",
            desc: "ฝั่ง critique ต่อ VPIN",
            urls: [{ l: "PDF", u: "https://repec.econ.au.dk/repec/creates/rp/13/rp13_42.pdf" }] },
          { title: "Andersen & Bondarenko: Assessing Measures of Order Flow Toxicity via Perfect Trade Classification", provider: "Aarhus University", type: "paper", tags: ["optional"], role: "Critique / evidence",
            desc: "ใช้ trade classification ที่แม่นขึ้นเพื่อตรวจว่า VPIN มี incremental information แค่ไหนหลังควบคุม trading intensity และ volatility",
            urls: [{ l: "PDF", u: "https://repec.econ.au.dk/repec/creates/rp/13/rp13_43.pdf" }] },
          { title: "Easley, López de Prado & O'Hara: VPIN and the Flash Crash — A Rejoinder", provider: "SSRN", type: "paper", tags: ["optional"], role: "Response",
            desc: "Response ของฝั่ง original ต่อ critique",
            urls: [{ l: "SSRN", u: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2062450" }] }
        ]
      },
      {
        g: "Options & Volatility",
        items: [
          { title: "Jim Gatheral: Baruch MFE Volatility Workshop", author: "Jim Gatheral", provider: "Baruch College", type: "workshop", tags: ["core"],
            desc: "Material เรื่อง volatility surface, SVI, variance products และ rough volatility",
            note: "Core สำหรับ Vol / Options specialist — บาง notebook ใช้ dependencies รุ่นเก่า เหมาะกับการอ่านเพื่อเข้าใจแนวคิดมากกว่า run code ตรงๆ ถ้าจะใช้จริงควรเขียน/port implementation ใหม่บน stack ปัจจุบัน",
            urls: [{ l: "Downloads", u: "https://mfe.baruch.cuny.edu/volatilityworkshopdownloads/" }] },
          { title: "Gatheral & Jacquier: Arbitrage-Free SVI Volatility Surfaces", provider: "arXiv", type: "paper", tags: ["recommended"],
            desc: "การ calibrate SVI implied-volatility surface โดยรักษาเงื่อนไข absence of static arbitrage",
            urls: [{ l: "arXiv", u: "https://arxiv.org/abs/1204.0646" }] }
        ]
      }
    ]
  },

  // ============================ TRACK C ============================
  {
    id: "C", icon: "cpu", accent: "#a78bfa",
    name: "Machine Learning เพื่องานวิจัยการเงินเชิงปริมาณ",
    th: "Machine Learning for Quantitative Research — ต่างจากหมวด AI สมัยใหม่ (Deep Learning & LLM): เป้าหมายคือใช้ statistical learning กับ financial data ไม่ใช่เรียน AI เพียงเพราะ AI กำลังดัง",
    groups: [
      {
        g: "ML Foundation",
        items: [
          { title: "Stanford CS229: Machine Learning", provider: "Stanford", type: "course", tags: ["core"],
            desc: "Supervised/unsupervised learning, GLMs, SVMs, kernels, learning theory, neural networks และ reinforcement learning — ตัว SEE เป็น archive ทางการของ Stanford ที่มี full lecture series จึงเหมาะกับ self-study",
            urls: [
              { l: "Stanford Online page", u: "https://online.stanford.edu/courses/cs229-machine-learning" },
              { l: "Full lectures (SEE)", u: "https://see.stanford.edu/Course/CS229" }
            ] },
          { title: "Caltech: Learning From Data", author: "Yaser Abu-Mostafa", provider: "Caltech", type: "course", tags: ["recommended"],
            desc: "เน้น learning theory และ generalization มากกว่า ML course สมัยใหม่ที่เน้น library — ครอบคลุม feasibility of learning, VC dimension, bias-variance, overfitting, regularization, validation, linear/logistic models, neural networks, SVMs พร้อม homework 8 ชุดและ final exam",
            note: "Highly recommended สำหรับคนที่อยากเข้าใจว่า model เรียนรู้และ generalize ได้เพราะอะไร ไม่ใช่แค่รู้วิธีเรียกใช้ model",
            urls: [{ l: "Telecourse", u: "https://work.caltech.edu/telecourse" }] },
          { title: "Berkeley CS189/289A: Introduction to Machine Learning", provider: "UC Berkeley", type: "course", tags: ["core", "optional"],
            desc: "Math-heavy ML course ครอบคลุม classification, regression, probabilistic methods, neural networks, dimensionality reduction, clustering",
            urls: [
              { l: "Course material", u: "https://people.eecs.berkeley.edu/~jrs/189/" },
              { l: "Official course page", u: "https://www2.eecs.berkeley.edu/Courses/CS189/" }
            ] },
          { title: "MIT 6.036: Introduction to Machine Learning", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "Alternative ML foundation",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/" }] },
          { title: "Machine Learning for OR & Financial Engineering", author: "Martin Haugh", provider: "martin-haugh.github.io", type: "notes", tags: ["recommended"],
            desc: "Regression, classification, resampling, regularization, trees, random forests, boosting, kernels, causality, HMM, Bayesian models, graphical models, variational inference — วางใน context ของ operations research และ financial engineering มากกว่า generic CS course",
            note: "Recommended bridge",
            urls: [{ l: "Course notes", u: "https://martin-haugh.github.io/teaching/ml-orfe/" }] },
          { title: "MIT 18.S096: Matrix Calculus for Machine Learning and Beyond", provider: "MIT OCW", type: "notes", tags: ["optional", "core"],
            desc: "Jacobians, gradients และ matrix differentiation",
            note: "Optional ถ้าใช้ library อย่างเดียว · Core ถ้าต้องการเข้า mechanics ลึก",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/" }] }
        ]
      },
      {
        g: "ML Applied to Finance",
        intro: "สำคัญ — การเรียน CS229 แล้วกระโดดไปทำ equity-return prediction เลย ยังมีช่องว่างใหญ่",
        items: [
          { title: "Gu, Kelly & Xiu: Empirical Asset Pricing via Machine Learning", provider: "NBER", type: "paper", tags: ["core"],
            desc: "เปรียบเทียบ linear models, regularization, dimension reduction, trees, random forests, boosting, neural networks กับ cross-sectional return prediction",
            note: "Core สำหรับ ML + Asset Pricing",
            urls: [{ l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w25398/w25398.pdf" }] },
          { title: "Kelly & Xiu: Financial Machine Learning", provider: "NBER", type: "paper", tags: ["core"],
            desc: "Bridge ที่ดีระหว่าง financial economics กับ modern machine learning",
            urls: [{ l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w31502/w31502.pdf" }] },
          { title: "Giglio, Kelly & Xiu: Factor Models, Machine Learning, and Asset Pricing", provider: "Annual Reviews", type: "paper", tags: ["recommended"],
            desc: "Survey ที่ช่วยจัด framework ว่า machine learning เข้าไปมีบทบาทตรงไหนใน factor estimation, expected returns, risk exposures, risk premia, stochastic discount factors, model testing",
            urls: [{ l: "Free PDF", u: "https://www.annualreviews.org/content/journals/10.1146/annurev-financial-101521-104735?crawler=true&mimetype=application/pdf" }] }
        ]
      },
      {
        g: "Free Statistical / ML Books",
        items: [
          { title: "An Introduction to Statistical Learning (ISLR)", author: "James, Witten, Hastie, Tibshirani", provider: "statlearning.com", type: "book", tags: ["core"],
            desc: "มีทั้งเวอร์ชัน R และ Python",
            urls: [{ l: "Book + code", u: "https://www.statlearning.com/" }] },
          { title: "The Elements of Statistical Learning (ESL)", author: "Hastie, Tibshirani & Friedman", provider: "Stanford (author-hosted)", type: "book", tags: ["reference"],
            desc: "Advanced reference",
            note: "ถ้าไม่เคยเรียน statistical learning มาก่อน อ่าน ISLR ก่อน ESL",
            urls: [{ l: "Read / download PDF", u: "https://hastie.su.domains/ElemStatLearn/" }] }
        ]
      }
    ]
  },

  // ============================ TRACK D ============================
  {
    id: "D", icon: "spark", accent: "#fb923c",
    name: "AI สมัยใหม่: Deep Learning และ LLM",
    th: "Modern AI, Deep Learning & LLM — มี value สำหรับ AI literacy, engineering, research และการเข้าใจ modern technology แต่ไม่ได้เป็น prerequisite ของการเป็น investor หรือ trader ที่ดี",
    groups: [
      {
        g: "Neural Networks from First Principles",
        items: [
          { title: "Andrej Karpathy: Neural Networks — Zero to Hero", author: "Andrej Karpathy", provider: "karpathy.ai", type: "videos", tags: ["core"],
            desc: "พา build ตั้งแต่ backpropagation ไปจนถึง language models แทนที่จะหยุดแค่อธิบายว่า neural network คืออะไร — ROI สูงมากสำหรับคนที่มี quantitative background",
            note: "Core สำหรับ Modern AI",
            urls: [{ l: "Course page", u: "https://karpathy.ai/zero-to-hero.html" }] },
          { title: "Neural Networks and Deep Learning", author: "Michael Nielsen", provider: "neuralnetworksanddeeplearning.com", type: "book", tags: ["recommended"],
            desc: "อธิบาย backprop และ neural-network intuition ได้ดีมาก",
            urls: [{ l: "Read online", u: "https://neuralnetworksanddeeplearning.com/" }] }
        ]
      },
      {
        g: "Deep Learning",
        items: [
          { title: "MIT 6.S191: Introduction to Deep Learning", provider: "MIT", type: "course", tags: ["core"],
            desc: "Intro deep learning ที่อัปเดตทุกปี",
            urls: [{ l: "Course site", u: "https://introtodeeplearning.com/" }] },
          { title: "Dive into Deep Learning (D2L)", provider: "d2l.ai", type: "book", tags: ["core", "reference"],
            desc: "หนังสือพร้อม executable code",
            urls: [{ l: "Book", u: "https://d2l.ai/" }] },
          { title: "Understanding Deep Learning", author: "Simon Prince", provider: "udlbook", type: "book", tags: ["recommended"],
            desc: "Modern และอ่านง่ายกว่าตำรา deep learning หลายเล่ม",
            urls: [{ l: "Book + PDF", u: "https://udlbook.github.io/udlbook/" }] },
          { title: "Deep Learning", author: "Goodfellow, Bengio & Courville", provider: "deeplearningbook.org", type: "book", tags: ["reference"],
            desc: "Official free online version",
            urls: [{ l: "Read online", u: "https://www.deeplearningbook.org/" }] },
          { title: "fast.ai: Practical Deep Learning for Coders", author: "Jeremy Howard", provider: "fast.ai", type: "course", tags: ["optional"],
            desc: "เน้น implementation และการทำของจริงเร็วๆ",
            urls: [{ l: "Course", u: "https://course.fast.ai/" }] }
        ]
      },
      {
        g: "Language Models",
        items: [
          { title: "Stanford CS336: Language Modeling from Scratch", provider: "Stanford", type: "course", tags: ["core"],
            desc: "ลงไปถึงการสร้าง language-model stack จริง ตั้งแต่ data, tokenizer, model architecture, training, scaling, evaluation",
            note: "Core สำหรับ LLM Engineering — ไม่ใช่ Core สำหรับ Trading",
            urls: [{ l: "Course site", u: "https://cs336.stanford.edu/" }] },
          { title: "Stanford CS224N: NLP with Deep Learning", provider: "Stanford", type: "course", tags: ["optional"],
            desc: "เหมาะถ้าต้องการ NLP foundation มากกว่าเน้น language-model engineering อย่างเดียว",
            urls: [{ l: "Course page", u: "https://www.stanford.edu/class/cs224n/" }] }
        ]
      },
      {
        g: "Reinforcement Learning",
        intro: "สำหรับ trading ยังให้ RL เป็น Optional — อย่าให้ความรู้สึกว่า RL ดู sophisticated ทำให้มันแซง econometrics, validation, transaction costs, market structure ในลำดับความสำคัญ",
        items: [
          { title: "Sutton & Barto: Reinforcement Learning — An Introduction", provider: "incompleteideas.net", type: "book", tags: ["core", "reference"],
            desc: "ตำรา RL มาตรฐาน (free โดยผู้เขียน)",
            urls: [{ l: "Book page", u: "http://incompleteideas.net/book/the-book.html" }] },
          { title: "Berkeley CS285: Deep Reinforcement Learning", author: "Sergey Levine", provider: "UC Berkeley", type: "course", tags: ["advanced"],
            desc: "Deep RL ระดับ graduate",
            urls: [{ l: "Course site", u: "https://rail.eecs.berkeley.edu/deeprlcourse/" }] }
        ]
      },
      {
        g: "Modern AI + Financial Research",
        items: [
          { title: "Kelly, Malamud, Schwab & Xu: Scaling Point-in-Time Language Models", provider: "NBER / arXiv", type: "paper", tags: ["specialized"],
            desc: "สำคัญมากสำหรับ historical research ที่ใช้ LLM — model ที่ train จาก temporally unrestricted corpus อาจมีข้อมูลจากอนาคตฝังอยู่ใน parameters แล้ว การ prompt ด้วยข้อมูลที่ดูเหมือนปี 2018 ไม่ได้แปลว่า model มี information set ของปี 2018 จริง — สำหรับ backtesting นี่คือ look-ahead problem อีกแบบที่ต้องจัดการตั้งแต่ design stage",
            note: "Specialized แต่สำคัญมากสำหรับ AI + Finance Research",
            urls: [
              { l: "NBER PDF", u: "https://www.nber.org/system/files/working_papers/w35247/w35247.pdf" },
              { l: "arXiv", u: "https://arxiv.org/abs/2607.11889" }
            ] }
        ]
      },
      {
        g: "AI / Finance Crossover",
        items: [
          { title: "MIT 15.S08: FinTech — Shaping the Financial World", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "ครอบคลุมกว้าง: AI, blockchain/crypto, payments, lending, digital banking, trading, capital markets, insurance — highlight 3 classes เกี่ยวกับ AI และ financial markets มากที่สุด",
            note: "ถ้าสนใจ trading/capital markets แนะนำ Class 9 เป็นพิเศษ",
            urls: [
              { l: "Main course", u: "https://ocw.mit.edu/courses/15-s08-fintech-shaping-the-financial-world-spring-2020/" },
              { l: "Class 2: AI, ML & DL", u: "https://ocw.mit.edu/courses/15-s08-fintech-shaping-the-financial-world-spring-2020/pages/ai-machine-learning/" },
              { l: "Class 3: AI in Finance", u: "https://ocw.mit.edu/courses/15-s08-fintech-shaping-the-financial-world-spring-2020/pages/class-3-artificial-intelligence-in-finance/" },
              { l: "Class 9: Trading & Capital Markets", u: "https://ocw.mit.edu/courses/15-s08-fintech-shaping-the-financial-world-spring-2020/pages/class-9-trading-capital-markets/" }
            ] },
          { title: "MIT 15.481x: Adaptive Markets", author: "Andrew Lo", provider: "MIT OCW", type: "course", tags: ["optional"],
            desc: "Efficient markets, behavioral finance, Adaptive Markets — conceptually interesting แต่ไม่ได้จัดเป็น core technical course",
            urls: [{ l: "Course page", u: "https://ocw.mit.edu/courses/15-481x-adaptive-markets-financial-market-dynamics-and-human-behavior-fall-2022/" }] }
        ]
      }
    ]
  },

  // ============================ DATA ============================
  {
    id: "DATA", icon: "database", accent: "#4ade80",
    name: "ฐานข้อมูลและโครงสร้างพื้นฐานวิจัยฟรี",
    th: "Free Data & Research Infrastructure — แหล่งข้อมูลฟรีสำหรับ empirical research",
    quick: true,
    groups: [
      {
        g: "Data sources",
        items: [
          { title: "FRED — Federal Reserve Economic Data", url: "https://fred.stlouisfed.org/" },
          { title: "SEC EDGAR — US public-company filings", url: "https://www.sec.gov/edgar/searchedgar/companysearch" },
          { title: "Ken French Data Library", url: "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html" },
          { title: "AQR Data Library", url: "https://www.aqr.com/Insights/Datasets" },
          { title: "Open Source Asset Pricing", url: "https://www.openassetpricing.com/" },
          { title: "JKP Global Factor Data", url: "https://jkpfactors.com/" },
          { title: "Open Source Bond Asset Pricing", url: "https://openbondassetpricing.com/" },
          { title: "arXiv — Quantitative Finance", url: "https://arxiv.org/list/q-fin/recent" }
        ]
      }
    ]
  }
  ],

  // ============================ SHORTEST PATHS ============================
  paths: [
    { icon: "briefcase", title: "Investment / Portfolio Management", steps: ["MIT 15.401 Finance Theory I", "Damodaran (NYU)", "Cochrane — Asset Pricing", "MIT 18.642", "Stanford EE364A", "Haugh — Quantitative Risk Management", "Open Asset Pricing / JKP / AQR Data"] },
    { icon: "landmark", title: "Fundamental Investing / Valuation", steps: ["MIT Financial Accounting (ถ้าจำเป็น)", "MIT 15.401", "Damodaran", "Cochrane (ตามความต้องการด้าน Asset Pricing)", "Empirical datasets ตาม strategy"] },
    { icon: "flask", title: "Systematic Alpha Research", steps: ["MIT 18.642", "Sheppard — Financial Econometrics", "MIT 14.384 (ตามความจำเป็น)", "Harvey/Liu + HLZ + PBO + Deflated Sharpe", "Backtesting Protocol (Arnott-Harvey-Markowitz)", "Open Source Asset Pricing + JKP", "Stanford CS229", "Gu-Kelly-Xiu", "Kelly-Xiu"] },
    { icon: "calc", title: "Quant PM / Portfolio Construction", steps: ["MIT 18.642", "Stanford EE364A", "Boyd & Vandenberghe (หนังสือ)", "Haugh — QRM", "Empirical asset pricing", "Research-validation stack", "Transaction-cost-aware portfolio construction"] },
    { icon: "target", title: "Options / Volatility / Derivatives", steps: ["MIT 18.642", "Haugh — Foundations of FE", "Haugh — Continuous-Time Models", "Haugh — Monte Carlo", "Gatheral — Volatility Workshop", "SVI (Gatheral-Jacquier)", "Stochastic / rough volatility literature ตาม specialization"] },
    { icon: "credit", title: "Credit / Credit Derivatives", steps: ["Haugh — Foundations of FE", "Haugh — QRM", "Duffie — Credit Risk", "Open Source Bond Asset Pricing", "Specialized CDS / structured-credit literature"] },
    { icon: "bolt", title: "Execution / Microstructure / HFT", steps: ["Hasbrouck — STPP", "Almgren-Chriss", "Gatheral — market impact literature", "Transient impact", "Cross-impact", "Nasdaq ITCH / CME MDP", "Empirical calibration จาก order-level data"] },
    { icon: "cpu", title: "ML for Quant", steps: ["MIT 18.065", "CS229 หรือ Berkeley CS189", "ISLR / ESL", "Research Validation stack", "Gu-Kelly-Xiu", "Kelly-Xiu", "Application-specific papers"],
      note: "จะไม่แนะนำ ML มาก่อน research validation — model ที่ search parameter/function space ได้กว้างขึ้น ก็สามารถ search noise ได้เก่งขึ้นเหมือนกัน" },
    { icon: "spark", title: "Modern AI / LLM", steps: ["Karpathy — Zero to Hero", "MIT 6.S191", "Stanford CS336", "CS224N (ตามความสนใจ)", "Specialized papers"],
      note: "ถ้าจะใช้ LLM กับ historical financial research ให้เพิ่ม point-in-time / temporal-leakage literature เข้าไปด้วย" }
  ],

  // ============================ METHODOLOGY ============================
  method: {
    title: "สิ่งที่สำคัญที่สุดใน list ทั้งหมด",
    lead: "เวลาเห็น backtest ที่ Sharpe สูงมาก ควรถามก่อนว่า — ก่อนจะได้ strategy ตัวนี้ เราลองอะไรไปแล้วบ้าง?",
    asked: [
      "กี่ hypotheses?", "กี่ specifications?", "กี่ universes?", "กี่ sample periods?",
      "กี่ feature definitions?", "กี่ transformations?", "กี่ hyperparameter combinations?",
      "กี่ cost assumptions?", "กี่ execution assumptions?", "กี่ models ถูกทิ้งไปก่อนที่จะเหลือตัวนี้?"
    ],
    facts: [
      "1,000 parameter tweaks ที่แทบเหมือนกัน ไม่ได้เท่ากับการทดสอบ 1,000 independent hypotheses",
      "Research log ควรเก็บทั้งสิ่งที่ผ่าน และสิ่งที่ไม่ผ่าน"
    ],
    checklistTitle: "Checklist ก่อนเชื่อ backtest",
    checklist: [
      "ข้อมูลเป็น point-in-time จริงหรือไม่",
      "มี survivorship bias หรือเปล่า",
      "มี look-ahead leakage หรือไม่",
      "Out-of-sample set เคยถูกเปิดดูหรือใช้ปรับ model ไปแล้วหรือยัง",
      "มีการเลือก universe หลังเห็นผลหรือเปล่า",
      "มี feature / specification search มากแค่ไหน",
      "Transaction costs และ execution costs ถูกประมาณไว้อย่างไร และสมจริงแค่ไหน",
      "Market impact ถูกคิดหรือยัง",
      "Turnover เท่าไหร่",
      "Capacity แค่ไหน",
      "ผลยังอยู่หลังเปลี่ยน period หรือ universe หรือไม่",
      "ถ้า hypothesis ควรใช้ได้กว้าง — ผลลัพธ์ยัง replicate ได้ในตลาด ประเทศ หรือสินทรัพย์อื่นหรือไม่",
      "มี economic mechanism รองรับหรือเปล่า หรือผลที่เห็นอาจเป็นเพียง statistical artifact"
    ],
    principles: [
      "Research path ต้องถือเป็นข้อมูลส่วนหนึ่งของ backtest ด้วย — ถ้าเห็นแค่ Sharpe ของ strategy ที่ชนะ แต่ไม่รู้ว่าก่อนจะได้มันมา researcher ทดลองและทิ้งอีกกี่ร้อยหรือกี่พัน specification ไปแล้ว เรายังไม่มีข้อมูลพอที่จะตีความ Sharpe นั้น เหมือนกับ Sharpe จาก hypothesis ที่กำหนดไว้ล่วงหน้าแล้วทดสอบเพียงครั้งเดียว",
      "ยก research methodology มาก่อน model complexity — model ซับซ้อนสามารถหา nonlinear structure ที่ model ง่ายๆ มองไม่เห็นได้จริง แต่ความสามารถในการหา structure มากขึ้น ก็มาพร้อมความสามารถในการ fit noise, leakage, accidental relationships ได้มากขึ้นเหมือนกัน",
      "สุดท้าย สิ่งที่เราต้องการคือ research process ที่เพิ่มโอกาสให้ผลที่เห็นในอดีตยัง survive ตอนถูกนำไปใช้กับเงินจริงในอนาคต"
    ]
  },

  notCoveredTitle: "สิ่งที่ Knowledge Map นี้ยังไม่ได้ลงลึก",
  notCovered: [
    "FX trading และ FX microstructure",
    "Rates trading และ fixed-income relative value",
    "Commodities และ energy markets",
    "Crypto market microstructure",
    "Funding, repo และ collateral plumbing",
    "Structured credit และ credit derivatives เชิงลึก",
    "Forensic accounting",
    "Private markets"
  ],
  notCoveredNote: "บางเรื่องถูกแตะอยู่แล้วใน material ด้านบน เช่น Haugh มี FX/quanto และ Duffie มี credit-risk/credit-derivatives research แต่ยังไม่มากพอที่จะเรียกว่าเป็น curriculum เต็มของสาขานั้น",

  footer: {
    copyright: "Hasbrouck (STPP) เปิด material ให้อ่าน online แต่สงวน reproduction rights — แชร์ลิงก์ได้ แต่อย่านำไป upload แจกต่อเอง",
    disclaimer: "เว็บนี้เป็นการรวบรวมแหล่งเรียนรู้ฟรีเพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน (not investment advice)"
  }
};
