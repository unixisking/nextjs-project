/**
 * Homepage constant data
 */
import { SVGProps } from 'react';

export const NAVIGATION = {
  laser: [
    { name: 'Traitements', href: '/traitement-epilation-laser' },
    { name: 'Technologies', href: '/technologie-epilation-laser-diode' },
    { name: 'Prix', href: '/epilation-laser-electrolyse-prix' },
    { name: 'Réserver', href: '/reservez-laser-electrolyse' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },

    { name: 'FAQ', href: '/faq-epilation-definitive' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    {
      name: '',
      href: '',
    },
    {
      name: 'hello@sidahmed.engineer',
      href: 'mailto: hello@sidahmed.engineer',
    },
    { name: '+41 11 11 11 11', href: '' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
  ],
};

export const WHY_US = [
  {
    title: 'Prix compétitifs',
    description: 'Des prix attractifs à la portée de tous.',
  },
  {
    title: 'Résultats spectaculaires',
    description:
      'Des résultats impressionnants et visibles dès la troisième séance.',
  },
  {
    title: 'Prise en charge d’exception',
    description:
      'Des équipes hautement qualifiées sont à la disposition de nos hôtes.',
  },
  {
    title: 'Multitudes d’avantages post-traitement',
    description:
      'Une peau lisse, un gain de temps considérable et beaucoup d’autres avantages.',
  },
];

export const LAUNCH_DATE = 'Dec 01, 2022';

export const OUR_VALUES = [
  {
    title: 'Cousu-main',
    description:
      'Un service et des expériences créées sur mesure par nos spécialistes pour enrichir votre voyage sensoriel.',
  },
  {
    title: 'Authentique',
    description:
      'Nous créons un espace de découverte de soi, permettant à nos hôtes de s’immerger et de s’enrichir d’expériences authentiques.',
  },
  {
    title: 'Humain',
    description:
      'Notre service est attentif et adapté, sans jamais être envahissant ou intrusif, afin que nos hôtes puissent toujours se sentir à l’aise.',
  },
  {
    title: 'Inclusif',
    description:
      'Nous nous engageons à proposer des services à la portée de tous à travers des moyens de financement adaptés.',
  },
];

export const FAQ_LASER = [
  {
    question: "Comment l'épilation laser fonctionne-t-elle ?",
    answer:
      "L'épilation au laser consiste à utiliser des machines spécifiques qui émettent une lumière laser ultra concentrée avec une longueur d'onde bien précise. Cette lumière est expulsée depuis un pistolet ou un stylet laser vers le follicule pileux produisant ainsi une chaleur suffisante pour faire surchauffer le poil jusqu'à sa racine et détruire le bulbe sans pour autant affecter la peau. Une fois que le bulbe a été détruit, le poil ne peut plus repousser.<br/>En général, plusieurs séances de laser seront nécessaires pour traiter la totalité des poils de la zone car les poils ne repoussent pas de manière uniforme et en même temps. En l’absence du poil, la mélanine n'est pas détectée et le bulbe ne peut pas être détruit.",
  },
  {
    question: "L'épilation définitive au laser est-elle sans danger ?",
    answer:
      "Oui, l'épilation au laser est un traitement sans danger car la longueur d'onde employée ne présente aucun risque mutagène ou cancérigène. Par ailleurs, il ne dégage aucune radiation susceptible de provoquer d'autres dangers pour la peau. Cependant, si les recommandations et les consignes de sécurité ne sont pas respectées par le thérapeute, cela peut provoquer des effets secondaires tels que des brûlures.<br/>Chez Clinique Muller, tous nos thérapeutes sont formés et encadrés par une équipe médicale expérimentée pour minimiser les risques et maximiser les résultats.",
  },
  {
    question:
      "Combien de temps faut-il prévoir entre chaque séance d'épilation laser ?",
    answer:
      "Les séances d'épilation définitive doivent être espacées de 4 à 8 semaines. Ce laps de temps dépend de la surface à traiter, de la pilosité du l’hôte et de l'évolution du cycle pilaire. Pour obtenir un résultat optimal, vous devez absolument suivre les consignes de votre praticien, notamment les délais fixés entre les séances.",
  },
  {
    question:
      "L'épilation laser est-elle compatible avec tous les types de peau ?",
    answer:
      "Oui, l'épilation au laser est compatible avec tous les types de peau. Aujourd'hui, grâce à l'avancée technologique, l'épilation laser peut être proposée à tous les types de peau mais pas à tous les types de poils. En effet, la longueur d'onde, la puissance et l'efficacité du faisceau laser dépendent du type de poil.",
  },
  {
    question:
      "L'épilation laser est-elle compatible avec tous les types de poils ?",
    answer:
      "Non, l'épilation laser ne convient pas à tous les types de poils. On ne peut pas traiter au laser les poils gris, roux ou blancs.<br/>Cependant, chez Clinique Muller, nous disposons de machines d'épilation à l'électrolyse permettant de vous en débarrasser.",
  },
  {
    question: "L'épilation définitive au laser est-t-elle indolore ?",
    answer:
      "Oui, les technologies laser ont beaucoup évolué et aujourd'hui l'épilation laser est quasi-indolore. Et ce grâce à des systèmes de refroidissement et à des lasers beaucoup plus précis.<br/>Chez Clinique Muller, nous utilisons les derniers lasers sur le marché qui sont très efficaces et qui garantissent une épilation sécurisée et sans douleur.",
  },
  {
    question: "Quel est le prix de l'épilation définitive au laser ?",
    answer:
      "Le prix de l'épilation définitive au laser varie en fonction de la surface du corps à traiter ainsi que du nombre de séances nécessaires pour obtenir le résultat souhaité. Ainsi, il faut compter environ 40 CHF pour une petite surface à traiter telle que les sourcils et plus de 300 CHF pour les grandes surfaces telles qu'une jambe entière.<br/>Chez Clinique Muller, notre objectif est de rendre le traitement laser abordable et accessible à tous les budgets, raison pour laquelle nous proposons des forfaits à vie, ce qui vous permet de ne jamais dépenser plus que le prix du forfait, quel que soit le nombre de séances réalisées. De plus, nos forfaits sont payables en plusieurs tranches.",
  },
  {
    question:
      'L’épilation au laser ou lumière pulsée, laquelle est la plus efficace ?',
    answer:
      "Le laser diffuse une longueur d’onde puissante et très précise contrairement au faisceau lumineux émis par la lumière pulsée qui n'est pas aussi puissant et efficace que le laser pour éradiquer les poils. Pour atteindre un résultat plus ou moins correct, il faut prévoir bien plus de séances d'épilation à la lumière pulsée, ce qui n'est pas le cas avec le laser.<br/>De plus, l’épilation pulsée comporte plus de risque de brûlures que l’épilation laser.",
  },
  {
    question:
      "Qui peut bénéficier d'une épilation laser et quelles sont les contre-indications ?",
    answer:
      "L'épilation laser est destinée aux femmes et aux hommes, quelle que soit la couleur de leur peau, à condition que les poils de la zone à traiter soient bruns ou noirs. Cependant, dans certains cas, elle est contre-indiquée, comme pour les jeunes/adolescents, ou pour les patients sous traitement photosensibilisant. Ou totalement interdite, comme pour les femmes enceintes.",
  },
  {
    question:
      "Quel est le nombre de séances d'épilation laser recommandé pour des résultats optimaux et durables ?",
    answer:
      'Si votre thérapeute emploie les toutes dernières machines qui sont très performantes, il faut compter généralement entre 3 et 10 séances en fonction de la zone à traiter ainsi que du type de poil et de peau.',
  },
  {
    question: "Comment se déroule l'épilation laser pour homme ?",
    answer:
      "La prise en charge varie d'une clinique à une autre mais chez Clinique Muller, nous proposons à tous nos hôtes une première consultation gratuite avant tout début de traitement. Lors de cette séance gratuite, le spécialiste déterminera le type de peau et de poils du l’hôte, examinera la zone à traiter et voir si  l’hôte est éligible à l'épilation au laser. Ensuite, le thérapeute proposera le type de laser le plus approprié et répondra à toutes les questions.",
  },
  {
    question: "Est-ce que l'épilation laser est réellement permanente ?",
    answer:
      "L'épilation au laser est considérée comme définitive lorsqu'environ 90% des poils sont éliminés. Dans la majorité des cas, l'épilation au laser est permanente.<br/>Cependant, il est possible, dans certains cas et plusieurs années après le traitement, qu'un duvet apparaisse progressivement sur la zone traitée. Ces poils seront plus fins, plus clairs et presque invisibles.<br/>Il arrive également qu’une repousse survienne à la suite d'un changement hormonal dû à une grossesse ou à la prise de médicaments.",
  },
  {
    question: "L'épilation laser du maillot est-elle douloureuse ?",
    answer:
      "Oui, le maillot est l'une des zones les plus sensibles du corps humain. Des picotements ou une sensation de chaleur se font ressentir, et ce, quel que soit le mode d'épilation.<br/>Chez Clinique Muller, nous employons des appareils laser de haute technologie dotés d'un système de refroidissement afin de réduire ces sensations de brûlure et de picotements.",
  },
  {
    question: "C'est quoi l'épilation laser Diode ?",
    answer:
      "La machine d'épilation au laser Diode est une machine très innovante avec une longueur d'onde de 810 nm. Elle convient à tous les types de peau et permet de traiter efficacement les poils de toutes tailles, même les plus fins.<br/>La technologie laser Diode est reconnue comme étant la plus performante sur le marché. Elle a pour caractéristique de détruire le bulbe pileux sans nuire à la peau et d'être sans douleur.",
  },
  {
    question: 'L’épilation définitive et le soleil sont-ils compatibles ?',
    answer:
      "L’hôte  ne doit pas avoir la peau fortement bronzée avant la séance afin d'éviter tout risque de brûlure. De même, après l'épilation laser, toute exposition au soleil est strictement déconseillée durant 14 jours suivant le traitement. Il est recommandé de se protéger du soleil en appliquant une crème solaire à indice élevé sur les zones traitées pour prévenir une quelconque forme de réaction.",
  },
  {
    question:
      'Le laser à domicile est-il aussi efficace que le laser en clinique ?',
    answer:
      "Les appareils laser utilisés à domicile peuvent réduire les poils à un certain degré mais n'atteignent pas un taux de destruction des poils suffisamment élevé comparés à l'épilation laser professionnelle.<br/><br/>De plus, les traitements laser à domicile peuvent être douloureux et présentent souvent des résultats moyens, non satisfaisants et des risques de brûlure plus élevés.",
  },
  {
    question: "Pourquoi l'épilation laser est-elle la meilleure ?",
    answer:
      "Au-delà de l'efficacité et de la durabilité des résultats, l'épilation au laser est 5 fois moins chère que l'épilation à la cire sur le long terme. Seulement quelques semaines après la fin du traitement, vous aurez une peau sublime et incroyablement lisse de manière définitive.",
    button: {
      label: 'Réservez votre première séance dès aujourd’hui',
      to: '/reservez-laser-electrolyse',
    },
  },
];

export const FAQ_ELECTROLYSE = [
  {
    question:
      "Comment fonctionne l'épilation par électrolyse ou l'épilation électrique ?",
    answer:
      "Cette méthode d'épilation consiste à insérer un microfilament ou une aiguille très fine dans le follicule pileux et à diffuser une sorte de décharge électrique afin de détruire le bulbe du poil de façon définitive. Cette méthode fonctionne poil par poil et nécessite donc plus de temps et d'efforts de la part du praticien, rendant ainsi l'opération longue mais très efficace.",
  },
  {
    question:
      "L'épilation définitive par électrolyse peut-elle compléter mon traitement d'épilation laser ?",
    answer:
      "Oui, c'est possible. Si vous souhaitez éliminer quelques repousses après votre traitement au laser, vous pouvez le faire par l’électrolyse. Chez Clinique Muller, nous vous offrons la possibilité de compléter votre traitement laser par quelques séances d'électrolyse afin d'obtenir une épilation définitive à 100% !",
  },
  {
    question: "Qui peut faire l'épilation par électrolyse ?",
    answer:
      "Cette technique d'épilation électrique convient sans contrainte à tous les types de peau et poils, y compris aux poils blancs, gris et blonds, que la lumière pulsée et le laser ne peuvent pas traiter. L'épilation par électrolyse est adaptée à toutes les parties du corps et s'applique également sur les peaux tatouées.<br/>L'épilation par électrolyse est également préconisée pour traiter les zones peu sensibles au traitement laser, en particulier les zones hormono-dépendantes telles que le visage et le buste.",
  },
  {
    question: 'Combien de séances d’épilation électrolyse faut-il faire ?',
    answer:
      'Pour maximiser et optimiser le traitement, ce dernier doit être pratiqué lorsque le poil est en phase de croissance, raison pour laquelle il est nécessaire de réaliser plusieurs séances pour l’intégralité des poils . Il faut compter environ six séances espacées de 10 jours à 5 semaines. Cependant, il est parfois nécessaire de faire plus de séances selon les besoins du l’hôte et les surfaces à traiter.',
  },
  {
    question:
      'Quelles sont les contre-indications de l’épilation par électrolyse ?',
    answer:
      "Les contre-indications pour cette technique ne sont pas très nombreuses. Cependant, à titre préventif, l'épilation électrique n'est pas recommandée aux femmes enceintes, aux personnes portant un pacemaker ou souffrant de problèmes de conduction cardiaque. Il en va de même pour les personnes souffrant de maladies cutanées évolutives sur les zones à épiler. L’utilisation concomitante du traitement de l'acné à la vitamine A est déconseillée, de même que toute forme de bronzage.",
  },
  {
    question: 'L’épilation par électrolyse est-elle à 100% définitive ?',
    answer:
      "Oui, l'électrolyse est une technique d'épilation définitive. Au cours de ce traitement, le thérapeute utilise une pièce à main branchée à une machine électrique haute fréquence et munie d'un filament ou d’une aiguille qui sera insérée à la racine du poil. Cette dernière transmet un courant électrique à basse tension. Cette action déclenche une réaction chimique appelée électrolyse. Le follicule du poil libère de la soude caustique, provoquant ainsi la destruction définitive du bulbe.",
    button: {
      title: 'Découvrir l’épilation à l’électrolyse',
      to: '/epilation-elctrolyse',
    },
  },
];

export const FEMALE_ZONES = [
  {
    name: 'Visage',
    subZones: [
      {
        name: 'Sourcils',
        elements: ['39', '33', '298'],
      },
      { name: 'Menton', elements: ['39', '33', '298'] },
      { name: 'Lèvre supérieure', elements: ['39', '33', '298'] },
      { name: 'Entre-sourcils', elements: ['39', '33', '298'] },
      { name: 'Tempes', elements: ['39', '33', '298'] },
      { name: 'Oreilles	', elements: ['39', '33', '298'] },
      { name: 'Favoris', elements: ['39', '33', '298'] },
      { name: 'Nez et Narines', elements: ['39', '33', '298'] },
      { name: 'Joues', elements: ['99', '84', '757'] },
      {
        name: 'Barbe et Bas du visage',
        elements: ['179', '152', '1369'],
      },
    ],
  },
  {
    name: 'Poitrine et Abdo',
    subZones: [
      {
        name: 'Aréoles',
        elements: ['39', '33', '298'],
      },
      { name: 'Ligne abdominale', elements: ['39', '33', '298'] },
      { name: 'Cou', elements: ['99', '84', '757'] },
      { name: 'Abdomen/ventre', elements: ['179', '152', '1369'] },
    ],
  },
  {
    name: 'Dos',
    subZones: [
      {
        name: 'Nuque',
        elements: ['99', '84', '757'],
      },
      { name: 'Haut du dos', elements: ['199', '169', '1522'] },
      { name: 'Bas du dos', elements: ['199', '169', '1522'] },
      { name: 'Dos complet', elements: ['349', '297', '2670'] },
    ],
  },
  {
    name: 'Bras',
    subZones: [
      {
        name: 'Doigts des mains',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Mains complètes',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Aisselles',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Épaules',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Demi-bras/avant-bras',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Bras entiers',
        elements: ['249', '212', '1905'],
      },
    ],
  },
  {
    name: 'Maillot',
    subZones: [
      {
        name: 'Lèvres intimes',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Débords sur cuisses',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Sillon interfessier',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Pubis',
        elements: ['99', '84', '757'],
      },
      //TODO: Check this
      {
        name: 'Maillot complet',
        elements: ['199', '169', '1522'],
      },
    ],
  },
  {
    name: 'Jambes',
    subZones: [
      {
        name: 'Doigts de pieds',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Pieds complets',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Genoux',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Cuisses avants',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Cuisses arrières',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Fesses',
        elements: ['199', '169', '1522'],
      },
      {
        name: 'Cuisses',
        elements: ['249', '212', '1905'],
      },
      {
        name: 'Demi-jambes',
        elements: ['249', '212', '1905'],
      },

      {
        name: 'Jambes complètes',
        elements: ['399', '339', '3052'],
      },
    ],
  },
];
export const MALE_ZONES = [
  {
    name: 'Visage',
    subZones: [
      {
        name: 'Sourcils',
        elements: ['39', '33', '298'],
      },
      { name: 'Menton', elements: ['39', '33', '298'] },
      { name: 'Lèvre supérieure', elements: ['39', '33', '298'] },
      { name: 'Entre-sourcils', elements: ['39', '33', '298'] },
      { name: 'Tempes', elements: ['39', '33', '298'] },
      { name: 'Oreilles	', elements: ['39', '33', '298'] },
      { name: 'Favoris', elements: ['39', '33', '298'] },
      { name: 'Nez et Narines', elements: ['39', '33', '298'] },
      { name: 'Joues', elements: ['99', '84', '757'] },
      {
        name: 'Barbe et Bas du visage',
        elements: ['179', '152', '1369'],
      },
    ],
  },
  {
    name: 'Poitrine et Abdo',
    subZones: [
      {
        name: 'Aréoles',
        elements: ['39', '33', '298'],
      },
      { name: 'Ligne abdominale', elements: ['39', '33', '298'] },
      { name: 'Cou', elements: ['99', '84', '757'] },
      { name: 'Abdomen/ventre', elements: ['179', '152', '1369'] },
      { name: 'Torse', elements: ['179', '152', '1369'] },
    ],
  },
  {
    name: 'Dos',
    subZones: [
      {
        name: 'Nuque',
        elements: ['99', '84', '757'],
      },
      { name: 'Haut du dos', elements: ['199', '169', '1522'] },
      { name: 'Bas du dos', elements: ['199', '169', '1522'] },
      { name: 'Dos complet', elements: ['349', '297', '2670'] },
    ],
  },
  {
    name: 'Bras',
    subZones: [
      {
        name: 'Doigts des mains',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Mains complètes',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Aisselles',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Épaules',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Demi-bras/avant-bras',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Bras entiers',
        elements: ['249', '212', '1905'],
      },
    ],
  },
  {
    name: 'Maillot',
    subZones: [
      {
        name: 'Débords sur cuisses',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Sillon interfessier',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Pubis',
        elements: ['99', '84', '757'],
      },
      //TODO: Check this
      {
        name: 'Maillot complet',
        elements: ['199', '169', '1522'],
      },
    ],
  },
  {
    name: 'Jambes',
    subZones: [
      {
        name: 'Doigts de pieds',
        elements: ['39', '33', '298'],
      },
      {
        name: 'Pieds complets',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Genoux',
        elements: ['99', '84', '757'],
      },
      {
        name: 'Cuisses avants',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Cuisses arrières',
        elements: ['179', '152', '1369'],
      },
      {
        name: 'Fesses',
        elements: ['199', '169', '1522'],
      },
      {
        name: 'Cuisses',
        elements: ['249', '212', '1905'],
      },

      {
        name: 'Demi-jambes',
        elements: ['249', '212', '1905'],
      },

      {
        name: 'Jambes complètes',
        elements: ['399', '339', '3052'],
      },
    ],
  },
];

export const PRICES_SECTIONS = [
  {
    title: 'Visage',
    content: (
      <table id='prices-table' className='table-auto'>
        <thead>
          <tr>
            <th className='text-primarydark'>Zones du corps</th>
            <th className='text-primarydark'>Durée par séance</th>
            <th className='text-primarydark'>1 séance Prix CHF / séance</th>
            <th className='text-primarydark'>
              Paquet 5 séances Prix CHF / séance
            </th>
            <th className='text-primarydark'>Paquet forfait à vie Prix CHF</th>
          </tr>
        </thead>
        <tbody>
          {/* {WOMEN_ZONES.map((zone) => (
            <tr key={zone.name}>
              <td>{zone.name}</td>
              {zone.subZones.map(subZ => (
                <td>{subZ.</td>
              ))}

            </tr>
          ))} */}
          <tr>
            <td className=''>Sourcils</td>
            <td className=''>15 min</td>
            <td className=''>Électrolyse</td>
            <td>Épilateur</td>
            <td>rasoir</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Poitrine et Abdo',
    content: <div />,
  },
  {
    title: 'Dos',
    content: <div />,
  },
  {
    title: 'Bras',
    content: <div />,
  },
  {
    title: 'Jambes',
    content: <div />,
  },
  {
    title: 'Maillot',
    content: <div />,
  },
];

export const FEMALE_COMBINED_ZONES_PRICES = [
  {
    name: 'Bas du visage et nuque ',
    elements: ['278', '222', '1890'],
  },
  {
    name: 'Épaules et demi-bras ',
    elements: ['278', '222', '1890'],
  },
  {
    name: 'Aisselles, maillot à choix',
    elements: ['298', '238', '2026'],
  },
  {
    name: 'Aisselles, demi-jambes',
    elements: ['348', '278', '2366'],
  },
  {
    name: 'Demi-jambes, maillot à choix',
    elements: ['448', '358', '3046'],
  },
  {
    name: 'Aisselles, torse et ventre  ',
    elements: ['457', '366', '3108'],
  },
  {
    name: 'Aisselles, jambes complètes',
    elements: ['498', '398', '3386'],
  },
  {
    name: 'Aisselles, maillot à choix, demi-jambes',
    elements: ['547', '438', '3720'],
  },
  {
    name: 'Aisselles, épaules et dos ',
    elements: ['547', '438', '3720'],
  },
  {
    name: 'Jambes complètes, maillot à choix',
    elements: ['598', '478', '4066'],
  },
  {
    name: 'Aisseles, maillot à choix, jambes complètes',
    elements: ['697', '558', '4740'],
  },

  {
    name: 'Aisselles, épaules, dos, torse et ventre (buste) ',
    elements: ['905', '724', '6154'],
  },
];

export const MALE_COMBINED_ZONES_PRICES = [
  {
    name: 'Épaules et demi-bras ',
    elements: ['278', '222', '1890'],
  },
  {
    name: 'Bas du visage et nuque ',
    elements: ['278', '222', '1890'],
  },
  {
    name: 'Aisselles, maillot à choix',
    elements: ['298', '238', '2026'],
  },
  {
    name: 'Aisselles, demi-jambes',
    elements: ['348', '278', '2366'],
  },
  {
    name: 'Demi-jambes, maillot à choix',
    elements: ['448', '358', '3046'],
  },
  {
    name: 'Aisselles, torse et ventre  ',
    elements: ['457', '366', '3108'],
  },
  {
    name: 'Aisselles, jambes complètes',
    elements: ['498', '398', '3386'],
  },

  {
    name: 'Aisselles, maillot à choix, demi-jambes',
    elements: ['547', '438', '3720'],
  },
  {
    name: 'Aisselles, épaules et dos ',
    elements: ['547', '438', '3720'],
  },
  {
    name: 'Jambes complètes, maillot à choix',
    elements: ['598', '478', '4066'],
  },
  {
    name: 'Aisseles, maillot à choix, jambes complètes',
    elements: ['697', '558', '4740'],
  },

  {
    name: 'Aisselles, épaules, dos, torse et ventre (buste) ',
    elements: ['905', '724', '6154'],
  },
];
export const FAQ_LASER_TECH = [
  {
    question:
      'Quels sont les types de peau les mieux adaptés à une épilation avec le laser Diode ?',
    answer:
      " La technologie des lasers Diode convient à tous les phototypes, du plus clair au plus foncé, et à tous les types de poils, qu'ils soient fins ou épais.",
  },
  {
    question:
      'Quelle est la différence entre le laser Diode et la lumière pulsée ?',
    answer:
      "Ce qui distingue l'épilation au laser Diode de l'épilation à la lumière pulsée, c'est le niveau d'énergie et de puissance des faisceaux lumineux qui sont projetés sur les poils. Le laser Diode diffuse une longueur d'onde puissante et ultra concentrée qui sera très bien captée par la mélanine des poils.<br/>De plus, grâce à la précision de son faisceau lumineux, le risque de brûlure est plus faible qu'avec la lumière pulsée.",
  },
  {
    question: "Pourquoi l'épilation au laser Diode est-elle efficace ?",
    answer:
      "Bien que chaque technique ait ses avantages, l'épilation au laser Diode reste la technologie la plus efficace, rapide et sûre, adaptée à tous les phototypes et à tout type de poil, quelle que soit leur taille.<br/>Notre laser Diode possède trois longueurs d'onde garantissant des résultats efficaces et définitifs.",
  },
  {
    question: 'Le laser Diode est-il dangereux ?',
    answer:
      "L'épilation au laser Diode n'est pas dangereuse pour la peau. Elle n'entraîne aucun risque de brûlure ou d'hypo pigmentation. Le laser Diode est équipé d'un système de refroidissement unique qui garantit un traitement sans douleur.",
  },
];

export const FAQ_OFFRE_NOV = [
  {
    question: 'C’est quoi le “forfait à vie” de Clinique Muller ?',
    answer:
      'Le forfait à vie vous permet de payer un prix fixe, et de ne plus vous soucier du nombre de séances d’épilation laser ou de retouches nécessaires. Dès la fin du traitement, vous bénéficiez de retouches gratuites pendant 5 ans. À l’issue de cette période, nous organiserons une réévaluation par un de nos experts. Puis, si vous respectez toujours les conditions du forfait d’épilation laser à vie, vous aurez droit à 5 nouvelles années de retouches gratuites et ainsi de suite.',
  },
  {
    question:
      'J’ai commencé un traitement dans un autre institut, Clinique Muller fait-elle des reprises de contrats ?',
    answer:
      'Vous avez commencé un traitement laser auprès d’un de nos concurrents depuis moins de six mois. Clinique Muller vous offre jusqu’à 500 CHF de réduction si vous décidez de prendre un forfait à vie. Pour plus d’informations, contactez notre clinique.',
  },
  {
    question: 'Puis-je payer les forfaits en plusieurs fois ?',
    answer:
      "Oui. Vous pouvez réserver dès maintenant votre forfait avec la remise de 20 % et demander un paiement en 12 fois sans frais lors de la séance d'information gratuite qui précède les séances d'épilation laser. L’échelonnement des paiements ne s'applique qu'aux packs de 5 séances et aux forfaits à vie.",
  },
  {
    question:
      "Quand puis-je bénéficier d'une réduction de 20% sur le prix de l’épilation laser des zones combinées ?",
    answer: (
      <div>
        <p>
          Les prix des traitements d&apos;épilation laser sont réduits de 20%
          lorsque vous réservez :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>une séance unique.</li>
          <li>une série de 5 séances de laser.</li>
          <li>des forfaits à vie.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      'Puis-je faire plusieurs zones en une seule séance d’épilation laser ou dois-je les faire séparément ?',
    answer:
      'Lorsque vous réservez un pack d’épilation laser combinant plusieurs zones (le pack aisselles, maillot à choix et jambes complètes ou le pack aisselles, épaules, dos, torse et ventre), celles-ci peuvent être traitées en une seule séance ou réparties en plusieurs sessions selon votre envie et votre disponibilité.',
  },
  {
    question:
      'Si je profite de l’offre de novembre (-20% de réduction), puis-je commencer mon traitement à tout moment après cette date ?',
    answer:
      'Oui. La réduction de 20 % reste valable tant que vous réservez votre forfait zones combinées avant le 30 novembre. Vous pouvez programmer vos séances d’épilation laser quand cela vous convient après cette date mais vous ne bénéficierez plus de l’offre si vous annulez votre rendez-vous.',
  },
  {
    question: 'Ce qui est exclu des “forfaits à vie de clinique muller” ?',
    answer: (
      <div>
        <p>
          Dans certains cas, vous ne pouvez pas bénéficier des avantages du
          forfait d’épilation laser à vie, vous trouverez une liste détaillée de
          toutes les exclusions dans nos conditions générales de vente, mais
          voici les principales :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>lors d&apos;une repousse due à une prise de médicaments.</li>
          <li>
            lors d&apos;une repousse de poils de type duvet fin et clair, dans
            une zone préalablement traitée au laser.
          </li>
        </ul>
      </div>
    ),
  },
];
export const FAQ_OFFRE_NOV_MARKETING = [
  {
    question: 'C’est quoi le “forfait à vie” chez Clinique Muller ?',
    answer:
      'Le forfait à vie vous permet de payer un prix fixe, et de ne plus vous soucier du nombre de séances d’épilation laser ou de retouches nécessaires. Dès la fin du traitement, vous bénéficiez de retouches gratuites pendant 5 ans. À l’issue de cette période, nous organiserons une réévaluation par un de nos experts. Puis, si vous respectez toujours les conditions du forfait d’épilation laser à vie, vous aurez droit à 5 nouvelles années de retouches gratuites et ainsi de suite.',
  },
  {
    question:
      "J’ai commencé un traitement d'épilation définitive au laser  dans un autre institut, Clinique Muller fait-elle des reprises de contrats ?",
    answer:
      'Vous avez commencé un traitement laser auprès d’un de nos concurrents depuis moins de six mois. Clinique Muller vous offre jusqu’à 500 CHF de réduction sur le prix de votre épilation définitive si vous décidez de prendre un forfait à vie. Pour plus d’informations, contactez notre clinique.',
  },
  {
    question: 'Puis-je payer les forfaits en plusieurs fois ?',
    answer:
      "Oui. Vous pouvez réserver dès maintenant votre forfait avec la remise de 20 % et demander un paiement en 12 fois sans frais lors de la séance d'information gratuite qui précède les séances d'épilation définitive. L’échelonnement des paiements ne s'applique qu'aux packs de 5 séances et aux forfaits à vie.",
  },
  {
    question:
      "Quand puis-je bénéficier d'une réduction de 20% sur le prix de l'épilation définitive l’épilation laser des zones combinées ?",
    answer: (
      <div>
        <p>
          Les prix des traitements d&apos;épilation définitive sont réduits de
          20% lorsque vous réservez :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>une séance unique.</li>
          <li>une série de 5 séances de laser.</li>
          <li>des forfaits à vie.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      'Puis-je faire plusieurs zones en une seule séance d’épilation définitive ou dois-je les faire séparément ?',
    answer:
      'Lorsque vous réservez un pack d’épilation définitive combinant plusieurs zones (le pack aisselles, maillot à choix et jambes complètes ou le pack aisselles, épaules, dos, torse et ventre), celles-ci peuvent être traitées en une seule séance ou réparties en plusieurs sessions selon votre envie et votre disponibilité.',
  },
  {
    question:
      'Si je profite de l’offre de novembre (-20% de réduction), puis-je commencer mon épilation définitive à tout moment après cette date ?',
    answer:
      'Oui. La réduction de 20 % reste valable tant que vous réservez votre forfait zones combinées avant le 30 novembre. Vous pouvez programmer vos séances d’épilation définitive au laser  quand cela vous convient après cette date mais vous ne bénéficierez plus de l’offre si vous annulez votre rendez-vous.',
  },
  {
    question: 'Ce qui est exclu des “forfaits à vie ” de clinique muller ?',
    answer: (
      <div>
        <p>
          Dans certains cas, vous ne pouvez pas bénéficier des avantages du
          forfait d’épilation laser à vie, vous trouverez une liste détaillée de
          toutes les exclusions dans nos conditions générales de vente, mais
          voici les principales :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>lors d&apos;une repousse due à une prise de médicaments.</li>
          <li>
            lors d&apos;une repousse de poils de type duvet fin et clair, dans
            une zone préalablement traitée au laser.
          </li>
        </ul>
      </div>
    ),
  },
];
export const FAQ_OFFRE_NOV_MARKETING_LASER = [
  {
    question: 'C’est quoi le “forfait à vie” chez Clinique Muller ?',
    answer:
      'Le forfait à vie vous permet de payer un prix fixe, et de ne plus vous soucier du nombre de séances d’épilation laser ou de retouches nécessaires. Dès la fin du traitement, vous bénéficiez de retouches gratuites pendant 5 ans. À l’issue de cette période, nous organiserons une réévaluation par un de nos experts. Puis, si vous respectez toujours les conditions du forfait d’épilation laser à vie, vous aurez droit à 5 nouvelles années de retouches gratuites et ainsi de suite.',
  },
  {
    question:
      "J’ai commencé un traitement d'épilation définitive au laser  dans un autre institut, Clinique Muller fait-elle des reprises de contrats ?",
    answer:
      'Vous avez commencé un traitement laser auprès d’un de nos concurrents depuis moins de six mois. Clinique Muller vous offre jusqu’à 500 CHF de réduction  sur le prix de votre épilation laser  si vous décidez de prendre un forfait à vie. Pour plus d’informations, contactez notre clinique.',
  },
  {
    question: 'Puis-je payer les forfaits en plusieurs fois ?',
    answer:
      "Oui. Vous pouvez réserver dès maintenant votre forfait avec la remise de 20 % et demander un paiement en 12 fois sans frais lors de la séance d'information gratuite qui précède les séances d'épilation définitive. L’échelonnement des paiements ne s'applique qu'aux packs de 5 séances et aux forfaits à vie.",
  },
  {
    question:
      "Quand puis-je bénéficier d'une réduction de 20% sur le prix de l'épilation définitive l’épilation laser des zones combinées ?",
    answer: (
      <div>
        <p>
          Les prix des traitements d&apos;épilation définitive sont réduits de
          20% lorsque vous réservez :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>une séance unique.</li>
          <li>une série de 5 séances de laser.</li>
          <li>des forfaits à vie.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      'Puis-je faire plusieurs zones en une seule séance d’épilation définitive ou dois-je les faire séparément ?',
    answer:
      'Lorsque vous réservez un pack d’épilation définitive combinant plusieurs zones (le pack aisselles, maillot à choix et jambes complètes ou le pack aisselles, épaules, dos, torse et ventre), celles-ci peuvent être traitées en une seule séance ou réparties en plusieurs sessions selon votre envie et votre disponibilité.',
  },
  {
    question:
      'Si je profite de l’offre de novembre (-20% de réduction), puis-je commencer mon épilation définitive à tout moment après cette date ?',
    answer:
      'Oui. La réduction de 20 % reste valable tant que vous réservez votre forfait zones combinées avant le 30 novembre. Vous pouvez programmer vos séances d’épilation définitive au laser  quand cela vous convient après cette date mais vous ne bénéficierez plus de l’offre si vous annulez votre rendez-vous.',
  },
  {
    question: 'Ce qui est exclu des “forfaits à vie ” de clinique muller ?',
    answer: (
      <div>
        <p>
          Dans certains cas, vous ne pouvez pas bénéficier des avantages du
          forfait d’épilation laser à vie, vous trouverez une liste détaillée de
          toutes les exclusions dans nos conditions générales de vente, mais
          voici les principales :
        </p>
        <ul className='list-disc px-12 marker:text-2xl marker:text-[#844025]'>
          <li>lors d&apos;une repousse due à une prise de médicaments.</li>
          <li>
            lors d&apos;une repousse de poils de type duvet fin et clair, dans
            une zone préalablement traitée au laser.
          </li>
        </ul>
      </div>
    ),
  },
];
