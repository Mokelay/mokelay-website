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
      brandHome: 'Mokelay 首页',
      loading: '准备中...',
      processing: '处理中...',
    },
    nav: {
      main: '主导航',
      product: '产品',
      workflow: '生成流程',
      pricing: '价格',
      dashboard: '控制台',
      login: '登录',
      register: '免费开始',
      tryEditor: '打开生成器',
      language: '语言',
      theme: '主题',
    },
    footer: {
      description: 'Mokelay 用更少 token 描述页面、数据和交互，帮助团队低门槛生成 Web、App、小程序三端应用。',
      product: '产品',
      pricing: '价格',
      login: '登录',
      register: '注册',
    },
    home: {
      seoTitle: 'Mokelay 低 token 三端应用生成平台',
      seoDescription: 'Mokelay 通过低 token 结构化描述，降低模型要求和使用门槛，帮助团队同时生成 Web、App、小程序三端应用。',
      seoKeywords: 'Mokelay,低 token 生成,AI 应用生成器,三端应用生成,Web 应用生成,App 生成,小程序生成,低模型要求,非研发友好,不依赖 IDE,多语言应用生成,企业系统集成',
      hero: {
        eyebrow: 'AI App Generator',
        title: '用更少 Token 生成三端应用。',
        lead: 'Mokelay 把页面、数据源、交互和多语言文案压缩成结构化描述，相比直接输出源码降低 66% 输出 token，让更低门槛的模型也能稳定生成 Web、App、小程序。',
        primary: '免费试用生成器',
        secondary: '查看价格方案',
        tryEditor: '体验生成器',
        proofLabel: '产品亮点',
        proof: ['输出 token 降低 66%', '降低模型要求', '非研发友好', '三端同时生成'],
      },
      logosLabel: '为这样的团队而建',
      logoItems: ['产品团队', '运营团队', '解决方案商', '企业内训', '独立开发者'],
      features: {
        eyebrow: 'Product',
        title: '把生成成本和使用门槛一起降下来。',
        body: 'Mokelay 不要求每个使用者都懂源码、装 IDE、调环境。用结构化配置承载业务意图，再把应用同步生成到多端。',
        items: [
          ['低 token 生成', '用页面 DSL 和组件配置替代整段源码输出，相比源码降低 66% 输出 token，减少等待和模型调用成本。'],
          ['降低模型要求', '更短上下文、更明确字段约束，让模型少猜测、多按结构生成，降低对超长上下文和顶级模型的依赖。'],
          ['非研发友好', '产品、运营和实施人员可以围绕页面、表单、数据源和流程配置表达需求，不必先学完整工程栈。'],
          ['不依赖 IDE', '浏览器内完成配置、预览和发布，免本地环境搭建；部署流程做成引导式步骤，减少手工运维。'],
          ['多语言与三端', '同一份配置同时服务多语言文案和 Web、App、小程序三端生成，避免每端重复改一遍。'],
          ['定制化与集成', '组件、主题、数据源、API、登录和发布链路都可扩展，方便接入企业现有系统。'],
        ],
      },
      workflow: {
        eyebrow: 'Workflow',
        title: '从业务描述到三端可用。',
        body: 'Mokelay 把“想要什么页面”拆成可配置的组件、数据和交互，再由 AI 生成、预览、部署，尽量把复杂工程步骤藏到后台。',
        steps: [
          ['描述需求', '用自然语言或模板说明页面、角色、数据源和交互规则。'],
          ['压缩配置', '系统把需求转成低 token 结构化描述，减少模型负担。'],
          ['三端生成', '同步生成 Web、App、小程序预览，并保持多语言内容一致。'],
          ['引导部署', '按步骤连接 API、主题和发布环境，非研发也能完成基础上线。'],
        ],
      },
      pricingPreview: {
        eyebrow: 'Pricing',
        title: '从低成本试用，到深度集成。',
        body: '先用 Free 验证低 token 三端生成流程；需要团队协作、定制组件或企业系统集成时再升级。',
      },
      finalCta: {
        eyebrow: 'Start',
        title: '今天先生成一个三端页面。',
        cta: '免费开始',
        tryEditor: '直接体验生成器',
      },
    },
    pricing: {
      seoTitle: '价格方案',
      seoDescription: '查看 Mokelay 低 token 三端应用生成平台的 Free、Pro、Team 和 Enterprise 价格方案。',
      seoKeywords: 'Mokelay 价格,AI 应用生成器价格,三端生成价格,低 token 生成价格,低代码平台价格,企业应用生成方案',
      eyebrow: 'Pricing',
      title: '按生成规模和集成深度选择。',
      body: '先用 Free 验证低 token 生成效果；当三端发布、多语言维护和企业集成成为日常，再升级到 Pro、Team 或 Enterprise。',
      recommended: '推荐',
      plans: [
        ['Free', '¥0', '适合先验证一个页面或流程。', '免费开始', ['1 个个人工作区', '基础低 token 生成', 'Web 端预览', '社区支持']],
        ['Pro', '¥99/月', '适合持续生成多端应用的个人或小团队。', '选择 Pro', ['三端生成草稿', '多语言内容管理', '更多模型调用额度', '优先功能预览']],
        ['Team', '¥299/月', '适合多人协作、统一交付和部署。', '选择 Team', ['团队工作区', '组件与主题共享', '引导式部署流程', '团队级审计记录']],
        ['Enterprise', '联系我们', '适合私有化、合规和深度集成。', '预约沟通', ['私有部署评估', '自定义组件与 API', 'SSO/OIDC', '专属集成支持']],
      ],
    },
    auth: {
      loginSeoTitle: '登录',
      loginSeoDescription: '登录 Mokelay 控制台。',
      registerSeoTitle: '注册',
      registerSeoDescription: '创建 Mokelay 账号并进入控制台。',
      loginPage: {
        eyebrow: 'Welcome back',
        title: '回到你的三端生成工作台。',
        body: '登录后可以查看工作区、订阅状态，以及后续接入 Mokelay 生成器的入口。',
      },
      registerPage: {
        eyebrow: 'Create workspace',
        title: '先创建账号，再开始低 token 生成。',
        body: '第一版账号体系由独立 API 服务承载，官网保持纯静态，生产环境连接 PostgreSQL。',
      },
      form: {
        loginTitle: '欢迎回来',
        registerTitle: '创建你的 Mokelay 工作区',
        loginSubtitle: '继续进入控制台，管理你的生成工作区和订阅状态。',
        registerSubtitle: '注册后会自动进入控制台。第一版使用独立账号 API，后续可接 OAuth 和 Stripe。',
        loginSubmit: '登录',
        registerSubmit: '注册并进入控制台',
        enterpriseName: '企业名称',
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
      seoDescription: 'Mokelay 用户控制台。',
      eyebrow: 'Dashboard',
      welcome: '欢迎',
      body: '这里会成为 Mokelay 生成工作区入口。当前版本已经打通官网账号、会话和受保护页面。',
      logout: '退出登录',
      cards: [
        ['Plan', '订阅状态将在 Stripe Billing 第二阶段接入后自动同步。'],
        ['Workspace', '个人工作区已就绪，后续可接入三端生成项目列表。'],
        ['Next', '复杂生成器 API 会继续沉淀到独立服务，官网保持静态入口。'],
      ],
      workspaceTitle: 'Personal',
      nextTitle: 'Connect Generator',
    },
    mockIde: {
      label: 'Mokelay 三端生成器界面示意',
      agentTitle: 'Mokelay Generator',
      agentBody: '已生成 Web、App、小程序预览；输出 token 按源码方案的 34% 控制，下一步连接 API 并发布。',
    },
  },
  en: {
    common: {
      brandHome: 'Mokelay home',
      loading: 'Preparing...',
      processing: 'Processing...',
    },
    nav: {
      main: 'Main navigation',
      product: 'Product',
      workflow: 'Flow',
      pricing: 'Pricing',
      dashboard: 'Dashboard',
      login: 'Log in',
      register: 'Start free',
      tryEditor: 'Open generator',
      language: 'Language',
      theme: 'Theme',
    },
    footer: {
      description: 'Mokelay describes pages, data, and interactions with fewer tokens, helping teams generate Web, app, and mini-program experiences with less setup.',
      product: 'Product',
      pricing: 'Pricing',
      login: 'Log in',
      register: 'Sign up',
    },
    home: {
      seoTitle: 'Mokelay low-token multi-end app generator',
      seoDescription: 'Mokelay lowers token usage, model requirements, and adoption friction while generating Web, app, and mini-program experiences from one structured description.',
      seoKeywords: 'Mokelay,low-token AI app generator,multi-end app generator,Web app generator,app generator,mini-program generator,lower model requirements,non-developer friendly,no IDE,multilingual app generation,enterprise integration',
      hero: {
        eyebrow: 'AI App Generator',
        title: 'Generate three app surfaces with fewer tokens.',
        lead: 'Mokelay compresses pages, data sources, interactions, and multilingual copy into structured descriptions. Compared with source-code output, it cuts output tokens by 66% and helps lower-cost models generate Web, app, and mini-program experiences.',
        primary: 'Try the generator',
        secondary: 'View pricing',
        tryEditor: 'Open generator',
        proofLabel: 'Product highlights',
        proof: ['66% fewer output tokens', 'Lower model requirements', 'Friendly for non-developers', 'Generate three ends together'],
      },
      logosLabel: 'Built for teams like these',
      logoItems: ['Product teams', 'Operations teams', 'Solution partners', 'Enterprise enablement', 'Indie builders'],
      features: {
        eyebrow: 'Product',
        title: 'Lower the generation cost and the adoption barrier.',
        body: 'Mokelay does not require every user to understand source code, install an IDE, or configure local environments. Business intent becomes structured configuration, then ships across multiple ends.',
        items: [
          ['Low-token generation', 'Use page DSL and component configuration instead of full source-code output, cutting output tokens by 66% compared with code generation.'],
          ['Lower model requirements', 'Shorter context and stricter fields reduce guessing, so teams depend less on long-context or top-tier models.'],
          ['Non-developer friendly', 'Product, operations, and implementation teams can define pages, forms, data sources, and flows without learning a full engineering stack.'],
          ['No IDE dependency', 'Configure, preview, and publish in the browser. Guided deployment reduces local setup and manual operations.'],
          ['Multilingual and multi-end', 'One configuration keeps multilingual content aligned while generating Web, app, and mini-program surfaces together.'],
          ['Customizable and integrated', 'Components, themes, data sources, APIs, auth, and release pipelines can extend into existing enterprise systems.'],
        ],
      },
      workflow: {
        eyebrow: 'Workflow',
        title: 'From business description to three usable ends.',
        body: 'Mokelay turns page ideas into configurable components, data, and interactions, then lets AI generate, preview, and deploy while hiding the heavy engineering steps.',
        steps: [
          ['Describe', 'Capture pages, roles, data sources, and interaction rules in natural language or templates.'],
          ['Compress', 'Convert requirements into low-token structured descriptions that reduce model workload.'],
          ['Generate', 'Create Web, app, and mini-program previews while keeping multilingual content aligned.'],
          ['Deploy', 'Connect APIs, themes, and environments through guided steps so non-developers can launch basics.'],
        ],
      },
      pricingPreview: {
        eyebrow: 'Pricing',
        title: 'From low-cost trials to deep integrations.',
        body: 'Start with Free to validate the low-token multi-end generation flow, then upgrade for team workspaces, custom components, and enterprise integrations.',
      },
      finalCta: {
        eyebrow: 'Start',
        title: 'Generate your first three-end page today.',
        cta: 'Start free',
        tryEditor: 'Open generator',
      },
    },
    pricing: {
      seoTitle: 'Pricing',
      seoDescription: 'Explore Mokelay Free, Pro, Team, and Enterprise plans for low-token multi-end app generation.',
      seoKeywords: 'Mokelay pricing,AI app generator pricing,multi-end app generation pricing,low-token generation pricing,low-code platform pricing,enterprise app generation',
      eyebrow: 'Pricing',
      title: 'Choose by generation scale and integration depth.',
      body: 'Start with Free to validate low-token generation. Upgrade to Pro, Team, or Enterprise when multi-end publishing, multilingual maintenance, and integrations become daily work.',
      recommended: 'Popular',
      plans: [
        ['Free', '$0', 'For validating one page or flow first.', 'Start free', ['1 personal workspace', 'Basic low-token generation', 'Web preview', 'Community support']],
        ['Pro', '$14/mo', 'For individuals or small teams generating multi-end apps continuously.', 'Choose Pro', ['Three-end generation drafts', 'Multilingual content management', 'More model-call allowance', 'Priority feature previews']],
        ['Team', '$42/mo', 'For shared delivery, review, and deployment.', 'Choose Team', ['Team workspaces', 'Shared components and themes', 'Guided deployment flow', 'Team audit records']],
        ['Enterprise', 'Contact us', 'For private deployment, compliance, and deep integrations.', 'Book a call', ['Private deployment review', 'Custom components and APIs', 'SSO/OIDC', 'Dedicated integration support']],
      ],
    },
    auth: {
      loginSeoTitle: 'Log in',
      loginSeoDescription: 'Log in to the Mokelay console.',
      registerSeoTitle: 'Sign up',
      registerSeoDescription: 'Create a Mokelay account and enter the console.',
      loginPage: {
        eyebrow: 'Welcome back',
        title: 'Return to your multi-end generation workbench.',
        body: 'After logging in, you can view your workspace, subscription status, and future Mokelay generator entry.',
      },
      registerPage: {
        eyebrow: 'Create workspace',
        title: 'Create an account, then start low-token generation.',
        body: 'The first account system is handled by the standalone API service, while the website stays static and production data lives in PostgreSQL.',
      },
      form: {
        loginTitle: 'Welcome back',
        registerTitle: 'Create your Mokelay workspace',
        loginSubtitle: 'Continue to the console to manage your generation workspace and subscription status.',
        registerSubtitle: 'Registration takes you straight to the console. OAuth and Stripe can be connected later.',
        loginSubmit: 'Log in',
        registerSubmit: 'Sign up and open console',
        enterpriseName: 'Company name',
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
      seoDescription: 'Mokelay user dashboard.',
      eyebrow: 'Dashboard',
      welcome: 'Welcome',
      body: 'This will become the workspace entry for the Mokelay generator. The current version already connects website accounts, sessions, and protected pages.',
      logout: 'Log out',
      cards: [
        ['Plan', 'Subscription status will sync automatically after Stripe Billing is connected in phase two.'],
        ['Workspace', 'Your personal workspace is ready. Multi-end generation project lists can be connected next.'],
        ['Next', 'Complex generator APIs will continue moving into standalone services while the website stays static.'],
      ],
      workspaceTitle: 'Personal',
      nextTitle: 'Connect Generator',
    },
    mockIde: {
      label: 'Mokelay multi-end generator interface mockup',
      agentTitle: 'Mokelay Generator',
      agentBody: 'Web, app, and mini-program previews generated. Output tokens are held to 34% of the source-code path; next, connect APIs and publish.',
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
