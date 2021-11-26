module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/call/30min',
        destination: 'https://outlook.office365.com/owa/calendar/Bookings@seriouscode.io/bookings/s/_XOTUjJA30q5oOSxmIopSQ2',
        permanent: false,
      },
    ]
  },
};
