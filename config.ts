export type ConfigProps = {
  appDescription: string;
  appName: string;
  domainName: string;
};

const config = {
  appName: 'medicare-support',
  appDescription:
    'Connect with ready-to-buy consumer instantly through our network of buyers!',
  domainName: 'medicare-support.com',
} as ConfigProps;

export default config;
