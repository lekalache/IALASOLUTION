
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, 
    PROXIO_WELCOME_TEXT: 'Bienvenue chez IALASOLUTION !<br />Découvrez nos solutions de conseil et de formation pour booster votre réussite.<br />Commencez maintenant !', // 欢迎文字，留空则不启用

    PROXIO_HERO_ENABLE: true, 
    PROXIO_HERO_TITLE_1: 'L\'IA pour devenir plus efficace',
    PROXIO_HERO_TITLE_2: ' Améliorez considérablement votre IMPACT', 
    PROXIO_HERO_BUTTON_1_TEXT: 'Decouvrir nos formations', 
    PROXIO_HERO_BUTTON_1_URL:
        'https://www.ialasolution.com/formations', 
    PROXIO_HERO_BUTTON_2_TEXT: 'Suivez-nous sur Github', 
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: 'Articles',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: 'Nos dernières actualités',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: 'Pourquoi me choisir',
    PROXIO_FEATURE_TEXT_1: 'Je peux faire briller votre projet',
    PROXIO_FEATURE_TEXT_2:
        'Riche expérience de cas, service technique professionnel, efficacité de communication de qualité',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', 
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: 'Intégrer l\'IA peut transformer votre entreprise',
    PROXIO_FEATURE_1_TEXT_1: 'Un processus de conception simplifié garantit une livraison rapide, maintenant la qualité et les détails même sous des délais serrés.',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: 'Formations sur mesure',
    PROXIO_FEATURE_2_TEXT_1: 'Boostez vos compétences avec nos formations sur mesure ! Adaptées à vos besoins, nos sessions combinent expertise et innovation pour votre réussite.',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: 'Solutions stratégiques',
    PROXIO_FEATURE_3_TEXT_1: 'Nos services de consulting sur mesure optimisent vos processus et accélèrent votre croissance avec des stratégies adaptées à vos objectifs.',

    PROXIO_FEATURE_BUTTON_TEXT: 'En savoir plus', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://calendly.com/les-consultants-ia/30min', 
    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: 'Parcours',
    PROXIO_CAREER_TEXT:
        'Voici mon parcours professionnel',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: 'Architecte Freelance', bio: '2016-2020', text: 'En tant qu\'architecte freelance, j\'ai travaillé sur une gamme de projets résidentiels et commerciaux, équilibrant forme et fonction. J\'ai collaboré avec des clients et des entrepreneurs pour transformer les concepts en réalité, en m\'assurant que chaque design soit à la fois esthétiquement plaisant et structurellement solide.' },
        { title: 'Designer Produit chez Spotify', bio: '2020-2022', text: 'Chez Spotify, j\'ai contribué à façonner des fonctionnalités innovantes pour des millions d\'utilisateurs dans le monde. Mon focus était de créer des expériences fluides de découverte musicale, d\'améliorer les interfaces utilisateur et d\'optimiser la navigation cross-plateforme, ce qui a conduit à une amélioration du flux produit et une satisfaction utilisateur accrue.' },
        { title: 'Designer Produit Freelance', bio: '2022-Maintenant', text: 'Maintenant je conçois des produits centrés sur l\'utilisateur qui s\'alignent avec les visions des clients. En tant que designer produit freelance, je collabore avec des startups et des entreprises établies, créant des solutions qui élèvent les expériences utilisateur et augmentent l\'engagement à travers les interfaces numériques et physiques.' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: 'Retours clients',
    PROXIO_TESTIMONIALS_TEXT_1: 'Ce que disent nos utilisateurs',
    PROXIO_TESTIMONIALS_TEXT_2:
        'Des milliers de webmasters choisissent NotionNext pour construire leurs sites web. Grâce aux manuels d\'aide, aux communautés d\'échange et aux consultations techniques, tout le monde a réussi à mettre en ligne son site web',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: 'Me contacter',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'Merci à ce grand maître pour sa méthode. J\'ai essayé auparavant Super, Potion et d\'autres plateformes tierces étrangères, l\'effet était général, le degré de personnalisation est loin d\'égaler cette méthode, je l\'utilise déjà ! ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Propriétaire de Ryan`Log',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'J\'adore ce thème, petit novice en code qui a réussi à le construire en trois jours de congés typhon, et j\'ai même configuré un nom de domaine personnalisé selon le tutoriel du maître, merci beaucoup, j\'ai déjà offert un café~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Propriétaire de la Boîte à Trésors d\'Asen',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'Snif snif, après un après-midi d\'effort, j\'ai finalement réussi à déployer le blog, merci beaucoup au maître Tangly1024 pour le framework et le tutoriel, c\'est le meilleur framework de blog que j\'aie jamais utilisé de ma vie ┭┮﹏┭┮. À partir de maintenant, je peux papoter sur mon propre blog, ( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Propriétaire d\'Écouter le Vent Chanter',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'Merci de fournir un si bon projet haha, avant je ne savais pas comment déployer (les autres projets sont si difficiles et complexes), celui-ci est relativement très simple, très convivial pour les débutants',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Blog de Partage de Ressources IA',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'Merci énormément au maître pour le projet de blog, pouvoir combiner blog et notion, c\'est un mode de blog que j\'attendais depuis longtemps.',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Propriétaire d\'Anjhon`s Blog',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: 'Je l\'utilise depuis longtemps, merci beaucoup',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Propriétaire de Conseil d\'Examen LUCEN',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: 'Questions Fréquemment Posées',
    PROXIO_FAQ_TEXT_1: 'Vous avez des questions ? Regardez ici',
    PROXIO_FAQ_TEXT_2: 'Nous avons collecté les questions courantes des utilisateurs',
    PROXIO_FAQS: [
        { q: 'NotionNext a-t-il une documentation d\'aide ?', a: 'NotionNext fournit une <a href="https://docs.tangly1024.com/about" className="underline">documentation d\'aide</a>, des <a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">vidéos de démonstration</a>, ainsi qu\'une <a href="https://docs.tangly1024.com/article/chat-community" className="underline">communauté d\'échange</a> pour vous aider à compléter la construction et le déploiement du site web' },
        { q: 'Comment écrire des articles après le déploiement ?', a: 'Vous pouvez ajouter ou modifier directement les pages de type Post dans Notion, le contenu sera synchronisé en temps réel sur le site, voir <a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《Documentation d\'aide》</a> pour plus de détails' },
        { q: 'Le déploiement du site a échoué, la mise à jour a échoué ?', a: 'C\'est généralement causé par une erreur de configuration, veuillez vérifier la configuration ou réessayer les étapes d\'opération, ou trouvez les journaux d\'erreur dans les Déploiements du backend Vercel et demandez de l\'aide aux internautes' },
        { q: 'Les articles ne se synchronisent pas en temps réel ?', a: 'Vérifiez d\'abord si Notion_Page_ID est correctement configuré, ensuite comme chaque page du blog a un cache indépendant, actualiser la page web résoudra le problème' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: 'À propos de nous',
    PROXIO_ABOUT_TEXT_1: 'Deux passionnés créant des solutions technologiques innovantes pour votre réussite.',
    PROXIO_ABOUT_TEXT_2: 'Nous sommes deux amis passionnés par l\’innovation et la technologie, unis par une vision commune : simplifier et accélérer la transformation digitale des entreprises. Avec IALASolution, nous mettons notre expertise au service de solutions sur mesure, conçues pour répondre aux défis d\’aujourd\’hui et anticiper ceux de demain.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: 'Années d\'expérience',
    PROXIO_ABOUT_VAL_1: '10+',
    PROXIO_ABOUT_KEY_2: 'Clients',
    PROXIO_ABOUT_VAL_2: '10+',
    PROXIO_ABOUT_KEY_3: 'Projets livrés',
    PROXIO_ABOUT_VAL_3: '5+',
    PROXIO_ABOUT_KEY_4: 'Temps de création cumulé (heures)',
    PROXIO_ABOUT_VAL_4: 'Beaucoup',

    PROXIO_ABOUT_BUTTON_URL: 'https://calendly.com/les-consultants-ia/30min',
    PROXIO_ABOUT_BUTTON_TEXT: 'Prendre un rendez-vous',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Formation IA',
        'Solutions sur-mesure',
        'Optimisation des process',
        'Implémentation et maintenance'
    ],

    PROXIO_FOOTER_SLOGAN: 'Nous créons des expériences numériques pour les marques et entreprises grâce à la technologie.',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: 'Liens',
            menus: [
                {
                    title: 'IALASOLUTION',
                    href: 'https://ialasolution.com'
                },
                {
                    title: 'NotionNext',
                    href: 'https://www.tangly1024.com'
                }
            ]
        }/*,
        {
            name: 'Développeur',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: 'Aide au Développement',
                    href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
                },
                {
                    title: 'Retours de Fonctionnalités',
                    href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
                },
                {
                    title: 'Discussions Techniques',
                    href: 'https://github.com/tangly1024/NotionNext/discussions'
                },
                {
                    title: 'À propos de l\'Auteur',
                    href: 'https://blog.tangly1024.com/about'
                }
            ]
        }*/
    ],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: 'Articles Récents',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: 'Politique de Confidentialité',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Mentions Légales',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Conditions d\'Utilisation',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: 'Nous ne trouvons pas la page que vous recherchez.',
    PROXIO_404_TEXT: 'Désolé ! La page que vous recherchez n\'existe pas. Elle a peut-être été déplacée ou supprimée.',
    PROXIO_404_BACK: 'Retour à l\'accueil',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: 'Consultation gratuite',
    PROXIO_CTA_TITLE_2: 'Parlons de vos projets',
    PROXIO_CTA_DESCRIPTION:
        'Contactez-nous pour une consultation gratuite et découvrez comment nos solutions innovantes peuvent concrétiser vos projets.',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: 'Me contacter',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
