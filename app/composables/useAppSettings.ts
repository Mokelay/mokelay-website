export type AppLocale = 'zh' | 'en'
export type AppTheme = 'lark' | 'light'

const localeLabels: Record<AppLocale, string> = {
  zh: '中文',
  en: 'EN',
}

const themeLabels: Record<AppTheme, string> = {
  lark: 'Lark',
  light: 'Light',
}

const messages = {
  zh: {
    common: {
      brandHome: 'Mokelay IDE 首页',
      loading: '准备中...',
      processing: '处理中...',
    },
    nav: {
      main: '主导航',
      product: '产品',
      workflow: '工作流',
      pricing: '价格',
      faq: 'FAQ',
      dashboard: '控制台',
      login: '登录',
      register: '免费开始',
      tryEditor: '产品体验',
      language: '语言',
      theme: '主题',
    },
    footer: {
      description: '面向 AI 协作开发的在线 IDE，把想法、代码、测试和发布放到一条清晰的工作流里。',
      product: '产品',
      pricing: '价格',
      login: '登录',
      register: '注册',
    },
    home: {
      seoTitle: 'AI 协作开发 IDE 官网',
      seoDescription: 'Mokelay IDE 帮个人开发者和小团队把 AI 编程协作变成可验证、可交付的产品工作流。',
      hero: {
        eyebrow: 'AI-native IDE for builders',
        title: '把 Codex 式协作装进你的 IDE 工作台。',
        lead: 'Mokelay IDE 帮个人开发者和小团队从产品想法一路走到代码、测试和上线。不是再开一个聊天窗口，而是让 AI 直接理解项目、任务和交付边界。',
        primary: '免费创建工作区',
        secondary: '查看价格方案',
        tryEditor: '体验产品',
        proofLabel: '产品亮点',
        proof: ['单人公司友好', 'Nuxt 全栈账号', '面向交付的 AI 工作流'],
      },
      logosLabel: '为这样的团队而建',
      features: {
        eyebrow: 'Product',
        title: '不是聊天机器人，是开发交付系统。',
        body: 'Mokelay IDE 把 AI 协作变成工程流程的一部分：有上下文、有边界、有验证，也有产品发布路径。',
        items: [
          ['项目上下文常驻', '把需求、代码结构、历史决策和测试信号放在同一个工作区，减少每次重新解释项目的摩擦。'],
          ['从计划到验证', '把 AI 任务拆成可执行边界，自动串起实现、预览、测试和回归检查。'],
          ['OPC 友好', '为个人公司和小团队减少运维负担：一个人也能维护清晰流程、账号和发布节奏。'],
          ['全栈入口', '官网、账号、价格方案和未来产品控制台共享一套 Nuxt/Vue 工程语言。'],
          ['协作不失控', '用明确的任务状态、文件边界和测试反馈，让 AI 改动可追踪、可复核。'],
          ['可逐步私有化', 'PostgreSQL、Drizzle 和 Nitro 的组合保留未来拆服务或私有部署的空间。'],
        ],
      },
      workflow: {
        eyebrow: 'Workflow',
        title: '让每一次 AI 改动都能落地。',
        body: '从“帮我做个页面”到“这里是已验证的改动”，Mokelay IDE 会鼓励清晰输入、可靠执行和可复核输出。',
        steps: [
          ['Describe', '把产品目标和限制写成任务 brief。'],
          ['Plan', 'AI 先读代码、再形成可执行计划。'],
          ['Build', '按文件边界实现，保留清晰 diff。'],
          ['Verify', '运行测试、预览和回归检查后再交付。'],
        ],
      },
      pricingPreview: {
        eyebrow: 'Pricing',
        title: '从免费验证，到团队交付。',
        body: '第一版先给清晰套餐和账号入口；付费闭环会在 Stripe Billing 阶段接入。',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '上线前，先把关键问题讲清楚。',
        items: [
          ['Mokelay IDE 和普通 AI Chat 有什么区别？', 'Mokelay IDE 的目标不是只回答问题，而是围绕项目上下文执行开发任务：读代码、改文件、跑测试、解释交付结果。'],
          ['第一版价格会直接收费吗？', '当前实现先做静态价格方案和账号入口。Stripe Billing 会作为第二阶段接入，避免过早把支付复杂度压到发布前。'],
          ['为什么官网也要完整登录/注册？', '这样官网、价格页和产品控制台能形成闭环，用户注册后可以直接进入 dashboard，后续再接 IDE 主应用。'],
          ['能否私有化部署？', '当前技术栈保留私有化路径：Nuxt/Nitro、PostgreSQL、Drizzle 都可以迁移到自托管或私有云环境。'],
        ],
      },
      finalCta: {
        eyebrow: 'Start',
        title: '今天先创建一个工作区。',
        cta: '免费开始',
        tryEditor: '直接体验产品',
      },
    },
    pricing: {
      seoTitle: '价格方案',
      seoDescription: '查看 Mokelay IDE 的 Free、Pro、Team 和 Enterprise 价格方案。',
      eyebrow: 'Pricing',
      title: '价格清楚，工作流更清楚。',
      body: '先用 Free 方案验证产品想法；当 AI 协作开始成为日常交付节奏，再升级到 Pro 或 Team。',
      recommended: '推荐',
      plans: [
        ['Free', '¥0', '适合先验证一个产品想法。', '免费开始', ['1 个个人工作区', '基础 AI 任务流', '官网账号与控制台', '社区支持']],
        ['Pro', '¥99/月', '适合持续交付的个人开发者。', '选择 Pro', ['无限项目草稿', '高级上下文索引', 'Playwright 验证流', '优先功能预览']],
        ['Team', '¥299/月', '适合小团队共享 AI 开发流程。', '选择 Team', ['多人工作区', '角色与权限', '共享任务历史', '团队级审计记录']],
        ['Enterprise', '联系我们', '适合私有化、合规和深度集成。', '预约沟通', ['私有部署评估', 'SSO/OIDC', '数据保留策略', '专属支持']],
      ],
    },
    auth: {
      loginSeoTitle: '登录',
      loginSeoDescription: '登录 Mokelay IDE 控制台。',
      registerSeoTitle: '注册',
      registerSeoDescription: '创建 Mokelay IDE 账号并进入控制台。',
      loginPage: {
        eyebrow: 'Welcome back',
        title: '回到你的 AI 开发工作台。',
        body: '登录后可以查看工作区、订阅状态，以及后续接入 Mokelay IDE 主应用的入口。',
      },
      registerPage: {
        eyebrow: 'Create workspace',
        title: '先创建账号，再把想法交给工作流。',
        body: '第一版账号体系直接由 Nuxt Server 承载，默认支持本地开发 fallback，生产环境连接 PostgreSQL。',
      },
      form: {
        loginTitle: '欢迎回来',
        registerTitle: '创建你的 Mokelay 工作区',
        loginSubtitle: '继续进入控制台，管理你的 IDE 工作区和订阅状态。',
        registerSubtitle: '注册后会自动进入控制台。第一版使用内置账号体系，后续可接 OAuth 和 Stripe。',
        loginSubmit: '登录',
        registerSubmit: '注册并进入控制台',
        name: '姓名',
        email: '邮箱',
        password: '密码',
        passwordPlaceholder: '至少 8 位',
        noAccount: '还没有账号？',
        hasAccount: '已有账号？',
        goRegister: '立即注册',
        goLogin: '去登录',
        fallbackError: '请求失败，请稍后重试。',
      },
    },
    dashboard: {
      seoTitle: '控制台',
      seoDescription: 'Mokelay IDE 用户控制台。',
      eyebrow: 'Dashboard',
      welcome: '欢迎',
      body: '这里会成为 Mokelay IDE 的工作区入口。当前版本已经打通官网账号、会话和受保护页面。',
      logout: '退出登录',
      cards: [
        ['Plan', '订阅状态将在 Stripe Billing 第二阶段接入后自动同步。'],
        ['Workspace', '个人工作区已就绪，后续可接入 IDE 项目列表。'],
        ['Next', '复杂 IDE 产品 API 可以继续留在 Nuxt，也可以拆成 Hono 或 NestJS 服务。'],
      ],
      workspaceTitle: 'Personal',
      nextTitle: 'Connect IDE',
    },
    mockIde: {
      label: 'Mokelay IDE 产品界面示意',
      agentTitle: 'Mokelay Agent',
      agentBody: '已读取页面、接口和测试上下文。下一步：补齐注册校验并运行 E2E。',
    },
  },
  en: {
    common: {
      brandHome: 'Mokelay IDE home',
      loading: 'Preparing...',
      processing: 'Processing...',
    },
    nav: {
      main: 'Main navigation',
      product: 'Product',
      workflow: 'Workflow',
      pricing: 'Pricing',
      faq: 'FAQ',
      dashboard: 'Dashboard',
      login: 'Log in',
      register: 'Start free',
      tryEditor: 'Try editor',
      language: 'Language',
      theme: 'Theme',
    },
    footer: {
      description: 'An AI-native online IDE that keeps ideas, code, tests, and shipping inside one clear workflow.',
      product: 'Product',
      pricing: 'Pricing',
      login: 'Log in',
      register: 'Sign up',
    },
    home: {
      seoTitle: 'AI Collaborative Development IDE',
      seoDescription: 'Mokelay IDE helps solo builders and small teams turn AI coding into a verifiable, shippable workflow.',
      hero: {
        eyebrow: 'AI-native IDE for builders',
        title: 'Put Codex-style collaboration inside your IDE.',
        lead: 'Mokelay IDE helps solo builders and small teams move from product idea to code, tests, and launch. It is not another chat window; it gives AI the project context, task boundaries, and delivery path.',
        primary: 'Create workspace',
        secondary: 'View pricing',
        tryEditor: 'Try product',
        proofLabel: 'Product highlights',
        proof: ['Solo-company friendly', 'Nuxt full-stack account system', 'Delivery-oriented AI workflow'],
      },
      logosLabel: 'Built for teams like these',
      features: {
        eyebrow: 'Product',
        title: 'Not a chatbot. A delivery system for development.',
        body: 'Mokelay IDE turns AI collaboration into part of the engineering loop: context, scope, verification, and a path to ship.',
        items: [
          ['Persistent project context', 'Keep requirements, code structure, decisions, and test signals in one workspace so you explain less every time.'],
          ['Plan to verification', 'Break AI tasks into executable boundaries and connect implementation, preview, tests, and regression checks.'],
          ['OPC friendly', 'Reduce operational drag for solo companies and small teams with clear flows, accounts, and release rhythm.'],
          ['Full-stack entry point', 'Website, account, pricing, and future console all share one Nuxt/Vue engineering language.'],
          ['Controlled collaboration', 'Make AI edits traceable and reviewable through task state, file boundaries, and test feedback.'],
          ['Private-deploy ready', 'PostgreSQL, Drizzle, and Nitro keep a path open for service extraction or private cloud deployment.'],
        ],
      },
      workflow: {
        eyebrow: 'Workflow',
        title: 'Make every AI change land safely.',
        body: 'From “build me a page” to “here is the verified change,” Mokelay IDE encourages clear input, reliable execution, and reviewable output.',
        steps: [
          ['Describe', 'Turn goals and constraints into a focused task brief.'],
          ['Plan', 'Let AI inspect the codebase before creating an executable plan.'],
          ['Build', 'Implement with clear file boundaries and readable diffs.'],
          ['Verify', 'Run tests, previews, and regression checks before delivery.'],
        ],
      },
      pricingPreview: {
        eyebrow: 'Pricing',
        title: 'From free validation to team delivery.',
        body: 'The first release keeps plans and account entry clear; Stripe Billing can be connected in phase two.',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'The important questions before launch.',
        items: [
          ['How is Mokelay IDE different from normal AI chat?', 'Mokelay IDE is not just for answers. It works around project context to read code, edit files, run tests, and explain delivery results.'],
          ['Will the first release charge users directly?', 'This implementation starts with static pricing and account entry. Stripe Billing is reserved for phase two to avoid shipping-blocking payment complexity.'],
          ['Why does the website include full login and registration?', 'It creates a closed loop across the website, pricing page, and product console. Users can register and go straight to the dashboard.'],
          ['Can it be privately deployed?', 'The stack keeps that path open: Nuxt/Nitro, PostgreSQL, and Drizzle can all move to self-hosted or private cloud environments.'],
        ],
      },
      finalCta: {
        eyebrow: 'Start',
        title: 'Create your first workspace today.',
        cta: 'Start free',
        tryEditor: 'Try the product',
      },
    },
    pricing: {
      seoTitle: 'Pricing',
      seoDescription: 'Explore Mokelay IDE Free, Pro, Team, and Enterprise plans.',
      eyebrow: 'Pricing',
      title: 'Clear pricing. Clearer workflow.',
      body: 'Start with Free to validate an idea. Upgrade to Pro or Team when AI collaboration becomes your delivery rhythm.',
      recommended: 'Popular',
      plans: [
        ['Free', '$0', 'For validating one product idea first.', 'Start free', ['1 personal workspace', 'Basic AI task flow', 'Website account and console', 'Community support']],
        ['Pro', '$14/mo', 'For solo builders shipping continuously.', 'Choose Pro', ['Unlimited project drafts', 'Advanced context indexing', 'Playwright verification flow', 'Priority feature previews']],
        ['Team', '$42/mo', 'For small teams sharing AI development flows.', 'Choose Team', ['Team workspaces', 'Roles and permissions', 'Shared task history', 'Team audit records']],
        ['Enterprise', 'Contact us', 'For private deployment, compliance, and deep integrations.', 'Book a call', ['Private deployment review', 'SSO/OIDC', 'Data retention policies', 'Dedicated support']],
      ],
    },
    auth: {
      loginSeoTitle: 'Log in',
      loginSeoDescription: 'Log in to the Mokelay IDE console.',
      registerSeoTitle: 'Sign up',
      registerSeoDescription: 'Create a Mokelay IDE account and enter the console.',
      loginPage: {
        eyebrow: 'Welcome back',
        title: 'Return to your AI development workbench.',
        body: 'After logging in, you can view your workspace, subscription status, and future Mokelay IDE app entry.',
      },
      registerPage: {
        eyebrow: 'Create workspace',
        title: 'Create an account, then hand ideas to the workflow.',
        body: 'The first account system is handled by Nuxt Server, with a local fallback for development and PostgreSQL in production.',
      },
      form: {
        loginTitle: 'Welcome back',
        registerTitle: 'Create your Mokelay workspace',
        loginSubtitle: 'Continue to the console to manage your IDE workspace and subscription status.',
        registerSubtitle: 'Registration takes you straight to the console. OAuth and Stripe can be connected later.',
        loginSubmit: 'Log in',
        registerSubmit: 'Sign up and open console',
        name: 'Name',
        email: 'Email',
        password: 'Password',
        passwordPlaceholder: 'At least 8 characters',
        noAccount: 'No account yet?',
        hasAccount: 'Already have an account?',
        goRegister: 'Sign up',
        goLogin: 'Log in',
        fallbackError: 'Request failed. Please try again later.',
      },
    },
    dashboard: {
      seoTitle: 'Dashboard',
      seoDescription: 'Mokelay IDE user dashboard.',
      eyebrow: 'Dashboard',
      welcome: 'Welcome',
      body: 'This will become the workspace entry for Mokelay IDE. The current version already connects website accounts, sessions, and protected pages.',
      logout: 'Log out',
      cards: [
        ['Plan', 'Subscription status will sync automatically after Stripe Billing is connected in phase two.'],
        ['Workspace', 'Your personal workspace is ready. IDE project lists can be connected next.'],
        ['Next', 'Complex IDE product APIs can stay in Nuxt or be split into Hono or NestJS services.'],
      ],
      workspaceTitle: 'Personal',
      nextTitle: 'Connect IDE',
    },
    mockIde: {
      label: 'Mokelay IDE product interface mockup',
      agentTitle: 'Mokelay Agent',
      agentBody: 'Page, API, and test context loaded. Next: complete registration validation and run E2E.',
    },
  },
} as const

