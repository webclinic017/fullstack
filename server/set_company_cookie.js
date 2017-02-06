var company_name = process.env.COMPANY_NAME;
var access_origin = process.env.ACCESS_ORIGIN || '';
var access_origin2 = process.env.ACCESS_ORIGIN2 || '';

module.exports = function (res) {
    // console.info(res);
    res.setHeader('Set-Cookie', [ 'company_name='+company_name+'; path=/',  'access_origin='+access_origin+'; path=/',  'access_origin2='+access_origin2+'; path=/']);
};