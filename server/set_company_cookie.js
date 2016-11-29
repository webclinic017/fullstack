var company_name = process.env.COMPANY_NAME;
var access_origin = process.env.ACCESS_ORIGIN || '';

module.exports = function (res) {
    // console.info(res);
    res.setHeader('Set-Cookie', [ 'company_name='+company_name+'; path=/',  'access_origin='+access_origin+'; path=/']);
};