export function useAppSettings() {
  const locale = useState<AppLocale>('app-locale', () => 'zh')
  const theme = useState<AppTheme>('app-theme', () => 'lark')

  const copy = computed(() => messages[locale.value])
  const localeLabel = computed(() => localeLabels[locale.value])
  const themeLabel = computed(() => themeLabels[theme.value])

  function setLocale(nextLocale: AppLocale) {
    locale.value = nextLocale
  }

  function setTheme(nextTheme: AppTheme) {
    theme.value = nextTheme
  }

  function toggleLocale() {
    setLocale(locale.value === 'zh' ? 'en' : 'zh')
  }

  function toggleTheme() {
    setTheme(theme.value === 'lark' ? 'light' : 'lark')
  }

  if (import.meta.client) {
    onMounted(() => {
      const savedLocale = localStorage.getItem('mokelay-locale')
      const savedTheme = localStorage.getItem('mokelay-theme')

      if (savedLocale === 'zh' || savedLocale === 'en') {
        locale.value = savedLocale
      }

      if (savedTheme === 'lark' || savedTheme === 'light') {
        theme.value = savedTheme
      }
    })

    watch(locale, (value) => localStorage.setItem('mokelay-locale', value))
    watch(theme, (value) => localStorage.setItem('mokelay-theme', value))
  }

  return {
    copy,
    locale,
    localeLabel,
    setLocale,
    setTheme,
    theme,
    themeLabel,
    toggleLocale,
    toggleTheme,
  }
}
