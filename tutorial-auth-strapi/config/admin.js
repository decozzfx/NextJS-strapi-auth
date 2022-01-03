module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc17c68f6938c650ccb19a7647a423b8'),
  },
});
