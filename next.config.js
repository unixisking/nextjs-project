/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/epilation-definitive',
        permanent: true,
      },
      {
        source: '/offre-de-lancement/epilation-laser-lausanne',
        destination: process.env.NEXT_PUBLIC_ACTUAL_OFFER,
        permanent: true,
      },
      {
        source: '/offre-de-octobre/epilation-laser-lausanne',
        destination: process.env.NEXT_PUBLIC_ACTUAL_OFFER,
        permanent: true,
      },
      {
        source: '/offre-epilation-laser',
        destination: process.env.NEXT_PUBLIC_ACTUAL_OFFER,
        permanent: true,
      },
      {
        source: '/black-friday-countdown',
        destination: '/offre-noel-2022-forfaits-a-vie/epilation-laser-lausanne',
        permanent: true,
      },
      {
        source: '/coming-soon',
        destination: process.env.NEXT_PUBLIC_ACTUAL_OFFER,
        permanent: true,
      },
      {
        source: '/offre-black-friday-suisse/epilation-laser-lausanne',
        destination: process.env.NEXT_PUBLIC_ACTUAL_OFFER,
        permanent: true,
      },
    ];
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['content.cliniquemuller.ch', 'static.ghost.org'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
