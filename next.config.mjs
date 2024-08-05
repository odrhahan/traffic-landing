/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
		scrollRestoration: true,
		turbo: {
			rules: {
				'*.svg': {
					loaders: [{
						loader: "@svgr/webpack",
						options: {
							typescript: true,
							ext: "tsx",
							svgoConfig: {
								plugins: [{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},]
							}
						}
					}],
					as: '*.js'
				}
			}
		}
	},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            ext: "tsx",
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
